/*! smooth-scroll v15.1.0 | (c) 2018 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
!(function(t,e){"function"==typeof define&&define.amd?define([],(function(){return e(t)})):"object"==typeof exports?module.exports=e(t):t.SmoothScroll=e(t)})("undefined"!=typeof global?global:"undefined"!=typeof window?window:this,(function(t){"use strict";var e={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},n=function(){return"querySelector"in document&&"addEventListener"in t&&"requestAnimationFrame"in t&&"closest"in t.Element.prototype},o=function(){var t={};return Array.prototype.forEach.call(arguments,(function(e){for(var n in e){if(!e.hasOwnProperty(n))return;t[n]=e[n]}})),t},r=function(e){return!!("matchMedia"in t&&t.matchMedia("(prefers-reduced-motion)").matches)},a=function(e){return parseInt(t.getComputedStyle(e).height,10)},i=function(t){var e;try{e=decodeURIComponent(t)}catch(n){e=t}return e},u=function(t){"#"===t.charAt(0)&&(t=t.substr(1));for(var e,n=String(t),o=n.length,r=-1,a="",i=n.charCodeAt(0);++r<o;){if(0===(e=n.charCodeAt(r)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");e>=1&&e<=31||127==e||0===r&&e>=48&&e<=57||1===r&&e>=48&&e<=57&&45===i?a+="\\"+e.toString(16)+" ":a+=e>=128||45===e||95===e||e>=48&&e<=57||e>=65&&e<=90||e>=97&&e<=122?n.charAt(r):"\\"+n.charAt(r)}var u;try{u=decodeURIComponent("#"+a)}catch(t){u="#"+a}return u},c=function(t,e){var n;return"easeInQuad"===t.easing&&(n=e*e),"easeOutQuad"===t.easing&&(n=e*(2-e)),"easeInOutQuad"===t.easing&&(n=e<.5?2*e*e:(4-2*e)*e-1),"easeInCubic"===t.easing&&(n=e*e*e),"easeOutCubic"===t.easing&&(n=--e*e*e+1),"easeInOutCubic"===t.easing&&(n=e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1),"easeInQuart"===t.easing&&(n=e*e*e*e),"easeOutQuart"===t.easing&&(n=1- --e*e*e*e),"easeInOutQuart"===t.easing&&(n=e<.5?8*e*e*e*e:1-8*--e*e*e*e),"easeInQuint"===t.easing&&(n=e*e*e*e*e),"easeOutQuint"===t.easing&&(n=1+--e*e*e*e*e),"easeInOutQuint"===t.easing&&(n=e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e),t.customEasing&&(n=t.customEasing(e)),n||e},s=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},l=function(e,n,o,r){var a=0;if(e.offsetParent)do{a+=e.offsetTop,e=e.offsetParent}while(e);return a=Math.max(a-n-o,0),r&&(a=Math.min(a,s()-t.innerHeight)),a},d=function(t){return t?a(t)+t.offsetTop:0},f=function(t,e){var n=e.speedAsDuration?e.speed:Math.abs(t/1e3*e.speed);return e.durationMax&&n>e.durationMax?e.durationMax:e.durationMin&&n<e.durationMin?e.durationMin:n},m=function(e){if(history.replaceState&&e.updateURL&&!history.state){var n=t.location.hash;n=n||t.pageYOffset,history.replaceState({smoothScroll:JSON.stringify(e),anchor:n||t.pageYOffset},document.title,n||t.location.href)}},h=function(t,e,n){e||history.pushState&&n.updateURL&&history.pushState({smoothScroll:JSON.stringify(n),anchor:t.id},document.title,t===document.documentElement?"#top":"#"+t.id)},p=function(e,n,o){0===e&&document.body.focus(),o||(e.focus(),document.activeElement!==e&&(e.setAttribute("tabindex","-1"),e.focus(),e.style.outline="none"),t.scrollTo(0,n))},g=function(e,n,o,r){if(n.emitEvents&&"function"==typeof t.CustomEvent){var a=new CustomEvent(e,{bubbles:!0,detail:{anchor:o,toggle:r}});document.dispatchEvent(a)}};return function(a,y){var v,S,E,b,O,I,M={};M.cancelScroll=function(t){cancelAnimationFrame(I),I=null,t||g("scrollCancel",v)},M.animateScroll=function(n,r,a){var i=o(v||e,a||{}),u="[object Number]"===Object.prototype.toString.call(n),m=u||!n.tagName?null:n;if(u||m){var y=t.pageYOffset;i.header&&!b&&(b=document.querySelector(i.header));var S,E,O,A=d(b),C=u?n:l(m,A,parseInt("function"==typeof i.offset?i.offset(n,r):i.offset,10),i.clip),w=C-y,L=s(),H=0,q=f(w,i),x=function(e,o){var a=t.pageYOffset;if(e==o||a==o||(y<o&&t.innerHeight+a)>=L)return M.cancelScroll(!0),p(n,o,u),g("scrollStop",i,n,r),S=null,I=null,!0},Q=function(e){S||(S=e),H+=e-S,E=H/parseInt(q,10),E=E>1?1:E,O=y+w*c(i,E),t.scrollTo(0,Math.floor(O)),x(O,C)||(I=t.requestAnimationFrame(Q),S=e)};0===t.pageYOffset&&t.scrollTo(0,0),h(n,u,i),g("scrollStart",i,n,r),M.cancelScroll(!0),t.requestAnimationFrame(Q)}};var A=function(e){if(!r()&&0===e.button&&!e.metaKey&&!e.ctrlKey&&"closest"in e.target&&(E=e.target.closest(a))&&"a"===E.tagName.toLowerCase()&&!e.target.closest(v.ignore)&&E.hostname===t.location.hostname&&E.pathname===t.location.pathname&&/#/.test(E.href)){var n=u(i(E.hash)),o=v.topOnEmptyHash&&"#"===n?document.documentElement:document.querySelector(n);o=o||"#top"!==n?o:document.documentElement,o&&(e.preventDefault(),m(v),M.animateScroll(o,E))}},C=function(t){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(v)){var e=history.state.anchor;e&&0!==e&&!(e=document.querySelector(u(i(history.state.anchor))))||M.animateScroll(e,null,{updateURL:!1})}};return M.destroy=function(){v&&(document.removeEventListener("click",A,!1),t.removeEventListener("popstate",C,!1),M.cancelScroll(),v=null,S=null,E=null,b=null,O=null,I=null)},M.init=function(r){if(!n())throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";M.destroy(),v=o(e,r||{}),b=v.header?document.querySelector(v.header):null,document.addEventListener("click",A,!1),v.updateURL&&v.popstate&&t.addEventListener("popstate",C,!1)},M.init(y),M}}));