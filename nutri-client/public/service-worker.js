const CACHE_STATIC_NAME = 'static-v10';
const STATIC_FILES = [
    '/',
    '/index.html'
];

self.addEventListener('install', function (event) {
    // console.log('[Service Workers][Install Event] Step 1 -> Listening');
    event.waitUntil(
        caches.open(CACHE_STATIC_NAME)
            .then(function (cache) {
                // console.log('[Service Workers][Install Event] Step 2 ->  CACHING static files!');
                cache.addAll(STATIC_FILES);
            })
    )
});

// self.addEventListener('activate', event => { console.log('activate') })

// self.addEventListener('fetch', event => { console.log('Fetching') })

self.addEventListener('push', event => {
    console.log('push notification heard!')
})



