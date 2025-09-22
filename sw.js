// Service Worker for Offline Functionality with Proper Mapbox 3D Support
const CACHE_VERSION = '1.0.1'; // Increment this to force cache refresh
const STATIC_CACHE = `orbit-demo-static-v${CACHE_VERSION}`;
const MAPBOX_CACHE = `mapbox-v${CACHE_VERSION}`;
const MAPBOX_HOST = 'api.mapbox.com';

// Resources to cache for offline use
const STATIC_RESOURCES = [
  '/',
  '/index.html',
  '/main.js',
  '/style.css',
  '/sw.js',
  '/public/v1.svg',
  '/public/about/team1.jpg',
  '/public/about/team2.jpg',
  '/public/about/slide1.jpg',
  '/public/about/slide2.jpg',
  '/public/about/slide3.jpg',
  '/public/about/slideshow1.jpg',
  '/public/about/slideshow2.jpg',
  '/public/about/slideshow3.jpg',
  '/public/about/slideshow4.webp',
  '/public/about/slideshow5.webp'
];

// External CDN resources to cache
const CDN_RESOURCES = [
  'https://api.mapbox.com/mapbox-gl-js/v3.6.0/mapbox-gl.js',
  'https://api.mapbox.com/mapbox-gl-js/v3.6.0/mapbox-gl.css',
  'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2'
];

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
      
      // Cache CDN resources
      caches.open(STATIC_CACHE).then(cache => {
        console.log('💾 Caching CDN resources...');
        return Promise.allSettled(
          CDN_RESOURCES.map(url => 
            cache.add(url).catch(err => console.log(`⚠️ Failed to cache ${url}:`, err))
          )
        );
      })
    ]).then(() => {
      console.log('✅ Service Worker installed and resources cached');
      self.skipWaiting(); // Activate immediately
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
          if (cacheName !== STATIC_CACHE && cacheName !== MAPBOX_CACHE) {
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

/* General cache-first helper for Mapbox resources */
async function cacheFirst(req, cacheName, limit = 1000) {
  const cache = await caches.open(cacheName);
  const hit = await cache.match(req);
  if (hit) return hit;

  const net = await fetch(req);
  if (net.ok) {
    cache.put(req, net.clone());
    const keys = await cache.keys();
    if (keys.length > limit) cache.delete(keys[0]);
  }
  return net;
}

// Fetch event - proper Mapbox 3D support + Image caching
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Check if this is a Mapbox resource that needs caching
  const mapboxFile =
    url.hostname === MAPBOX_HOST ||
    url.pathname.endsWith('.pbf') ||
    url.pathname.includes('/sprite') ||
    url.pathname.includes('/fonts/') ||
    url.pathname.includes('/styles/');

  if (mapboxFile) {
    event.respondWith(cacheFirst(event.request, MAPBOX_CACHE));
    return;
  }

  // Handle image requests (including Supabase Storage images)
  const isImage = 
    event.request.destination === 'image' ||
    url.pathname.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i) ||
    url.hostname.includes('supabase') && url.pathname.includes('/storage/');

  if (isImage) {
    event.respondWith(cacheFirst(event.request, 'images-v1.0.0', 50));
    return;
  }

  // Handle static resources
  if (url.origin === location.origin) {
    event.respondWith(cacheFirst(event.request, STATIC_CACHE));
    return;
  }

  // Handle Supabase API calls - return empty array when offline
  if (url.hostname.includes('supabase') && url.pathname.includes('/rest/')) {
    event.respondWith(
      fetch(event.request).catch(() => 
        new Response('[]', {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        })
      )
    );
    return;
  }
});

// Handle messages from main thread
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
