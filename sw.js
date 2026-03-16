const CACHE_NAME = 'stickers-v1';
const ASSETS = [
  './index.html',
  './manifest.json',
  // додай сюди назви своїх .css чи .js файлів, якщо вони окремі
];

// Кешуємо ресурси при встановленні
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Віддаємо ресурси з кешу навіть офлайн
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
