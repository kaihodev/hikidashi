var n=Object.create,o=Object.defineProperty,p=Object.getPrototypeOf,t=Object.prototype.hasOwnProperty,u=Object.getOwnPropertyNames,x=Object.getOwnPropertyDescriptor;var r=a=>o(a,"__esModule",{value:!0});var b=(a,e)=>{for(var f in e)o(a,f,{get:e[f],enumerable:!0})},c=(a,e,f)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of u(e))!t.call(a,s)&&s!=="default"&&o(a,s,{get:()=>e[s],enumerable:!(f=x(e,s))||f.enumerable});return a},m=a=>c(r(o(a!=null?n(p(a)):{},"default",a&&a.__esModule&&"default"in a?{get:()=>a.default,enumerable:!0}:{value:a,enumerable:!0})),a);r(exports);b(exports,{safe:()=>d,unsafe:()=>g});var d=m(require("./safe")),g=m(require("./unsafe"));0&&(module.exports={safe,unsafe});
