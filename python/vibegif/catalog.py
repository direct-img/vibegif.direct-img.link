"""Load and search the vibegif catalog (catalog.json)."""

from __future__ import annotations

import json
import re
from collections import Counter
from dataclasses import dataclass
from pathlib import Path
from typing import Iterable

_TERM = re.compile(r"[a-z0-9][a-z0-9-]*")
_WORD = re.compile(r"[a-z0-9]+")

# Per query term, the best match wins; a term's scores add up across the query.
_TAG_EXACT, _TAG_PREFIX, _DESC_WORD = 3, 2, 1


@dataclass(frozen=True)
class Item:
    id: str
    section: str
    description: str
    tags: tuple[str, ...] = ()

    def path(self, base: str | Path, fmt: str = "webp") -> Path:
        """Local file for this item under `base` (a directory)."""
        return Path(base) / f"{self.id}.{fmt}"

    def url(self, base: str, fmt: str = "webp") -> str:
        """URL for this item under `base`, e.g. "https://vibegif.direct-img.link"."""
        return f"{base.rstrip('/')}/{self.id}.{fmt}"


class Catalog:
    def __init__(self, items: Iterable[Item], root: Path | None = None):
        self.items = tuple(items)
        self.root = root  # directory the assets sit in, when loaded from disk
        self._by_id = {i.id: i for i in self.items}
        self._tags = [frozenset(i.tags) for i in self.items]
        self._words = [frozenset(_WORD.findall(i.description.lower())) for i in self.items]

    @classmethod
    def load(cls, path: str | Path) -> Catalog:
        """Load from a directory containing catalog.json, or from the file itself."""
        p = Path(path)
        file = p / "catalog.json" if p.is_dir() else p
        data = json.loads(file.read_text(encoding="utf-8"))
        items = (
            Item(d["id"], d["section"], d["description"], tuple(d.get("tags", ())))
            for d in data["items"]
        )
        return cls(items, root=file.parent)

    def __len__(self) -> int:
        return len(self.items)

    def get(self, id: str) -> Item | None:
        return self._by_id.get(id)

    def tags(self) -> list[tuple[str, int]]:
        """(tag, item count) pairs, most used first, then alphabetical."""
        counts = Counter(t for i in self.items for t in i.tags)
        return sorted(counts.items(), key=lambda kv: (-kv[1], kv[0]))

    def search(
        self,
        query: str = "",
        *,
        tags: Iterable[str] = (),
        section: str | None = None,
        limit: int = 50,
    ) -> list[Item]:
        """Items matching `query`, best first.

        `tags` (all required) and `section` are hard filters. Each query term
        scores an exact tag match above a tag-prefix match above a description
        word; items matching no term are dropped, and ties break by id. An empty
        query returns everything that passes the filters, in id order.
        """
        if isinstance(tags, str):
            tags = (tags,)
        need = {t.lower() for t in tags}
        terms = _TERM.findall(query.lower())
        scored: list[tuple[int, str, Item]] = []
        for item, item_tags, words in zip(self.items, self._tags, self._words):
            if section is not None and item.section != section:
                continue
            if not need <= item_tags:
                continue
            score = sum(_score(t, item_tags, words) for t in terms)
            if terms and not score:
                continue
            scored.append((-score, item.id, item))
        scored.sort(key=lambda s: s[:2])
        return [s[2] for s in scored[:limit]]


def _score(term: str, tags: frozenset[str], words: frozenset[str]) -> int:
    if term in tags:
        return _TAG_EXACT
    if any(t.startswith(term) for t in tags):
        return _TAG_PREFIX
    if term in words:
        return _DESC_WORD
    # A hyphenated term matches a description that has all its parts.
    parts = term.split("-")
    return _DESC_WORD if len(parts) > 1 and all(p in words for p in parts) else 0
