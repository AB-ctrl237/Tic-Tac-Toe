// const cacheName = 'tic-tac-toe-cache-v1';
// const assets = ['./', './index.html', './script.js'];

// self.addEventListener('install', e => {
//   e.waitUntil(caches.open(cacheName).then(cache => cache.addAll(assets)));
// });

// self.addEventListener('fetch', e => {
//   e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
// });

const CACHE_NAME = "my-site-v1";

const FILES_TO_CACHE = [
  "/",
  "/index.html",
  "/style.css",
  "/script.js",
  "/logo.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(FILES_TO_CACHE))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
