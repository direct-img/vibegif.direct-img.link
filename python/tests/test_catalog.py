from pathlib import Path

import pytest

from vibegif import Catalog, Item

FIXTURE = Path(__file__).parent


@pytest.fixture(scope="module")
def catalog():
    return Catalog.load(FIXTURE)


def ids(items):
    return [i.id for i in items]


def test_load_dir_or_file(catalog):
    assert Catalog.load(FIXTURE / "catalog.json").items == catalog.items
    assert catalog.root == FIXTURE
    assert len(catalog) == 5


def test_get_and_item_helpers(catalog):
    item = catalog.get("brain/glow")
    assert item == Item(
        "brain/glow", "psychedelic", "side view brain with a rainbow glow",
        ("brain", "rainbow", "glow"),
    )
    assert catalog.get("nope/x") is None
    assert item.path("/a", "webp") == Path("/a/brain/glow.webp")
    assert item.url("https://x.test/") == "https://x.test/brain/glow.webp"
    with pytest.raises(AttributeError):
        item.id = "other"


def test_tags(catalog):
    assert catalog.tags() == [
        ("brain", 2), ("cat", 2), ("catnip", 1), ("cozy", 1), ("glow", 1),
        ("neuron", 1), ("night-sky", 1), ("rainbow", 1),
    ]


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
    assert ids(catalog.search("glow", section="animals")) == ["cat/blink"]
    assert ids(catalog.search(limit=2)) == ["brain/glow", "brain/zap"]


def test_tags_string_is_one_tag(catalog):
    assert ids(catalog.search(tags="cat")) == ["cat/blink", "cat/loaf"]
