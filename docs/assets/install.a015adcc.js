import{b as n}from"./index.7eee30e8.js";import"./vendor.60be3708.js";n.style.display="none";let e=null;window.addEventListener("beforeinstallprompt",t=>{t.preventDefault(),e=t,n.style.display=""});n.addEventListener("click",async()=>{if(!e)return;e.prompt(),(await e.userChoice).outcome==="accepted"&&(e=null,n.style.display="none")});window.addEventListener("appinstalled",t=>{e=null});
