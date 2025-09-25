// Enhanced Service Worker for Complete Offline Support
const CACHE_VERSION = '001'; // Match with version.json
const STATIC_CACHE = `orbit-static-v${CACHE_VERSION}`;
const MAPBOX_CACHE = `mapbox-v${CACHE_VERSION}`;
const API_CACHE = `api-v${CACHE_VERSION}`;
const IMAGE_CACHE = `images-v${CACHE_VERSION}`;
const FONT_CACHE = `fonts-v${CACHE_VERSION}`;
const MAPBOX_HOST = 'api.mapbox.com';

// Cache strategies
const CACHE_STRATEGIES = {
  CACHE_FIRST: 'cache-first',
  NETWORK_FIRST: 'network-first',
  STALE_WHILE_REVALIDATE: 'stale-while-revalidate',
  NETWORK_ONLY: 'network-only'
};

// Core resources that must be cached for the app to work offline
const CORE_RESOURCES = [
  '/',
  '/index.html',
  '/main.js',
  '/style.css',
  '/sw.js',
  '/version.json',
  '/version-check.js'
];

// Static resources to cache
const STATIC_RESOURCES = [
  ...CORE_RESOURCES,
  '/public/v.svg',
  '/public/v1.svg',
  '/public/vector2.svg',
  '/public/map.png',
  '/public/about/team1.jpg',
  '/public/about/team2.jpg',
  '/public/about/slide1.jpg',
  '/public/about/slide2.jpg',
  '/public/about/slide3.jpg',
  '/public/about/slideshow1.jpg',
  '/public/about/slideshow2.jpg',
  '/public/about/slideshow3.jpg',
  '/public/about/slideshow4.webp',
  '/public/about/slideshow5.webp',
  '/public/circles.fbx',
  '/public/tubes.fbx'
];

// Font resources to cache
const FONT_RESOURCES = [
  '/public/fonts/MichiganCentralMonumentGrotesk-Bold.otf',
  '/public/fonts/MichiganCentralMonumentGrotesk-BoldItalic.otf',
  '/public/fonts/MichiganCentralMonumentGrotesk-Light.otf',
  '/public/fonts/MichiganCentralMonumentGrotesk-LightItalic.otf',
  '/public/fonts/MichiganCentralMonumentGrotesk-Medium.otf',
  '/public/fonts/MichiganCentralMonumentGrotesk-MediumItalic.otf',
  '/public/fonts/MichiganCentralMonumentGrotesk-Regular.otf',
  '/public/fonts/MichiganCentralMonumentGrotesk-RegularItalic.otf'
];

// External CDN resources to cache
const CDN_RESOURCES = [
  'https://api.mapbox.com/mapbox-gl-js/v3.7.0/mapbox-gl.js',
  'https://api.mapbox.com/mapbox-gl-js/v3.7.0/mapbox-gl.css',
  'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2'
];

// Mapbox style resources to pre-cache
const MAPBOX_STYLE_URL = 'https://api.mapbox.com/styles/v1/ssttuuddiioo/cmdxew05b001901ry34gb69wy?access_token=pk.eyJ1Ijoic3N0dHV1ZGRpaW9vIiwiYSI6ImNtZHhlc2hsNjI1MWQyaXB0ZnU3NzE0ejMifQ.bxWkQ9zjw_a9C3cHag86Rg';

// Install event - cache resources
self.addEventListener('install', event => {
  console.log('🔧 Service Worker installing...');
  
  event.waitUntil(
    Promise.all([
      // Cache static resources
      caches.open(STATIC_CACHE).then(cache => {
        console.log('💾 Caching static resources...');
        return cache.addAll(STATIC_RESOURCES);
      }),
      
      // Cache font resources
      caches.open(FONT_CACHE).then(cache => {
        console.log('💾 Caching font resources...');
        return cache.addAll(FONT_RESOURCES);
      }),
      
      // Cache CDN resources
      caches.open(STATIC_CACHE).then(cache => {
        console.log('💾 Caching CDN resources...');
        return Promise.allSettled(
          CDN_RESOURCES.map(url => 
            cache.add(url).catch(err => console.log(`⚠️ Failed to cache ${url}:`, err))
          )
        );
      }),
      
      // Pre-cache Mapbox style
      caches.open(MAPBOX_CACHE).then(cache => {
        console.log('💾 Pre-caching Mapbox style...');
        return fetch(MAPBOX_STYLE_URL)
          .then(response => {
            if (response.ok) {
              cache.put(MAPBOX_STYLE_URL, response);
              console.log('✅ Mapbox style cached successfully');
            }
          })
          .catch(err => console.log('⚠️ Failed to cache Mapbox style:', err));
      })
    ]).then(() => {
      console.log('✅ Service Worker installed and resources cached');
      return self.skipWaiting(); // Activate immediately
    })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.log('🚀 Service Worker activating...');
  
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          // Only keep current version caches
          if (
            !cacheName.includes(CACHE_VERSION) && 
            !cacheName.endsWith('-v1.0.0') // Keep legacy caches for compatibility
          ) {
            console.log('🗑️ Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('✅ Service Worker activated');
      return self.clients.claim(); // Take control immediately
    })
  );
});

/* Enhanced Caching Strategies */

// Cache-first strategy - for static assets
async function cacheFirst(req, cacheName, limit = 1000) {
  const cache = await caches.open(cacheName);
  const hit = await cache.match(req);
  if (hit) return hit;

  try {
    const net = await fetch(req);
    if (net.ok) {
      cache.put(req, net.clone());
      const keys = await cache.keys();
      if (keys.length > limit) cache.delete(keys[0]);
    }
    return net;
  } catch (error) {
    console.error('Cache-first fetch failed:', error);
    return new Response('Offline', { status: 503 });
  }
}

// Network-first strategy - for API calls
async function networkFirst(req, cacheName, limit = 100) {
  const cache = await caches.open(cacheName);
  
  try {
    const net = await fetch(req);
    if (net.ok) {
      cache.put(req, net.clone());
      const keys = await cache.keys();
      if (keys.length > limit) cache.delete(keys[0]);
    }
    return net;
  } catch (error) {
    console.log('Network failed, trying cache:', error);
    const hit = await cache.match(req);
    if (hit) return hit;
    
    // For API calls, return empty data when offline
    if (req.url.includes('/rest/v1/') || req.url.includes('/api/')) {
      return new Response('[]', {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    return new Response('Offline', { status: 503 });
  }
}

// Stale-while-revalidate strategy - for frequently updated content
async function staleWhileRevalidate(req, cacheName, limit = 500) {
  const cache = await caches.open(cacheName);
  const hit = await cache.match(req);
  
  // Start fetch in background
  const fetchPromise = fetch(req).then(net => {
    if (net.ok) {
      cache.put(req, net.clone());
      cache.keys().then(keys => {
        if (keys.length > limit) cache.delete(keys[0]);
      });
    }
    return net;
  }).catch(error => {
    console.error('Background fetch failed:', error);
  });
  
  // Return cached version immediately if available
  return hit || fetchPromise;
}

// Error handling wrapper
async function handleRequest(req, strategy, cacheName, limit) {
  try {
    switch (strategy) {
      case CACHE_STRATEGIES.CACHE_FIRST:
        return await cacheFirst(req, cacheName, limit);
      case CACHE_STRATEGIES.NETWORK_FIRST:
        return await networkFirst(req, cacheName, limit);
      case CACHE_STRATEGIES.STALE_WHILE_REVALIDATE:
        return await staleWhileRevalidate(req, cacheName, limit);
      case CACHE_STRATEGIES.NETWORK_ONLY:
        return await fetch(req);
      default:
        return await cacheFirst(req, cacheName, limit);
    }
  } catch (error) {
    console.error('Request handling failed:', error);
    return new Response('Service Unavailable', { status: 503 });
  }
}

// Enhanced Fetch Event Handler
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  const request = event.request;

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Handle Mapbox resources with cache-first strategy
  const isMapboxResource = 
    url.hostname === MAPBOX_HOST ||
    url.pathname.endsWith('.pbf') ||
    url.pathname.includes('/sprite') ||
    url.pathname.includes('/fonts/') ||
    url.pathname.includes('/styles/');

  if (isMapboxResource) {
    event.respondWith(
      handleRequest(request, CACHE_STRATEGIES.CACHE_FIRST, MAPBOX_CACHE, 2000)
    );
    return;
  }

  // Handle images with stale-while-revalidate strategy
  const isImage = 
    request.destination === 'image' ||
    url.pathname.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i) ||
    url.hostname.includes('supabase') && url.pathname.includes('/storage/');

  if (isImage) {
    event.respondWith(
      handleRequest(request, CACHE_STRATEGIES.STALE_WHILE_REVALIDATE, IMAGE_CACHE, 200)
    );
    return;
  }

  // Handle font files with cache-first
  const isFont = 
    request.destination === 'font' ||
    url.pathname.match(/\.(woff|woff2|ttf|otf|eot)$/i);

  if (isFont) {
    event.respondWith(
      handleRequest(request, CACHE_STRATEGIES.CACHE_FIRST, FONT_CACHE, 50)
    );
    return;
  }

  // Handle static resources with version checking
  if (url.origin === location.origin) {
    // For versioned files, check version parameter
    if (url.pathname.includes('main.js') || url.pathname.includes('style.css')) {
      const version = url.searchParams.get('v');
      if (version === CACHE_VERSION || !version) {
        event.respondWith(
          handleRequest(request, CACHE_STRATEGIES.CACHE_FIRST, STATIC_CACHE, 1000)
        );
      } else {
        // Different version - fetch fresh and don't cache
        event.respondWith(fetch(request));
      }
    } else {
      event.respondWith(
        handleRequest(request, CACHE_STRATEGIES.CACHE_FIRST, STATIC_CACHE, 1000)
      );
    }
    return;
  }

  // Handle API calls with network-first strategy
  const isApiCall = 
    url.hostname.includes('supabase') && url.pathname.includes('/rest/') ||
    url.hostname.includes('api.') ||
    url.pathname.includes('/api/');

  if (isApiCall) {
    event.respondWith(
      handleRequest(request, CACHE_STRATEGIES.NETWORK_FIRST, API_CACHE, 100)
    );
    return;
  }

  // Default: cache-first for external resources
  event.respondWith(
    handleRequest(request, CACHE_STRATEGIES.CACHE_FIRST, STATIC_CACHE, 500)
  );
});

// Handle messages from main thread
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  // Handle cache invalidation message
  if (event.data && event.data.type === 'CLEAR_CACHES') {
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          console.log('🗑️ Clearing cache by request:', cacheName);
          return caches.delete(cacheName);
        })
      );
    }).then(() => {
      // Notify the client that caches were cleared
      event.source.postMessage({
        type: 'CACHES_CLEARED',
        timestamp: Date.now()
      });
    });
  }
});