(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{113:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),f=n,m=p["".concat(o,".").concat(f)]||p[f]||d[f]||i;return r?a.a.createElement(m,l(l({ref:t},s),{},{components:r})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},79:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),i=(r(0),r(113)),o={id:"index",title:"Safe Module Overview",slug:"/safe",sidebar_label:"Readme",custom_edit_url:null,hide_title:!0},l={unversionedId:"safe/index",id:"safe/index",isDocsHomePage:!1,title:"Safe Module Overview",description:"Hikidashi Safe",source:"@site/docs/safe/index.md",sourceDirName:"safe",slug:"/safe",permalink:"/docs/safe",editUrl:null,version:"current",lastUpdatedAt:1619066311,formattedLastUpdatedAt:"4/22/2021",sidebar_label:"Readme",frontMatter:{id:"index",title:"Safe Module Overview",slug:"/safe",sidebar_label:"Readme",custom_edit_url:null,hide_title:!0},sidebar:"sidebar",previous:{title:"Getting Started",permalink:"/docs/"},next:{title:"hikidashi",permalink:"/docs/safe/modules"}},c=[{value:"Hikidashi Safe",id:"hikidashi-safe",children:[{value:"Example",id:"example",children:[]}]}],s={toc:c};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"hikidashi-safe"},"Hikidashi Safe"),Object(i.b)("p",null,"Hikidashi's Safe library provides spec compliancy, clean syntax, and type checking while still being more performant that other libraries."),Object(i.b)("h3",{id:"example"},"Example"),Object(i.b)("p",null,"Using map in-place with Hikidashi Safe"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"import map from 'hikidashi/safe/array/mapip.mjs';\n\nconst series = map(Array(10).fill(0), (_, x) => x * 2);\nconsole.log(series);\n")))}u.isMDXComponent=!0}}]);