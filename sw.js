// Service Worker for offline functionality
const CACHE_NAME = 'pulse-fitness-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/images/fitness/fit1.jpg',
  '/images/fitness/fit 2.jpg',
  '/images/fitness/fit 3.jpg',
  '/images/fitness/fit 4.jpg',
  '/images/fitness/fit 5.jpg',
  '/images/boxing/box1.jpg',
  '/images/boxing/box 2.jpg',
  '/images/boxing/box 3.jpg',
  '/images/boxing/box 4.jpg',
  '/images/boxing/box 5.jpg',
  '/images/yoga/yoga1.jpg',
  '/images/yoga/yoga2.webp',
  '/images/yoga/yoga 3.jpg',
  '/images/yoga/yoga4.jpg',
  '/images/yoga/yoga5.jpg'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
