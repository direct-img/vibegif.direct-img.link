"""The vibegif command: search the catalog from a terminal."""

from __future__ import annotations

import json
import os
import sys
from importlib.metadata import version

from .catalog import SITE, Catalog, Item

HELP = """\
vibegif {v}: search vibegif's public domain animations (https://vibegif.direct-img.link)

Usage:
  vibegif search [QUERY...] [-s SECTION] [-t TAG]... [-n LIMIT]
  vibegif random [QUERY...] [-s SECTION] [-t TAG]...
  vibegif lucky
  vibegif get ID
  vibegif sections
  vibegif tags

Options:
  -s, --section SECTION  only this section
  -t, --tag TAG          only items with this tag, repeatable
  -n, --limit LIMIT      at most this many results (default 50, 0 for all)
      --gif              gif URLs instead of webp
      --json             JSON instead of tab-separated lines
  -h, --help             show this help
  -V, --version          show the version

Items print as id, URL and description; sections and tags as name and count.
Exits 1 when nothing matches and 2 on errors. VIBEGIF_CATALOG overrides the
catalog URL.
"""
# The options each command takes.
TAKES = {
    "search": {"section", "tag", "limit", "gif", "json"},
    "random": {"section", "tag", "gif", "json"},
    "lucky": {"gif", "json"},
    "get": {"gif", "json"},
    "sections": {"json"},
    "tags": {"json"},
}
NAMES = {"-s": "section", "-t": "tag", "-n": "limit"} | {f"--{o}": o for o in ("section", "tag", "limit", "gif", "json")}


class Usage(Exception):
    pass


def parse(args: list[str]) -> tuple[str, list[str], dict]:
    cmd, words, o = args[0], [], {"section": None, "tag": [], "limit": 50, "gif": False, "json": False}
    if cmd not in TAKES:
        raise Usage(f"unknown command: {cmd}")
    rest = iter(args[1:])
    for a in rest:
        flag, eq, val = a.partition("=") if a.startswith("--") else (a, "", "")
        if (name := NAMES.get(flag)) is None:
            if a.startswith("-") and a != "-":
                raise Usage(f"unknown option: {a}")
            words.append(a)
            continue
        if name not in TAKES[cmd]:
            raise Usage(f"{cmd} doesn't take {flag}")
        if name in ("gif", "json"):
            if eq:
                raise Usage(f"{flag} doesn't take a value")
            o[name] = True
            continue
        if not eq and (val := next(rest, None)) is None:
            raise Usage(f"{flag} needs a value")
        if name == "limit" and not (val.isascii() and val.isdigit()):
            raise Usage(f"{flag} needs a whole number")
        o[name] = o["tag"] + [val] if name == "tag" else int(val) if name == "limit" else val
    if cmd == "get" and len(words) != 1:
        raise Usage("get needs one ID")
    if cmd in ("lucky", "sections", "tags") and words:
        raise Usage(f"unexpected argument: {words[0]}")
    return cmd, words, o


def run(cmd: str, words: list[str], o: dict) -> tuple[int, str]:
    c = Catalog(os.environ.get("VIBEGIF_CATALOG") or f"{SITE}/catalog.json")
    if cmd in ("sections", "tags"):
        pairs = getattr(c, cmd)()
        return int(not pairs), dumps(pairs) if o["json"] else "".join(f"{n}\t{k}\n" for n, k in pairs)
    q, filters = " ".join(words), {"tags": o["tag"], "section": o["section"]}
    if cmd == "search":
        items = c.search(q, **filters, limit=o["limit"] or None)
    else:
        item = c.random(q, **filters) if cmd == "random" else c.imfeelinglucky() if cmd == "lucky" else c.get(words[0])
        if o["json"]:
            return int(not item), dumps(item and shown(item, o))
        items = [item] if item else []
    fmt = "gif" if o["gif"] else "webp"
    text = "".join(f"{i.id}\t{i.url(fmt)}\t{i.description}\n" for i in items)
    return int(not items), dumps([shown(i, o) for i in items]) if o["json"] else text


def shown(i: Item, o: dict) -> dict:
    return {"id": i.id, "section": i.section, "description": i.description, "tags": i.tags, "url": i.url("gif" if o["gif"] else "webp")}


def dumps(x) -> str:
    return json.dumps(x, ensure_ascii=False, separators=(",", ":")) + "\n"


def main(argv: list[str] | None = None) -> int:
    args = sys.argv[1:] if argv is None else argv
    try:
        if not args or "-h" in args or "--help" in args:
            code, text = 0, HELP.format(v=version("vibegif"))
        elif "-V" in args or "--version" in args:
            code, text = 0, f"vibegif {version('vibegif')}\n"
        else:
            code, text = run(*parse(args))
    except Usage as e:
        sys.stderr.write(f"vibegif: {e}\nRun 'vibegif --help' for usage.\n")
        return 2
    except Exception as e:  # network trouble or a bad catalog
        sys.stderr.write(f"vibegif: {e}\n")
        return 2
    try:
        sys.stdout.write(text)
        sys.stdout.flush()
    except BrokenPipeError:  # e.g. piped into head
        os.dup2(os.open(os.devnull, os.O_WRONLY), sys.stdout.fileno())
    if code:
        sys.stderr.write("vibegif: no match\n")
    return code
