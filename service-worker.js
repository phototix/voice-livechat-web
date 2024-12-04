self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("voicechat-cache").then((cache) => {
      return cache.addAll([
        "/",
        "/assets/css/index.css",
        "/assets/scripts/announcement.js",
        "/assets/scripts/app.js",
        "/assets/scripts/loader.js",
        "/assets/scripts/login.js",
        "/manifest.json"
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});