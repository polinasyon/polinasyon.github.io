const CACHE_NAME = 'polinasyon-static-v9';
const DYNAMIC_CACHE = 'polinasyon-dynamic-v9';

const STATIC_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './ikon.png',
  './bolgeharitasi.js',
  './floraveritabani.js',
  'https://cdn.tailwindcss.com',
  'https://unpkg.com/lucide@latest'
];

// Kurulum
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Statik varlıklar önbelleğe alınıyor...');
      return Promise.allSettled(
        STATIC_ASSETS.map(url => cache.add(new Request(url, { mode: 'no-cors' })))
      );
    })
  );
  self.skipWaiting();
});

// Aktivasyon - Eski cache'leri temizle
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME && key !== DYNAMIC_CACHE) {
            console.log('[SW] Eski cache siliniyor:', key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch stratejisi
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  if (!url.protocol.startsWith('http')) return;

  // API istekleri - Network first
  if (
    url.hostname.includes('api.open-meteo.com') ||
    url.hostname.includes('archive-api.open-meteo.com') ||
    url.hostname.includes('rss2json') ||
    url.hostname.includes('bigdatacloud') ||
    url.hostname.includes('geocoding-api.open-meteo.com')
  ) {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          const resClone = networkResponse.clone();
          caches.open(DYNAMIC_CACHE).then((cache) => {
            cache.put(event.request, resClone);
          });
          return networkResponse;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // Statik dosyalar - Cache first
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const resClone = networkResponse.clone();
          caches.open(DYNAMIC_CACHE).then((cache) => {
            cache.put(event.request, resClone);
          });
        }
        return networkResponse;
      }).catch(() => {
        return new Response('Çevrimdışı', { status: 503 });
      });
    })
  );
});
