if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise((async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()}))),a.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},a=(a,s)=>{Promise.all(a.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(a)};self.define=(a,n,r)=>{s[a]||(s[a]=Promise.resolve().then((()=>{let s={};const o={uri:location.origin+a.slice(1)};return Promise.all(n.map((a=>{switch(a){case"exports":return s;case"module":return o;default:return e(a)}}))).then((e=>{const a=r(...e);return s.default||(s.default=a),s}))})))}}define("./sw.js",["./workbox-a8b10d99"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next//static/media/favicon.95b945cc.png",revision:"IMooQ7aMbaXKaTGHTBvS-"},{url:"/_next//static/media/ogImage.8d54bae8.png",revision:"IMooQ7aMbaXKaTGHTBvS-"},{url:"/_next/server/middleware-manifest.json",revision:"IMooQ7aMbaXKaTGHTBvS-"},{url:"/_next/server/middleware-runtime.js",revision:"IMooQ7aMbaXKaTGHTBvS-"},{url:"/_next/server/pages/_middleware.js",revision:"IMooQ7aMbaXKaTGHTBvS-"},{url:"/_next/static/IMooQ7aMbaXKaTGHTBvS-/_buildManifest.js",revision:"IMooQ7aMbaXKaTGHTBvS-"},{url:"/_next/static/IMooQ7aMbaXKaTGHTBvS-/_middlewareManifest.js",revision:"IMooQ7aMbaXKaTGHTBvS-"},{url:"/_next/static/IMooQ7aMbaXKaTGHTBvS-/_ssgManifest.js",revision:"IMooQ7aMbaXKaTGHTBvS-"},{url:"/_next/static/chunks/651.4e931e5b3f315a19.js",revision:"IMooQ7aMbaXKaTGHTBvS-"},{url:"/_next/static/chunks/framework-c9ea973475b1a840.js",revision:"IMooQ7aMbaXKaTGHTBvS-"},{url:"/_next/static/chunks/main-98f4d5401a70b1b7.js",revision:"IMooQ7aMbaXKaTGHTBvS-"},{url:"/_next/static/chunks/pages/_error-02d4af21aae99025.js",revision:"IMooQ7aMbaXKaTGHTBvS-"},{url:"/_next/static/chunks/pages/about-663dbac5a2affdae.js",revision:"IMooQ7aMbaXKaTGHTBvS-"},{url:"/_next/static/chunks/pages/index-9b86cea4d85b1419.js",revision:"IMooQ7aMbaXKaTGHTBvS-"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"IMooQ7aMbaXKaTGHTBvS-"},{url:"/_next/static/chunks/webpack-b6a1e900040e229e.js",revision:"IMooQ7aMbaXKaTGHTBvS-"},{url:"/apple-icon.png",revision:"84f853e478a61517334232b9833e551d"},{url:"/favicon.png",revision:"c1ff9153350aa4e169148726db97c0b5"},{url:"/manifest.json",revision:"86c5f3aaa2bb67dd9cb1868acef03130"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
