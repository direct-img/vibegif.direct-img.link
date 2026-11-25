#!/usr/bin/env node
// The vibegif command: search the catalog from a terminal.

import { createRequire } from 'node:module'
import { Catalog, SITE } from './index.js'

const VERSION = createRequire(import.meta.url)('./package.json').version
const HELP = `vibegif ${VERSION}: search vibegif's public domain animations (https://vibegif.direct-img.link)

Usage:
  vibegif search [QUERY...] [-s SECTION] [-t TAG]... [-n LIMIT]
  vibegif random [QUERY...] [-s SECTION] [-t TAG]...
  vibegif lucky
  vibegif get ID
  vibegif sections
  vibegif tags

Options:
  -s, --section SECTION  only this section
  -t, --tag TAG          only items with this tag, repeatable
  -n, --limit LIMIT      at most this many results (default 50, 0 for all)
      --gif              gif URLs instead of webp
      --json             JSON instead of tab-separated lines
  -h, --help             show this help
  -V, --version          show the version

Items print as id, URL and description; sections and tags as name and count.
Exits 1 when nothing matches and 2 on errors. VIBEGIF_CATALOG overrides the
catalog URL.
`
// The options each command takes.
const TAKES = {
  search: ['section', 'tag', 'limit', 'gif', 'json'],
  random: ['section', 'tag', 'gif', 'json'],
  lucky: ['gif', 'json'],
  get: ['gif', 'json'],
  sections: ['json'],
  tags: ['json'],
}
const NAMES = {
  '-s': 'section', '-t': 'tag', '-n': 'limit',
  ...Object.fromEntries(['section', 'tag', 'limit', 'gif', 'json'].map(o => [`--${o}`, o])),
}

class Usage extends Error {}

function parse([cmd, ...rest]) {
  const words = [], o = { section: null, tag: [], limit: 50, gif: false, json: false }
  if (!Object.hasOwn(TAKES, cmd)) throw new Usage(`unknown command: ${cmd}`)
  for (let i = 0; i < rest.length; i++) {
    const a = rest[i], eq = a.startsWith('--') ? a.indexOf('=') : -1
    const flag = eq < 0 ? a : a.slice(0, eq), name = NAMES[flag]
    let val = eq < 0 ? undefined : a.slice(eq + 1)
    if (!name) {
      if (a.startsWith('-') && a != '-') throw new Usage(`unknown option: ${a}`)
      words.push(a)
      continue
    }
    if (!TAKES[cmd].includes(name)) throw new Usage(`${cmd} doesn't take ${flag}`)
    if (name == 'gif' || name == 'json') {
      if (val != null) throw new Usage(`${flag} doesn't take a value`)
      o[name] = true
      continue
    }
    if (val == null && (val = rest[++i]) == null) throw new Usage(`${flag} needs a value`)
    if (name == 'limit' && !/^[0-9]+$/.test(val)) throw new Usage(`${flag} needs a whole number`)
    o[name] = name == 'tag' ? [...o.tag, val] : name == 'limit' ? Number(val) : val
  }
  if (cmd == 'get' && words.length != 1) throw new Usage('get needs one ID')
  if (['lucky', 'sections', 'tags'].includes(cmd) && words.length) throw new Usage(`unexpected argument: ${words[0]}`)
  return [cmd, words, o]
}

async function run(cmd, words, o) {
  const c = new Catalog({ url: process.env.VIBEGIF_CATALOG || `${SITE}/catalog.json` })
  if (cmd == 'sections' || cmd == 'tags') {
    const pairs = await c[cmd]()
    return [+!pairs.length, o.json ? dumps(pairs) : pairs.map(([n, k]) => `${n}\t${k}\n`).join('')]
  }
  const q = words.join(' '), filters = { tags: o.tag, section: o.section }
  let items
  if (cmd == 'search') items = await c.search(q, { ...filters, limit: o.limit || null })
  else {
    const item = await (cmd == 'random' ? c.random(q, filters) : cmd == 'lucky' ? c.imfeelinglucky() : c.get(words[0]))
    if (o.json) return [+!item, dumps(item ? shown(item, o) : null)]
    items = item ? [item] : []
  }
  const text = items.map(i => `${i.id}\t${i.url(o.gif ? 'gif' : 'webp')}\t${i.description}\n`).join('')
  return [+!items.length, o.json ? dumps(items.map(i => shown(i, o))) : text]
}

const shown = (i, o) => ({ id: i.id, section: i.section, description: i.description, tags: i.tags, url: i.url(o.gif ? 'gif' : 'webp') })
const dumps = x => JSON.stringify(x) + '\n'

async function main(args) {
  try {
    if (!args.length || args.includes('-h') || args.includes('--help')) return [0, HELP]
    if (args.includes('-V') || args.includes('--version')) return [0, `vibegif ${VERSION}\n`]
    return await run(...parse(args))
  } catch (e) {
    process.stderr.write(`vibegif: ${e.message}\n${e instanceof Usage ? "Run 'vibegif --help' for usage.\n" : ''}`)
    return [2, '']
  }
}

process.stdout.on('error', e => { if (e.code != 'EPIPE') throw e }) // e.g. piped into head
const [code, text] = await main(process.argv.slice(2))
process.stdout.write(text)
if (code == 1) process.stderr.write('vibegif: no match\n')
process.exitCode = code
