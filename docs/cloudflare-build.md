# Cloudflare build machine

What `npm run build` runs on, measured in a Cloudflare Pages preview build on 2026-10-25. Cloudflare doesn't publish these specs, so they can change without notice.

| | |
|---|---|
| CPU | 4 cores, AMD EPYC |
| Memory | 11.9 GB |
| Node | v22.23.4 |
| sharp / libvips | 0.35.5 / 8.18.7 |

## Caching

A Cache Rule on the direct-img.link zone, `vibegif: cache gif/webp at edge`, keeps every `.gif` and `.webp` in Cloudflare's edge cache for 1 month and tells browsers to keep them for 1 day. Without it Pages makes the edge revalidate every request. HTML isn't covered, so new pages and new items show up as soon as a deploy finishes.

After a deploy that re-renders an existing item, purge the cache (Caching → Configuration → Purge Everything), otherwise the edge keeps serving the old file. Browsers that already have it can show the old version for up to a day.
