!function(){/* eslint-disable */"use strict";var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t="object"==typeof e&&e&&e.Object===Object&&e,n="object"==typeof self&&self&&self.Object===Object&&self,o=(t||n||Function("return this")()).Symbol,a=Object.prototype,r=a.hasOwnProperty,s=a.toString,d=o?o.toStringTag:void 0;var c=function(e){var t=r.call(e,d),n=e[d];try{e[d]=void 0;var o=!0}catch(e){}var a=s.call(e);return o&&(t?e[d]=n:delete e[d]),a},i=Object.prototype.toString;var l=function(e){return i.call(e)},u=o?o.toStringTag:void 0;var f=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":u&&u in Object(e)?c(e):l(e)};var b=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)};var w=function(e){if(!b(e))return!1;var t=f(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},p="GET_FIELDS",v="GET_STATUSES",y="SET_INPUT_VALUES";const S=(()=>{let e=1;return()=>e++})();window.Amo=()=>{const e={ready:new Set,"update:sb-statuses":new Set,"update:sb-fields":new Set},t=e=>{const t=S();return console.warn("request data",e,t),new Promise(n=>{var o;o=Object.assign({},e,{REQUEST_ID:t}),window.parent.postMessage(o,"*")})},n=t=>{if(console.warn("onsdkmessage",t),!t.data)return;const n=t.data,o=n.method,a=n.payload,r=e[o];r&&r.forEach(e=>{e(a)}),t.data.REQUEST_ID&&(t.data.method,window.requests[t.data.REQUEST_ID](t.data.payload))};window.addEventListener("message",n);return{on:(t,n)=>{console.warn("mmm",t);const o=e[t];o&&w(n)&&o.add(n)},off:(t,n)=>{const o=e[t];o&&o.delete(n)},destroy:()=>{window.removeEventListener("message",n)},setInputValues:e=>t({method:y,payload:e}),getFields:()=>t({method:p}),getStatuses:()=>t({method:v})}}}();
