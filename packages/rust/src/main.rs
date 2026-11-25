//! The vibegif command: search the catalog from a terminal.

use serde::Serialize;
use std::io::Write;
use std::process::ExitCode;
use vibegif::{Catalog, Item, SITE, Search};

const VERSION: &str = env!("CARGO_PKG_VERSION");
const HELP: &str = concat!(
    "vibegif ",
    env!("CARGO_PKG_VERSION"),
    ": search vibegif's public domain animations (https://vibegif.direct-img.link)

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
"
);

struct Opts {
    section: Option<String>,
    tag: Vec<String>,
    limit: usize,
    gif: bool,
    json: bool,
}

/// The options each command takes.
fn takes(cmd: &str) -> Option<&'static [&'static str]> {
    Some(match cmd {
        "search" => &["section", "tag", "limit", "gif", "json"],
        "random" => &["section", "tag", "gif", "json"],
        "lucky" | "get" => &["gif", "json"],
        "sections" | "tags" => &["json"],
        _ => return None,
    })
}

fn name(flag: &str) -> Option<&'static str> {
    Some(match flag {
        "-s" | "--section" => "section",
        "-t" | "--tag" => "tag",
        "-n" | "--limit" => "limit",
        "--gif" => "gif",
        "--json" => "json",
        _ => return None,
    })
}

fn parse(args: &[String]) -> Result<(&str, Vec<&str>, Opts), String> {
    let cmd = args[0].as_str();
    let takes = takes(cmd).ok_or(format!("unknown command: {cmd}"))?;
    let (mut words, mut o) = (vec![], Opts { section: None, tag: vec![], limit: 50, gif: false, json: false });
    let mut rest = args[1..].iter();
    while let Some(a) = rest.next() {
        let (flag, val) = match a.split_once('=') {
            Some((f, v)) if a.starts_with("--") => (f, Some(v.to_owned())),
            _ => (a.as_str(), None),
        };
        let Some(name) = name(flag) else {
            if a.starts_with('-') && a != "-" {
                return Err(format!("unknown option: {a}"));
            }
            words.push(a.as_str());
            continue;
        };
        if !takes.contains(&name) {
            return Err(format!("{cmd} doesn't take {flag}"));
        }
        if name == "gif" || name == "json" {
            if val.is_some() {
                return Err(format!("{flag} doesn't take a value"));
            }
            *(if name == "gif" { &mut o.gif } else { &mut o.json }) = true;
            continue;
        }
        let val = val.or_else(|| rest.next().cloned()).ok_or(format!("{flag} needs a value"))?;
        match name {
            "limit" => {
                let digits = !val.is_empty() && val.bytes().all(|b| b.is_ascii_digit());
                o.limit = val.parse().ok().filter(|_| digits).ok_or(format!("{flag} needs a whole number"))?
            }
            "tag" => o.tag.push(val),
            _ => o.section = Some(val),
        }
    }
    if cmd == "get" && words.len() != 1 {
        return Err("get needs one ID".into());
    }
    if matches!(cmd, "lucky" | "sections" | "tags") && !words.is_empty() {
        return Err(format!("unexpected argument: {}", words[0]));
    }
    Ok((cmd, words, o))
}

fn run(cmd: &str, words: &[&str], o: &Opts) -> vibegif::Result<(u8, String)> {
    let url = std::env::var("VIBEGIF_CATALOG").ok().filter(|u| !u.is_empty());
    let c = Catalog::with_url(url.unwrap_or_else(|| format!("{SITE}/catalog.json")));
    if cmd == "sections" || cmd == "tags" {
        let pairs = if cmd == "tags" { c.tags()? } else { c.sections()? };
        let text = if o.json { dumps(&pairs)? } else { pairs.iter().map(|(n, k)| format!("{n}\t{k}\n")).collect() };
        return Ok((pairs.is_empty().into(), text));
    }
    let mut q = Search::new(words.join(" ")).tags(o.tag.clone());
    if let Some(s) = &o.section {
        q = q.section(s.clone());
    }
    let items = match cmd {
        "search" => c.search(q.limit((o.limit > 0).then_some(o.limit)))?,
        _ => {
            let item = match cmd {
                "random" => c.random(q)?,
                "lucky" => Some(c.imfeelinglucky()?),
                _ => c.get(words[0])?,
            };
            if o.json {
                return Ok((item.is_none().into(), dumps(&item.as_ref().map(|i| shown(i, o)))?));
            }
            item.into_iter().collect()
        }
    };
    let text = if o.json {
        dumps(&items.iter().map(|i| shown(i, o)).collect::<Vec<_>>())?
    } else {
        items.iter().map(|i| format!("{}\t{}\t{}\n", i.id, i.url(fmt(o)), i.description)).collect()
    };
    Ok((items.is_empty().into(), text))
}

#[derive(Serialize)]
struct Shown<'a> {
    id: &'a str,
    section: &'a str,
    description: &'a str,
    tags: &'a [String],
    url: String,
}

fn shown<'a>(i: &'a Item, o: &Opts) -> Shown<'a> {
    Shown { id: &i.id, section: &i.section, description: &i.description, tags: &i.tags, url: i.url(fmt(o)) }
}

fn fmt(o: &Opts) -> &'static str {
    if o.gif { "gif" } else { "webp" }
}

fn dumps(x: &impl Serialize) -> serde_json::Result<String> {
    Ok(serde_json::to_string(x)? + "\n")
}

fn main() -> ExitCode {
    let args: Vec<String> = std::env::args_os().skip(1).map(|a| a.to_string_lossy().into_owned()).collect();
    let has = |flags: [&str; 2]| args.iter().any(|a| flags.contains(&a.as_str()));
    let (code, text) = if args.is_empty() || has(["-h", "--help"]) {
        (0, HELP.to_owned())
    } else if has(["-V", "--version"]) {
        (0, format!("vibegif {VERSION}\n"))
    } else {
        match parse(&args) {
            Err(e) => {
                eprintln!("vibegif: {e}\nRun 'vibegif --help' for usage.");
                return ExitCode::from(2);
            }
            Ok((cmd, words, o)) => match run(cmd, &words, &o) {
                Ok(r) => r,
                Err(e) => {
                    eprintln!("vibegif: {e}");
                    return ExitCode::from(2);
                }
            },
        }
    };
    let _ = std::io::stdout().lock().write_all(text.as_bytes()); // a closed pipe (e.g. head) is fine
    if code == 1 {
        eprintln!("vibegif: no match");
    }
    ExitCode::from(code)
}
