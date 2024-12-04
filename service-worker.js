self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("voice-chat-cache").then((cache) => {
      return cache.addAll([
        "/",
        "/index.html",
        "/explore.html",
        "/login.html",
        "/room.html",
        "/assets/css/index.css",
        "/script/announcement.js",
        "/script/app.js",
        "/script/loader.js",
        "/script/login.js",
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