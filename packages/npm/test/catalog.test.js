import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { createServer } from 'node:http'
import { after, before, test } from 'node:test'
import { gzipSync } from 'node:zlib'
import { Catalog, Item, SITE } from '../index.js'

const FIXTURE = readFileSync(new URL('catalog.json', import.meta.url))
const ids = items => items.map(i => i.id)

// Serves `state.body` gzipped with an ETag, honoring If-None-Match.
const state = { body: FIXTURE, fail: false, hits: [] }
const server = createServer((req, res) => {
  const sent = req.headers['if-none-match'] ?? null, etag = `"${state.body.length}-${state.body[20]}"`
  state.hits.push(sent)
  if (state.fail) return res.writeHead(500).end()
  if (sent == etag) return res.writeHead(304).end()
  res.writeHead(200, { ETag: etag, 'Content-Encoding': 'gzip', 'Content-Type': 'application/json' })
  res.end(gzipSync(state.body))
})
let url, catalog
before(async () => {
  await new Promise(r => server.listen(0, '127.0.0.1', r))
  url = `http://127.0.0.1:${server.address().port}/catalog.json`
  catalog = new Catalog({ url })
})
after(() => server.close())
const reset = () => Object.assign(state, { body: FIXTURE, fail: false, hits: [] })

test('get and item helpers', async () => {
  const item = await catalog.get('brain/glow')
  assert.deepEqual(
    item,
    new Item({ id: 'brain/glow', section: 'psychedelic', description: 'side view brain with a rainbow glow', tags: ['brain', 'rainbow', 'glow'] }),
  )
  assert.equal(await catalog.get('nope/x'), undefined)
  assert.equal((await catalog.items()).length, 5)
  assert.equal(item.url(), `${SITE}/brain/glow.webp`)
  assert.equal(item.url('gif', 'https://x.test/'), 'https://x.test/brain/glow.gif')
  assert.throws(() => (item.id = 'other'), TypeError)
})

test('tags and sections', async () => {
  assert.deepEqual(await catalog.tags(), [
    ['brain', 2], ['cat', 2], ['catnip', 1], ['cozy', 1], ['glow', 1],
    ['neuron', 1], ['night-sky', 1], ['rainbow', 1],
  ])
  assert.deepEqual(await catalog.sections(), [['animals', 3], ['psychedelic', 1], ['science', 1]])
})

test('search ranking', async () => {
  const s = async q => ids(await catalog.search(q))
  // glow: exact tag (brain/glow) beats description word (cat/blink)
  assert.deepEqual(await s('glow'), ['brain/glow', 'cat/blink'])
  // "bra": tag prefix on both brains, id order; "cat" has no match
  assert.deepEqual(await s('bra'), ['brain/glow', 'brain/zap'])
  // terms add up: 6 for brain/glow, 3 for brain/zap, 1 for cat/blink (description word)
  assert.deepEqual(await s('Brain, GLOW!'), ['brain/glow', 'brain/zap', 'cat/blink'])
  // exact tag (cat/blink, cat/loaf) beats tag prefix (misc/dot's catnip)
  assert.deepEqual(await s('cat'), ['cat/blink', 'cat/loaf', 'misc/dot'])
  // hyphenated term: exact tag, then a description with every part
  assert.deepEqual(await s('night-sky'), ['cat/blink', 'cat/loaf'])
  assert.deepEqual(await s('zzz'), [])
})

test('search filters and limit', async () => {
  const s = async (q, o) => ids(await catalog.search(q, o))
  assert.deepEqual(await s(), ['brain/glow', 'brain/zap', 'cat/blink', 'cat/loaf', 'misc/dot'])
  assert.deepEqual(await s('', { tags: ['Brain'], section: 'science' }), ['brain/zap'])
  assert.deepEqual(await s({ tags: new Set(['cat', 'cozy']) }), ['cat/loaf'])
  assert.deepEqual(await s({ tags: 'cat' }), ['cat/blink', 'cat/loaf'])
  assert.deepEqual(await s('glow', { section: 'animals' }), ['cat/blink'])
  assert.deepEqual(await s({ limit: 2 }), ['brain/glow', 'brain/zap'])
  assert.equal((await catalog.search({ limit: null })).length, 5)
})

test('random and imfeelinglucky', async () => {
  const draw = async f => new Set(ids(await Promise.all(Array.from({ length: 200 }, f))))
  assert.equal((await catalog.random({ section: 'science' })).id, 'brain/zap')
  assert.equal(await catalog.random('zzz'), undefined)
  assert.deepEqual(await draw(() => catalog.random('cat')), new Set(['cat/blink', 'cat/loaf', 'misc/dot']))
  const all = new Set(ids(await catalog.items()))
  assert.deepEqual(await draw(() => catalog.random()), all)
  assert.deepEqual(await draw(() => catalog.imfeelinglucky()), all)
})

test('fetches once per ttl, even with calls in flight', async () => {
  reset()
  const c = new Catalog({ url })
  await Promise.all([c.get('cat/loaf'), c.search('cat'), c.tags(), c.items()])
  await c.sections()
  assert.deepEqual(state.hits, [null])
})

test('refresh', async () => {
  reset()
  const c = new Catalog({ url, ttl: 0 })
  assert.equal((await c.items()).length, 5)
  assert.equal((await c.items()).length, 5)
  assert.ok(state.hits.at(-1)) // sent the ETag, got a 304, kept the items
  state.body = Buffer.from(JSON.stringify({ items: [{ id: 'a/b', section: 's', description: 'new' }] }))
  assert.deepEqual(ids(await c.items()), ['a/b'])
  state.fail = true
  assert.deepEqual(ids(await c.items()), ['a/b']) // a failed check keeps what it has
  await assert.rejects(c.refresh(true), /500/)
  await assert.rejects(new Catalog({ url }).get('a/b'), /500/) // nothing to fall back on
})
