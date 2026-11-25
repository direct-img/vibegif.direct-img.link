// Search the vibegif catalog, fetched from the site and refetched once stale.

export const SITE = 'https://vibegif.direct-img.link'
const TERM = /[a-z0-9][a-z0-9-]*/g, WORD = /[a-z0-9]+/g
// Per query term the best match wins; a term's scores add up across the query.
const TAG_EXACT = 3, TAG_PREFIX = 2, DESC_WORD = 1
// Browsers revalidate through their own HTTP cache, and a custom If-None-Match
// would need a CORS preflight the site doesn't answer, so only send it elsewhere.
const BROWSER = typeof document != 'undefined' || typeof importScripts == 'function'

export class Item {
  constructor({ id, section, description, tags = [] }) {
    Object.freeze(Object.assign(this, { id, section, description, tags: Object.freeze([...tags]) }))
  }

  /** Hotlinkable URL. Every item has a webp; most also have a gif. */
  url(fmt = 'webp', site = SITE) {
    return `${site.replace(/\/+$/, '')}/${this.id}.${fmt}`
  }
}

/** The live catalog, fetched on first use and refetched once older than `ttl` seconds. */
export class Catalog {
  #items = []
  #byId = new Map()
  #rows = []
  #etag = null
  #at = 0
  #pending = null

  constructor({ url = `${SITE}/catalog.json`, ttl = 3600 } = {}) {
    Object.assign(this, { url, ttl })
  }

  /**
   * Refetch if stale or `force`d; an unchanged catalog costs a 304.
   * A failed refetch keeps the items already held, unless forced or there are none yet.
   */
  async refresh(force = false) {
    if (force || !this.#items.length || performance.now() - this.#at >= this.ttl * 1000)
      await (this.#pending ??= this.#fetch(force).finally(() => (this.#pending = null)))
    return this
  }

  async #fetch(force) {
    const headers = BROWSER ? {} : { 'User-Agent': 'vibegif-npm' }
    if (!BROWSER && this.#items.length && this.#etag) headers['If-None-Match'] = this.#etag
    try {
      const r = await fetch(this.url, { headers, signal: AbortSignal.timeout(30_000) })
      if (r.status != 304) {
        if (!r.ok) throw new Error(`${r.status} ${r.statusText} fetching ${this.url}`)
        this.#index((await r.json()).items)
        this.#etag = r.headers.get('ETag')
      }
    } catch (e) {
      if (force || !this.#items.length) throw e
    }
    this.#at = performance.now()
  }

  #index(raw) {
    const items = raw.map(d => new Item(d))
    this.#byId = new Map(items.map(i => [i.id, i]))
    this.#rows = items.map(i => [i, new Set(i.tags), new Set(i.description.toLowerCase().match(WORD))])
    this.#items = Object.freeze(items)
  }

  async items() {
    return (await this.refresh()).#items
  }

  async get(id) {
    return (await this.refresh()).#byId.get(id)
  }

  /** [section, item count] pairs, biggest first, then alphabetical. */
  async sections() {
    return ranked((await this.items()).map(i => i.section))
  }

  /** [tag, item count] pairs, most used first, then alphabetical. */
  async tags() {
    return ranked((await this.items()).flatMap(i => i.tags))
  }

  /**
   * Items matching `query`, best first. `tags` (all required) and `section` are hard
   * filters. Each query term scores an exact tag match above a tag-prefix match above a
   * description word; items matching no term are dropped, and ties break by id. An empty
   * query returns everything that passes the filters, in id order. `limit: null` returns
   * every match.
   */
  async search(query = '', { tags = [], section = null, limit = 50 } = {}) {
    if (typeof query == 'object') return this.search('', query)
    await this.refresh()
    const need = (typeof tags == 'string' ? [tags] : [...tags]).map(t => t.toLowerCase())
    const terms = query.toLowerCase().match(TERM) ?? []
    const scored = []
    for (const [item, itemTags, words] of this.#rows) {
      if ((section != null && item.section != section) || !need.every(t => itemTags.has(t))) continue
      const score = terms.reduce((s, t) => s + scoreTerm(t, itemTags, words), 0)
      if (score || !terms.length) scored.push([score, item])
    }
    scored.sort(([a, x], [b, y]) => b - a || byName(x.id, y.id))
    return scored.slice(0, limit ?? Infinity).map(s => s[1])
  }

  /** One random item out of everything `search` would match, or undefined. */
  async random(query = '', { tags, section } = {}) {
    if (typeof query == 'object') return this.random('', query)
    return pick(await this.search(query, { tags, section, limit: null }))
  }

  /** Any item at all. */
  async imfeelinglucky() {
    return pick(await this.items())
  }
}

const pick = a => a[Math.floor(Math.random() * a.length)]
const byName = (a, b) => (a > b) - (a < b)
const ranked = names =>
  [...names.reduce((m, n) => m.set(n, (m.get(n) ?? 0) + 1), new Map())].sort(
    ([a, x], [b, y]) => y - x || byName(a, b),
  )

const scoreTerm = (term, tags, words) =>
  tags.has(term) ? TAG_EXACT
  : [...tags].some(t => t.startsWith(term)) ? TAG_PREFIX
  // A hyphenated term matches a description that has all its parts.
  : term.split('-').every(p => words.has(p)) ? DESC_WORD
  : 0
