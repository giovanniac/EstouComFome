(function(e){function t(t){for(var a,o,i=t[0],c=t[1],u=t[2],p=0,l=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&l.push(n[o][0]),n[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);d&&d(t);while(l.length)l.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],a=!0,o=1;o<r.length;o++){var i=r[o];0!==n[i]&&(a=!1)}a&&(s.splice(t--,1),e=c(c.s=r[0]))}return e}var a={},o={0:0},n={0:0},s=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{2:"322ae13c",3:"8ec2fd8c",4:"84653816"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={2:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var a="css/"+({}[e]||e)+"."+{2:"3a46ea33",3:"31d6cfe0",4:"31d6cfe0"}[e]+".css",n=c.p+a,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var u=s[i],p=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(p===a||p===n))return t()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){u=l[i],p=u.getAttribute("data-href");if(p===a||p===n)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||n,s=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete o[e],d.parentNode.removeChild(d),r(s)},d.href=n;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){o[e]=0})));var a=n[e];if(0!==a)if(a)t.push(a[2]);else{var s=new Promise((function(t,r){a=n[e]=[t,r]}));t.push(a[2]=s);var u,p=document.createElement("script");p.charset="utf-8",p.timeout=120,c.nc&&p.setAttribute("nonce",c.nc),p.src=i(e);var l=new Error;u=function(t){p.onerror=p.onload=null,clearTimeout(d);var r=n[e];if(0!==r){if(r){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",l.name="ChunkLoadError",l.type=a,l.request=o,r[1](l)}n[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:p})}),12e4);p.onerror=p.onload=u,document.head.appendChild(p)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(r,a,function(t){return e[t]}.bind(null,a));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],p=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var d=p;s.push([0,1]),r()})({0:function(e,t,r){e.exports=r("2f39")},"0047":function(e,t,r){},"2f39":function(e,t,r){"use strict";r.r(t);r("e6cf"),r("5319"),r("573e"),r("7d6e"),r("e54f"),r("985d"),r("0047");var a=r("2b0e"),o=r("f476"),n=r("42d2"),s=r("b178");a["a"].use(s["a"],{config:{},lang:o["a"],iconSet:n["a"]});var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"q-app"}},[r("router-view")],1)},c=[],u={name:"App"},p=u,l=r("2877"),d=Object(l["a"])(p,i,c,!1,null,null,null),f=d.exports,m=r("2f62"),g=r("ded3"),h=r.n(g);const b=[{id:"a2f44a9b-286b-4ca6-9586-69b2b31bb37d",name:"Hamburguer",price:35.5,img:"https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},{id:"d05eebd2-d594-4535-bdd6-032f26f2282b",name:"Pizza",price:35.5,img:"https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",subproduct:[{title:"Bordas",options:[{name:"Borda de Catupiry",price:5.5},{name:"Borda de Cheedar",price:4.5}]},{title:"Sabores",options:[{name:"Muçarela",price:37.5},{name:"Calabresa",price:33.5}]}]}],v=" Restaurante comandado pelo chef Paolo Lavezzini. A cozinha é caprichadíssima e moderna, mescla a tradição italiana com excelentes produtos brasileiros. Boa pedida tanto para um almoço executivo como para um jantar a dois.",y=[{id:"ede5ad12-5047-4390-962c-9b1577fcd93e",title:"Restaurante 1",category:["Hamburguers","Pizzas"],description:v,img:"https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",products:b,rating:4},{id:"09f24d24-c77c-4681-91bf-01cfd2b8db04",title:"Restaurante 2",category:["Hamburguers","Pizzas"],description:v,img:"https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",products:b,rating:3},{id:"14943ba5-133a-4d45-8ae2-bcc63610f825",title:"Restaurante 3",category:["Hamburguers","Pizzas"],description:v,img:"https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",products:b,rating:2},{id:"214902cc-373a-493a-b16c-12abb3f57910",title:"Restaurante 4",category:["Hamburguers","Pizzas"],description:v,img:"https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",products:b,rating:5}];var w={restaurants:y};const x=()=>h()({dialog:{showDialog:!1,restaurantData:{},type:"shop"}},w),C={getIcon:e=>t=>""!==t?e.icons.filter((e=>e.name===t))[0]:{icon:"fas fa-asterisk",color:"black"},getSelectorOptions:e=>t=>e.selectors[t],getRestaurants:e=>e.restaurants,getDialog:e=>e.dialog},j={setDialog(e,t){e.dialog.showDialog=!e.dialog.showDialog,e.dialog.restaurantData=t},setDialogType(e,t){e.dialog.type=t.type}},P={setDialog:(e,t)=>{e.commit("setDialog",t)},setDialogType:(e,t)=>{e.commit("setDialogType",t)}};var S={namespaced:!0,getters:C,mutations:j,actions:P,state:x};r("a434");const O=()=>({cart:{restaurantId:"",products:[]}}),T=e=>isNaN(e)?0:e,D={getFullCart:e=>e.cart,getFullCartPrice:e=>e.cart.products.reduce(((e,t)=>T(e.price)+T(t.price)),0),getCartItemNumber:e=>t=>e.cart.products.filter((e=>e.id===t.id)).length},z={addToCart(e,t){e.cart.restaurantId||(e.cart.restaurantId=t.restaurantId),e.cart.restaurantId=t.restaurantId,e.cart.products.push(t)},removeFromCart(e,t){const r=e.cart.products.findIndex((e=>e.id===t.id)),a=e.cart.products.find((e=>e.id===t.id));r>-1&&1!==a&&e.cart.products.splice(r,1)},cleanCart(e,t){e.cart.products=[]}},_={addToCart:(e,t)=>{e.commit("addToCart",t)},removeFromCart:(e,t)=>{e.commit("removeFromCart",t)}};var k={namespaced:!0,getters:D,mutations:z,actions:_,state:O};a["a"].use(m["a"]);var E=function(){const e=new m["a"].Store({modules:{Restaurants:S,Cart:k},strict:!1});return e},I=r("8c4f");const L=[{path:"/",component:()=>r.e(3).then(r.bind(null,"713b")),children:[{path:"",component:()=>r.e(2).then(r.bind(null,"eb9c"))}]},{path:"*",component:()=>r.e(4).then(r.bind(null,"e51e"))}];var A=L;a["a"].use(I["a"]);var B=function(){const e=new I["a"]({scrollBehavior:()=>({x:0,y:0}),routes:A,mode:"hash",base:""});return e},H=async function(){const e="function"===typeof E?await E({Vue:a["a"]}):E,t="function"===typeof B?await B({Vue:a["a"],store:e}):B;e.$router=t;const r={router:t,store:e,render:e=>e(f),el:"#q-app"};return{app:r,store:e,router:t}},N=r("a925"),M={vue:"VueJS",js:"Javascript",css:"CSS3",html:"HTML5"},R={vue:"VueJS",js:"Javascript",css:"CSS3",html:"HTML5"},F={"en-us":M,"pt-br":R};a["a"].use(N["a"]);const J=new N["a"]({locale:"en-us",fallbackLocale:"en-us",messages:F});var V=({app:e})=>{e.i18n=J};const q="";async function $(){const{app:e,store:t,router:r}=await H();let o=!1;const n=e=>{o=!0;const t=Object(e)===e?r.resolve(e).route.fullPath:e;window.location.href=t},s=window.location.href.replace(window.location.origin,""),i=[V];for(let u=0;!1===o&&u<i.length;u++)if("function"===typeof i[u])try{await i[u]({app:e,router:r,store:t,Vue:a["a"],ssrContext:null,redirect:n,urlPath:s,publicPath:q})}catch(c){return c&&c.url?void(window.location.href=c.url):void console.error("[Quasar] boot error:",c)}!0!==o&&new a["a"](e)}$()}});