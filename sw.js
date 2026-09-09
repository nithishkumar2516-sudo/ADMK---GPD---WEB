// AIADMK GPD - Service Worker for PWA offline support
const CACHE_NAME = 'aiadmk-gpd-v1';
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.json',
  './assets/flag.png',
  './assets/icon-512.jpg',
  './assets/card_bg_v7.jpg',
  './assets/hero_banner.jpg',
  './assets/leader_balaraman.jpg',
  './assets/leader_vijayakumar.jpg',
  './assets/leader_sridhar.jpg',
  './assets/leader_ramesh.jpg',
  './assets/leader_mahendran.jpg',
  './assets/leader_sivakumar.jpg',
  './assets/leader_kothandan.jpg',
  './assets/leader_vedhagiri.jpg',
  './assets/leader_prasad.jpg',
  './assets/leader_placeholder.svg'
];

// Install: cache all static assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate: clear old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch: serve from cache, fallback to network
self.addEventListener('fetch', event => {
  // Skip non-GET and external requests (Supabase, CDN fonts, etc.)
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== location.origin) return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      return cached || fetch(event.request).then(response => {
        // Cache new local files on the fly
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      });
    })
  );
});
