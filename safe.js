"use strict";var p=Object.defineProperty;var w=Object.getOwnPropertyDescriptor;var N=Object.getOwnPropertyNames;var g=Object.prototype.hasOwnProperty;var Q=(r,e)=>{for(var i in e)p(r,i,{get:e[i],enumerable:!0})},B=(r,e,i,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of N(e))!g.call(r,n)&&n!==i&&p(r,n,{get:()=>e[n],enumerable:!(t=w(e,n))||t.enumerable});return r};var C=r=>B(p({},"__esModule",{value:!0}),r);var G={};Q(G,{add:()=>l,divide:()=>T,each:()=>d,filter:()=>b,forEach:()=>d,identity:()=>f,isArithmeticSequence:()=>s,map:()=>h,mapip:()=>A,modulo:()=>L,multiply:()=>c,noop:()=>x,remainder:()=>k,subtract:()=>y});module.exports=C(G);function E(r=0,e=0){return+r+ +e}var l=E;function O(r=0,e=0){return+r-+e}var y=O;function v(r=1,e=1){return+r*+e}var c=v;function V(r=1,e=1){return+r/+e}var T=V;function j(r=1,e=1){return+r%+e}var k=j;function R(r=1,e=1){return r=+r,e=+e,(r%e+e)%e}var L=R;function $(r){return r}var f=$;function q(...r){}var x=q;function S(r,e=f,i=void 0){if(r==null)throw new TypeError("arr is null or not defined");let t=Object(r),n=t.length>>>0,o=Array(n);if(typeof e!="function")throw new TypeError(`${e} is not a function`);for(let u=0;u!==n;++u)if(u in t){let a=t[u],m=e.call(i,a,u,t);o[u]=m}return o}var h=S;function z(r,e=f,i=void 0){if(r==null)throw new TypeError("arr is null or not defined");let t=Object(r),n=t.length>>>0;if(typeof e!="function")throw new TypeError(`${e} is not a function`);for(let o=0;o!==n;++o)if(o in t){let u=t[o],a=e.call(i,u,o,t);t[o]=a}return t}var A=z;function D(r,e=f,i=void 0){if(r==null)throw new TypeError("arr is null or not defined");let t=Object(r),n=t.length>>>0;if(typeof e!="function")throw new TypeError(`${e} is not a function`);for(let o=0;o!==n;++o)if(o in t){let u=t[o];e.call(i,u,o,t)}}var d=D;function F(r,e=f,i=void 0){if(r==null)throw new TypeError("arr is null or not defined");let t=Object(r),n=t.length>>>0,o=Array(n);if(typeof e!="function")throw new TypeError(`${e} is not a function`);for(var u=0,a=0;a!==n;++a)if(a in t){let m=t[a];e.call(i,m,a,t)&&(o[u++]=m)}return o.length=u,o}var b=F;function s(r){let e=r.length;if(!e||!--e)return!0;let i=+r[1]-+r[0];for(;e;)if(i!==+r[e]-+r[--e])return!1;return!0}0&&(module.exports={add,divide,each,filter,forEach,identity,isArithmeticSequence,map,mapip,modulo,multiply,noop,remainder,subtract});
