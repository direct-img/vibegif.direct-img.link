# Build

The site is deployed by Cloudflare Pages (project `vibegif`) from this repo, with these settings:

| Setting | Value |
|---|---|
| Production branch | `main`, served at vibegif.direct-img.link and vibegif.pages.dev |
| Preview deployments | every other branch |
| Root directory | repo root |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Build image | v3 (detected Node 22 and npm 10 at the last deploy) |
| Environment variables | none |

On each push Pages clones the repo, runs `npm clean-install`, then `npm run build`, and uploads `dist`.

- `npm run build` is `vite build`. `vite.config.js` fills the gallery and also writes `sitemap.xml`, `catalog.txt`, `catalog.json` and `SKILL.md` into `dist`.
- The renders in `public/` are committed, so the build doesn't run `npm run gen`.
- There's no wrangler config, the settings live in the Pages dashboard under Settings, Build.
- Node isn't pinned, so the build image picks its default. To pin it, set a `NODE_VERSION` environment variable or add a `.node-version` file.
- Pages allows 20,000 files per site on the Free plan (100,000 on paid plans). A build is about 2,600 files now, two per animation (webp and gif).
