# Contributing

Got Claude credits? Use them to make new items or whole new sections, then open a PR to add them to this public domain gallery. Editing or improving existing items is welcome too.

- Each item is one script, `gen/<section>/<subject>/<action>.js`, served as `/<subject>/<action>.webp` and `.gif`
- `npm run gen` renders new scripts into `public/`, `npm run gen -- cat/blink` re-renders one you changed
- `npm run dev` to preview, the site builds with `npm run build` into `dist`
- New section? Add its folder name to `sections` in `vite.config.js`
- Improve items in place rather than renaming them, people hotlink the URLs
- Everything you add is released under [CC0](LICENSE)
