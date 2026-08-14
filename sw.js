const CACHE_NAME = 'polinasyon-static-v11'; // Sürümü güncelledik (v10 -> v11)
const DYNAMIC_CACHE = 'polinasyon-dynamic-v11';

const STATIC_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './ikon.png',
  './logo.png',
  './polinasyon.png',
  './polinasyon_logo.png',
  './favicon.ico',
  // Yeni eklenen veri dosyaları:
  './bolgeharitasi.js',
  './floraveritabani.js',
  // Dış kaynaklar
  'https://raw.githubusercontent.com/polinasyon/polinasyon/refs/heads/main/Favicon.ICO',
  'https://cdn.tailwindcss.com',
  'https://unpkg.com/lucide@latest'
];

// Kurulum - Varlıkları önbelleğe al
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Statik varlıklar ve veri dosyaları önbelleğe alınıyor...');
      // mode: 'no-cors' kullanıyoruz ki dış kaynaklar hata verirse SW kurulumu durmasın
      return Promise.allSettled(
        STATIC_ASSETS.map(url => cache.add(new Request(url, { mode: 'no-cors' })))
      );
    })
  );
  self.skipWaiting();
});

// Aktivasyon - Eski cache sürümlerini temizle
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
/ Aktivasyon - Eski cache sürümlerini temizle
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
  // Doğru yazılış şekli (clients.claim()):
  self.clients.claim(); 
});

// Fetch İstek Stratejisi
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Chrome eklentileri veya harici protokolleri işleme alma
  if (!url.protocol.startsWith('http')) {
    return;
  }

  // 1. API İstekleri: Önce Ağ, çevrimdışıysa son önbellekteki veriyi dön
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

  // 2. Statik Dosyalar (Cache-First - Veri dosyalarınız burada otomatik yakalanacak)
  // Eğer fetch başarısız olursa (ağ yoksa), cache'e bakacak
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request).then((networkResponse) => {
        // Gelen yanıtı dinamik cache'e ekle
        if (networkResponse && networkResponse.status === 200) {
           const resClone = networkResponse.clone();
           caches.open(DYNAMIC_CACHE).then((cache) => {
             cache.put(event.request, resClone);
           });
        }
        return networkResponse;
      });
    })
  );
});
