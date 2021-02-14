(()=>{"use strict";var e,t,n,r,o,i={507:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,"html,body{padding:0;margin:0;font-family:sans-serif}#app{max-width:1200px;margin:auto}header{background-color:darkred;color:white;text-align:left;line-height:0;padding:5px;font-size:18px;margin-bottom:30px;display:flex;justify-content:space-between;align-items:center;position:relative}header .btn-search{padding:0;background:none;color:white;border:none}header .basket{display:flex;justify-content:space-between;align-items:center;padding:5px}header .basket .fa{margin-right:5px}header .basket:hover{border:2px solid white}header .basketList{border:1px solid black;border-radius:5px;background-color:white;color:black;min-height:300px;width:500px;padding:20px;position:absolute;top:100px;right:5px}header .basketList .basket-item{position:relative;border-bottom:1px solid black;line-height:normal;padding:5px;display:grid;grid-template-columns:20% 80%}header .basketList .basket-item img{grid-column-start:1;grid-column-end:2;grid-row-start:1;grid-row-end:3;margin:auto}header .basketList .basket-item .fa-times{position:absolute;top:5px;right:5px;color:red}header .basketList .basket-item::after{content:'';overflow:hidden;clear:both}header .visible{display:block}.product-item{display:inline-block;text-align:center;border:1px solid darkgray;margin:5px;padding:5px;width:200px}.product-item img{height:200px}.product-item h4{margin-top:10px;margin-bottom:5px}.product-item button{line-height:25px;width:30px;margin:1px}.product-item input{line-height:25px;width:40px}.product-item .btnBuyIt{width:initial}.fa-plus-circle{font-size:20px;color:green}.fa-plus-circle:hover{color:lightgreen;font-size:22px}.task-hidden{display:none}.error{font-style:italic;color:darkslategray}\n",""]);const i=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},379:(e,t,n)=>{var r,o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function a(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},r=[],o=0;o<e.length;o++){var s=e[o],c=t.base?s[0]+t.base:s[0],l=n[c]||0,d="".concat(c," ").concat(l);n[c]=l+1;var u=a(d),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==u?(i[u].references++,i[u].updater(p)):i.push({identifier:d,updater:b(p,t),references:1}),r.push(d)}return r}function c(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,d=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function u(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function p(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,f=0;function b(e,t){var n,r,o;if(t.singleton){var i=f++;n=h||(h=c(t)),r=u.bind(null,n,i,!1),o=u.bind(null,n,i,!0)}else n=c(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=a(n[r]);i[o].references--}for(var c=s(e,t),l=0;l<n.length;l++){var d=a(n[l]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}n=c}}}}},a={};function s(e){if(a[e])return a[e].exports;var t=a[e]={id:e,exports:{}};return i[e](t,t.exports,s),t.exports}s.m=i,s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},s.f={},s.e=e=>Promise.all(Object.keys(s.f).reduce(((t,n)=>(s.f[n](e,t),t)),[])),s.u=e=>e+".bundle.js",s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="js-2-hw-6:",s.l=(n,r,o,i)=>{if(e[n])e[n].push(r);else{var a,c;if(void 0!==o)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var u=l[d];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+o){a=u;break}}a||(c=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,s.nc&&a.setAttribute("nonce",s.nc),a.setAttribute("data-webpack",t+o),a.src=n),e[n]=[r];var p=(t,r)=>{a.onerror=a.onload=null,clearTimeout(h);var o=e[n];if(delete e[n],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((e=>e(r))),t)return t(r)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=p.bind(null,a.onerror),a.onload=p.bind(null,a.onload),c&&document.head.appendChild(a)}},s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;s.g.importScripts&&(e=s.g.location+"");var t=s.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=e})(),(()=>{var e={179:0};s.f.j=(t,n)=>{var r=s.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var o=new Promise(((n,o)=>{r=e[t]=[n,o]}));n.push(r[2]=o);var i=s.p+s.u(t),a=new Error;s.l(i,(n=>{if(s.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;a.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",a.name="ChunkLoadError",a.type=o,a.request=i,r[1](a)}}),"chunk-"+t,t)}};var t=(t,n)=>{for(var r,o,[i,a,c]=n,l=0,d=[];l<i.length;l++)o=i[l],s.o(e,o)&&e[o]&&d.push(e[o][0]),e[o]=0;for(r in a)s.o(a,r)&&(s.m[r]=a[r]);for(c&&c(s),t&&t(n);d.length;)d.shift()()},n=self.webpackChunkjs_2_hw_6=self.webpackChunkjs_2_hw_6||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),n=s(379),r=s.n(n),o=s(507),r()(o.Z,{insert:"head",singleton:!1}),o.Z.locals,new Vue({el:"#app",components:{"catalog-page":()=>s.e(79).then(s.bind(s,79)),basket:()=>s.e(843).then(s.bind(s,843)),search:()=>s.e(41).then(s.bind(s,41)),error:()=>s.e(285).then(s.bind(s,285))},data:{localLinkData:{catalogData:"../db/catalogData.json",getBasket:"../db/getBasket.json"},products:[],filtered:[],showBasket:!1,basketContent:{amount:0,countGoods:0,content:[]},errorExist:!1,errorText:""},methods:{checkAmount(){let e=0;for(let t of this.basketContent.content)e+=t.price*t.quantity;this.basketContent.amount=e}},mounted(){fetch(this.localLinkData.catalogData).then((e=>{e.json().then((e=>{this.products=[...e]}))})).catch((e=>{this.errorExist=!0,this.errorText="Что-то пошло не так... Простите, но мы не смогли найти товары. Пожалуйста, зайдите позже!"})),fetch(this.localLinkData.getBasket).then((e=>{e.json().then((e=>{this.basketContent.content=e.contents,this.basketContent.amount=e.amount,this.basketContent.countGoods=e.countGoods}))})).catch((e=>{this.basketContent.content=[],this.basketContent.amount=0,this.basketContent.countGoods=0}))}})})();