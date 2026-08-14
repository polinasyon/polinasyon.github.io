const CACHE_VERSION = 11; // Versiyonu güncelledik
const CACHE_NAME = `polinasyon-static-v${CACHE_VERSION}`;
const DYNAMIC_CACHE = `polinasyon-dynamic-v${CACHE_VERSION}`;

const STATIC_ASSETS = [
  './',
  './index.html',
  './style.css', 
  './manifest.json',
  './ikon.png',
  './bolgeharitasi.js',
  './floraveritabani.js',
  'https://unpkg.com/lucide@latest'
];

// 1. Kurulum (Install) - Dosyaları ve CDN'leri güvenle önbelleğe al
self.addEventListener('install', (event) => {
  self.skipWaiting();
  
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Statik varlıklar önbelleğe alınıyor...');
      return Promise.allSettled(
        STATIC_ASSETS.map(url => {
          return fetch(new Request(url, { cache: 'reload' }))
            .then(response => {
              // DİKKAT: CDN'ler (opaque yanıtlar) için status 0 döner, ok false olur. Bunu unutturmadık!
              if (!response.ok && response.type !== 'opaque') {
                throw new Error(`Hatalı yanıt: ${url}`);
              }
              return cache.put(url, response);
            })
            .catch(err => console.warn('[SW] Önbellek uyarısı (Çevrimdışı olabilir):', url, err));
        })
      );
    })
  );
});

// 2. Aktivasyon (Activate) - Eski önbellekleri temizle ve kontrolü al
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME && cacheName !== DYNAMIC_CACHE) {
            console.log('[SW] Eski önbellek siliniyor:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// 3. İstek Yakalama (Fetch) - Akıllı Çevrimdışı Strateji
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  if (!url.protocol.startsWith('http')) return;

  // API İstekleri: Önce Ağ (Network First), İnternet yoksa Önbellek
  const apiDomains = [
    'api.open-meteo.com',
    'archive-api.open-meteo.com',
    'rss2json',
    'bigdatacloud',
    'geocoding-api.open-meteo.com'
  ];

  if (apiDomains.some(domain => url.hostname.includes(domain))) {
    event.respondWith(
      fetch(request)
        .then((networkResponse) => {
          const resClone = networkResponse.clone();
          caches.open(DYNAMIC_CACHE).then((cache) => cache.put(request, resClone));
          return networkResponse;
        })
        .catch(() => caches.match(request))
    );
    return;
  }

  // Statik Dosyalar: Önce Önbellek (Cache First), Yoksa Ağ
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
            const resClone = networkResponse.clone();
            caches.open(DYNAMIC_CACHE).then((cache) => cache.put(request, resClone));
          }
          return networkResponse;
        })
        .catch(() => {
          // İNTERNET YOKKEN: Sayfa gezintilerinde beyaz ekran yerine index.html sun
          if (request.mode === 'navigate') {
            return caches.match('./index.html') || caches.match('./');
          }
          return new Response('Çevrimdışı', { status: 503, statusText: 'Offline' });
        });
    })
  );
});
