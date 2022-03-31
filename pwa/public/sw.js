// let cacheData="appv1";
// this.addEventListener("install",(event)=>{
//     event.waitUntil(
//         caches.open(cacheData).then((cache)=>{
//             cache.addAll([
//                 'npm/bootstrap@5.1.3/dist/css/bootstrap.min.css',
//                 'npm/bootstrap@5.1.3/dist/css/bootstrap.min.css',
//                 'static/js/bundle.js',
//                 'index.html',
//                 '/',

//             ])
//         })
//     )
// })
// this.addEventListener('fetch',(event)=>{
//     event.respondWith(
//         caches.match(event.request).then(resp=>{
//             if(resp)
//             {
//                 return resp
//             }
//         })
//     )
// })