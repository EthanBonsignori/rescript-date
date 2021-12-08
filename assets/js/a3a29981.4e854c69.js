"use strict";(self.webpackChunkrescript_date_docs=self.webpackChunkrescript_date_docs||[]).push([[746],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3037:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],s={id:"iso-week-numbering",title:"ISO Week Numbering"},c=void 0,l={unversionedId:"iso-week-numbering",id:"iso-week-numbering",title:"ISO Week Numbering",description:"ISO week date//en.wikipedia.org/wiki/ISOweekdate",source:"@site/api/iso-week-numbering.md",sourceDirName:".",slug:"/iso-week-numbering",permalink:"/rescript-date/api/iso-week-numbering",tags:[],version:"current",frontMatter:{id:"iso-week-numbering",title:"ISO Week Numbering"},sidebar:"sidebar",previous:{title:"ISO Week",permalink:"/rescript-date/api/iso-week"}},u=[{value:"getISOWeekYear",id:"getisoweekyear",children:[],level:3},{value:"startOfISOWeekYear",id:"startofisoweekyear",children:[],level:3}],p={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"ISO week date: ",(0,i.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/ISO_week_date"},"http://en.wikipedia.org/wiki/ISO_week_date")))),(0,i.kt)("h3",{id:"getisoweekyear"},"getISOWeekYear"),(0,i.kt)("p",null,"Get the ISO week-numbering year of the given date, which always starts 3 days before the year's first Thursday."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"let getISOWeekYear: Js.Date.t => float\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"let date = Js.Date.makeWithYMDHMS(~year=2018., ~month=0., ~date=12., ~hours=16., ~minutes=50., ~seconds=12., ())\n\ndate->ReDate.getISOWeekYear\n")),(0,i.kt)("h3",{id:"startofisoweekyear"},"startOfISOWeekYear"),(0,i.kt)("p",null,"Return the start of an ISO week-numbering year, which always starts 3 days before the year's first Thursday. The result will be in the local timezone."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"let startOfISOWeekYear: Js.Date.t => Js.Date.t\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"let date = Js.Date.makeWithYMDHMS(~year=2018., ~month=0., ~date=12., ~hours=16., ~minutes=50., ~seconds=12., ())\n\ndate->ReDate.startOfISOWeekYear\n")))}d.isMDXComponent=!0}}]);