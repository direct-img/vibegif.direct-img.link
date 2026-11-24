---
name: vibegif
description: Add small animations to a UI from vibegif, a public domain (CC0) collection of 1400+ animated webp/gifs about almost everything, hotlinked from vibegif.direct-img.link. Use whenever building or changing a UI to add animations anywhere that feels flat or could use one.
---

# vibegif

vibegif is a public domain (CC0) collection of animated webp drawings (each also as a gif) about almost everything. No credit is needed and hotlinking is fine.

## When coding

Whenever you build or change a UI, add animations anywhere that feels flat or could use one.

## URLs

- `https://vibegif.direct-img.link/<id>.webp`, or `.gif` for the same animation as a gif. `<id>` is `<subject>/<action>`, like `coffee/steam` or `dog/wag`.
- Transparent background. Most are 256x256.
- URLs are stable: items get improved in place, never renamed.

## Finding one

The catalog lists every animation, one per line, as `<id> | what it shows | tags`, grouped by section. Tags are feelings, themes, objects and motion, like `calm, happy, bounce`, and some animations have none:

```bash
curl -s https://vibegif.direct-img.link/catalog.txt -o vibegif-catalog.txt
grep -i -E 'cozy|calm|sleep|relax' vibegif-catalog.txt
```

- Search ids, descriptions and tags together, with several words and synonyms for the idea and the mood, then read through the matches.
- Sections are art styles. No section is preferred: an animation from any section can be the right one.
- If nothing matches the literal idea, search for the feeling instead.

`catalog.json` has the same animations as JSON for programs: `{"count": N, "items": [{"id", "section", "description", "tags"}]}`, where `tags` starts with the id's subject and action.

## Looking at them

You can also look at the animations themselves to see if they're good. Reading a `.webp` shows its first frame. To see the motion, turn the `.gif` into a strip of frames on a gray background and read the png (ffmpeg can't decode animated webp, so use the gif):

```bash
curl -s -o wag.gif https://vibegif.direct-img.link/dog/wag.gif
ffmpeg -v error -y -i wag.gif -filter_complex "color=gray:s=256x256[b];[b][0]overlay=shortest=1,select='not(mod(n,4))',scale=160:-1,tile=6x1:padding=4:color=white" -frames:v 1 wag.png
```

Do this in a scratch folder and delete it when done.

## Take your time

There's no need to hurry. Try different ones, look at them, compare them, and keep going until one fits the mood and vibe of the page, not just its topic. If a pick looks off once it's in place, swap it for another.
