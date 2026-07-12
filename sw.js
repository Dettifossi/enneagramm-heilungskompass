// Kompass Service Worker – Network-First für HTML und JS
// Version wird mit jedem Bundle-Update hochgezählt
const SW_VERSION = 'v351';
const CACHE_NAME = 'kompass-cache-' + SW_VERSION;

self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  // Alle alten Caches löschen
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  const isAppShell = url.pathname === '/' ||
    url.pathname.endsWith('/') ||
    url.pathname.endsWith('index.html') ||
    url.pathname.includes('bundle.js') ||
    url.pathname.includes('app.js');

  if (isAppShell) {
    // Immer vom Netz laden – kein Cache für App-Shell
    event.respondWith(
      fetch(event.request, { cache: 'no-store' })
        .catch(() => caches.match(event.request))
    );
  }
  // Alles andere (Bilder, Fonts, CSS) normal cachen
});
