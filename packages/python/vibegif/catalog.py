"""Search the vibegif catalog, fetched from the site and refetched once stale."""

from __future__ import annotations

import gzip
import json
import re
import time
from collections import Counter
from dataclasses import dataclass
from random import choice
from typing import Iterable, Iterator
from urllib.request import Request, urlopen

SITE = "https://vibegif.direct-img.link"
_TERM = re.compile(r"[a-z0-9][a-z0-9-]*")
_WORD = re.compile(r"[a-z0-9]+")
# Per query term the best match wins; a term's scores add up across the query.
_TAG_EXACT, _TAG_PREFIX, _DESC_WORD = 3, 2, 1


@dataclass(frozen=True)
class Item:
    id: str
    section: str
    description: str
    tags: tuple[str, ...] = ()

    def url(self, fmt: str = "webp", site: str = SITE) -> str:
        """Hotlinkable URL. Every item has a webp; most also have a gif."""
        return f"{site.rstrip('/')}/{self.id}.{fmt}"


class Catalog:
    """The live catalog, fetched on first use and refetched once older than `ttl` seconds."""

    def __init__(self, url: str = f"{SITE}/catalog.json", ttl: float = 3600):
        self.url, self.ttl = url, ttl
        self._items: tuple[Item, ...] = ()
        self._etag: str | None = None
        self._at = 0.0

    def refresh(self, force: bool = False) -> Catalog:
        """Refetch if stale or `force`d; an unchanged catalog costs a 304.

        A failed refetch keeps the items already held, unless forced or there are none yet.
        """
        if not force and self._items and time.monotonic() - self._at < self.ttl:
            return self
        h = {"User-Agent": "vibegif-python", "Accept-Encoding": "gzip"}
        if self._items and self._etag:
            h["If-None-Match"] = self._etag
        try:
            with urlopen(Request(self.url, headers=h), timeout=30) as r:
                body, etag = r.read(), r.headers.get("ETag")
                if r.headers.get("Content-Encoding") == "gzip":
                    body = gzip.decompress(body)
            self._index(json.loads(body)["items"])
            self._etag = etag
        except (OSError, ValueError, KeyError) as e:
            if getattr(e, "code", None) != 304 and (force or not self._items):
                raise
        self._at = time.monotonic()
        return self

    def _index(self, raw: list[dict]) -> None:
        items = tuple(
            Item(d["id"], d["section"], d["description"], tuple(d.get("tags", ())))
            for d in raw
        )
        self._by_id = {i.id: i for i in items}
        self._rows = [
            (i, frozenset(i.tags), frozenset(_WORD.findall(i.description.lower())))
            for i in items
        ]
        self._items = items

    @property
    def items(self) -> tuple[Item, ...]:
        return self.refresh()._items

    def __len__(self) -> int:
        return len(self.items)

    def __iter__(self) -> Iterator[Item]:
        return iter(self.items)

    def get(self, id: str) -> Item | None:
        return self.refresh()._by_id.get(id)

    def sections(self) -> list[tuple[str, int]]:
        """(section, item count) pairs, biggest first, then alphabetical."""
        return _ranked(i.section for i in self.items)

    def tags(self) -> list[tuple[str, int]]:
        """(tag, item count) pairs, most used first, then alphabetical."""
        return _ranked(t for i in self.items for t in i.tags)

    def random(
        self, query: str = "", *, tags: Iterable[str] = (), section: str | None = None
    ) -> Item | None:
        """One random item out of everything `search` would match, or None."""
        hits = self.search(query, tags=tags, section=section, limit=None)
        return choice(hits) if hits else None

    def imfeelinglucky(self) -> Item:
        """Any item at all."""
        return choice(self.items)

    def search(
        self,
        query: str = "",
        *,
        tags: Iterable[str] = (),
        section: str | None = None,
        limit: int | None = 50,
    ) -> list[Item]:
        """Items matching `query`, best first.

        `tags` (all required) and `section` are hard filters. Each query term
        scores an exact tag match above a tag-prefix match above a description
        word; items matching no term are dropped, and ties break by id. An empty
        query returns everything that passes the filters, in id order. `limit=None`
        returns every match.
        """
        need = {t.lower() for t in ((tags,) if isinstance(tags, str) else tags)}
        terms = _TERM.findall(query.lower())
        scored = []
        for item, item_tags, words in self.refresh()._rows:
            if section not in (None, item.section) or not need <= item_tags:
                continue
            score = sum(_score(t, item_tags, words) for t in terms)
            if score or not terms:
                scored.append((-score, item.id, item))
        scored.sort(key=lambda s: s[:2])
        return [s[2] for s in scored[:limit]]


def _ranked(names: Iterable[str]) -> list[tuple[str, int]]:
    return sorted(Counter(names).items(), key=lambda kv: (-kv[1], kv[0]))


def _score(term: str, tags: frozenset[str], words: frozenset[str]) -> int:
    if term in tags:
        return _TAG_EXACT
    if any(t.startswith(term) for t in tags):
        return _TAG_PREFIX
    # A hyphenated term matches a description that has all its parts.
    return _DESC_WORD if all(p in words for p in term.split("-")) else 0
