const CACHE_NAME = "disastershield-cache-v1";

const urlsToCache = [
  "/DisasterShield-App/",
  "/DisasterShield-App/index.html",
  "/DisasterShield-App/manifest.json",
  "/DisasterShield-App/icon-192.png",
  "/DisasterShield-App/icon-512.png",
  "/DisasterShield-App/style.css",
  "/DisasterShield-App/script.js",
  // Add more assets if needed
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
