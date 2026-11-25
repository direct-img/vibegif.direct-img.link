export declare const SITE: string

export type Format = 'webp' | 'gif'

export declare class Item {
  readonly id: string
  readonly section: string
  readonly description: string
  readonly tags: readonly string[]
  constructor(data: { id: string; section: string; description: string; tags?: Iterable<string> })
  /** Hotlinkable URL. Every item has a webp; most also have a gif. */
  url(fmt?: Format, site?: string): string
}

export interface Filters {
  /** Every one is required, case-insensitive. */
  tags?: string | Iterable<string>
  section?: string | null
}

export interface SearchOptions extends Filters {
  /** Default 50, `null` for every match. */
  limit?: number | null
}

/** The live catalog, fetched on first use and refetched once older than `ttl` seconds. */
export declare class Catalog {
  url: string
  ttl: number
  constructor(options?: { url?: string; ttl?: number })
  /**
   * Refetch if stale or `force`d; an unchanged catalog costs a 304.
   * A failed refetch keeps the items already held, unless forced or there are none yet.
   */
  refresh(force?: boolean): Promise<this>
  items(): Promise<readonly Item[]>
  get(id: string): Promise<Item | undefined>
  /** [section, item count] pairs, biggest first, then alphabetical. */
  sections(): Promise<[string, number][]>
  /** [tag, item count] pairs, most used first, then alphabetical. */
  tags(): Promise<[string, number][]>
  /** Items matching `query`, best first. */
  search(query?: string, options?: SearchOptions): Promise<Item[]>
  search(options: SearchOptions): Promise<Item[]>
  /** One random item out of everything `search` would match, or undefined. */
  random(query?: string, options?: Filters): Promise<Item | undefined>
  random(options: Filters): Promise<Item | undefined>
  /** Any item at all. */
  imfeelinglucky(): Promise<Item>
}
