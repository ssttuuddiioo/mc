const CACHE_NAME = 'mapbox-cache-v1';
const URLS_TO_CACHE = [
  '/',
  '/index.html',
  '/style.css',
  '/main.js',
  'https://api.mapbox.com/mapbox-gl-js/v3.7.0/mapbox-gl.js',
  'https://api.mapbox.com/mapbox-gl-js/v3.7.0/mapbox-gl.css'
];

// URLs that should always be fetched from the network when online, but cached for offline use
const MAPBOX_URL_PATTERNS = [
  /api\.mapbox\.com\/.+\.json/i,
  /api\.mapbox\.com\/.+\/sprite/i,
  /api\.mapbox\.com\/.+\/fonts/i,
  /api\.mapbox\.com\/.+\/tiles/i,
  /api\.mapbox\.com\/.+\.pbf/i,
  /mapbox\:\/\//i
];

self.addEventListener('install', event => {
  console.log('Service Worker: Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: Caching app shell');
        // We will cache the app shell, but not the Mapbox assets initially.
        // They will be cached on-demand as they are requested.
        return cache.addAll(URLS_TO_CACHE);
      })
      .then(() => {
        console.log('Service Worker: Install complete');
        return self.skipWaiting();
      })
  );
});

self.addEventListener('activate', event => {
  console.log('Service Worker: Activating...');
  // Clean up old caches
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log('Service Worker: Clearing old cache', cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => {
        console.log('Service Worker: Activation complete');
        return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', event => {
  const requestUrl = new URL(event.request.url);

  // Check if the request is for a Mapbox asset
  const isMapboxUrl = MAPBOX_URL_PATTERNS.some(pattern => pattern.test(requestUrl.href));

  if (isMapboxUrl) {
    // For Mapbox assets, use a cache-then-network strategy.
    // This ensures that we serve from the cache when offline,
    // but also keep the cache updated when online.
    event.respondWith(
      caches.open(CACHE_NAME).then(cache => {
        return cache.match(event.request).then(response => {
          const fetchPromise = fetch(event.request).then(networkResponse => {
            // If we get a valid response, we clone it and put it in the cache.
            if (networkResponse && networkResponse.status === 200) {
              cache.put(event.request, networkResponse.clone());
            }
            return networkResponse;
          }).catch(err => {
            // This will happen when the user is offline.
            console.log('Service Worker: Fetch failed; returning cached response if available.', err);
          });

          // Return the cached response immediately if it exists,
          // otherwise wait for the network response.
          return response || fetchPromise;
        });
      })
    );
  } else {
    // For all other requests (our app shell), use a cache-first strategy.
    event.respondWith(
      caches.match(event.request)
        .then(response => {
          // Cache hit - return response
          if (response) {
            return response;
          }
          // Not in cache - fetch from network
          return fetch(event.request);
        }
      )
    );
  }
});
