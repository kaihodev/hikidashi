var A=Object.defineProperty;var q=e=>A(e,"__esModule",{value:!0});var S=(e,t)=>{for(var r in t)A(e,r,{get:t[r],enumerable:!0})};q(exports);S(exports,{add:()=>L,divide:()=>B,each:()=>u,eachLeft:()=>O,eachRight:()=>u,filter:()=>y,filterLeft:()=>y,filterRight:()=>c,forEach:()=>u,identity:()=>R,includes:()=>l,includesLeft:()=>l,includesRight:()=>Y,indexOf:()=>n,indexOfLeft:()=>n,indexOfRight:()=>X,isArithmeticSequence:()=>h,map:()=>d,mapLeft:()=>m,mapRight:()=>d,mapip:()=>s,mapipLeft:()=>v,mapipRight:()=>s,modulo:()=>w,multiply:()=>k,noop:()=>b,partition:()=>p,partitionLeft:()=>p,partitionRight:()=>p,reduce:()=>x,reduceLeft:()=>x,reduceRight:()=>W,remainder:()=>C,subtract:()=>g});function E(e,t){return e+t}var L=E;function j(e,t){return e-t}var g=j;var z=(e,t)=>e*t,k=z;var D=(e,t)=>e/t,B=D;function F(e,t){return e%t}var C=F;function G(e,t){return(e%t+e)%t}var w=G;var H=e=>e,R=H;var I=()=>{},b=I;var J=(e,t)=>{let r=e.length,a=Array(r);for(;r--;)a[r]=t(e[r],r,e);return a},d=J;function m(e,t){let r=0,a=e.length,o=Array(r);for(;r!==a;)o[r]=t(e[r],r++,e);return o}var K=(e,t)=>{let r=e.length;for(;r--;)e[r]=t(e[r],r,e);return e},s=K;var M=(e,t)=>{let r=0,a=e.length;for(;r!==a;)e[r]=t(e[r],r++,e);return e},v=M;var N=(e,t)=>{let r=e.length;for(;r--;)t(e[r],r,e)},u=N;var P=(e,t)=>{let r=0,a=e.length;for(;r!==a;)t(e[r],r++,e)},O=P;var Q=(e,t)=>{let r=e.length,a=Array(r);for(var o,i=-1,f=0;f!==r;++f)o=e[f],t(o,f,e)&&(a[++i]=o);return a.length=i,a},y=Q;function c(e,t){let r=e.length,a=Array(r);for(var o,i=-1;r--;)o=e[r],t(o,r,e)&&(a[++i]=o);return a.length=i,a}var T=(e,t,r)=>{let a=r===void 0,o=e.length,i=a?e[0]:r;for(;++a!==o;)i=t(i,e[a],a,e);return i},x=T;function U(e,t){let r=[[],[]];for(let a,o,i=e.length;i--;a[a.length]=o)a=r[t(o=e[i],i,e)]||=[];return r}var p=U;function h(e){let t=e.length-1,r=e[1]-e[0];for(;t;)if(r!==e[t]-e[--t])return!1;return!0}function n(e,t,r=0){for(let a=r,o=e.length;a!==o;++a)if(e[a]===t)return a;return-1}function l(e,t,r=0){return n(e,t,r)!==-1}var W=null,X=null,Y=null;0&&(module.exports={add,divide,each,eachLeft,eachRight,filter,filterLeft,filterRight,forEach,identity,includes,includesLeft,includesRight,indexOf,indexOfLeft,indexOfRight,isArithmeticSequence,map,mapLeft,mapRight,mapip,mapipLeft,mapipRight,modulo,multiply,noop,partition,partitionLeft,partitionRight,reduce,reduceLeft,reduceRight,remainder,subtract});
