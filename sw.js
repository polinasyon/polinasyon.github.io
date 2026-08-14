const CACHE_VERSION = 3; // her önemli güncellemede +1
const CACHE_NAME = `polinasyon-static-v${CACHE_VERSION}`;
const DYNAMIC_CACHE = `polinasyon-dynamic-v${CACHE_VERSION}`;

const STATIC_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './ikon.png',
  './bolgeharitasi.js',
  './floraveritabani.js',
  'https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4',
  'https://unpkg.com/lucide@0.469.0'
];

// 1. Kurulum
self.addEventListener('install', (event) => {
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Statik varlıklar önbelleğe alınıyor...');
      return Promise.allSettled(
        STATIC_ASSETS.map((url) =>
          fetch(new Request(url, { cache: 'reload' }))
            .then((response) => {
              if (!response.ok && response.type !== 'opaque') {
                throw new Error(`Hatalı yanıt: ${url}`);
              }
              return cache.put(url, response);
            })
            .catch((err) => console.warn('[SW] Önbellek uyarısı:', url, err))
        )
      );
    })
  );
});

// 2. Aktivasyon — eski cache'leri sil
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME && name !== DYNAMIC_CACHE)
          .map((name) => {
            console.log('[SW] Eski önbellek siliniyor:', name);
            return caches.delete(name);
          })
      )
    ).then(() => self.clients.claim())
  );
});

// 3. Fetch
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  if (!url.protocol.startsWith('http')) return;

  // API: Network First
  const apiDomains = [
    'api.open-meteo.com',
    'archive-api.open-meteo.com',
    'rss2json',
    'bigdatacloud',
    'geocoding-api.open-meteo.com'
  ];

  if (apiDomains.some((domain) => url.hostname.includes(domain))) {
    event.respondWith(
      fetch(request)
        .then((networkResponse) => {
          const clone = networkResponse.clone();
          caches.open(DYNAMIC_CACHE).then((cache) => cache.put(request, clone));
          return networkResponse;
        })
        .catch(() => caches.match(request))
    );
    return;
  }

  // App shell (HTML + kritik JS): Stale-While-Revalidate
  const isAppShell =
    request.mode === 'navigate' ||
    url.pathname.endsWith('/') ||
    url.pathname.endsWith('index.html') ||
    url.pathname.endsWith('floraveritabani.js') ||
    url.pathname.endsWith('bolgeharitasi.js');

  if (isAppShell) {
    event.respondWith(
      caches.open(CACHE_NAME).then(async (cache) => {
        const cached = await cache.match(request);
        const networkPromise = fetch(request)
          .then((response) => {
            if (response && response.ok) {
              cache.put(request, response.clone());
            }
            return response;
          })
          .catch(() => null);

        return (
          cached ||
          (await networkPromise) ||
          caches.match('./index.html') ||
          caches.match('./')
        );
      })
    );
    return;
  }

  // Diğer statik: Cache First
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) return cachedResponse;

      return fetch(request)
        .then((networkResponse) => {
          if (
            networkResponse &&
            networkResponse.status === 200 &&
            networkResponse.type === 'basic'
          ) {
            const clone = networkResponse.clone();
            caches.open(DYNAMIC_CACHE).then((cache) => cache.put(request, clone));
          }
          return networkResponse;
        })
        .catch(() => {
          if (request.mode === 'navigate') {
            return caches.match('./index.html') || caches.match('./');
          }
          return new Response('Çevrimdışı', {
            status: 503,
            statusText: 'Offline'
          });
        });
    })
  );
});
