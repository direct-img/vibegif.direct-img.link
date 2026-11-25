<img src="https://vibegif.direct-img.link/cat/blink.webp" align="right" width="96" alt="blinking cat">

# vibegif (JavaScript)

Search [vibegif](https://vibegif.direct-img.link)'s 1,400+ public domain (CC0) animations from JavaScript and get URLs you can hotlink. No dependencies, works in browsers, Node 18+, Bun and Deno, with types included.

```
npm i vibegif
```

```js
import { Catalog } from 'vibegif'

const catalog = new Catalog()
for (const item of await catalog.search('rainbow brain', { limit: 3 }))
  console.log(item.id, item.url()) // brain/glow https://vibegif.direct-img.link/brain/glow.webp

await catalog.search('spinner', { section: 'loader' })     // section is a hard filter
await catalog.search('cat', { tags: ['calm', 'night'] })   // so are tags, every one required
await catalog.random({ section: 'loader' })                // one random match, or undefined
await catalog.imfeelinglucky()                             // any anim at all
await catalog.get('cat/blink')                             // Item, or undefined
await catalog.sections()                                   // [['animedev', 150], ...] biggest first
await catalog.tags()                                       // [['calm', 369], ...] most used first
```

<img src="https://vibegif.direct-img.link/javascript/love.webp" align="right" width="128" alt="girl with heart eyes hugging a big yellow JS block">

An `Item` has `id`, `section`, `description` and `tags`. `item.url()` is its webp, which every item has, and `item.url('gif')` its gif, which most have.

Search scores each query term: an exact tag beats a tag prefix, which beats a word in the description. Results come best first, ties break by id, and an empty query returns everything that passes the filters, in id order. It returns 50 at most unless you pass `limit` (`limit: null` for every match).

The catalog comes from [catalog.json](https://vibegif.direct-img.link/catalog.json). It's fetched on first use and checked again once it's an hour old (`new Catalog({ ttl: seconds })`, or `await catalog.refresh(true)` to check now). An unchanged catalog costs a 304, and a failed check keeps the items already fetched. Calls made while a fetch is in flight share it.

Tests: `npm test`
