if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,a,i)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const f={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return r;case"module":return f;default:return e(s)}}))).then((e=>{const s=i(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-78503f86"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/colorworker.959d28b5.js",revision:"8837252d6c4c8dc454314fa3d7bebb8f"},{url:"assets/de.58feef74.js",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"assets/directory-open.3e65b783.js",revision:"2c51932ffaffd459aef9f81f0495b3a4"},{url:"assets/directory-open.62688040.js",revision:"7b26e887c177278da6c7c7f61a4df277"},{url:"assets/en-US.e2ed4b41.js",revision:"e3663e1dc4bae2ae2e1ae9f090350ac9"},{url:"assets/file-open.38a61ae8.js",revision:"ee1f95c3d68ef5aa585c9d70fa62a522"},{url:"assets/file-open.73377f9f.js",revision:"ef8971f4918fc289eb0a8fd6e60c2baa"},{url:"assets/file-save.1c3d3b86.js",revision:"853ab6f729ed68fc89a66854d0302964"},{url:"assets/file-save.36107878.js",revision:"372b959bf037e345767e8e0734f9078b"},{url:"assets/filehandling.7caed359.js",revision:"c5d68212f1c6f472fe6558e96e0b3813"},{url:"assets/index.29943e4d.css",revision:"af3d2487e89f30fcadb3f7f59f8a2776"},{url:"assets/index.634c3aec.js",revision:"ce9b2a3cdcfea5c4b88079de23cecbc5"},{url:"assets/monochromeworker.a3227215.js",revision:"812f2513a81b2081d1466784f38f8318"},{url:"assets/preprocessworker.d517cec4.js",revision:"c0fc188b348a01b09bf408f817bacab6"},{url:"assets/preprocessworker.d92589da.js",revision:"b4c3f14c218e8b8e010ab650544f9396"},{url:"assets/svgoworker.ac6dd397.js",revision:"3b1e74f8d5aa211a2f42bca2a9197d85"},{url:"assets/vendor.957f1d51.js",revision:"912bfa64eb341eef445fcb53f3cb12ef"},{url:"assets/windowcontrols.ca7f81b8.js",revision:"afdf6b79e0e541b256e17721d127dfc5"},{url:"index.html",revision:"a50d5fe611d0a345802b1bf270c4198d"},{url:"./favicon.png",revision:"2e55ffb100a97caa1372b725a7752fac"},{url:"./favicon.svg",revision:"97e6ab4d1284cb42c4a130684ca805a0"},{url:"manifest.webmanifest",revision:"9b238b2e0f538ae3e609910c98be646a"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
