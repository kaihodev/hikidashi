(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{107:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),l=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},m=function(e){var t=l(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),m=l(a),d=n,u=m["".concat(p,".").concat(d)]||m[d]||s[d]||i;return a?r.a.createElement(u,b(b({ref:t},o),{},{components:a})):r.a.createElement(u,b({ref:t},o))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,p=new Array(i);p[0]=d;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:n,p[1]=b;for(var o=2;o<i;o++)p[o]=a[o];return r.a.createElement.apply(null,p)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},81:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return p})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return l}));var n=a(3),r=a(7),i=(a(0),a(107)),p={id:"mapip",title:"Function: mapip",sidebar_label:"mapip",custom_edit_url:null,hide_title:!0},b={unversionedId:"safe/functions/mapip",id:"safe/functions/mapip",isDocsHomePage:!1,title:"Function: mapip",description:"\u25b8 mapip(arr ArrayCBT, thisArg? Q",source:"@site/docs/safe/functions/mapip.md",sourceDirName:"safe/functions",slug:"/safe/functions/mapip",permalink:"/hikidashi/docs/safe/functions/mapip",editUrl:null,version:"current",sidebar_label:"mapip",frontMatter:{id:"mapip",title:"Function: mapip",sidebar_label:"mapip",custom_edit_url:null,hide_title:!0}},c=[],o={toc:c};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"mapip"),"<Q, T",">","(",Object(i.b)("inlineCode",{parentName:"p"},"arr"),": Q, ",Object(i.b)("inlineCode",{parentName:"p"},"callback?"),": ",Object(i.b)("em",{parentName:"p"},"ArrayCBT"),"<T",">",", ",Object(i.b)("inlineCode",{parentName:"p"},"thisArg?"),": ",Object(i.b)("em",{parentName:"p"},"unknown"),"): Q"),Object(i.b)("p",null,"A non-spec compliant fast Array map that ",Object(i.b)("em",{parentName:"p"},"modifies the input array")," and maps in-place."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"remarks"))," "),Object(i.b)("p",null,"The mapip function should be used with caution due to its destructive nature.\nWe see promising use cases where you may iterate a map that is not used for any other purpose.\nConsider the following: const users = ","[111, 112, 113, 114]",".map(id => database.fetchById(id));\nThe user ID array is not used, but all other traditional map implementations make an unnecessary allocation."),Object(i.b)("p",null,"If you are looking for raw speed, use the unsafe version, which outperforms everybody."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"see"))," ",Object(i.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map"},"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map")),Object(i.b)("h4",{id:"type-parameters"},"Type parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Name"),Object(i.b)("th",{parentName:"tr",align:"left"},"Type"),Object(i.b)("th",{parentName:"tr",align:"left"},"Default"),Object(i.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"Q")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("em",{parentName:"td"},"unknown")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("em",{parentName:"td"},"unknown"),"[]"),Object(i.b)("td",{parentName:"tr",align:"left"},"The type of the array-like being provided.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"T")),Object(i.b)("td",{parentName:"tr",align:"left"},"-"),Object(i.b)("td",{parentName:"tr",align:"left"},"Q","[keyof Q]"),Object(i.b)("td",{parentName:"tr",align:"left"},"The type of elements in the array-like being provided.")))),Object(i.b)("h4",{id:"parameters"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Name"),Object(i.b)("th",{parentName:"tr",align:"left"},"Type"),Object(i.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"arr")),Object(i.b)("td",{parentName:"tr",align:"left"},"Q"),Object(i.b)("td",{parentName:"tr",align:"left"},"The input array-like to map through.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"callback")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("em",{parentName:"td"},"ArrayCBT"),"<T",">"),Object(i.b)("td",{parentName:"tr",align:"left"},"The callback provided to produce mapped results.                   This iteratee is invoked with three arguments: value, index","|","key, and arr.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"thisArg")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("em",{parentName:"td"},"unknown")),Object(i.b)("td",{parentName:"tr",align:"left"},"The value to use as ",Object(i.b)("inlineCode",{parentName:"td"},"this")," when executing callback.")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," Q"),Object(i.b)("p",null,"Q - The modified input"),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/kaihodev/hikidashi/blob/1091b72/src/safe/array/mapip.ts#L28"},"safe/array/mapip.ts:28")))}l.isMDXComponent=!0}}]);