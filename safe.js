var s=Object.defineProperty;var w=e=>s(e,"__esModule",{value:!0});var N=(e,r)=>{for(var i in r)s(e,i,{get:r[i],enumerable:!0})};w(exports);N(exports,{add:()=>l,divide:()=>T,each:()=>d,filter:()=>b,forEach:()=>d,identity:()=>u,isArithmeticSequence:()=>p,map:()=>x,mapip:()=>A,modulo:()=>h,multiply:()=>c,noop:()=>L,remainder:()=>k,subtract:()=>y});function g(e=0,r=0){return+e+ +r}var l=g;function Q(e=0,r=0){return+e-+r}var y=Q;function B(e=1,r=1){return+e*+r}var c=B;function C(e=1,r=1){return+e/+r}var T=C;function E(e=1,r=1){return+e%+r}var k=E;function O(e=1,r=1){return e=+e,r=+r,(e%r+e)%r}var h=O;function v(e){return e}var u=v;function V(...e){}var L=V;function j(e,r=u,i=void 0){if(e==null)throw new TypeError("arr is null or not defined");let t=Object(e),f=t.length>>>0,n=Array(f);if(typeof r!="function")throw new TypeError(`${r} is not a function`);for(let o=0;o!==f;++o)if(o in t){let a=t[o],m=r.call(i,a,o,t);n[o]=m}return n}var x=j;function R(e,r=u,i=void 0){if(e==null)throw new TypeError("arr is null or not defined");let t=Object(e),f=t.length>>>0;if(typeof r!="function")throw new TypeError(`${r} is not a function`);for(let n=0;n!==f;++n)if(n in t){let o=t[n],a=r.call(i,o,n,t);t[n]=a}return t}var A=R;function $(e,r=u,i=void 0){if(e==null)throw new TypeError("arr is null or not defined");let t=Object(e),f=t.length>>>0;if(typeof r!="function")throw new TypeError(`${r} is not a function`);for(let n=0;n!==f;++n)if(n in t){let o=t[n];r.call(i,o,n,t)}}var d=$;function q(e,r=u,i=void 0){if(e==null)throw new TypeError("arr is null or not defined");let t=Object(e),f=t.length>>>0,n=Array(f);if(typeof r!="function")throw new TypeError(`${r} is not a function`);for(var o=0,a=0;a!==f;++a)if(a in t){let m=t[a];r.call(i,m,a,t)&&(n[o++]=m)}return n.length=o,n}var b=q;function p(e){let r=e.length;if(!r||!--r)return!0;let i=+e[1]-+e[0];for(;r;)if(i!==+e[r]-+e[--r])return!1;return!0}0&&(module.exports={add,divide,each,filter,forEach,identity,isArithmeticSequence,map,mapip,modulo,multiply,noop,remainder,subtract});
