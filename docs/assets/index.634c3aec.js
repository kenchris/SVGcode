import{f as nt,e as ce,s as Me,a as rt,g as ot,d as at,o as it,b as st,c as ct,p as lt,h as Pe,i as ut,j as dt,k as mt,v as pt}from"./vendor.957f1d51.js";const ft=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}};ft();const ht="modulepreload",Re={},gt="/",M=function(n,t){return!t||t.length===0?n():Promise.all(t.map(r=>{if(r=`${gt}${r}`,r in Re)return;Re[r]=!0;const o=r.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${a}`))return;const s=document.createElement("link");if(s.rel=o?"stylesheet":ht,o||(s.as="script",s.crossOrigin=""),s.href=r,document.head.appendChild(s),o)return new Promise((i,u)=>{s.addEventListener("load",i),s.addEventListener("error",u)})})).then(()=>n())},O=document.querySelector("canvas"),cn=document.querySelector(".menu"),ln=document.querySelector("main"),Ie=document.querySelector(".details"),F=document.querySelector(".posterize"),vt=document.querySelector("[for=posterize]"),le=document.querySelector(".color"),yt=document.querySelector("[for=color]"),je=document.querySelector(".monochrome"),wt=document.querySelector("[for=monochrome]"),ue=document.querySelector(".consider-dpr"),bt=document.querySelector('[for="consider-dpr"]'),V=document.querySelector(".optimize-curves"),Lt=document.querySelector('[for="optimize-curves"]'),h=document.querySelector("img"),de=document.querySelector(".reset-all"),Q=document.querySelector(".open"),Z=document.querySelector(".save"),me=document.querySelector(".copy"),pe=document.querySelector(".paste"),d=document.querySelector("output"),xt=document.querySelector(".debug"),N=document.querySelector("progress"),ee=document.querySelector(".toast"),te=document.documentElement,Ne=document.querySelector("details.main"),fe=document.querySelector("summary"),$=window.devicePixelRatio;function Et(e){switch(e){case"../i18n/de.js":return M(()=>import("./de.58feef74.js"),[]);case"../i18n/en-US.js":return M(()=>import("./en-US.e2ed4b41.js"),[]);default:return new Promise(function(n,t){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(t.bind(null,new Error("Unknown variable dynamic import: "+e)))})}}function St(e){switch(e){case"../i18n/de.js":return M(()=>import("./de.58feef74.js"),[]);case"../i18n/en-US.js":return M(()=>import("./en-US.e2ed4b41.js"),[]);default:return new Promise(function(n,t){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(t.bind(null,new Error("Unknown variable dynamic import: "+e)))})}}const $e="language",he=["en","de"],Ot=["en-US","de-DE"];class kt{constructor(){this.currentLanguageAndLocale=this.detectLanguageAndLocal(),this.defaultLanguage=he[0],this.defaultLocale=Ot[0],this.translations=null}detectLanguageAndLocal(){const n=localStorage.getItem($e);if(n)return JSON.parse(n);let[t,r=null]=navigator.language?.split("-");r&&(r=r.toUpperCase()),(!t||!he.includes(t))&&(t=he[0]);const o={language:t,locale:r};return localStorage.setItem($e,JSON.stringify(o)),o}async getTranslations(){const{language:n,locale:t}=this.currentLanguageAndLocale;this.translations=(await St(`../i18n/${n}${t?`-${t}`:""}.js`).catch(()=>Et(`../i18n/${this.defaultLocale}.js`))).default}t(n){return this.translations[n]}}const f=new kt;let ge=0,ve=0,k=1,m={};const Ae=e=>(e.preventDefault(),!1),ze=e=>{const n=d.querySelector("svg");if(!!n){n.classList.add("interactive");for(let t=0;t<L.length;t++)if(e.pointerId===L[t].pointerId){L[t]=e;break}if(L.length===2){const t=Math.abs(L[0].clientX-L[1].clientX);B>0&&(t>B&&(k*=.995,we(k)),t<B&&(k*=1.005,we(k))),B=t}else if(L.length===1){const t=Math.floor(e.offsetX-ge),r=Math.floor(e.offsetY-ve);n.setAttribute("viewBox",`${-1*t} ${-1*r} ${m.width} ${m.height}`)}}};d.addEventListener("pointerdown",e=>{!d.querySelector("svg")||(L.push(e),d.addEventListener("dragstart",Ae),x(),ge=Math.floor(e.offsetX+m.x),ve=Math.floor(e.offsetY+m.y),d.addEventListener("pointermove",ze),d.style.cursor="grabbing")});const ye=e=>{d.removeEventListener("pointermove",ze),d.removeEventListener("dragstart",Ae),Ct(e),L.length<2&&(B=-1),x(),d.style.cursor="grab";const n=d.querySelector("svg");!n||n.classList.remove("interactive")};d.addEventListener("pointerup",e=>{ye(e)});d.addEventListener("pointercancel",e=>{ye(e)});d.addEventListener("pointerleave",e=>{ye(e)});const x=()=>{const e=d.querySelector("svg");if(!e)return;const n=e.getAttribute("viewBox"),[t,r,o,a]=n.split(" ");m.x=Number(t),m.y=Number(r),m.width=Number(o),m.height=Number(a)},we=e=>{const n=d.querySelector("svg");if(!n)return;P(`${f.t("zoom")}: ${(1/e).toFixed(1)}\xD7`,2e3),m.width===void 0&&x();const t=Math.ceil(m.width*e),r=Math.ceil(m.height*e);if(t<=0||r<=0)return;const o=Math.floor(m.x+(m.width-t)/2),a=Math.floor(m.y+(m.height-r)/2);n.setAttribute("viewBox",`${o} ${a} ${t} ${r}`)};let be=null;d.addEventListener("wheel",e=>{e.preventDefault();const n=d.querySelector("svg");!n||(n.classList.add("interactive"),k=Math.max(.1,Math.min(k*(1+e.deltaY*.005),10)),we(k),be&&clearTimeout(be),be=setTimeout(()=>{n.classList.remove("interactive")},1e3))});const L=[];let B=-1;const Ct=e=>{for(let n=0;n<L.length;n++)if(L[n].pointerId===e.pointerId){L.splice(n,1);break}},We=()=>{ge=0,ve=0,k=1,m={}},ne=(e,n)=>{let t;return function(...o){const a=()=>{clearTimeout(t),e(...o)};clearTimeout(t),t=setTimeout(a,n)}};/*!
 * canvas-size
 * v1.2.5
 * https://github.com/jhildenbiddle/canvas-size
 * (c) 2015-2021 John Hildenbiddle <http://hildenbiddle.com>
 * MIT license
 */function De(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?De(Object(t),!0).forEach(function(r){Tt(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):De(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Tt(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function _t(e,n){if(e==null)return{};var t={},r=Object.keys(e),o,a;for(a=0;a<r.length;a++)o=r[a],!(n.indexOf(o)>=0)&&(t[o]=e[o]);return t}function Mt(e,n){if(e==null)return{};var t=_t(e,n),r,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],!(n.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(t[r]=e[r]))}return t}function qe(e,n){return Rt(e)||jt(e,n)||Ue(e,n)||$t()}function re(e){return Pt(e)||It(e)||Ue(e)||Nt()}function Pt(e){if(Array.isArray(e))return Le(e)}function Rt(e){if(Array.isArray(e))return e}function It(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function jt(e,n){var t=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r=[],o=!0,a=!1,s,i;try{for(t=t.call(e);!(o=(s=t.next()).done)&&(r.push(s.value),!(n&&r.length===n));o=!0);}catch(u){a=!0,i=u}finally{try{!o&&t.return!=null&&t.return()}finally{if(a)throw i}}return r}}function Ue(e,n){if(!!e){if(typeof e=="string")return Le(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Le(e,n)}}function Le(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function Nt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function G(e){var n=e.sizes.shift(),t=Math.max(Math.ceil(n[0]),1),r=Math.max(Math.ceil(n[1]),1),o=[t-1,r-1,1,1],a=Date.now(),s=typeof WorkerGlobalScope!="undefined"&&self instanceof WorkerGlobalScope,i,u;s?(i=new OffscreenCanvas(1,1),u=new OffscreenCanvas(t,r)):(i=document.createElement("canvas"),i.width=1,i.height=1,u=document.createElement("canvas"),u.width=t,u.height=r);var c=i.getContext("2d"),l=u.getContext("2d");l&&(l.fillRect.apply(l,o),c.drawImage(u,t-1,r-1,1,1,0,0,1,1));var g=c&&c.getImageData(0,0,1,1).data[3]!==0,v=Date.now()-a;return s?(postMessage({width:t,height:r,benchmark:v,isTestPass:g}),!g&&e.sizes.length&&G(e)):g?e.onSuccess(t,r,v):(e.onError(t,r,v),e.sizes.length&&G(e)),g}var xe={area:[16384,14188,11402,11180,10836,8192,4096,1],height:[8388607,65535,32767,16384,8192,4096,1],width:[4194303,65535,32767,16384,8192,4096,1]},At=["onError","onSuccess"],A={max:null,min:1,sizes:[],step:1024,usePromise:!1,useWorker:!1,onError:Function.prototype,onSuccess:Function.prototype},X={};function Ee(e){var n=e.width===e.height,t=e.height===1,r=e.width===1,o=[];if(!e.width||!e.height)e.sizes.forEach(function(l){var g=n||t?l:1,v=n||r?l:1;o.push([g,v])});else for(var a=e.min||A.min,s=e.step||A.step,i=Math.max(e.width,e.height);i>=a;){var u=n||t?i:1,c=n||r?i:1;o.push([u,c]),i-=s}return o}function oe(e){var n=window&&"HTMLCanvasElement"in window,t=window&&"OffscreenCanvas"in window,r=Date.now(),o=e.onError,a=e.onSuccess,s=Mt(e,At),i=null;if(!n)return!1;if(e.useWorker&&t){var u=`
            var canvasTest = `.concat(G.toString(),`;
            onmessage = function(e) {
                canvasTest(e.data);
            };
        `),c=new Blob([u],{type:"application/javascript"}),l=URL.createObjectURL(c);i=new Worker(l),URL.revokeObjectURL(l),i.onmessage=function(g){var v=g.data,R=v.width,K=v.height,J=v.benchmark,ie=v.isTestPass;ie?(X[r].onSuccess(R,K,J),delete X[r]):X[r].onError(R,K,J)}}if(e.usePromise)return new Promise(function(g,v){var R=b(b({},e),{},{onError:function(I,j,H){var se;if(e.sizes.length===0)se=!0;else{var Qe=e.sizes.slice(-1),Ze=qe(Qe,1),_e=qe(Ze[0],2),et=_e[0],tt=_e[1];se=I===et&&j===tt}o(I,j,H),se&&v({width:I,height:j,benchmark:H})},onSuccess:function(I,j,H){a(I,j,H),g({width:I,height:j,benchmark:H})}});if(i){var K=R.onError,J=R.onSuccess;X[r]={onError:K,onSuccess:J},i.postMessage(s)}else G(R)});if(i)X[r]={onError:o,onSuccess:a},i.postMessage(s);else return G(e)}var zt={maxArea:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=Ee({width:n.max,height:n.max,min:n.min,step:n.step,sizes:re(xe.area)}),r=b(b(b({},A),n),{},{sizes:t});return oe(r)},maxHeight:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=Ee({width:1,height:n.max,min:n.min,step:n.step,sizes:re(xe.height)}),r=b(b(b({},A),n),{},{sizes:t});return oe(r)},maxWidth:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=Ee({width:n.max,height:1,min:n.min,step:n.step,sizes:re(xe.width)}),r=b(b(b({},A),n),{},{sizes:t});return oe(r)},test:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=b(b({},A),n);return t.sizes=re(t.sizes),t.width&&t.height&&(t.sizes=[[t.width,t.height]]),oe(t)}};let He,Fe;const Ve="OffscreenCanvas"in window&&"CanvasFilter"in window;if(Ve)M(()=>import("./preprocessworker.d517cec4.js"),[]).then(e=>{const n=e.default;let t=null;const r=O.getContext("2d");He=async()=>{t&&t.terminate(),t=new n;const o=O.cloneNode().transferControlToOffscreen();return t.postMessage({offscreen:o},[o]),new Promise(async a=>{const{width:s,height:i}=Be();let u;try{u=await createImageBitmap(h)}catch(l){console.error(l.name,l.message),P(l.message)}const c=new MessageChannel;c.port1.onmessage=({data:l})=>{c.port1.close(),t.terminate(),t=null,O.width=s,O.height=i,r.putImageData(l.result,0,0),a(l.result)},t.postMessage({inputImageBitmap:u,posterize:F.checked,rgba:{r:C(p[w.red]),g:C(p[w.green]),b:C(p[w.blue]),a:C(p[w.alpha])},width:s,height:i,dpr:$},[c.port2])})}});else{const e=O.getContext("2d",{desynchronized:!0});e.scale($,$),e.imageSmoothingEnabled=!0,Fe=()=>{let{width:n,height:t}=Be();const r=ue.checked?$:1;let o=1;for(;!zt.test({width:n,height:t});)n=Math.floor(n/2),t=Math.floor(t/2),o/=2;return O.width=n,O.height=t,e.clearRect(0,0,n,t),e.filter=Dt(),e.drawImage(h,0,0,r*h.naturalWidth*o,r*h.naturalHeight*o,0,0,n,t),e.getImageData(0,0,n,t)}}const Be=()=>{const e=Number(p[Xe.scale].value)/100;return{width:Math.ceil($*h.naturalWidth*e),height:Math.ceil($*h.naturalHeight*e)}},C=e=>{const n=Number(e.value),t=[];for(let r=0;r<=n;r++)t[r]=Number((1/n*r).toFixed(1));return t},Wt=()=>`data:image/svg+xml;utf8,<svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <filter id="posterize">
        <feComponentTransfer>
          <feFuncR type="discrete" tableValues="${C(p[w.red]).join(",")}" />
          <feFuncG type="discrete" tableValues="${C(p[w.green]).join(",")}" />
          <feFuncB type="discrete" tableValues="${C(p[w.blue]).join(",")}" />
          <feFuncA type="discrete" tableValues="${C(p[w.alpha])}" />
        </feComponentTransfer>
      </filter>
    </svg>`.replace(/[\r\n]/g,"").replace(/\s+/g," ").trim(),Dt=()=>{let e=`${F.checked?`url('${Wt()}#posterize') `:""}`;for(const[n,t]of Object.entries(Ye)){const r=p[n];t.initial!==Number(r.value)&&(e+=`${n}(${r.value}${r.dataset.unit}) `)}return e.trim()||"none"};function qt(){return new Worker("/assets/monochromeworker.a3227215.js",{type:"module"})}let z=null;const Ut=async e=>(z&&z.terminate(),z=new qt,new Promise(async n=>{const t=new MessageChannel;t.port1.onmessage=({data:o})=>{t.port1.close(),z.terminate(),z=null,n(o.result)};const r={turdsize:Number(p[y.turdsize].value),alphamax:Number(p[y.alphamax].value),turnpolicy:Number(p[y.turnpolicy].value),opttolerance:Number(p[y.opttolerance].value),opticurve:V.checked?1:0};z.postMessage({imageData:e,params:r},[t.port2])}));function Ht(){return new Worker("/assets/colorworker.959d28b5.js",{type:"module"})}let W=null;const S={},Ft=async e=>(W&&(console.log("Killing colorWorker, throw away work pending"),W.terminate()),W=new Ht,new Promise(async n=>{const t=new MessageChannel;t.port1.onmessage=({data:c})=>{console.log("Received result from Worker",c),t.port1.close(),console.log("Killing colorWorker, work done."),W.terminate(),W=null,n(c.result)},N.value=0,N.style.visibility="visible";let r="",o="",a="",s=0;S.current&&(clearInterval(S.current),S.current=null),S.current=setInterval(()=>{const c=`${r}${a}${o}`;c.length!==s&&(d.innerHTML=c,s=c.length)},500);const i=new MessageChannel;i.port1.onmessage=({data:c})=>{console.log("Received progress from Worker",c);const l=Math.floor(c.processed/c.total*100);N.value=l,c.svg&&(r||(r=c.svg.replace(/(.*?<svg[^>]+>)(.*?)(<\/svg>)/,"$1").replace(/\s+width="\d+(?:\.\d+)?"/,"").replace(/\s+height="\d+(?:\.\d+)"/,""),o=c.svg.replace(/(.*?<svg[^>]+>)(.*?)(<\/svg>)/,"$3"),m.width&&(r=r.replace(/viewBox="([^"]+)"/,`viewBox="${m.x} ${m.y} ${m.width} ${m.height}"`))),a+=c.svg.replace(/(.*?<svg[^>]+>)(.*?)(<\/svg>)/,"$2")),c.processed===c.total&&(clearInterval(S.current),S.current=null,i.port1.close(),N.value=0,N.style.visibility="hidden")};const u={minPathSegments:Number(p[y.minPathLenght].value),turdsize:Number(p[y.turdsize].value),alphamax:Number(p[y.alphamax].value),turnpolicy:Number(p[y.turnpolicy].value),opttolerance:Number(p[y.opttolerance].value),opticurve:V.checked?1:0};W.postMessage({imageData:e,params:u},[t.port2,i.port2])}));var Vt='<svg viewBox="0 0 57 57" xmlns="http://www.w3.org/2000/svg" stroke="currentColor"><g transform="translate(1 1)" stroke-width="2" fill="none" fill-rule="evenodd"><circle cx="5" cy="50" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" values="50;5;50;50" calcMode="linear" repeatCount="indefinite"/><animate attributeName="cx" begin="0s" dur="2.2s" values="5;27;49;5" calcMode="linear" repeatCount="indefinite"/></circle><circle cx="27" cy="5" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" from="5" to="5" values="5;50;50;5" calcMode="linear" repeatCount="indefinite"/><animate attributeName="cx" begin="0s" dur="2.2s" from="27" to="27" values="27;49;5;27" calcMode="linear" repeatCount="indefinite"/></circle><circle cx="49" cy="50" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" values="50;50;5;50" calcMode="linear" repeatCount="indefinite"/><animate attributeName="cx" from="49" to="49" begin="0s" dur="2.2s" values="49;5;27;49" calcMode="linear" repeatCount="indefinite"/></circle></g></svg>';const Se="color",Oe="monochrome",Ge=(e,n,t)=>{!e||(e=e.replace(/\s+width="\d+(?:\.\d+)?"/,"").replace(/\s+height="\d+(?:\.\d+)"/,""),d.dataset.originalViewBox=/viewBox="([^"]+)"/.exec(e)[1],t.width&&(e=e.replace(/viewBox="([^"]+)"/,`viewBox="${t.x} ${t.y} ${t.width} ${t.height}"`)),d.classList.remove(Se),d.classList.remove(Oe),d.classList.add(n),d.innerHTML=e,P(`${f.t("svgSize")}: ${e.length} ${f.t("bytes")}`,3e3))},E=async(e={})=>{d.innerHTML="",d.classList.remove(Se,Oe),S.current&&(clearInterval(S.current),S.current=null);let n=d.querySelector("img");n||(n=document.createElement("img"),n.classList.add("spinner"),n.src=URL.createObjectURL(new Blob([Vt],{type:"image/svg+xml"})),d.append(n)),n.style.display="block";const t=Ve?await He():Fe();if(le.checked){const r=await Ft(t);Ge(r,Se,e)}else{const r=await Ut(t);Ge(r,Oe,e)}n.style.display="none"};function Bt(){return new Worker("/assets/svgoworker.ac6dd397.js",{type:"module"})}let D=null;const Gt=async e=>(D&&D.terminate(),D=new Bt,new Promise(n=>{const t=new MessageChannel;t.port1.onmessage=({data:r})=>{t.port1.close(),D.terminate(),D=null,n(r.result)},D.postMessage({svg:e,originalViewBox:d.dataset.originalViewBox},[t.port2])})),ke="fileHandle";Q.addEventListener("click",async()=>{try{const e=await nt({mimeTypes:["image/*"],description:"Image files"}),n=URL.createObjectURL(e);h.addEventListener("load",()=>{URL.revokeObjectURL(n)},{once:!0}),h.src=n,ce&&await Me(ke,e.handle)}catch(e){console.error(e.name,e.message),P(e.message)}});document.addEventListener("dragover",e=>{e.preventDefault()});document.addEventListener("dragenter",e=>{e.preventDefault(),te.classList.add("dropenter")});document.addEventListener("dragleave",e=>{e.preventDefault(),e.target===document.documentElement&&te.classList.remove("dropenter")});document.addEventListener("drop",async e=>{e.preventDefault(),e.stopPropagation(),te.classList.remove("dropenter");const n=e.dataTransfer.items[0];if(n.kind==="file"){let t;if(h.addEventListener("load",()=>{URL.revokeObjectURL(t)},{once:!0}),ce){const r=await n.getAsFileSystemHandle();if(r.kind==="directory")return;{const o=await r.getFile();t=URL.createObjectURL(o),h.src=t,await Me(ke,r)}}else{const r=n.getAsFile();t=URL.createObjectURL(r),h.src=t}}});Z.addEventListener("click",async()=>{try{let e=d.innerHTML,n=null;ce&&(n=await showSaveFilePicker({types:[{description:"SVG file",accept:{"image/svg+xml":[".svg"]}}]})),e=await Gt(e);const t=new Blob([e],{type:"image/svg+xml"});await rt(t,{fileName:"",description:"SVG file"},n)}catch(e){console.error(e.name,e.message),P(e.message)}});const T="%",Xt="deg",Y="steps",Yt="pixels",Ce="",Kt="segments",_={brightness:"brightness",contrast:"contrast",grayscale:"grayscale",hueRotate:"hue-rotate",invert:"invert",opacity:"opacity",saturate:"saturate",sepia:"sepia"},w={red:"red",green:"green",blue:"blue",alpha:"alpha"},Xe={scale:"scale"},y={minPathLenght:"minPathSegments",turdsize:"turdsize",alphamax:"alphamax",turnpolicy:"turnpolicy",opticurve:"opticurve",opttolerance:"opttolerance"},Ye={[_.brightness]:{unit:T,initial:100,min:0,max:200},[_.contrast]:{unit:T,initial:100,min:0,max:200},[_.grayscale]:{unit:T,initial:0,min:0,max:100},[_.hueRotate]:{unit:Xt,initial:0,min:0,max:360},[_.invert]:{unit:T,initial:0,min:0,max:100},[_.opacity]:{unit:T,initial:100,min:0,max:100},[_.saturate]:{unit:T,initial:100,min:0,max:200},[_.sepia]:{unit:T,initial:0,min:0,max:100}},Jt={[w.red]:{unit:Y,initial:5,min:1,max:20},[w.green]:{unit:Y,initial:5,min:1,max:20},[w.blue]:{unit:Y,initial:5,min:1,max:20},[w.alpha]:{unit:Y,initial:1,min:1,max:10}},Qt={[Xe.scale]:{unit:T,initial:100,min:1,max:200}},Zt={[y.turdsize]:{unit:Yt,initial:2,min:0,max:50},[y.alphamax]:{unit:Ce,initial:1,min:0,max:1.3334},[y.turnpolicy]:{unit:Y,initial:4,min:0,max:6},[y.opttolerance]:{unit:Ce,initial:.2,min:0,max:1},[y.minPathLenght]:{unit:Kt,initial:0,min:0,max:30}},en=[{name:"svgOptions",icon:Pe},{name:"colorChannels",icon:ut},{name:"imageSize",icon:dt},{name:"imagePreprocessing",icon:mt}],Ke=[Object.entries(Zt),Object.entries(Jt),Object.entries(Qt),Object.entries(Ye)],p={},Je={},q={},ae=(e,n)=>{const t=f.t(e);return` (${e?`${n}${t.length===1?t:` ${t}`}`:n})`},U=e=>{const n=document.createElement("span");return n.classList.add("icon"),n.innerHTML=e,n},tn=(e,n)=>{const t=document.createElement("details");q[e]=t;const r=document.createElement("summary"),o=U(n);return r.append(o),r.append(document.createTextNode(f.t(e))),t.append(r),t},nn=(e,n,t)=>{const{unit:r,min:o,max:a,initial:s}=n,i=document.createElement("div");i.classList.add("preprocess-input");const u=document.createElement("label");u.textContent=f.t(e)||e,u.for=e;const c=document.createElement("span");Je[e]=c,c.textContent=ae(r,s);const l=document.createElement("input");p[e]=l,l.id=e,l.type="range",l.class=e,r&&(l.dataset.unit=r),r===Ce&&(l.step=.01),l.min=o,l.max=a,l.value=s,l.addEventListener("input",()=>{c.textContent=ae(r,l.value)}),Object.keys(w).includes(e)?l.addEventListener("change",ne(async()=>{x(),await E(m)},250)):Object.keys(y).includes(e)?l.addEventListener("change",ne(async()=>{x(),await E(m)},250)):l.addEventListener("change",ne(async()=>{x(),await E(m)},250));const g=document.createElement("button");g.type="button",g.textContent=f.t("reset"),g.addEventListener("click",async()=>{l.value=s,c.textContent=ae(r,s),l.dispatchEvent(new Event("change"))}),u.append(c),i.append(u);const v=document.createElement("div");i.append(v),v.append(l),v.append(g),t.append(i)};F.addEventListener("change",async()=>{const e=!F.checked;Object.keys(w).forEach(n=>{p[n].disabled=e}),x(),await E(m)});le.addEventListener("change",async()=>{x(),await E(m)});je.addEventListener("change",async()=>{x(),await E(m)});ue.addEventListener("change",async()=>{x(),await E(m)});V.addEventListener("change",async()=>{p.opttolerance.disabled=!V.checked,x(),await E(m)});const rn=async()=>{await f.getTranslations(),on();const e=window.matchMedia("(max-width: 400px)"),n=()=>{if(e.matches){Ne.open=!1;return}Ne.open=!0};n(),e.addEventListener("change",n),Ke.forEach((r,o)=>{const{name:a,icon:s}=en[o],i=tn(a,s);o<2&&(i.open=!0),a==="colorChannels"?q.colorChannels.append(F.parentNode):a==="svgOptions"?(q.svgOptions.append(le.parentNode),q.svgOptions.append(je.parentNode)):a==="imageSize"&&q.imageSize.append(ue.parentNode);for(const[u,c]of r)u==="opttolerance"&&q.svgOptions.append(V.parentNode),nn(u,c,i);Ie.append(i)}),Ie.append(de.parentNode),h.addEventListener("load",async()=>{h.width=h.naturalWidth,h.height=h.naturalHeight,h.src!==new URL("/favicon.png",location.href).toString()?setTimeout(async()=>{We(),await E()},200):d.innerHTML=await fetch("/potraced.svg").then(r=>r.text())}),h.complete&&h.dispatchEvent(new Event("load"));const t=await ot("fileHandle");if(t)try{const r=await t.getFile();blobURL=URL.createObjectURL(r),h.src=blobURL}catch(r){console.error(r.name,r.message),P(r.message),await at(ke)}},on=()=>{de.textContent=f.t("resetAll"),vt.textContent=f.t("posterizeInputImage"),yt.textContent=f.t("colorSVG"),wt.textContent=f.t("monochromeSVG"),bt.textContent=f.t("considerDPR"),Lt.textContent=f.t("opticurve"),Q.innerHTML="",Q.append(U(it)),Q.append(document.createTextNode(f.t("openImage"))),Z.innerHTML="",Z.append(U(st)),Z.append(document.createTextNode(f.t("saveSVG"))),me.innerHTML="",me.append(U(ct)),me.append(document.createTextNode(f.t("copySVG"))),pe.innerHTML="",pe.append(U(lt)),pe.append(document.createTextNode(f.t("pasteImage"))),te.dataset.dropText=f.t("dropFileHere"),fe.innerHTML="",fe.append(U(Pe)),fe.append(document.createTextNode(f.t("tweak")))};de.addEventListener("click",async()=>{const e=(n,t,r)=>{p[n].value=r,Je[n].textContent=ae(t,r)};Ke.forEach(n=>{for(const[t,r]of n)e(t,r.unit,r.initial)}),We(),await E()});xt.addEventListener("click",()=>{O.classList.toggle("debug"),N.classList.toggle("debug")});let Te=null;const P=(e,n=5e3)=>{ee.innerHTML=e,ee.hidden=!1,Te&&clearTimeout(Te),Te=setTimeout(()=>{ee.hidden=!0,ee.textContent=""},n)};document.documentElement.style.setProperty("--100vh",`${window.innerHeight}px`);window.addEventListener("resize",ne(()=>{document.documentElement.style.setProperty("--100vh",`${window.innerHeight}px`)},250));function an(e={}){const{immediate:n=!1,onNeedRefresh:t,onOfflineReady:r,onRegistered:o,onRegisterError:a}=e;let s;const i=async(u=!0)=>{};return"serviceWorker"in navigator&&(s=new pt("/sw.js",{scope:"/"}),s.addEventListener("activated",u=>{u.isUpdate?window.location.reload():r==null||r()}),s.register({immediate:n}).then(u=>{o==null||o(u)}).catch(u=>{a==null||a(u)})),i}"launchQueue"in window&&M(()=>import("./filehandling.7caed359.js"),["assets/filehandling.7caed359.js","assets/vendor.957f1d51.js"]);"windowControlsOverlay"in navigator&&M(()=>import("./windowcontrols.ca7f81b8.js"),["assets/windowcontrols.ca7f81b8.js","assets/vendor.957f1d51.js"]);(async()=>{rn(),an({onOfflineReady(){P(f.t("readyToWorkOffline"))},onNeedRefresh(){location.reload()}})()})();export{ke as F,ln as a,ne as d,h as i,cn as m};
