use flate2::{Compression, write::GzEncoder};
use std::collections::HashSet;
use std::hash::{DefaultHasher, Hash, Hasher};
use std::io::{BufRead, BufReader, Write};
use std::net::TcpListener;
use std::sync::{Arc, Mutex};
use std::time::Duration;
use vibegif::{Catalog, Item, SITE, Search};

const FIXTURE: &str = include_str!("catalog.json");

#[derive(Default)]
struct Srv {
    body: String,
    fail: bool,
    hits: Vec<Option<String>>, // If-None-Match sent with each request
    gzip_asked: bool,
}

/// Serves `body` gzipped with an ETag, honoring If-None-Match.
fn serve() -> (String, Arc<Mutex<Srv>>) {
    let srv = Arc::new(Mutex::new(Srv { body: FIXTURE.into(), ..Srv::default() }));
    let l = TcpListener::bind("127.0.0.1:0").unwrap();
    let url = format!("http://{}/catalog.json", l.local_addr().unwrap());
    let s = srv.clone();
    std::thread::spawn(move || {
        for mut conn in l.incoming().flatten() {
            let mut sent = None;
            let mut gzip = false;
            for line in BufReader::new(&conn).lines().map_while(Result::ok).take_while(|l| !l.is_empty()) {
                let (k, v) = line.split_once(':').unwrap_or((&line, ""));
                match k.to_ascii_lowercase().as_str() {
                    "if-none-match" => sent = Some(v.trim().to_owned()),
                    "accept-encoding" => gzip = v.contains("gzip"),
                    _ => {}
                }
            }
            let mut s = s.lock().unwrap();
            s.hits.push(sent.clone());
            s.gzip_asked = gzip;
            let mut h = DefaultHasher::new();
            s.body.hash(&mut h);
            let etag = format!("\"{:x}\"", h.finish());
            let (head, body) = if s.fail {
                ("500 Internal Server Error".to_owned(), vec![])
            } else if sent.as_ref() == Some(&etag) {
                ("304 Not Modified".to_owned(), vec![])
            } else {
                let mut gz = GzEncoder::new(vec![], Compression::default());
                gz.write_all(s.body.as_bytes()).unwrap();
                (format!("200 OK\r\nETag: {etag}\r\nContent-Encoding: gzip"), gz.finish().unwrap())
            };
            let len =
                if head.starts_with("304") { String::new() } else { format!("Content-Length: {}\r\n", body.len()) };
            let _ = write!(conn, "HTTP/1.1 {head}\r\n{len}Connection: close\r\n\r\n");
            let _ = conn.write_all(&body);
        }
    });
    (url, srv)
}

fn catalog() -> Catalog {
    Catalog::with_url(serve().0)
}

fn ids(items: impl IntoIterator<Item = Item>) -> Vec<String> {
    items.into_iter().map(|i| i.id).collect()
}

#[test]
fn get_and_item_helpers() -> vibegif::Result<()> {
    let c = catalog();
    let item = c.get("brain/glow")?.unwrap();
    let tags = ["brain", "rainbow", "glow"].map(String::from).to_vec();
    assert_eq!(
        item,
        Item {
            id: "brain/glow".into(),
            section: "psychedelic".into(),
            description: "side view brain with a rainbow glow".into(),
            tags
        }
    );
    assert_eq!(c.get("nope/x")?, None);
    assert_eq!(c.items()?.len(), 5);
    assert_eq!(item.url("webp"), format!("{SITE}/brain/glow.webp"));
    assert_eq!(item.url_at("https://x.test/", "gif"), "https://x.test/brain/glow.gif");
    Ok(())
}

#[test]
fn tags_and_sections() -> vibegif::Result<()> {
    let c = catalog();
    let pairs = |v: &[(&str, usize)]| v.iter().map(|&(n, c)| (n.to_owned(), c)).collect::<Vec<_>>();
    assert_eq!(
        c.tags()?,
        pairs(&[
            ("brain", 2),
            ("cat", 2),
            ("catnip", 1),
            ("cozy", 1),
            ("glow", 1),
            ("neuron", 1),
            ("night-sky", 1),
            ("rainbow", 1)
        ])
    );
    assert_eq!(c.sections()?, pairs(&[("animals", 3), ("psychedelic", 1), ("science", 1)]));
    Ok(())
}

#[test]
fn search_ranking() -> vibegif::Result<()> {
    let c = catalog();
    // glow: exact tag (brain/glow) beats description word (cat/blink)
    assert_eq!(ids(c.search("glow")?), ["brain/glow", "cat/blink"]);
    // "bra": tag prefix on both brains, id order; "cat" has no match
    assert_eq!(ids(c.search("bra")?), ["brain/glow", "brain/zap"]);
    // terms add up: 6 for brain/glow, 3 for brain/zap, 1 for cat/blink (description word)
    assert_eq!(ids(c.search("Brain, GLOW!")?), ["brain/glow", "brain/zap", "cat/blink"]);
    // exact tag (cat/blink, cat/loaf) beats tag prefix (misc/dot's catnip)
    assert_eq!(ids(c.search("cat")?), ["cat/blink", "cat/loaf", "misc/dot"]);
    // hyphenated term: exact tag, then a description with every part
    assert_eq!(ids(c.search("night-sky")?), ["cat/blink", "cat/loaf"]);
    assert!(c.search("zzz")?.is_empty());
    Ok(())
}

#[test]
fn search_filters_and_limit() -> vibegif::Result<()> {
    let c = catalog();
    assert_eq!(ids(c.search("")?), ["brain/glow", "brain/zap", "cat/blink", "cat/loaf", "misc/dot"]);
    assert_eq!(ids(c.search(Search::default().tags(["Brain"]).section("science"))?), ["brain/zap"]);
    assert_eq!(ids(c.search(Search::default().tags(["cat", "cozy"]))?), ["cat/loaf"]);
    assert_eq!(ids(c.search(Search::new("glow").section("animals"))?), ["cat/blink"]);
    assert_eq!(ids(c.search(Search::default().limit(2))?), ["brain/glow", "brain/zap"]);
    assert_eq!(c.search(Search::default().limit(None))?.len(), 5);
    Ok(())
}

#[test]
fn random() -> vibegif::Result<()> {
    let c = catalog();
    let set = |f: &dyn Fn() -> vibegif::Result<Option<Item>>| -> vibegif::Result<HashSet<String>> {
        (0..200).map(|_| Ok(f()?.unwrap().id)).collect()
    };
    let all: HashSet<String> = ids(c.items()?).into_iter().collect();
    assert_eq!(c.random(Search::default().section("science"))?.unwrap().id, "brain/zap");
    assert_eq!(c.random("zzz")?, None);
    assert_eq!(set(&|| c.random("cat"))?, ["cat/blink", "cat/loaf", "misc/dot"].map(String::from).into());
    assert_eq!(set(&|| c.random(Search::default().limit(1)))?, all); // random ignores the limit
    assert_eq!(set(&|| c.imfeelinglucky().map(Some))?, all);
    Ok(())
}

#[test]
fn fetches_once_per_ttl() -> vibegif::Result<()> {
    let (url, srv) = serve();
    let c = Catalog::with_url(url);
    c.get("cat/loaf")?;
    c.search("cat")?;
    c.tags()?;
    c.items()?;
    let s = srv.lock().unwrap();
    assert_eq!(s.hits, [None]);
    assert!(s.gzip_asked);
    Ok(())
}

#[test]
fn refresh() -> vibegif::Result<()> {
    let (url, srv) = serve();
    let c = Catalog::with_url(&url).ttl(Duration::ZERO);
    assert_eq!(c.items()?.len(), 5);
    assert_eq!(c.items()?.len(), 5); // sent the ETag, got a 304, kept the items
    assert!(srv.lock().unwrap().hits[1].is_some());
    c.refresh(true)?; // a forced check that gets a 304 is a success, not an error
    srv.lock().unwrap().body = r#"{"items":[{"id":"a/b","section":"s","description":"new"}]}"#.into();
    assert_eq!(ids(c.items()?), ["a/b"]);
    srv.lock().unwrap().fail = true;
    assert_eq!(ids(c.items()?), ["a/b"]); // a failed check keeps what it has
    assert!(c.refresh(true).is_err());
    assert!(Catalog::with_url(&url).get("a/b").is_err()); // nothing to fall back on
    assert_eq!(srv.lock().unwrap().hits.len(), 7);
    Ok(())
}

#[test]
fn catalog_is_send_sync() {
    fn check<T: Send + Sync>() {}
    check::<Catalog>();
}

#[test]
fn cli() {
    let url = serve().0;
    let run = |args: &[&str]| {
        let o = std::process::Command::new(env!("CARGO_BIN_EXE_vibegif"))
            .args(args)
            .env("VIBEGIF_CATALOG", &url)
            .output()
            .unwrap();
        (o.status.code().unwrap(), String::from_utf8(o.stdout).unwrap(), String::from_utf8(o.stderr).unwrap())
    };
    let ok = |out: String| (0, out, String::new());
    assert_eq!(
        run(&["search", "cat", "-n", "2"]),
        ok(format!(
            "cat/blink\t{SITE}/cat/blink.webp\ta cat blinking slowly, glow of a screen\n\
             cat/loaf\t{SITE}/cat/loaf.webp\tcat loaf under the night sky\n"
        ))
    );
    assert_eq!(
        run(&["get", "brain/glow", "--json", "--gif"]),
        ok(format!(
            "{{\"id\":\"brain/glow\",\"section\":\"psychedelic\",\"description\":\"side view brain with a rainbow glow\",\
             \"tags\":[\"brain\",\"rainbow\",\"glow\"],\"url\":\"{SITE}/brain/glow.gif\"}}\n"
        ))
    );
    assert_eq!(
        run(&["random", "-s", "science"]),
        ok(format!("brain/zap\t{SITE}/brain/zap.webp\tneurons firing in a brain\n"))
    );
    assert_eq!(run(&["sections"]), ok("animals\t3\npsychedelic\t1\nscience\t1\n".into()));
    assert_eq!(run(&["get", "nope/x"]), (1, String::new(), "vibegif: no match\n".into()));
    let usage = "vibegif: lucky doesn't take -n\nRun 'vibegif --help' for usage.\n";
    assert_eq!(run(&["lucky", "-n", "3"]), (2, String::new(), usage.into()));
    assert_eq!(run(&["--version"]), ok(format!("vibegif {}\n", env!("CARGO_PKG_VERSION"))));
}
