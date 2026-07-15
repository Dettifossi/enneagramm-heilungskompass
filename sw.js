// Kompass Service Worker – iOS-kompatibler Auto-Reload
const SW_VERSION = 'v371';
const BUNDLE_VERSION = 'v489'; // wird bei jedem Deploy mitaktualisiert → löst Auto-Reload aus
const CACHE_NAME = 'kompass-cache-' + SW_VERSION;

self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
      .then(() =>
        // postMessage statt clients.navigate() – iOS-kompatibel
        self.clients.matchAll({ type: 'window' }).then(clients =>
          clients.forEach(c => c.postMessage({ type: 'SW_UPDATED' }))
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
    event.respondWith(
      fetch(event.request, { cache: 'no-store' })
        .catch(() => caches.match(event.request))
    );
  }
});
