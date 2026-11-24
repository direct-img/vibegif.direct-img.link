# Contributing

Got AI? Use them to make new items or whole new sections, then open a PR to add them to this public domain gallery. Editing or improving existing items is welcome too.

- Each item is one script, `gen/<section>/<subject>/<action>.js`, served as `/<subject>/<action>.webp` and `.gif`
- `npm run gen` renders new scripts into `public/`, `npm run gen -- cat/blink` re-renders one you changed
- `npm run dev` to preview, the site builds with `npm run build` into `dist`
- New section? Add its folder name to `pending` in `vite.config.js`, it shows on `/test` until it moves up into `sections`
- Line 1 of a script is a comment describing it. Optional line 2 is `// tags: happy, calm, balloon`: lowercase, comma-separated, multiword tags hyphenated (`night-sky`), 3-6 tags. Tags are words a client would search for (feelings, themes, objects, motion). The build adds the subject and action (`arcade/blink` gets `arcade, blink`) so don't repeat them, and don't repeat the section name either, every item already has `section`. It writes them to `catalog.json` and `/<subject>/<action>.json` (`{"id","section","description","tags"}`), no tags line means just the subject and action
- Starter tags, reuse these before inventing new ones:
  - emotion: happy, sad, calm, angry, anxious, excited, love, lonely, tired, proud, hopeful, playful
  - theme: animal, food, weather, nature, space, home, travel, music, game, body, celebration
  - motion/style: bounce, float, spin, wave, pulse, slow, fast, gentle, glitch, retro
- Improve items in place rather than renaming them, people hotlink the URLs
- Everything you add is released under [CC0](../LICENSE)
