const cacheName = 'cache-v1.0';
const cacheAssets = [
  'offline',
];

// Call install event 
self.addEventListener('install', (e) => {
  console.log('[sw] installed');
  e.waitUntil(
    caches
      .open(cacheName)
      .then(cache => {
        console.log('[sw] predefined files cached');
        cache.addAll(cacheAssets);
      })
      .then(() => self.skipWaiting())
  );
});

// Call activate event
self.addEventListener('activate', (e) => {
  console.log('[sw] activated');
  // Remove unwanted caches
  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== cacheName) {
            console.log('[sw] old cache cleared');
            return caches.delete(cache);
          }
        })
      )
    })
  );
});


addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          console.log('[sw] fetched from cache');
          return response; // if valid response is found in cache return it
        } else {
          return fetch(event.request) //fetch from internet
            .then((res) => caches.open(cacheName)
              .then((cache) => {
                // file types allowed in cache
                const filesType = ['.js', '.css', '.jpg', '.png', '.ico', '.mp4', '.gif'];
                filesType.map((type) => {
                  if (event.request.url.includes(type)) {
                    if (
                      // routes disallowed in cache
                      !event.request.url.includes('/coins') &&
                      !event.request.url.includes('/pricing') &&
                      !event.request.url.includes('/201184asdqwe')
                    ) {
                      cache.put(event.request.url, res.clone()); //save the response for future
                    }
                  }
                })
                console.log('[sw] fetched from network');
                return res;
              }))
            .catch((err) => {
              console.log('[sw]' + err);
              // If both fail, show a generic fallback:
              return caches.match('offline.php');
            });
        }
      })
  );
});        