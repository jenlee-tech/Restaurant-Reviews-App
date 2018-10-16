/**File for the Service Worker*/

/*files to be cached*/
const cacheFiles = [
    '/',
    '/index.html',
    '/restaurant.html',
    '/css/styles.css',
    '/css/responsive.css',
    '/data/restaurants.json',
    '/img/1.jpg',
    '/img/2.jpg',
    '/img/3.jpg',
    '/img/4.jpg',
    '/img/5.jpg',
    '/img/6.jpg',
    '/img/7.jpg',
    '/img/8.jpg',
    '/img/9.jpg',
    '/img/10.jpg',
    '/js/main.js',
    '/js/restaurant_info.js',
    '/js/dbhelper.js'
];

/*check if browser has service worker registered
 *if so, console it - should have been registered in main.js*/
console.log('Service Worker: Registered');


/*an event listener for the service worker - installs
 *and then adds the files to cache, the "self" refers to the 
 *service worker itself. 
 */
self.addEventListener('install', function(e){
    e.waitUntil( /*this waits for installation to complete then precede to next steps*/
        caches.open('v1').then(function(cache){ /*the cache name is v1.  Caches-open method returns a promise*/
            return cache.addAll(cacheFiles); /*then it is chained with a function*/
        })
    );
});


/*this is eventlistener for service worker
 *happens on fetch - first it checks for event request url in the cache,
 *to check if it was already there from installation by using the match
 *method.  The match method returns a prommise which is chained to a function
 */

self.addEventListener('fetch', function(e) {
    e.respondWith( /*prevents default fetch behavior*/
        caches.match(e.request).then(function(response){ 
            if(response) { /*if request is already in cache*/ 
                console.log('Found', e.request, ' in cache');
                return response; 
            }
            else { /*if request not in cache - go fetch*/
                console.log('Could not find ', e.request, ' in cache, FETCHING!');
                return fetch(e.request) 
                .then(function(response) {
                    const clonedResponse = response.clone();    
                    caches.open('v1').then(function(cache) { /*then adds in cache for offline use*/
                        cache.put(e.request, clonedResponse);
                    })
                    return response;
                })
                .catch(function(err) { /*consoles any possible errors*/
                    console.error(err);
                });
            }
        })
    );
});


