import a from"@/safe/util/identity";function s(t,e=a,f=void 0){if(t==null)throw new TypeError("arr is null or not defined");const r=Object(t),o=r.length>>>0,i=Array(o);if(typeof e!="function")throw new TypeError(`${e} is not a function`);for(let n=0;n!==o;++n)if(n in r){const u=r[n],y=e.call(f,u,n,r);i[n]=y}return i}var T=s;export{T as default};
