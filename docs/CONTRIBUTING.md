<p align="center"><img src="https://vibegif.direct-img.link/officechair/spin.webp" width="128" alt="girl spinning in an office chair"></p>

# Contributing

Got AI? Use them to make new items or whole new sections, then open a PR to add them to this public domain gallery. Editing or improving existing items is welcome too.

- Each item is one script, `anims-src/<section>/<subject>/<action>.js`, served as `/<subject>/<action>.webp` and `.gif`
- `npm run gen` renders new scripts into `public/`, `npm run gen -- cat/blink` re-renders one you changed
- `npm run dev` to preview, the site builds with `npm run build` into `dist`, its pages are in `site/`
- New section? Add its folder name to `pending` in `vite.config.js`, it shows on `/test` until it moves up into `sections`
- Line 1 of a script is a comment describing it. Optional line 2 is `// tags: happy, calm, balloon`: lowercase, comma-separated, multiword tags hyphenated (`night-sky`), 3-6 tags. Line 3 under the tags is `// ---`, separating that header from any notes and the code. Tags are words a client would search for (feelings, themes, objects, motion). Don't repeat the subject and action, they're already in the id (`catalog.json` adds them as the first tags, `arcade/blink` gets `arcade, blink`), or the section name, every item already has a section. The build puts the tags in `catalog.txt` as a third column and in `catalog.json` (`{"id","section","description","tags"}`)
- Starter tags, reuse these before inventing new ones:
  - emotion: happy, sad, calm, angry, anxious, excited, love, lonely, tired, proud, hopeful, playful
  - theme: animal, food, weather, nature, space, home, travel, music, game, body, celebration
  - motion/style: bounce, float, spin, wave, pulse, slow, fast, gentle, glitch, retro
- Improve items in place rather than renaming them, people hotlink the URLs
- Everything you add is released under [CC0](../LICENSE)
