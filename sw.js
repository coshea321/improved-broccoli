// ── Greek PWA Service Worker ──────────────────────────────────────────────────
const CACHE   = 'greek-pwa-v2';
const RUNTIME = 'greek-runtime-v1';

// Core app shell — cached on install
const PRECACHE = [
  './',
  './index.html',
  './manifest.json',
  './app.js',
  './icon.svg',
  './icon-maskable.svg',
];

// CDN assets — cached on first use
const CDN_HOSTS = ['fonts.googleapis.com', 'fonts.gstatic.com', 'unpkg.com'];

// ── Install: pre-cache app shell ──────────────────────────────────────────────
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(PRECACHE))
      .then(() => self.skipWaiting())
  );
});

// ── Activate: clean old caches ────────────────────────────────────────────────
self.addEventListener('activate', event => {
  const current = [CACHE, RUNTIME];
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => !current.includes(k)).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

// ── Fetch: cache strategies ───────────────────────────────────────────────────
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // App shell — cache first
  if (PRECACHE.some(p => event.request.url.endsWith(p.replace('./', '')))) {
    event.respondWith(
      caches.match(event.request).then(r => r || fetch(event.request))
    );
    return;
  }

  // CDN / fonts — stale while revalidate
  if (CDN_HOSTS.includes(url.hostname)) {
    event.respondWith(
      caches.open(RUNTIME).then(cache =>
        cache.match(event.request).then(cached => {
          const network = fetch(event.request).then(res => {
            if (res.ok) cache.put(event.request, res.clone());
            return res;
          }).catch(() => cached); // offline fallback to stale
          return cached || network;
        })
      )
    );
    return;
  }

  // Everything else — network first, cache fallback
  event.respondWith(
    fetch(event.request)
      .then(res => {
        if (res.ok) {
          const clone = res.clone();
          caches.open(RUNTIME).then(c => c.put(event.request, clone));
        }
        return res;
      })
      .catch(() => caches.match(event.request))
  );
});

// ── Background sync placeholder ───────────────────────────────────────────────
self.addEventListener('message', event => {
  if (event.data === 'skipWaiting') self.skipWaiting();
});
