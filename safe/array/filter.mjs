import s from"@/safe/util/identity";function u(t,e=s,y=void 0){if(t==null)throw new TypeError("arr is null or not defined");const r=Object(t),i=r.length>>>0,o=Array(i);if(typeof e!="function")throw new TypeError(`${e} is not a function`);for(var f=0,n=0;n!==i;++n)if(n in r){const a=r[n];e.call(y,a,n,r)&&(o[f++]=a)}return o.length=f,o}var d=u;export{d as default};
