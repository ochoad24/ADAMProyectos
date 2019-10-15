
const STATIC_CACHE    = 'static-v4';
const DYNAMIC_CACHE   = 'dynamic-v4';
const INMUTABLE_CACHE = 'inmutable-v4';

const CACHE_DYNAMIC_LIMIT = 50;

function limpiarCache( cacheName, numeroItems ) {
    caches.open( cacheName )
        .then( cache => {
            return cache.keys()
                .then( keys => {
                    if ( keys.length > numeroItems ) {
                        cache.delete( keys[0] )
                            .then( limpiarCache(cacheName, numeroItems) );
                    }
                });
        });
}

const APP_SHELL = [
    '/',
    'js/main.js',
    'js/sw-utils.js',
    'js/sw-db.js',
    '/0.js',
    '/1.js',
    '/2.js',
    '/3.js',
    '/4.js',
    '/5.js',
    '/6.js',
    '/7.js',
    '/8.js',
    '/9.js',
    '/10.js',
    '/11.js',
    '/12.js',
    '/13.js',
    '/14.js',
    '/15.js',
    '/16.js',
    '/17.js',
    '/18.js',
    '/19.js',

];
const APP_SHELL_INMUTABLE = [
    '/images/Spin-1s-200px.gif?fa141632d1d5f0e20d3c337c3a1e1f25',
    '/img/favico.png',
    '/fonts/vendor/font-awesome/fontawesome-webfont.woff2?af7ae505a9eed503f8b8e6982036873e',
    '/images/man.png?559902bb11fccb462f287d50ff95fb43',
    '/images/adam.jpg',
    '/images/avatar6.jpg?ac60ef718e8f9765886e30ee907fea17',
    '/images/avatar.jpg?ac60ef718e8f9765886e30ee907fea17',
    '/images/avatar2.jpg?ac60ef718e8f9765886e30ee907fea17',
    '/images/avatar3.jpg?ac60ef718e8f9765886e30ee907fea17',
    '/images/avatar5.jpg?ac60ef718e8f9765886e30ee907fea17',
    '/images/avatar4.jpg?ac60ef718e8f9765886e30ee907fea17',
    '/images/avatar7.jpg?ac60ef718e8f9765886e30ee907fea17',
    '/fonts/vendor/material-design-icons-icondist/MaterialIcons-Regular.woff2?0509ab09c1b0d2200a4135803c91d6ce',
    '/images/logo8.png?18b455a04afa612acc4ac795c286b5b1',
    'https://cdn.jsdelivr.net/npm/pouchdb@7.1.1/dist/pouchdb.min.js'
];

self.addEventListener('install', e => {


    const cacheStatic = caches.open( STATIC_CACHE ).then(cache => 
        cache.addAll( APP_SHELL ));

    const cacheInmutable = caches.open( INMUTABLE_CACHE ).then(cache => 
        cache.addAll( APP_SHELL_INMUTABLE ));

    e.waitUntil( Promise.all([ cacheStatic, cacheInmutable ])  );

});


self.addEventListener('activate', e => {

    const respuesta = caches.keys().then( keys => {

        keys.forEach( key => {

            if (  key !== STATIC_CACHE && key.includes('static') ) {
                return caches.delete(key);
            }

            if (  key !== DYNAMIC_CACHE && key.includes('dynamic') ) {
                return caches.delete(key);
            }

        });

    });

    e.waitUntil( respuesta );

});

self.addEventListener( 'fetch', e => {

    const respuesta = fetch( e.request ).then( res => {

        if ( !res ) return caches.match( e.request );

        caches.open( DYNAMIC_CACHE )
            .then( cache => {
                cache.put( e.request, res );
                limpiarCache( DYNAMIC_CACHE, CACHE_DYNAMIC_LIMIT );
            });

        return res.clone();

    }).catch( err =>{
        return caches.match( e.request );
    });
    e.respondWith( respuesta );

});

