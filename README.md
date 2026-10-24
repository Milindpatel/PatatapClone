# Circles – a Patatap clone

Press a letter key and a colored circle appears with a sound, then shrinks away while cycling through colors. Inspired by [Patatap](https://patatap.com/). Built with [Paper.js](http://paperjs.org/) and [Howler.js](https://howlerjs.com/).

![CI](https://github.com/Milindpatel/PatatapClone/actions/workflows/ci.yml/badge.svg)

## Play

Serve the folder over HTTP (browsers block loading the sounds from `file://`):

```bash
npx serve .        # then open the printed URL
```

- Keys **A–Z** each have their own sound and color (Caps Lock works too).
- On a phone or tablet, tap the screen to play a random sound.

To publish it, enable **Settings → Pages → Deploy from a branch** (`master`, root); `index.html` is the entry page.

## Files

```
index.html               the app (PaperScript inline)
circles.css              full-screen black canvas
js/                      Paper.js 0.16 and Howler.js 2.2 (vendored, with licenses)
sounds/                  26 MP3 samples
scripts/check-assets.mjs CI check that every referenced file exists
```
