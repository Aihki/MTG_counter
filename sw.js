if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const l=e=>n(e,t),c={module:{uri:t},exports:o,require:l};i[t]=Promise.all(s.map((e=>c[e]||l(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-CH_hp7OL.js",revision:null},{url:"assets/index-DnaEmiuX.css",revision:null},{url:"index.html",revision:"0525af97de4890f440f16c839cd974ce"},{url:"registerSW.js",revision:"8c9373b6fbefc38e5dc8d3a467283663"},{url:"pwa-192x192.png",revision:"62547be7739de73a5868597f51dc545b"},{url:"pwa-512x512.png",revision:"4544cf133780ec81230550e4d43ab16c"},{url:"manifest.webmanifest",revision:"a51b5f32723f747f276a590bbf29df7a"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
