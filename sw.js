// AIADMK Gummidipoondi - PWA Service Worker v2
// Enables "Add to Home Screen" installation while always fetching fresh content from network

const CACHE_NAME = 'aiadmk-gpd-v3';
const STATIC_ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.json',
  './assets/app-logo.png',
  './assets/logo.png',
  './assets/favicon.png',
  './assets/flag.png',
  './assets/icon-48.png',
  './assets/icon-96.png',
  './assets/icon-144.png',
  './assets/icon-180.png',
  './assets/icon-192.png',
  './assets/icon-512.png',
  './assets/icon-512.jpg',
  './assets/hero_banner.jpg',
  './assets/card_bg_v7.jpg',
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
  console.log('[SW] Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(STATIC_ASSETS);
    }).catch(err => {
      console.warn('[SW] Failed to cache some assets:', err);
    })
  );
  self.skipWaiting();
});

// Activate: delete old caches from v1 or any other legacy cache
self.addEventListener('activate', event => {
  console.log('[SW] Activating...');
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => {
          console.log('[SW] Deleting old cache:', key);
          return caches.delete(key);
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch: Network-first for HTML and JS (always fresh), Cache-first for images and CSS
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  
  const url = new URL(event.request.url);
  
  // Skip non-local requests (Supabase, CDN fonts, etc.)
  if (url.origin !== location.origin) return;
  
  const isHtmlOrJs = url.pathname.endsWith('.html') || 
                     url.pathname.endsWith('.js') || 
                     url.pathname === '/' ||
                     url.pathname === '/index.html';
  
  if (isHtmlOrJs) {
    // Network-first: always get fresh HTML/JS, fallback to cache
    event.respondWith(
      fetch(event.request).then(response => {
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => {
        return caches.match(event.request);
      })
    );
  } else {
    // Cache-first for static assets (images, CSS, fonts)
    event.respondWith(
      caches.match(event.request).then(cached => {
        return cached || fetch(event.request).then(response => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          }
          return response;
        });
      })
    );
  }
});
