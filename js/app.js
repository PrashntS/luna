!function(){"use strict";var r="undefined"==typeof window?global:window;if("function"!=typeof r.require){var e={},n={},t={},i={}.hasOwnProperty,o=/^\.\.?(\/|$)/,u=function(r,e){for(var n,t=[],i=(o.test(e)?r+"/"+e:e).split("/"),u=0,c=i.length;c>u;u++)n=i[u],".."===n?t.pop():"."!==n&&""!==n&&t.push(n);return t.join("/")},c=function(r){return r.split("/").slice(0,-1).join("/")},f=function(e){return function(n){var t=u(c(e),n);return r.require(t,e)}},l=function(r,e){var t={id:r,exports:{}};return n[r]=t,e(t.exports,f(r),t),t.exports},a=function(r){return t[r]?a(t[r]):r},s=function(r,t){null==t&&(t="/");var o=a(r);if(i.call(n,o))return n[o].exports;if(i.call(e,o))return l(o,e[o]);throw new Error("Cannot find module '"+r+"' from '"+t+"'")};s.alias=function(r,e){t[e]=r},s.reset=function(){e={},n={},t={}};var p=/\.[^.\/]+$/,v=/\/index(\.[^\/]+)?$/,d=function(r){if(p.test(r)){var e=r.replace(p,"");i.call(t,e)&&t[e].replace(p,"")!==e+"/index"||(t[e]=r)}if(v.test(r)){var n=r.replace(v,"");i.call(t,n)||(t[n]=r)}};s.register=s.define=function(r,t){if("object"==typeof r)for(var o in r)i.call(r,o)&&s.register(o,r[o]);else e[r]=t,delete n[r],d(r)},s.list=function(){var r=[];for(var n in e)i.call(e,n)&&r.push(n);return r},s.brunch=!0,s._cache=n,r.require=s}}(),require.register("app",function(r,e,n){var t;t={init:function(){return console.log("init success")}},n.exports=t});