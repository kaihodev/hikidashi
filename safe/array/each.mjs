import y from"@/safe/util/identity";function u(t,r=y,o=void 0){if(t==null)throw new TypeError("arr is null or not defined");const e=Object(t),i=e.length>>>0;if(typeof r!="function")throw new TypeError(`${r} is not a function`);for(let n=0;n!==i;++n)if(n in e){const f=e[n];r.call(o,f,n,e)}}var s=u;export{s as default};
