module.exports=function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){t.exports=r(1)},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function o(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)}function u(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f(t){var e=t.name,r=void 0===e?"strictduckInterface":e,n=t.methods,o=void 0===n?[]:n,u=new p["default"](r,o);return function(t){return p["default"].ensureImplements(t,u)}}function a(t){var e=t.name,r=t.parent,n=void 0===r?y:r,f=t.interfaces,a=void 0===f?[]:f,s={};return s[e]=function(t){function e(t){var r;c(this,e);for(var n=arguments.length,i=Array(n>1?n-1:0),f=1;n>f;f++)i[f-1]=arguments[f];return u(this,(r=Object.getPrototypeOf(e)).call.apply(r,[this,t].concat(o(a),i)))}return i(e,t),e}(n),s[e]}Object.defineProperty(e,"__esModule",{value:!0});var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};e.shouldImplement=f,e.extension=a;var l=r(2),p=n(l),y=function d(t){var e=this;c(this,d),Object.assign(this,t);for(var r=arguments.length,n=Array(r>1?r-1:0),o=1;r>o;o++)n[o-1]=arguments[o];n.forEach(function(t){return s("function"==t)?t(e):f(t)(e)})};e["default"]=y},function(t,e){t.exports=require("Duckface/src/duckface")}]);