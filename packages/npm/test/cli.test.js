import assert from 'node:assert/strict'
import { execFile } from 'node:child_process'
import { readFileSync } from 'node:fs'
import { createServer } from 'node:http'
import { test } from 'node:test'
import { SITE } from '../index.js'

const FIXTURE = readFileSync(new URL('catalog.json', import.meta.url))
const { version } = JSON.parse(readFileSync(new URL('../package.json', import.meta.url)))
const CLI = new URL('../cli.js', import.meta.url).pathname

test('cli', async () => {
  const server = createServer((_, res) => res.end(FIXTURE))
  await new Promise(r => server.listen(0, '127.0.0.1', r))
  const env = { ...process.env, VIBEGIF_CATALOG: `http://127.0.0.1:${server.address().port}/catalog.json` }
  const run = (...args) =>
    new Promise(r => execFile(process.execPath, [CLI, ...args], { env }, (e, out, err) => r([e?.code ?? 0, out, err])))
  const ok = out => [0, out, '']
  try {
    assert.deepEqual(
      await run('search', 'cat', '-n', '2'),
      ok(`cat/blink\t${SITE}/cat/blink.webp\ta cat blinking slowly, glow of a screen\n` +
        `cat/loaf\t${SITE}/cat/loaf.webp\tcat loaf under the night sky\n`),
    )
    assert.deepEqual(
      await run('get', 'brain/glow', '--json', '--gif'),
      ok('{"id":"brain/glow","section":"psychedelic","description":"side view brain with a rainbow glow",' +
        `"tags":["brain","rainbow","glow"],"url":"${SITE}/brain/glow.gif"}\n`),
    )
    assert.deepEqual(await run('random', '-s', 'science'), ok(`brain/zap\t${SITE}/brain/zap.webp\tneurons firing in a brain\n`))
    assert.deepEqual(await run('sections'), ok('animals\t3\npsychedelic\t1\nscience\t1\n'))
    assert.deepEqual(await run('get', 'nope/x'), [1, '', 'vibegif: no match\n'])
    assert.deepEqual(await run('lucky', '-n', '3'), [2, '', "vibegif: lucky doesn't take -n\nRun 'vibegif --help' for usage.\n"])
    assert.deepEqual(await run('--version'), ok(`vibegif ${version}\n`))
  } finally {
    server.close()
  }
})
