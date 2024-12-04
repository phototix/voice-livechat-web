self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("voice-chat-cache").then((cache) => {
      return cache.addAll([
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
      ]).catch((error) => {
        console.error("Failed to cache resources during install:", error);
        throw error; // Propagate error to trigger failure handling
      });
    })
  );
});