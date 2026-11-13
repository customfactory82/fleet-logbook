/* Car Hire Fleet Logbook: keeps the app working offline. Records are kept by the page itself, not here. */
const CACHE = 'fleet-logbook-v1';
const FILES = [
  './', './index.html', './manifest.webmanifest',
  './icons/icon-192.png', './icons/icon-512.png', './icons/icon-maskable-512.png', './icons/apple-touch-icon.png',
  './fonts/barlow-400.woff2', './fonts/barlow-600.woff2', './fonts/barlow-700.woff2', './fonts/barlow-800.woff2',
  './fonts/barlow-condensed-700.woff2', './fonts/barlow-condensed-800.woff2'
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
// Serve from the saved copy straight away, and fetch a fresh copy in the background
// so an updated app is used the next time it opens.
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  const fresh = fetch(req).then(res => {
    if (res && res.ok && res.type === 'basic') { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
    return res;
  }).catch(() => null);
  e.waitUntil(fresh.then(() => undefined));
  e.respondWith(caches.match(req, {ignoreSearch: true}).then(hit => hit || fresh.then(res => res || (req.mode === 'navigate' ? caches.match('./index.html') : Response.error()))));
});
