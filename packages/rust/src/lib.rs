//! Search [vibegif](https://vibegif.direct-img.link)'s public domain (CC0) animations
//! and get URLs you can hotlink.
//!
//! ```no_run
//! use vibegif::{Catalog, Search};
//!
//! let catalog = Catalog::new();
//! for item in catalog.search(Search::new("rainbow brain").limit(3))? {
//!     println!("{} {}", item.id, item.url("webp"));
//! }
//! # Ok::<(), vibegif::Error>(())
//! ```
//!
//! The catalog is fetched on first use and checked again once it's an hour old;
//! an unchanged catalog costs a 304, and a failed check keeps the items already fetched.

use serde::Deserialize;
use std::collections::{HashMap, HashSet};
use std::sync::{Arc, RwLock, RwLockReadGuard, RwLockWriteGuard};
use std::time::{Duration, Instant};

pub const SITE: &str = "https://vibegif.direct-img.link";

pub type Error = Box<dyn std::error::Error + Send + Sync>;
pub type Result<T, E = Error> = std::result::Result<T, E>;

// Per query term the best match wins; a term's scores add up across the query.
const TAG_EXACT: u32 = 3;
const TAG_PREFIX: u32 = 2;
const DESC_WORD: u32 = 1;

#[derive(Clone, Debug, PartialEq, Eq, Deserialize)]
pub struct Item {
    pub id: String,
    pub section: String,
    pub description: String,
    #[serde(default)]
    pub tags: Vec<String>,
}

impl Item {
    /// Hotlinkable URL for `fmt` ("webp" or "gif"). Every item has a webp; most also have a gif.
    pub fn url(&self, fmt: &str) -> String {
        self.url_at(SITE, fmt)
    }

    /// Like [`Item::url`], on another `site`.
    pub fn url_at(&self, site: &str, fmt: &str) -> String {
        format!("{}/{}.{fmt}", site.trim_end_matches('/'), self.id)
    }
}

/// A query for [`Catalog::search`] and [`Catalog::random`]. A `&str` converts into a plain one.
#[derive(Clone, Debug)]
pub struct Search {
    query: String,
    tags: Vec<String>,
    section: Option<String>,
    limit: Option<usize>,
}

impl Default for Search {
    fn default() -> Self {
        Self { query: String::new(), tags: vec![], section: None, limit: Some(50) }
    }
}

impl Search {
    pub fn new(query: impl Into<String>) -> Self {
        Self { query: query.into(), ..Self::default() }
    }

    /// Items need every one of these tags.
    pub fn tags<S: Into<String>>(mut self, tags: impl IntoIterator<Item = S>) -> Self {
        self.tags = tags.into_iter().map(Into::into).collect();
        self
    }

    /// Items need to be in this section.
    pub fn section(mut self, section: impl Into<String>) -> Self {
        self.section = Some(section.into());
        self
    }

    /// At most this many results (default 50), or `None` for every match.
    pub fn limit(mut self, limit: impl Into<Option<usize>>) -> Self {
        self.limit = limit.into();
        self
    }
}

impl From<&str> for Search {
    fn from(query: &str) -> Self {
        Self::new(query)
    }
}

impl From<String> for Search {
    fn from(query: String) -> Self {
        Self::new(query)
    }
}

/// The live catalog, fetched on first use and refetched once older than its ttl (1h).
/// `Send + Sync`, so one can be shared across threads.
pub struct Catalog {
    url: String,
    ttl: Duration,
    agent: ureq::Agent,
    state: RwLock<State>,
}

#[derive(Default)]
struct State {
    index: Option<Arc<Index>>,
    etag: Option<String>,
    at: Option<Instant>,
}

struct Index {
    items: Vec<Item>,
    by_id: HashMap<String, usize>,
    rows: Vec<(HashSet<String>, HashSet<String>)>, // (tags, description words) per item
}

#[derive(Deserialize)]
struct Raw {
    items: Vec<Item>,
}

impl Default for Catalog {
    fn default() -> Self {
        Self::new()
    }
}

impl Catalog {
    pub fn new() -> Self {
        Self::with_url(format!("{SITE}/catalog.json"))
    }

    /// A catalog served from somewhere else, e.g. a mirror.
    pub fn with_url(url: impl Into<String>) -> Self {
        let config = ureq::Agent::config_builder()
            .timeout_global(Some(Duration::from_secs(30)))
            .user_agent("vibegif-rust")
            .build();
        Self { url: url.into(), ttl: Duration::from_secs(3600), agent: config.into(), state: RwLock::default() }
    }

    /// How old the catalog may get before the next use checks it again.
    pub fn ttl(mut self, ttl: Duration) -> Self {
        self.ttl = ttl;
        self
    }

    /// Refetch if stale or `force`d; an unchanged catalog costs a 304.
    ///
    /// A failed refetch keeps the items already held, unless forced or there are none yet.
    pub fn refresh(&self, force: bool) -> Result<()> {
        self.index(force).map(drop)
    }

    pub fn items(&self) -> Result<Vec<Item>> {
        Ok(self.index(false)?.items.clone())
    }

    pub fn get(&self, id: &str) -> Result<Option<Item>> {
        let i = self.index(false)?;
        Ok(i.by_id.get(id).map(|&n| i.items[n].clone()))
    }

    /// (section, item count) pairs, biggest first, then alphabetical.
    pub fn sections(&self) -> Result<Vec<(String, usize)>> {
        Ok(ranked(self.index(false)?.items.iter().map(|i| &i.section)))
    }

    /// (tag, item count) pairs, most used first, then alphabetical.
    pub fn tags(&self) -> Result<Vec<(String, usize)>> {
        Ok(ranked(self.index(false)?.items.iter().flat_map(|i| &i.tags)))
    }

    /// Items matching the query, best first.
    ///
    /// Tags (all required) and section are hard filters. Each query term scores an
    /// exact tag match above a tag-prefix match above a description word; items
    /// matching no term are dropped, and ties break by id. An empty query returns
    /// everything that passes the filters, in id order.
    pub fn search(&self, q: impl Into<Search>) -> Result<Vec<Item>> {
        let q = q.into();
        let i = self.index(false)?;
        Ok(i.find(&q).into_iter().take(q.limit.unwrap_or(usize::MAX)).cloned().collect())
    }

    /// One random item out of everything [`Catalog::search`] would match (ignoring its limit), or `None`.
    pub fn random(&self, q: impl Into<Search>) -> Result<Option<Item>> {
        let i = self.index(false)?;
        Ok(fastrand::choice(i.find(&q.into())).cloned())
    }

    /// Any item at all.
    pub fn imfeelinglucky(&self) -> Result<Item> {
        let i = self.index(false)?;
        fastrand::choice(&i.items).cloned().ok_or_else(|| "the catalog is empty".into())
    }

    fn index(&self, force: bool) -> Result<Arc<Index>> {
        let fresh = |s: &State| s.at.is_some_and(|t| t.elapsed() < self.ttl);
        if !force {
            let s = read(&self.state);
            if let Some(i) = s.index.as_ref().filter(|_| fresh(&s)) {
                return Ok(i.clone());
            }
        }
        let mut s = write(&self.state);
        if let Some(i) = s.index.as_ref().filter(|_| !force && fresh(&s)) {
            return Ok(i.clone()); // another thread refreshed while this one waited
        }
        match self.fetch(s.index.as_ref().and(s.etag.as_deref())) {
            Ok(Some((index, etag))) => (s.index, s.etag) = (Some(Arc::new(index)), etag),
            Ok(None) => {}
            Err(e) if force || s.index.is_none() => return Err(e),
            Err(_) => {}
        }
        s.at = Some(Instant::now());
        s.index.clone().ok_or_else(|| format!("{} answered 304 to a first fetch", self.url).into())
    }

    /// The new index and its ETag, or `None` on a 304.
    fn fetch(&self, etag: Option<&str>) -> Result<Option<(Index, Option<String>)>> {
        let mut req = self.agent.get(&self.url);
        if let Some(e) = etag {
            req = req.header("If-None-Match", e);
        }
        let mut res = req.call()?;
        if res.status() == 304 {
            return Ok(None);
        }
        let etag = res.headers().get("etag").and_then(|v| v.to_str().ok()).map(str::to_owned);
        let raw: Raw = serde_json::from_reader(res.body_mut().as_reader())?;
        Ok(Some((Index::new(raw.items), etag)))
    }
}

impl Index {
    fn new(items: Vec<Item>) -> Self {
        let by_id = items.iter().enumerate().map(|(n, i)| (i.id.clone(), n)).collect();
        let rows = items
            .iter()
            .map(|i| {
                (i.tags.iter().cloned().collect(), words(&i.description.to_lowercase()).map(str::to_owned).collect())
            })
            .collect();
        Self { items, by_id, rows }
    }

    fn find(&self, q: &Search) -> Vec<&Item> {
        let need: HashSet<String> = q.tags.iter().map(|t| t.to_lowercase()).collect();
        let query = q.query.to_lowercase();
        let terms: Vec<&str> = query
            .split(|c: char| !(c.is_ascii_alphanumeric() || c == '-'))
            .map(|t| t.trim_start_matches('-'))
            .filter(|t| !t.is_empty())
            .collect();
        let mut hits: Vec<(u32, &Item)> = self
            .items
            .iter()
            .zip(&self.rows)
            .filter(|(i, (tags, _))| q.section.as_ref().is_none_or(|s| *s == i.section) && need.is_subset(tags))
            .filter_map(|(i, (tags, words))| {
                let score = terms.iter().map(|t| score(t, tags, words)).sum();
                (score > 0 || terms.is_empty()).then_some((score, i))
            })
            .collect();
        hits.sort_by(|a, b| b.0.cmp(&a.0).then_with(|| a.1.id.cmp(&b.1.id)));
        hits.into_iter().map(|(_, i)| i).collect()
    }
}

fn words(s: &str) -> impl Iterator<Item = &str> {
    s.split(|c: char| !c.is_ascii_alphanumeric()).filter(|w| !w.is_empty())
}

fn score(term: &str, tags: &HashSet<String>, words: &HashSet<String>) -> u32 {
    if tags.contains(term) {
        TAG_EXACT
    } else if tags.iter().any(|t| t.starts_with(term)) {
        TAG_PREFIX
    } else if term.split('-').all(|p| words.contains(p)) {
        // A hyphenated term matches a description that has all its parts.
        DESC_WORD
    } else {
        0
    }
}

fn ranked<'a>(names: impl Iterator<Item = &'a String>) -> Vec<(String, usize)> {
    let mut counts = HashMap::<&str, usize>::new();
    names.for_each(|n| *counts.entry(n).or_default() += 1);
    let mut out: Vec<_> = counts.into_iter().map(|(n, c)| (n.to_owned(), c)).collect();
    out.sort_by(|a, b| b.1.cmp(&a.1).then_with(|| a.0.cmp(&b.0)));
    out
}

fn read(l: &RwLock<State>) -> RwLockReadGuard<'_, State> {
    l.read().unwrap_or_else(|e| e.into_inner())
}

fn write(l: &RwLock<State>) -> RwLockWriteGuard<'_, State> {
    l.write().unwrap_or_else(|e| e.into_inner())
}
