if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,a,i)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const f={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return r;case"module":return f;default:return e(s)}}))).then((e=>{const s=i(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-78503f86"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/colorworker.0ed47b01.js",revision:"0b1c4cbd0654cf3071e0f3d630b68c51"},{url:"assets/de.58feef74.js",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"assets/directory-open.3e65b783.js",revision:"2c51932ffaffd459aef9f81f0495b3a4"},{url:"assets/directory-open.62688040.js",revision:"7b26e887c177278da6c7c7f61a4df277"},{url:"assets/en-US.35f180dd.js",revision:"ea105dc029dbed251e20653d7bf9ba46"},{url:"assets/file-open.38a61ae8.js",revision:"ee1f95c3d68ef5aa585c9d70fa62a522"},{url:"assets/file-open.73377f9f.js",revision:"ef8971f4918fc289eb0a8fd6e60c2baa"},{url:"assets/file-save.1c3d3b86.js",revision:"853ab6f729ed68fc89a66854d0302964"},{url:"assets/file-save.36107878.js",revision:"372b959bf037e345767e8e0734f9078b"},{url:"assets/filehandling.4726079b.js",revision:"2865e47da55274ebe984a62324c4ace6"},{url:"assets/index.3640a254.css",revision:"4fee600cc6b6e1a5688247be752010be"},{url:"assets/index.aa963ffb.js",revision:"f24c561f9edbf35aaafe4a53ca078348"},{url:"assets/install.590dbf5f.js",revision:"b72c8898d14cbb863f8feb091a430760"},{url:"assets/monochromeworker.a3227215.js",revision:"812f2513a81b2081d1466784f38f8318"},{url:"assets/preprocessworker.b53406ee.js",revision:"1e911c59fe37ea58bf50dfc77743dbfb"},{url:"assets/preprocessworker.faa146aa.js",revision:"6f3044fb23f22abe9aa86053ef2362fd"},{url:"assets/svgoworker.ac6dd397.js",revision:"3b1e74f8d5aa211a2f42bca2a9197d85"},{url:"assets/vendor.957f1d51.js",revision:"912bfa64eb341eef445fcb53f3cb12ef"},{url:"assets/windowcontrols.e5f2fb0a.js",revision:"d2d89971d180376252b1cd4bb39dd03e"},{url:"index.html",revision:"ed17b928ab9bc841b515f49d1a3530b8"},{url:"./favicon.png",revision:"2e55ffb100a97caa1372b725a7752fac"},{url:"./favicon.svg",revision:"97e6ab4d1284cb42c4a130684ca805a0"},{url:"manifest.webmanifest",revision:"9b238b2e0f538ae3e609910c98be646a"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
