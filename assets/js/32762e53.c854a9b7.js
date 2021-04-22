(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{110:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),o=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=o(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,b=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=o(a),s=n,u=m["".concat(b,".").concat(s)]||m[s]||d[s]||i;return a?r.a.createElement(u,p(p({ref:t},l),{},{components:a})):r.a.createElement(u,p({ref:t},l))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,b=new Array(i);b[0]=s;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,b[1]=p;for(var l=2;l<i;l++)b[l]=a[l];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},77:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return o}));var n=a(3),r=a(7),i=(a(0),a(110)),b={id:"map",title:"Function: map",sidebar_label:"map",custom_edit_url:null,hide_title:!0},p={unversionedId:"safe/functions/map",id:"safe/functions/map",isDocsHomePage:!1,title:"Function: map",description:"\u25b8 map(arr ArrayCBT, thisArg? R[]",source:"@site/docs/safe/functions/map.md",sourceDirName:"safe/functions",slug:"/safe/functions/map",permalink:"/hikidashi/docs/safe/functions/map",editUrl:null,version:"current",lastUpdatedAt:1619066311,formattedLastUpdatedAt:"4/22/2021",sidebar_label:"map",frontMatter:{id:"map",title:"Function: map",sidebar_label:"map",custom_edit_url:null,hide_title:!0},sidebar:"sidebar",previous:{title:"Function: identity",permalink:"/hikidashi/docs/safe/functions/identity"},next:{title:"Function: mapip",permalink:"/hikidashi/docs/safe/functions/mapip"}},c=[],l={toc:c};function o(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"map"),"<Q, T, R",">","(",Object(i.b)("inlineCode",{parentName:"p"},"arr"),": Q, ",Object(i.b)("inlineCode",{parentName:"p"},"callback?"),": ",Object(i.b)("em",{parentName:"p"},"ArrayCBT"),"<T, R",">",", ",Object(i.b)("inlineCode",{parentName:"p"},"thisArg?"),": ",Object(i.b)("em",{parentName:"p"},"unknown"),"): R[]"),Object(i.b)("p",null,"A more-or-less spec-compliant Array map."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"remarks"))," "),Object(i.b)("p",null,"Certain steps in the spec have been omitted through the use of es6 features or for performance.\nThis implementation outperforms built-in .map but runs measurably worse than other non-spec-compliant solutions out there.\nIf you are looking for raw speed, use the unsafe version of mapip, which outperforms everybody."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"see"))," ",Object(i.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map"},"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map")),Object(i.b)("h4",{id:"type-parameters"},"Type parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Name"),Object(i.b)("th",{parentName:"tr",align:"left"},"Type"),Object(i.b)("th",{parentName:"tr",align:"left"},"Default"),Object(i.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"Q")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("em",{parentName:"td"},"unknown")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("em",{parentName:"td"},"unknown"),"[]"),Object(i.b)("td",{parentName:"tr",align:"left"},"The type of the array-like being provided.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"T")),Object(i.b)("td",{parentName:"tr",align:"left"},"-"),Object(i.b)("td",{parentName:"tr",align:"left"},"Q","[keyof Q]"),Object(i.b)("td",{parentName:"tr",align:"left"},"The type of elements in the array-like being provided.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"R")),Object(i.b)("td",{parentName:"tr",align:"left"},"-"),Object(i.b)("td",{parentName:"tr",align:"left"},"T"),Object(i.b)("td",{parentName:"tr",align:"left"},"The return value of the provided callback, and thus, type of resulting array elements.")))),Object(i.b)("h4",{id:"parameters"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Name"),Object(i.b)("th",{parentName:"tr",align:"left"},"Type"),Object(i.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"arr")),Object(i.b)("td",{parentName:"tr",align:"left"},"Q"),Object(i.b)("td",{parentName:"tr",align:"left"},"The input array-like to map through.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"callback")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("em",{parentName:"td"},"ArrayCBT"),"<T, R",">"),Object(i.b)("td",{parentName:"tr",align:"left"},"The callback provided to produce mapped results.                   This iteratee is invoked with three arguments: value, index","|","key, and arr.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"thisArg")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("em",{parentName:"td"},"unknown")),Object(i.b)("td",{parentName:"tr",align:"left"},"The value to use as ",Object(i.b)("inlineCode",{parentName:"td"},"this")," when executing callback.")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," R[]"),Object(i.b)("p",null,"R[] - The new mapped array."),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/kaihodev/hikidashi/blob/9d99774/src/safe/array/map.ts#L26"},"safe/array/map.ts:26")))}o.isMDXComponent=!0}}]);