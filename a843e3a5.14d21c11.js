(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{80:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return d})),a.d(t,"default",(function(){return o}));var n=a(3),r=a(7),s=(a(0),a(89)),c={id:"week",title:"Week"},l={unversionedId:"api/week",id:"api/week",isDocsHomePage:!1,title:"Week",description:"`js",source:"@site/docs/api/week.md",slug:"/api/week",permalink:"/rescript-date/docs/api/week",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api/week.md",version:"current",sidebar:"sidebar",previous:{title:"Day",permalink:"/rescript-date/docs/api/day"},next:{title:"Week Numbering",permalink:"/rescript-date/docs/api/week-numbering"}},d=[{value:"addWeeks",id:"addweeks",children:[]},{value:"subWeeks",id:"subweeks",children:[]},{value:"differenceInWeeks",id:"differenceinweeks",children:[]},{value:"differenceInCalendarWeeks",id:"differenceincalendarweeks",children:[]},{value:"startOfWeek",id:"startofweek",children:[]},{value:"endOfWeek",id:"endofweek",children:[]},{value:"isSameWeek",id:"issameweek",children:[]},{value:"lastDayOfWeek",id:"lastdayofweek",children:[]},{value:"getWeekOfMonth",id:"getweekofmonth",children:[]},{value:"getWeeksInMonth",id:"getweeksinmonth",children:[]},{value:"getWeek",id:"getweek",children:[]}],b={rightToc:d};function o(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"type day =\n  | Sunday\n  | Monday\n  | Tuesday\n  | Wednesday\n  | Thursday\n  | Friday\n  | Saturday\n")),Object(s.b)("h3",{id:"addweeks"},"addWeeks"),Object(s.b)("p",null,"Add the specified number of week to the given date."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"let addWeeks: (Js.Date.t, float) => Js.Date.t\n")),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"let date = Js.Date.makeWithYMD(~year=2018., ~month=0., ~date=1., ())\n\ndate->ReDate.addWeeks(1.)\n")),Object(s.b)("h3",{id:"subweeks"},"subWeeks"),Object(s.b)("p",null,"Subtract the specified number of weeks from the given date."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"let subWeeks: (Js.Date.t, float) => Js.Date.t\n")),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"let date = Js.Date.makeWithYMD(~year=2018., ~month=0., ~date=8., ())\n\ndate->ReDate.subWeeks(1.)\n")),Object(s.b)("h3",{id:"differenceinweeks"},"differenceInWeeks"),Object(s.b)("p",null,"Get the number of full weeks between the given dates."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"let differenceInWeeks: (Js.Date.t, Js.Date.t) => float\n")),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"let fstDate = Js.Date.makeWithYMDHMS(~year=2018., ~month=0., ~date=7., ~hours=23., ~minutes=59., ~seconds=59., ())\nlet sndDate = Js.Date.makeWithYMDHMS(~year=2018., ~month=0., ~date=1., ~hours=0., ~minutes=0., ~seconds=0., ())\n\nfstDate->ReDate.differenceInWeeks(sndDate)\n")),Object(s.b)("h3",{id:"differenceincalendarweeks"},"differenceInCalendarWeeks"),Object(s.b)("p",null,"Get the number of calendar weeks between the given dates."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"let differenceInCalendarWeeks: (~weekStartsOn: day=?, Js.Date.t, Js.Date.t) => float\n")),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"let fstDate = Js.Date.makeWithYMD(~year=2018., ~month=8., ~date=20., ())\nlet sndDate = Js.Date.makeWithYMD(~year=2018., ~month=7., ~date=7., ())\n\nfstDate->ReDate.differenceInCalendarWeeks(sndDate)\n")),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"let fstDate = Js.Date.makeWithYMD(~year=2018., ~month=6., ~date=15., ())\nlet sndDate = Js.Date.makeWithYMD(~year=2018., ~month=5., ~date=20., ())\nlet differenceInCalendarWeeks = ReDate.differenceInCalendarWeeks(~weekStartsOn=Monday)\n\nfstDate->differenceInCalendarWeeks(sndDate)\n")),Object(s.b)("h3",{id:"startofweek"},"startOfWeek"),Object(s.b)("p",null,"Return the start of a week for the given date."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"let startOfWeek: (~weekStartsOn: day=?, Js.Date.t) => Js.Date.t\n")),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"let date = Js.Date.makeWithYMDHMS(~year=2018., ~month=0., ~date=12., ~hours=16., ~minutes=50., ~seconds=12., ())\n\ndate->ReDate.startOfWeek\n")),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"let date = Js.Date.makeWithYMDHMS(~year=2018., ~month=0., ~date=12., ~hours=16., ~minutes=50., ~seconds=12., ())\nlet startOfWeek = ReDate.startOfWeek(~weekStartsOn=Monday)\n\ndate->startOfWeek\n")),Object(s.b)("h3",{id:"endofweek"},"endOfWeek"),Object(s.b)("p",null,"Return the end of a week for the given date."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"let endOfWeek: (~weekStartsOn: day=?, Js.Date.t) => Js.Date.t\n")),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"let date = Js.Date.makeWithYMDHMS(~year=2018., ~month=0., ~date=12., ~hours=16., ~minutes=50., ~seconds=12., ())\n\ndate->ReDate.endOfWeek\n")),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"let date = Js.Date.makeWithYMDHMS(~year=2018., ~month=0., ~date=12., ~hours=16., ~minutes=50., ~seconds=12., ())\nlet endOfWeek = ReDate.endOfWeek(~weekStartsOn=Monday)\n\ndate->endOfWeek\n")),Object(s.b)("h3",{id:"issameweek"},"isSameWeek"),Object(s.b)("p",null,"Are the given dates in the same week?"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"let isSameWeek: (~weekStartsOn: day=?, Js.Date.t, Js.Date.t) => bool\n")),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"let fstDate = Js.Date.makeWithYMDHMS(~year=2018., ~month=0., ~date=1., ~hours=16., ~minutes=50., ~seconds=12., ())\nlet sndDate = Js.Date.makeWithYMDHMS(~year=2018., ~month=0., ~date=5., ~hours=10., ~minutes=15., ~seconds=55., ())\n\nfstDate->ReDate.isSameWeek(sndDate)\n")),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"let fstDate = Js.Date.makeWithYMDHMS(~year=2018., ~month=0., ~date=6., ~hours=23., ~minutes=59., ~seconds=59., ())\nlet sndDate = Js.Date.makeWithYMDHMS(~year=2018., ~month=0., ~date=7., ~hours=0., ~minutes=0., ~seconds=0., ())\nlet isSameWeek = ReDate.isSameWeek(~weekStartsOn=Monday)\n\nfstDate->isSameWeek(sndDate)\n")),Object(s.b)("h3",{id:"lastdayofweek"},"lastDayOfWeek"),Object(s.b)("p",null,"Return the last day of a week for the given date."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"let lastDayOfWeek: (~weekStartsOn: day=?, Js.Date.t) => Js.Date.t\n")),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"let date = Js.Date.makeWithYMDHMS(~year=2018., ~month=0., ~date=12., ~hours=16., ~minutes=50., ~seconds=12., ())\n\ndate->ReDate.lastDayOfWeek\n")),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"let date = Js.Date.makeWithYMDHMS(~year=2018., ~month=0., ~date=12., ~hours=16., ~minutes=50., ~seconds=12., ())\nlet lastDayOfWeek = ReDate.lastDayOfWeek(~weekStartsOn=Monday)\n\ndate->lastDayOfWeek\n")),Object(s.b)("h3",{id:"getweekofmonth"},"getWeekOfMonth"),Object(s.b)("p",null,"Get the week of the month of the given date."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"let getWeekOfMonth: (~weekStartsOn: day=?, Js.Date.t) => float\n")),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"let date = Js.Date.makeWithYMD(~year=2018., ~month=0., ~date=1., ())\n\ndate->ReDate.getWeekOfMonth\n")),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"let date = Js.Date.makeWithYMD(~year=2018., ~month=10., ~date=23., ())\nlet getWeekOfMonth = ReDate.getWeekOfMonth(~weekStartsOn=Saturday)\n\ndate->getWeekOfMonth\n")),Object(s.b)("h3",{id:"getweeksinmonth"},"getWeeksInMonth"),Object(s.b)("p",null,"Get the number of calendar weeks the month in the given date spans."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"let getWeeksInMonth: (~weekStartsOn: day=?, Js.Date.t) => float\n")),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"let date = Js.Date.makeWithYMD(~year=2018., ~month=10., ~date=1., ())\n\ndate->ReDate.getWeeksInMonth\n")),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"let date = Js.Date.makeWithYMD(~year=2018., ~month=10., ~date=14., ())\nlet getWeeksInMonth = ReDate.getWeeksInMonth(~weekStartsOn=Friday)\n\ndate->getWeeksInMonth\n")),Object(s.b)("h3",{id:"getweek"},"getWeek"),Object(s.b)("p",null,"Get the local week index of the given date."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"let getWeek: (~weekStartsOn: day=?, Js.Date.t) => float\n")),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"let date = Js.Date.makeWithYMD(~year=2018., ~month=10., ~date=1., ())\n\ndate->ReDate.getWeek\n")),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"let date = Js.Date.makeWithYMD(~year=2018., ~month=10., ~date=14., ())\nlet getWeek = ReDate.getWeek(~weekStartsOn=Monday)\n\ndate->getWeek\n")))}o.isMDXComponent=!0},89:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),o=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},i=function(e){var t=o(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,b=d(e,["components","mdxType","originalType","parentName"]),i=o(a),O=n,m=i["".concat(c,".").concat(O)]||i[O]||u[O]||s;return a?r.a.createElement(m,l(l({ref:t},b),{},{components:a})):r.a.createElement(m,l({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,c=new Array(s);c[0]=O;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var b=2;b<s;b++)c[b]=a[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"}}]);