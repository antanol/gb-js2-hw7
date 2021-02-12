(()=>{"use strict";var e,t,r,n,o,a={507:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(645),o=r.n(n)()((function(e){return e[1]}));o.push([e.id,".tasks .texttasks,.tasks .answers{padding:1em 3em}html,body{padding:0;margin:0;font-family:sans-serif}.tasks{display:grid;grid-template-columns:1fr 2fr}.tasks .texttasks h3,.tasks .answers h3{border-bottom:1px solid black}.tasks li{margin-bottom:10px}.tasks details{font-style:italic}.tasks summary{font-style:normal;color:#458daa}.tasks .answers{grid-column-start:2;grid-row-start:1;grid-row-end:3}.tasks .hidden-screen{display:none !important}.tasks header{background-color:darkred;color:white;text-align:left;line-height:40px;padding:5px;font-size:18px;margin-bottom:30px;display:flex;justify-content:space-between;align-items:center;position:relative}.tasks header .btn-search{padding:0;background:none;color:white;border:none}.tasks header .basket{display:flex;justify-content:space-between;align-items:center;padding:5px}.tasks header .basket .fa{margin-right:5px}.tasks header .basket:hover{border:2px solid white}.tasks header .basketList{border:1px solid black;border-radius:5px;background-color:white;color:black;min-height:300px;width:500px;padding:20px;position:absolute;top:100px;right:5px}.tasks header .basketList .basket-item{border-bottom:1px solid black;display:grid;grid-template-columns:20% 80%}.tasks header .basketList .basket-item img{grid-column-start:1;grid-column-end:2;grid-row-start:1;grid-row-end:3;margin:auto}.tasks header .basketList .basket-item::after{content:'';overflow:hidden;clear:both}.tasks header .visible{display:block}.tasks .product-item{display:inline-block;text-align:center;border:1px solid darkgray;margin:5px;padding:5px;width:200px}.tasks .product-item img{height:200px}.tasks .product-item h4{margin-top:10px;margin-bottom:5px}.tasks .product-item button{line-height:25px;width:30px;margin:1px}.tasks .product-item input{line-height:25px;width:40px}.tasks .product-item .btnBuyIt{width:initial}.tasks .fa-plus-circle{font-size:20px;color:green}.tasks .fa-plus-circle:hover{color:lightgreen;font-size:22px}.hamburger-constructor{width:600px;margin-top:20px;padding:0 40px;box-shadow:5px 5px 5px lightgrey;position:relative}.hamburger-constructor .fa{position:absolute;top:calc((100% - 20px) /2);font-size:40px;color:gray}.hamburger-constructor .fa.fa-angle-right{right:15px}.hamburger-constructor .fa.fa-angle-left{left:15px}.hamburger-constructor .fa.hidden-arrow{display:none}.hamburger-constructor .fa:hover{color:yellowgreen}.hamburger-constructor h2{margin:5px;font-weight:400}.hamburger-constructor hr{margin:10px 0 0 0}section hr{margin:0 0 10px 0}section label{display:inline-block;min-width:160px;margin:10px;padding:20px;border:2px solid gray;border-radius:10px;text-align:center}section label:hover{border-color:yellowgreen}section label input{display:none}section label img{height:100px}section label .params{font-style:italic;color:gray;font-size:70%}section label .price{font-weight:bold}.task-hidden{display:none}.error{font-style:italic;color:darkslategray}\n",""]);const a=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=e(t);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,n){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(n)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);n&&o[c[0]]||(r&&(c[2]?c[2]="".concat(r," and ").concat(c[2]):c[2]=r),t.push(c))}},t}},379:(e,t,r)=>{var n,o=function(){var e={};return function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[t]=r}return e[t]}}(),a=[];function i(e){for(var t=-1,r=0;r<a.length;r++)if(a[r].identifier===e){t=r;break}return t}function s(e,t){for(var r={},n=[],o=0;o<e.length;o++){var s=e[o],c=t.base?s[0]+t.base:s[0],l=r[c]||0,d="".concat(c," ").concat(l);r[c]=l+1;var u=i(d),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==u?(a[u].references++,a[u].updater(p)):a.push({identifier:d,updater:g(p,t),references:1}),n.push(d)}return n}function c(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var a=r.nc;a&&(n.nonce=a)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var l,d=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function u(e,t,r,n){var o=r?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function p(e,t,r){var n=r.css,o=r.media,a=r.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var h=null,f=0;function g(e,t){var r,n,o;if(t.singleton){var a=f++;r=h||(h=c(t)),n=u.bind(null,r,a,!1),o=u.bind(null,r,a,!0)}else r=c(t),n=p.bind(null,r,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n));var r=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<r.length;n++){var o=i(r[n]);a[o].references--}for(var c=s(e,t),l=0;l<r.length;l++){var d=i(r[l]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}r=c}}}}},i={};function s(e){if(i[e])return i[e].exports;var t=i[e]={id:e,exports:{}};return a[e](t,t.exports,s),t.exports}s.m=a,s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},s.f={},s.e=e=>Promise.all(Object.keys(s.f).reduce(((t,r)=>(s.f[r](e,t),t)),[])),s.u=e=>e+".bundle.js",s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="js-2-hw-6:",s.l=(r,n,o,a)=>{if(e[r])e[r].push(n);else{var i,c;if(void 0!==o)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var u=l[d];if(u.getAttribute("src")==r||u.getAttribute("data-webpack")==t+o){i=u;break}}i||(c=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,s.nc&&i.setAttribute("nonce",s.nc),i.setAttribute("data-webpack",t+o),i.src=r),e[r]=[n];var p=(t,n)=>{i.onerror=i.onload=null,clearTimeout(h);var o=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),t)return t(n)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),c&&document.head.appendChild(i)}},s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;s.g.importScripts&&(e=s.g.location+"");var t=s.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=e})(),(()=>{var e={179:0};s.f.j=(t,r)=>{var n=s.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise(((r,o)=>{n=e[t]=[r,o]}));r.push(n[2]=o);var a=s.p+s.u(t),i=new Error;s.l(a,(r=>{if(s.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+t,t)}};var t=(t,r)=>{for(var n,o,[a,i,c]=r,l=0,d=[];l<a.length;l++)o=a[l],s.o(e,o)&&e[o]&&d.push(e[o][0]),e[o]=0;for(n in i)s.o(i,n)&&(s.m[n]=i[n]);for(c&&c(s),t&&t(r);d.length;)d.shift()()},r=self.webpackChunkjs_2_hw_6=self.webpackChunkjs_2_hw_6||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),r=s(379),n=s.n(r),o=s(507),n()(o.Z,{insert:"head",singleton:!1}),o.Z.locals,new Vue({el:"#app",components:{"catalog-page":()=>s.e(79).then(s.bind(s,79)),basket:()=>s.e(843).then(s.bind(s,843)),search:()=>s.e(41).then(s.bind(s,41)),error:()=>s.e(285).then(s.bind(s,285))},data:{linkData:{catalogData:"https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json",getBasket:"https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/getBasket.json"},filtered:[],showBasket:!1,products:[],basketContent:{amount:0,countGoods:0,content:[]},errorExist:!1,errorText:""},methods:{checkAmount(){let e=0;for(let t of this.basketContent.content)e+=t.price*t.quantity;this.basketContent.amount=e}},mounted(){fetch(this.linkData.catalogData).then((e=>{e.json().then((e=>{this.products=[...e]}))})).catch((e=>{this.errorExist=!0,this.errorText="Что-то пошло не так... Простите, но мы не смогли найти товары. Пожалуйста, зайдите позже!"})),fetch(this.linkData.getBasket).then((e=>{e.json().then((e=>{this.basketContent.content=e.contents,this.basketContent.amount=e.amount,this.basketContent.countGoods=e.countGoods}))})).catch((e=>{this.basketContent.content=[],this.basketContent.amount=0,this.basketContent.countGoods=0}))}})})();