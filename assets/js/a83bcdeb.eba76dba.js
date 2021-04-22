(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{110:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),u=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},f=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(t),f=r,m=p["".concat(o,".").concat(f)]||p[f]||d[f]||a;return t?i.a.createElement(m,s(s({ref:n},l),{},{components:t})):i.a.createElement(m,s({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=f;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<a;l++)o[l]=t[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},95:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return u}));var r=t(3),i=t(7),a=(t(0),t(110)),o={id:"index",title:"hikidashi",slug:"/unsafe",sidebar_label:"Readme",custom_edit_url:null,hide_title:!0},s={unversionedId:"unsafe/index",id:"unsafe/index",isDocsHomePage:!1,title:"hikidashi",description:"Hikidashi Unsafe",source:"@site/docs/unsafe/index.md",sourceDirName:"unsafe",slug:"/unsafe",permalink:"/hikidashi/docs/unsafe",editUrl:null,version:"current",sidebar_label:"Readme",frontMatter:{id:"index",title:"hikidashi",slug:"/unsafe",sidebar_label:"Readme",custom_edit_url:null,hide_title:!0},sidebar:"sidebar",previous:{title:"Function: subtract",permalink:"/hikidashi/docs/safe/functions/subtract"},next:{title:"hikidashi",permalink:"/hikidashi/docs/unsafe/modules"}},c=[{value:"Hikidashi Unsafe",id:"hikidashi-unsafe",children:[{value:"Example",id:"example",children:[]}]}],l={toc:c};function u(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"hikidashi-unsafe"},"Hikidashi Unsafe"),Object(a.b)("p",null,"Hikidashi's Unsafe library provides more performant solutions than the safe library and any other alternative library, including naive implementations in pure JS."),Object(a.b)("h3",{id:"example"},"Example"),Object(a.b)("p",null,"Using map in-place with Hikidashi Unsafe"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"import map from 'hikidashi/unsafe/array/mapip.mjs';\n\nconst series = map(Array(10).fill(0), x => x * 2);\nconsole.log(series);\n")))}u.isMDXComponent=!0}}]);