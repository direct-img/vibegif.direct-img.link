<img src="https://vibegif.direct-img.link/cat/blink.webp" align="right" width="96" alt="blinking cat">

# vibegif (Rust)

Search [vibegif](https://vibegif.direct-img.link)'s 1,400+ public domain (CC0) animations from Rust and get URLs you can hotlink. Blocking, Rust 1.85+.

```
cargo add vibegif
```

```rust
use vibegif::{Catalog, Search};

let catalog = Catalog::new();
for item in catalog.search(Search::new("rainbow brain").limit(3))? {
    // brain/glow https://vibegif.direct-img.link/brain/glow.webp
    println!("{} {}", item.id, item.url("webp"));
}

catalog.search(Search::new("spinner").section("loader"))?;   // section is a hard filter
catalog.search(Search::new("cat").tags(["calm", "night"]))?; // so are tags, every one required
catalog.random(Search::default().section("loader"))?;        // one random match, or None
catalog.imfeelinglucky()?;                                   // any anim at all
catalog.get("cat/blink")?;                                   // Item, or None
catalog.sections()?;                                         // [("animedev", 150), ...]
catalog.tags()?;                                             // [("calm", 369), ...]
```

<img src="https://vibegif.direct-img.link/rust/love.webp" align="right" width="128" alt="girl with a long braid hugging a big orange crab as hearts float up">

An `Item` has `id`, `section`, `description` and `tags`. `item.url("webp")` is its webp, which every item has, and `item.url("gif")` its gif, which most have.

Search scores each query term: an exact tag beats a tag prefix, which beats a word in the description. Results come best first, ties break by id, and an empty query returns everything that passes the filters, in id order. A plain `catalog.search("cat")` works too. It returns 50 at most unless you set `.limit(n)` (`.limit(None)` for every match).

The catalog comes from [catalog.json](https://vibegif.direct-img.link/catalog.json). It's fetched on first use and checked again once it's an hour old (`Catalog::new().ttl(duration)`, or `catalog.refresh(true)` to check now). An unchanged catalog costs a 304, and a failed check keeps the items already fetched. `Catalog` is `Send + Sync`, so one can be shared across threads.

Tests: `cargo test`
