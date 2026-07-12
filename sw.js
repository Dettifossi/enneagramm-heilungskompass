const CACHE = "kompass-v11";
const PRECACHE = ["./", "./index.html", "./styles.css", "./bundle.js", "./manifest.json", "./offline.html"];

self.addEventListener("install", e => {
  // Sofort übernehmen – kein Warten auf vollständiges Precaching
  self.skipWaiting();
  // Precache im Hintergrund (Fehler werden ignoriert, damit der SW nicht scheitert)
  e.waitUntil(
    caches.open(CACHE).then(c =>
      Promise.allSettled(PRECACHE.map(url => c.add(url).catch(() => {})))
    )
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const url = e.request.url;
  // Network-first für HTML, JS und CSS – damit Updates sofort ankommen
  if (e.request.mode === "navigate" ||
      url.includes("bundle.js") ||
      url.includes("styles.css")) {
    e.respondWith(
      fetch(e.request).then(res => {
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
        return res;
      }).catch(() => caches.match(e.request).then(r => r || caches.match("./offline.html")))
    );
    return;
  }
  // Bilder und andere Assets: cache-first
  e.respondWith(
    caches.match(e.request).then(cached => {
      const net = fetch(e.request).then(res => {
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
        return res;
      });
      return cached || net;
    })
  );
});
