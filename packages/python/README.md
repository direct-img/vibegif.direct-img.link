<img src="https://vibegif.direct-img.link/cat/blink.webp" align="right" width="96" alt="blinking cat">

# vibegif (Python)

Search [vibegif](https://vibegif.direct-img.link)'s 1,400+ public domain (CC0) animations from Python or the terminal and get URLs you can hotlink. No dependencies, Python 3.10+.

```
pip install vibegif
```

```python
from vibegif import Catalog

catalog = Catalog()
for item in catalog.search("rainbow brain", limit=3):
    print(item.id, item.url())  # brain/glow https://vibegif.direct-img.link/brain/glow.webp

catalog.search("spinner", section="loader")     # section is a hard filter
catalog.search("cat", tags=["calm", "night"])   # so are tags, every one required
catalog.random(section="loader")                # one random match, or None
catalog.imfeelinglucky()                        # any anim at all
catalog.get("cat/blink")                        # Item, or None
catalog.sections()                              # [("animedev", 150), ("inkwash", 150), ...]
catalog.tags()                                  # [("calm", 369), ("happy", 329), ...]
```

<img src="https://vibegif.direct-img.link/python/charm.webp" align="right" width="128" alt="girl playing a flute as a blue and yellow snake rises from a basket">

An `Item` has `id`, `section`, `description` and `tags`. `item.url()` is its webp, which every item has, and `item.url("gif")` its gif, which most have.

Search scores each query term: an exact tag beats a tag prefix, which beats a word in the description. Results come best first, ties break by id, and an empty query returns everything that passes the filters, in id order. It returns 50 at most unless you pass `limit` (`limit=None` for every match).

The catalog comes from [catalog.json](https://vibegif.direct-img.link/catalog.json). It's fetched on first use and checked again once it's an hour old (`Catalog(ttl=seconds)`, or `catalog.refresh(force=True)` to check now). An unchanged catalog costs a 304, and a failed check keeps the items already fetched.

## Command line

```sh
uvx vibegif search rainbow brain -n 3  # id, URL and description per line
uvx vibegif random -s loader --gif     # one random loader, as a gif
uvx vibegif lucky                      # any anim at all
uvx vibegif get cat/blink --json       # JSON instead of tab-separated lines
uvx vibegif sections                   # name and count per line, tags too
```

`uvx` runs it without installing anything; after `pip install vibegif` it's just `vibegif`. `-t` filters by tag (repeatable), `-n 0` lists every match and `vibegif --help` has the rest. It exits 1 when nothing matches.

Tests: `uv run --with pytest pytest`
