from importlib.metadata import version
from pathlib import Path

import pytest

from vibegif import SITE
from vibegif.cli import main

FIXTURE = Path(__file__).with_name("catalog.json")


@pytest.fixture
def run(monkeypatch, capsys):
    monkeypatch.setenv("VIBEGIF_CATALOG", FIXTURE.as_uri())

    def run(*args):
        code = main(list(args))
        out, err = capsys.readouterr()
        return code, out, err

    return run


def ok(out):
    return 0, out, ""


def test_cli(run):
    assert run("search", "cat", "-n", "2") == ok(
        f"cat/blink\t{SITE}/cat/blink.webp\ta cat blinking slowly, glow of a screen\n"
        f"cat/loaf\t{SITE}/cat/loaf.webp\tcat loaf under the night sky\n"
    )
    assert run("get", "brain/glow", "--json", "--gif") == ok(
        '{"id":"brain/glow","section":"psychedelic","description":"side view brain with a rainbow glow",'
        f'"tags":["brain","rainbow","glow"],"url":"{SITE}/brain/glow.gif"}}\n'
    )
    assert run("random", "-s", "science") == ok(f"brain/zap\t{SITE}/brain/zap.webp\tneurons firing in a brain\n")
    assert run("sections") == ok("animals\t3\npsychedelic\t1\nscience\t1\n")
    assert run("get", "nope/x") == (1, "", "vibegif: no match\n")
    assert run("lucky", "-n", "3") == (2, "", "vibegif: lucky doesn't take -n\nRun 'vibegif --help' for usage.\n")
    assert run("--version") == ok(f"vibegif {version('vibegif')}\n")
