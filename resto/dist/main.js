!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);(()=>{const e=document.querySelector("#resto"),t=document.createElement("header"),n=document.createElement("h1"),r=document.createTextNode("pizza academy");n.appendChild(r),t.appendChild(n),e.appendChild(t);const o=document.createElement("p"),c=document.createTextNode("the best");o.appendChild(c),e.appendChild(o);const d=document.createElement("img");d.src="img/restaurant.jpg",e.appendChild(d)})();(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("tabsy");const n=document.createElement("input");n.setAttribute("type","radio"),n.setAttribute("name","tab"),n.setAttribute("id","tab1"),n.checked=!0;const r=document.createElement("label");r.setAttribute("class","tabButton"),r.setAttribute("for","tab1");const o=document.createTextNode("Resto");r.appendChild(o);const c=function(){const e=document.createElement("div");e.classList.add("tab");const t=document.createElement("div");return t.classList.add("content"),t.id="resto",e.appendChild(t),e}();t.appendChild(n),t.appendChild(r),t.appendChild(c),e.appendChild(t)})()()}]);