(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{110:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),d=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},s=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),u=d(n),s=r,f=u["".concat(c,".").concat(s)]||u[s]||p[s]||a;return n?i.a.createElement(f,o(o({ref:t},l),{},{components:n})):i.a.createElement(f,o({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=s;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var l=2;l<a;l++)c[l]=n[l];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return d}));var r=n(3),i=n(7),a=(n(0),n(110)),c={id:"divide",title:"Function: divide",sidebar_label:"divide",custom_edit_url:null,hide_title:!0},o={unversionedId:"safe/functions/divide",id:"safe/functions/divide",isDocsHomePage:!1,title:"Function: divide",description:"\u25b8 divide(x? NumberLike): number",source:"@site/docs/safe/functions/divide.md",sourceDirName:"safe/functions",slug:"/safe/functions/divide",permalink:"/hikidashi/docs/safe/functions/divide",editUrl:null,version:"current",sidebar_label:"divide",frontMatter:{id:"divide",title:"Function: divide",sidebar_label:"divide",custom_edit_url:null,hide_title:!0},sidebar:"sidebar",previous:{title:"Function: add",permalink:"/hikidashi/docs/safe/functions/add"},next:{title:"Function: each",permalink:"/hikidashi/docs/safe/functions/each"}},b=[],l={toc:b};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u25b8 ",Object(a.b)("strong",{parentName:"p"},"divide"),"(",Object(a.b)("inlineCode",{parentName:"p"},"x?"),": NumberLike, ",Object(a.b)("inlineCode",{parentName:"p"},"y?"),": NumberLike): ",Object(a.b)("em",{parentName:"p"},"number")),Object(a.b)("p",null,"Divides two given NumberLikes."),Object(a.b)("h4",{id:"parameters"},"Parameters:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:"left"},"Name"),Object(a.b)("th",{parentName:"tr",align:"left"},"Type"),Object(a.b)("th",{parentName:"tr",align:"left"},"Default value"),Object(a.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:"left"},Object(a.b)("inlineCode",{parentName:"td"},"x")),Object(a.b)("td",{parentName:"tr",align:"left"},"NumberLike"),Object(a.b)("td",{parentName:"tr",align:"left"},"1"),Object(a.b)("td",{parentName:"tr",align:"left"},"The dividend.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:"left"},Object(a.b)("inlineCode",{parentName:"td"},"y")),Object(a.b)("td",{parentName:"tr",align:"left"},"NumberLike"),Object(a.b)("td",{parentName:"tr",align:"left"},"1"),Object(a.b)("td",{parentName:"tr",align:"left"},"The divisor.")))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Returns:")," ",Object(a.b)("em",{parentName:"p"},"number")),Object(a.b)("p",null,"number - The resulting quotient."),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/kaihodev/hikidashi/blob/ec42da0/src/safe/math/divide.ts#L10"},"safe/math/divide.ts:10")))}d.isMDXComponent=!0}}]);