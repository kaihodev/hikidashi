var x=Object.defineProperty;var C=e=>x(e,"__esModule",{value:!0});var w=(e,t)=>{C(e);for(var r in t)x(e,r,{get:t[r],enumerable:!0})};w(exports,{each:()=>p,eachLeft:()=>k,eachRight:()=>p,filter:()=>m,filterLeft:()=>m,filterRight:()=>c,forEach:()=>p,includes:()=>l,includesLeft:()=>l,includesRight:()=>I,indexOf:()=>n,indexOfLeft:()=>n,indexOfRight:()=>H,invokeEach:()=>y,invokeEachLeft:()=>F,invokeEachRight:()=>y,isArithmeticSequence:()=>L,map:()=>u,mapLeft:()=>s,mapRight:()=>u,mapip:()=>d,mapipLeft:()=>g,mapipRight:()=>d,partition:()=>A,partitionLeft:()=>B,partitionRight:()=>A,reduce:()=>h,reduceLeft:()=>h,reduceRight:()=>G});var R=(e,t)=>{let r=e.length,a=Array(r);for(;r--;)a[r]=t(e[r],r,e);return a},u=R;function s(e,t){let r=0,a=e.length,i=Array(r);for(;r!==a;)i[r]=t(e[r],r++,e);return i}var v=(e,t)=>{let r=e.length;for(;r--;)e[r]=t(e[r],r,e);return e},d=v;var O=(e,t)=>{let r=0,a=e.length;for(;r!==a;)e[r]=t(e[r],r++,e);return e},g=O;var E=(e,t)=>{let r=e.length;for(;r--;)t(e[r],r,e)},p=E;var b=(e,t)=>{let r=0,a=e.length;for(;r!==a;)t(e[r],r++,e)},k=b;var q=(e,t=[])=>{let r=e.length;for(;r--;)e[r].apply(null,t)},y=q;var S=(e,t)=>{let r=e.length,a=Array(r);for(var i,o=0,f=0;f!==r;++f)t(i=e[f],f,e)&&(a[o++]=i);return a.length=o,a},m=S;function c(e,t){let r=e.length,a=Array(r);for(var i,o=0;r--;)i=e[r],t(i,r,e)&&(a[o++]=i);return a.length=o,a}var j=(e,t,r=void 0)=>{let a=+(r===void 0),i=e.length,o=a?e[0]:r;if(!i)return o;for(;a!==i;)o=t(o,e[a],a++,e);return o},h=j;function z(e,t){let r=[[],[]];for(let a,i,o=e.length;o--;a[a.length]=i)a=r[t(i=e[o],o,e)]||=[];return r}var A=z;function D(e,t){let r=[[],[]];for(let a,i,o=0,f=e.length;o!==f;a[a.length]=i)a=r[t(i=e[o],o++,e)]||=[];return r}var B=D;function L(e){let t=e.length-1,r=e[1]-e[0];for(;t;)if(r!==e[t]-e[--t])return!1;return!0}function n(e,t,r=0){for(let a=r,i=e.length;a!==i;++a)if(e[a]===t)return a;return-1}function l(e,t,r=0){return n(e,t,r)!==-1}var F=null,G=null,H=null,I=null;0&&(module.exports={each,eachLeft,eachRight,filter,filterLeft,filterRight,forEach,includes,includesLeft,includesRight,indexOf,indexOfLeft,indexOfRight,invokeEach,invokeEachLeft,invokeEachRight,isArithmeticSequence,map,mapLeft,mapRight,mapip,mapipLeft,mapipRight,partition,partitionLeft,partitionRight,reduce,reduceLeft,reduceRight});
