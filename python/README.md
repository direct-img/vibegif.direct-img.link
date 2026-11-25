# vibegif (Python)

A small stdlib-only client for the vibegif catalog. Python 3.12+.

```
pip install "vibegif @ git+https://github.com/direct-img/vibegif.direct-img.link@main#subdirectory=python"
```

It reads `catalog.json` from the site build (`dist/catalog.json`, written by `npm run build`) through a local path only; it doesn't fetch over HTTP. Assets sit next to it as `<id>.<fmt>`. Every item has a webp; most also have a gif, but a few are webp-only, so the default format is `webp`.

```python
from vibegif import Catalog

catalog = Catalog.load("dist")            # a directory or a catalog.json file
catalog.get("brain/glow")                   # Item, or None
catalog.tags()                              # [("brain", 12), ...] most used first

for item in catalog.search("rainbow brain", tags=["glow"], section="psychedelic", limit=5):
    print(item.id, item.description)
    print(item.path(catalog.root, "webp"))  # local file
    print(item.url("https://vibegif.direct-img.link"))  # .webp URL
```

`tags` and `section` are hard filters (an item needs every tag). Query terms are scored per item: an exact tag beats a tag prefix, which beats a word in the description. Items matching no term are dropped, ties break by id, and an empty query returns the filtered set in id order.

Tests: `pip install -e ".[test]" && pytest`.
