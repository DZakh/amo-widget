!function(){/* eslint-disable */"use strict";var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t="object"==typeof e&&e&&e.Object===Object&&e,o="object"==typeof self&&self&&self.Object===Object&&self,n=(t||o||Function("return this")()).Symbol,r=Object.prototype,s=r.hasOwnProperty,a=r.toString,d=n?n.toStringTag:void 0;var c=function(e){var t=s.call(e,d),o=e[d];try{e[d]=void 0;var n=!0}catch(e){}var r=a.call(e);return n&&(t?e[d]=o:delete e[d]),r},i=Object.prototype.toString;var u=function(e){return i.call(e)},l=n?n.toStringTag:void 0;var f=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":l&&l in Object(e)?c(e):u(e)};var b=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)};var y=function(e){if(!b(e))return!1;var t=f(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t};const p={ready:"ready",destroy:"destroy","update:sb-fields":"update:sb-fields","update:sb-statues":"update:sb-statues"};window.Amo=()=>{const e={},t={[p.ready]:new Set,[p.destroy]:new Set,[p["update:sb-statuses"]]:new Set,[p["update:sb-fields"]]:new Set},o=n=>{if(!n.data)return;const r=n.data,s=r.method,a=r.payload;switch(console.warn("SDK message",n),!0){case s===p.destroy:window.removeEventListener("message",o);case t[s]:{const e=t[s];e&&e.forEach(e=>{e(a)});break}case"response"===s:{const t=a.requestIdx,o=a.data;e[t](o),delete e[t];break}}};return window.addEventListener("message",o),{on:(e,o)=>{console.warn("SDK ON",e,o);const n=t[e];n&&y(o)&&n.add(o)},off:(e,o)=>{const n=t[e];n&&n.delete(o)},destroy:()=>{var e;e={method:"destroy"},window.parent.postMessage(e,"*")},request:e=>Promise.resolve({error:"Unexpected requested entity."})}}}();
