const CACHE="kelimelik-v4";
const FILES=["./","./index.html","./manifest.webmanifest","./icon-192.png","./icon-512.png"];

self.addEventListener("install",e=>{
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).catch(()=>{}));
});

self.addEventListener("activate",e=>{
  e.waitUntil(caches.keys()
    .then(k=>Promise.all(k.filter(x=>x!==CACHE).map(x=>caches.delete(x))))
    .then(()=>self.clients.claim()));
});

self.addEventListener("fetch",e=>{
  const req=e.request;
  if(req.method!=="GET")return;
  if(req.mode==="navigate"||req.destination==="document"){
    e.respondWith(
      fetch(req).then(res=>{
        const cp=res.clone();
        caches.open(CACHE).then(c=>c.put("./index.html",cp)).catch(()=>{});
        return res;
      }).catch(()=>caches.match("./index.html",{ignoreSearch:true}))
    );
    return;
  }
  e.respondWith(
    caches.match(req,{ignoreSearch:true}).then(hit=>
      hit || fetch(req).then(res=>{
        const cp=res.clone();
        caches.open(CACHE).then(c=>c.put(req,cp)).catch(()=>{});
        return res;
      }).catch(()=>caches.match("./index.html"))
    )
  );
});
