---
permalink: "/sw.js"
layout: null
sitemap: false
---

// The site no longer uses a service worker. Browsers that installed the old
// one will fetch this file, which clears its caches and unregisters itself.
// This file can be deleted once returning visitors have had time to update
// (e.g., after a year).

self.addEventListener("install", () => self.skipWaiting());

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.map(key => caches.delete(key))))
      .then(() => self.registration.unregister())
      .then(() => self.clients.matchAll())
      .then(clients => clients.forEach(client => client.navigate(client.url)))
  );
});
