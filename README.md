# Ελληνικά — Greek App (Aphantasia & SDAM Edition)

## What's in this package

```
index.html          Main app
app.js              Pre-compiled React app (~88KB, no Babel needed)
manifest.json       PWA manifest
sw.js               Service worker (offline caching)
icon.svg            App icon (any size)
icon-maskable.svg   Maskable icon (for Android home screen)
README.md           This file
```

## Running the app

**The app MUST be served over HTTP(S) — double-clicking index.html won't work for the PWA features.**

### Option A: Local server (simplest)
```bash
# Python (usually pre-installed)
python3 -m http.server 8000
# Then open: http://localhost:8000
```

### Option B: Node
```bash
npx serve .
# or
npx http-server .
```

### Option C: Deploy (free options)
- **Netlify**: drag the folder onto netlify.com/drop — live in 10 seconds
- **GitHub Pages**: push the folder to a GitHub repo, enable Pages
- **Cloudflare Pages**: connect a GitHub repo
- **Vercel**: `npx vercel` in the folder

## Installing as a PWA

Once served over HTTPS:
1. **Desktop Chrome/Edge**: look for the install icon (⊕) in the address bar
2. **Android Chrome**: the install banner appears automatically, or use the browser menu → "Add to home screen"
3. **iOS Safari**: tap the share icon → "Add to Home Screen"

Once installed:
- Runs in standalone mode (no browser chrome)
- Works fully offline
- Appears in your app launcher like a native app

## Offline behaviour

The service worker caches:
- All app files on first visit
- React/ReactDOM from CDN (after first load)
- Google Fonts (after first load)

After first visit over a connection, the app runs completely offline.

## Updating the app

When you redeploy changed files, update the cache name in `sw.js`:
```js
const CACHE = 'greek-pwa-v2'; // increment version
```
Users will see an "Update available" toast and can reload.

## App features

- **24 alphabet letters** with IPA + phonetic descriptions + English cognates
- **46 vocabulary words** across 9 semantic fields, filterable
- **5 grammar patterns** as logical rule systems with tables
- **Practice mode** with category filtering + spaced repetition
- All designed for **aphantasia** (no visualization mnemonics) and **SDAM** (semantic anchors, not episodic hooks)
