const CACHE_VERSION = 10; // Güncelleme tetiklemek için versiyonu artırdık
const CACHE_NAME = `polinasyon-static-v${CACHE_VERSION}`;
const DYNAMIC_CACHE = `polinasyon-dynamic-v${CACHE_VERSION}`;

// Tailwind CDN yerine yeni derlediğimiz ./style.css eklendi
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

// 1. Kurulum (Install) - Dosyaları güvenli bir şekilde önbelleğe al
self.addEventListener('install', (event) => {
  self.skipWaiting(); // Yeni SW'nin beklemeden hemen devreye girmesini sağlar
  
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Statik varlıklar önbelleğe alınıyor...');
      // addAll yerine güvenli map() ile hatalı linklerin tüm kurulumu bozmasını engelliyoruz
      return Promise.all(
        STATIC_ASSETS.map(url => {
          return fetch(new Request(url, { cache: 'reload' }))
            .then(response => {
              if (!response.ok) throw new Error(`Hatalı yanıt: ${url}`);
              return cache.put(url, response);
            })
            .catch(err => console.warn('[SW] Önbellek uyarısı:', url, err));
        })
      );
    })
  );
});

// 2. Aktivasyon (Activate) - Eski versiyon önbellekleri temizle
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
  self.clients.claim(); // Kontrolü anında ele al
});

// 3. İstek Yakalama (Fetch) - Offline öncelikli ve ağ fallback stratejisi
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Sadece HTTP/HTTPS isteklerini işle (chrome-extension vb. dışla)
  if (!url.protocol.startsWith('http')) return;

  // API İstekleri: Önce Ağ (Network First), Çökerse Önbellek
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

  // Statik Dosyalar ve Diğerleri: Önce Önbellek (Cache First), Yoksa Ağ
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse; // Önbellekte varsa anında hızlıca yükle
      }

      return fetch(request)
        .then((networkResponse) => {
          // Gelen yanıt geçerliyse dinamik önbelleğe kaydet
          if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
            const resClone = networkResponse.clone();
            caches.open(DYNAMIC_CACHE).then((cache) => cache.put(request, resClone));
          }
          return networkResponse;
        })
        .catch(() => {
          // İNTERNET YOKKEN: Eğer kullanıcı sayfa yeniliyorsa veya gezinmeye çalışıyorsa beyaz ekran verme
          if (request.mode === 'navigate' || request.headers.get('accept').includes('text/html')) {
            return caches.match('./index.html');
          }
          // Sayfa değilse (örneğin kayıp bir resim) uygun bir yanıt dönülebilir
          return new Response('Çevrimdışı', { status: 503, statusText: 'Offline' });
        });
    })
  );
});
