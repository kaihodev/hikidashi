(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{109:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),f=n,m=u["".concat(o,".").concat(f)]||u[f]||d[f]||a;return r?i.a.createElement(m,l(l({ref:t},s),{},{components:r})):i.a.createElement(m,l({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},78:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),i=r(7),a=(r(0),r(109)),o={id:"index",title:"hikidashi",slug:"/safe",sidebar_label:"Readme",custom_edit_url:null,hide_title:!0},l={unversionedId:"safe/index",id:"safe/index",isDocsHomePage:!1,title:"hikidashi",description:"Hikidashi Safe",source:"@site/docs/safe/index.md",sourceDirName:"safe",slug:"/safe",permalink:"/hikidashi/docs/safe",editUrl:null,version:"current",sidebar_label:"Readme",frontMatter:{id:"index",title:"hikidashi",slug:"/safe",sidebar_label:"Readme",custom_edit_url:null,hide_title:!0},sidebar:"sidebar",previous:{title:"Installing Hikidashi",permalink:"/hikidashi/docs/installation"},next:{title:"hikidashi",permalink:"/hikidashi/docs/safe/modules"}},c=[{value:"Hikidashi Safe",id:"hikidashi-safe",children:[{value:"Example",id:"example",children:[]}]}],s={toc:c};function p(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"hikidashi-safe"},"Hikidashi Safe"),Object(a.b)("p",null,"Hikidashi's Safe library provides spec compliancy, clean syntax, and type checking while still being more performant that other libraries."),Object(a.b)("h3",{id:"example"},"Example"),Object(a.b)("p",null,"Using map in-place with Hikidashi Safe"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"import map from 'hikidashi/safe/array/mapip.mjs';\n\nconst series = map(Array(10).fill(0), x => x * 2);\nconsole.log(series);\n")))}p.isMDXComponent=!0}}]);