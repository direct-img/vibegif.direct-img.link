import gzip
import json
import threading
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

import pytest

from vibegif import SITE, Catalog, Item

FIXTURE = Path(__file__).with_name("catalog.json")


@pytest.fixture(scope="module")
def catalog():
    return Catalog(FIXTURE.as_uri())


@pytest.fixture
def server():
    """Serves `state["body"]` gzipped with an ETag, honoring If-None-Match."""
    state = {"body": FIXTURE.read_bytes(), "fail": False, "hits": []}

    class H(BaseHTTPRequestHandler):
        def do_GET(self):
            sent, etag = self.headers.get("If-None-Match"), f'"{hash(state["body"])}"'
            state["hits"].append(sent)
            if state["fail"]:
                return self.send_error(500)
            if sent == etag:
                self.send_response(304)
                return self.end_headers()
            body = gzip.compress(state["body"])
            self.send_response(200)
            for k, v in ("ETag", etag), ("Content-Encoding", "gzip"), ("Content-Length", len(body)):
                self.send_header(k, str(v))
            self.end_headers()
            self.wfile.write(body)

        def log_message(self, *_):
            pass

    srv = ThreadingHTTPServer(("127.0.0.1", 0), H)
    threading.Thread(target=srv.serve_forever, daemon=True).start()
    yield f"http://127.0.0.1:{srv.server_port}/catalog.json", state
    srv.shutdown()


def ids(items):
    return [i.id for i in items]


def test_get_and_item_helpers(catalog):
    item = catalog.get("brain/glow")
    assert item == Item(
        "brain/glow", "psychedelic", "side view brain with a rainbow glow",
        ("brain", "rainbow", "glow"),
    )
    assert catalog.get("nope/x") is None
    assert len(catalog) == 5 and ids(catalog)[0] == "brain/glow"
    assert item.url() == f"{SITE}/brain/glow.webp"
    assert item.url("gif", "https://x.test/") == "https://x.test/brain/glow.gif"
    with pytest.raises(AttributeError):
        item.id = "other"


def test_tags(catalog):
    assert catalog.tags() == [
        ("brain", 2), ("cat", 2), ("catnip", 1), ("cozy", 1), ("glow", 1),
        ("neuron", 1), ("night-sky", 1), ("rainbow", 1),
    ]


def test_sections(catalog):
    assert catalog.sections() == [("animals", 3), ("psychedelic", 1), ("science", 1)]


def test_random(catalog):
    assert catalog.random(section="science").id == "brain/zap"
    assert catalog.random("zzz") is None
    assert {catalog.random("cat").id for _ in range(200)} == {"cat/blink", "cat/loaf", "misc/dot"}
    assert {catalog.random().id for _ in range(200)} == set(ids(catalog))
    assert {catalog.imfeelinglucky().id for _ in range(200)} == set(ids(catalog))


def test_search_ranking(catalog):
    # glow: exact tag (brain/glow) beats description word (cat/blink)
    assert ids(catalog.search("glow")) == ["brain/glow", "cat/blink"]
    # "bra": tag prefix on both brains, id order; "cat" has no match
    assert ids(catalog.search("bra")) == ["brain/glow", "brain/zap"]
    # terms add up: 6 for brain/glow, 3 for brain/zap, 1 for cat/blink (description word)
    assert ids(catalog.search("Brain, GLOW!")) == ["brain/glow", "brain/zap", "cat/blink"]
    # exact tag (cat/blink, cat/loaf) beats tag prefix (misc/dot's catnip)
    assert ids(catalog.search("cat")) == ["cat/blink", "cat/loaf", "misc/dot"]
    # hyphenated term: exact tag, then a description with every part
    assert ids(catalog.search("night-sky")) == ["cat/blink", "cat/loaf"]
    assert catalog.search("zzz") == []


def test_search_filters_and_limit(catalog):
    assert ids(catalog.search()) == [
        "brain/glow", "brain/zap", "cat/blink", "cat/loaf", "misc/dot",
    ]
    assert ids(catalog.search(tags=["Brain"], section="science")) == ["brain/zap"]
    assert ids(catalog.search(tags=("cat", "cozy"))) == ["cat/loaf"]
    assert ids(catalog.search(tags="cat")) == ["cat/blink", "cat/loaf"]
    assert ids(catalog.search("glow", section="animals")) == ["cat/blink"]
    assert ids(catalog.search(limit=2)) == ["brain/glow", "brain/zap"]
    assert len(catalog.search(limit=None)) == 5


def test_fetches_once_per_ttl(server):
    url, state = server
    c = Catalog(url)
    c.get("cat/loaf"), c.search("cat"), c.tags(), len(c)
    assert state["hits"] == [None]


def test_refresh(server):
    url, state = server
    c = Catalog(url, ttl=0)
    assert len(c) == 5
    assert len(c) == 5 and state["hits"][-1]  # sent the ETag, got a 304, kept the items
    state["body"] = json.dumps({"items": [{"id": "a/b", "section": "s", "description": "new"}]}).encode()
    assert ids(c) == ["a/b"]
    state["fail"] = True
    assert ids(c) == ["a/b"]  # a failed check keeps what it has
    with pytest.raises(OSError):
        c.refresh(force=True)
    with pytest.raises(OSError):
        Catalog(url).get("a/b")  # nothing to fall back on
