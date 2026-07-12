// Kompass Service Worker – Network-First + Auto-Reload bei Update
const SW_VERSION = 'v352';
const CACHE_NAME = 'kompass-cache-' + SW_VERSION;

self.addEventListener('install', event => {
  self.skipWaiting(); // Neuer SW übernimmt sofort, wartet nicht
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
      .then(() =>
        // Alle offenen Tabs/PWA-Fenster neu laden – Nutzer sieht aktuellen Stand
        self.clients.matchAll({ type: 'window' }).then(clients =>
          clients.forEach(c => c.navigate(c.url))
        )
      )
  );
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  const isAppShell =
    url.pathname === '/' ||
    url.pathname.endsWith('/') ||
    url.pathname.endsWith('index.html') ||
    url.pathname.includes('bundle.js') ||
    url.pathname.includes('app.js');

  if (isAppShell) {
    // App-Shell immer vom Netz – nie aus Cache
    event.respondWith(
      fetch(event.request, { cache: 'no-store' })
        .catch(() => caches.match(event.request))
    );
  }
});
