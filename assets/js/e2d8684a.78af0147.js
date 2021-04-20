(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(107)),i={id:"modulo",title:"Function: modulo",sidebar_label:"modulo",custom_edit_url:null,hide_title:!0},l={unversionedId:"safe/functions/modulo",id:"safe/functions/modulo",isDocsHomePage:!1,title:"Function: modulo",description:"\u25b8 modulo(x? NumberLike): number",source:"@site/docs/safe/functions/modulo.md",sourceDirName:"safe/functions",slug:"/safe/functions/modulo",permalink:"/hikidashi/docs/safe/functions/modulo",editUrl:null,version:"current",sidebar_label:"modulo",frontMatter:{id:"modulo",title:"Function: modulo",sidebar_label:"modulo",custom_edit_url:null,hide_title:!0}},c=[],b={toc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u25b8 ",Object(o.b)("strong",{parentName:"p"},"modulo"),"(",Object(o.b)("inlineCode",{parentName:"p"},"x?"),": NumberLike, ",Object(o.b)("inlineCode",{parentName:"p"},"y?"),": NumberLike): ",Object(o.b)("em",{parentName:"p"},"number")),Object(o.b)("p",null,"Gets the modulo of dividing two given NumberLikes."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"remarks"))," "),Object(o.b)("p",null,"In most languages, \u2018%\u2019 is a remainder operator, but in some (e.g. Python, Perl) it is a modulo operator.\nFor positive values, the two are equivalent, but when the dividend and divisor are of different signs, they give different results."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"see"))," ",Object(o.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder"},"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder")),Object(o.b)("h4",{id:"parameters"},"Parameters:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"Name"),Object(o.b)("th",{parentName:"tr",align:"left"},"Type"),Object(o.b)("th",{parentName:"tr",align:"left"},"Default value"),Object(o.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"x")),Object(o.b)("td",{parentName:"tr",align:"left"},"NumberLike"),Object(o.b)("td",{parentName:"tr",align:"left"},"1"),Object(o.b)("td",{parentName:"tr",align:"left"},"The dividend.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"y")),Object(o.b)("td",{parentName:"tr",align:"left"},"NumberLike"),Object(o.b)("td",{parentName:"tr",align:"left"},"1"),Object(o.b)("td",{parentName:"tr",align:"left"},"The divisor.")))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns:")," ",Object(o.b)("em",{parentName:"p"},"number")),Object(o.b)("p",null,"number - The resulting modulo."),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/kaihodev/hikidashi/blob/1091b72/src/safe/math/modulo.ts#L17"},"safe/math/modulo.ts:17")))}u.isMDXComponent=!0},107:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),u=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,s=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return n?a.a.createElement(s,l(l({ref:t},b),{},{components:n})):a.a.createElement(s,l({ref:t},b))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var b=2;b<o;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);