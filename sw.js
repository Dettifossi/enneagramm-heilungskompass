// Selbst-Deregistrierung: behebt defekte Cache-Zustände auf allen Geräten
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => {
  e.waitUntil(
    self.registration.unregister().then(() =>
      self.clients.matchAll({ type: "window" }).then(clients =>
        clients.forEach(c => c.navigate(c.url))
      )
    )
  );
});
