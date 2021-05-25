(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{100:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),i=(r(0),r(122)),o={id:"partition",title:"Function: partition",sidebar_label:"partition",custom_edit_url:null,hide_title:!0},c={unversionedId:"unsafe/functions/partition",id:"unsafe/functions/partition",isDocsHomePage:!1,title:"Function: partition",description:"\u25b8 partition(arr ArrayCB): typeof arr[]",source:"@site/docs/unsafe/functions/partition.md",sourceDirName:"unsafe/functions",slug:"/unsafe/functions/partition",permalink:"/docs/unsafe/functions/partition",editUrl:null,version:"current",sidebar_label:"partition",frontMatter:{id:"partition",title:"Function: partition",sidebar_label:"partition",custom_edit_url:null,hide_title:!0},sidebar:"sidebar",previous:{title:"Function: noop",permalink:"/docs/unsafe/functions/noop"},next:{title:"Function: reduce",permalink:"/docs/unsafe/functions/reduce"}},p=[],b={toc:p};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"partition"),"(",Object(i.b)("inlineCode",{parentName:"p"},"arr"),": ArrayLike, ",Object(i.b)("inlineCode",{parentName:"p"},"cb"),": ArrayCB): ",Object(i.b)("em",{parentName:"p"},"typeof")," ",Object(i.b)("em",{parentName:"p"},"arr"),"[]"),Object(i.b)("p",null,"A fast Array partitioner."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"remakrs"))," "),Object(i.b)("p",null,"This implementation loops in reverse order."),Object(i.b)("h4",{id:"parameters"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Name"),Object(i.b)("th",{parentName:"tr",align:"left"},"Type"),Object(i.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"arr")),Object(i.b)("td",{parentName:"tr",align:"left"},"ArrayLike"),Object(i.b)("td",{parentName:"tr",align:"left"},"The input array-like to filter.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"cb")),Object(i.b)("td",{parentName:"tr",align:"left"},"ArrayCB"),Object(i.b)("td",{parentName:"tr",align:"left"},"The callback provided to produce EITHER truthy/falsy OR numberical indices to indicate the correct bucket.              This iteratee is invoked with three arguments: value, index","|","key, and arr.")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"typeof")," ",Object(i.b)("em",{parentName:"p"},"arr"),"[]"),Object(i.b)("p",null,"(typeof arr)[] - The partitioned results."),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/kaihodev/hikidashi/blob/0b4d315/src/unsafe/array/partition.ts#L16"},"unsafe/array/partition.ts:16")))}l.isMDXComponent=!0},122:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),l=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),u=l(r),f=n,d=u["".concat(o,".").concat(f)]||u[f]||s[f]||i;return r?a.a.createElement(d,c(c({ref:t},b),{},{components:r})):a.a.createElement(d,c({ref:t},b))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var b=2;b<i;b++)o[b]=r[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);