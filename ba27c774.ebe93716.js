(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{231:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return f}));var c=a(1),n=a(9),r=(a(0),a(265)),b={last_modified_on:"2020-09-13",$schema:"/.meta/.schemas/highlights.json",title:"Released gnet v1.3.0",description:"Released the official stable version of v1.3.0",author_github:"https://github.com/panjf2000",pr_numbers:["6fd641"],release:"1.3.0",hide_on_release_notes:!1,tags:["type: release","domain: v1.3.0"]},i={date:"2020-09-13T00:00:00.000Z",description:"Released the official stable version of v1.3.0",permalink:"/highlights/2020-09-13-released-1-3-0",readingTime:"2 min read",source:"@site/highlights/2020-09-13-released-1-3-0.md",tags:[{label:"type: release",permalink:"/highlights/tags/type-release"},{label:"domain: v1.3.0",permalink:"/highlights/tags/domain-v-1-3-0"}],title:"Released gnet v1.3.0",truncated:!1,prevItem:{title:"Support locking OS thread",permalink:"/highlights/2020-09-13-supported-locking-os-thread"},nextItem:{title:"New approach to create server sockets",permalink:"/highlights/2020-07-02-raw-syscalls-sockets"}},o=[{value:"Features",id:"features",children:[]},{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugfixes",id:"bugfixes",children:[]},{value:"Docs",id:"docs",children:[]},{value:"Misc",id:"misc",children:[]}],l={rightToc:o};function f(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(c.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("img",Object(c.a)({parentName:"p"},{src:"/img/gnet-v1-3-0.jpg",alt:null}))),Object(r.b)("h2",{id:"features"},"Features"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Determine logging mode by environment variable ",Object(r.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/panjf2000/gnet/commit/2a7977feb33ba18f0c9d788dc611e85154df8548"}),"2a7977")),Object(r.b)("li",{parentName:"ul"},"Support locking each I/O event-loop goroutine to an OS thread ",Object(r.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/panjf2000/gnet/commit/6fd6413920618f8cd9906923bd5768a43ce1c3b7"}),"6fd641"))),Object(r.b)("h2",{id:"enhancements"},"Enhancements"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Improve the implementation of Least-Connections load-balancing ",Object(r.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/panjf2000/gnet/commit/b6a5f564a9eea9c3fbb977c5ef3c8163689a63d0"}),"b6a5f5")),Object(r.b)("li",{parentName:"ul"},"Speed up the Least-Connections load-balancing ",Object(r.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/panjf2000/gnet/commit/b5fbbdac59588572b4a6e8c26bb6049cfd9b7211"}),"b5fbbd")),Object(r.b)("li",{parentName:"ul"},"Leverage system calls instead of ",Object(r.b)("inlineCode",{parentName:"li"},"net")," package to create listeners ",Object(r.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/panjf2000/gnet/commit/ccc8c649f380c546242251911040c8935a2cbb57"}),"ccc8c6")),Object(r.b)("li",{parentName:"ul"},"Refine the logging module ",Object(r.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/panjf2000/gnet/commit/f46da440d6435831558a1e8cbbd3f20a5ed2d773"}),"f46da4")),Object(r.b)("li",{parentName:"ul"},"Reorg errors in gnet ",Object(r.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/panjf2000/gnet/commit/1c2f4b0c5127a4f40b5f635d604212a33e45a220"}),"1c2f4b")),Object(r.b)("li",{parentName:"ul"},"Move logging module into internal package ",Object(r.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/panjf2000/gnet/commit/00af504ed00ab0ecb6477956ef4fe81f1dadd66e"}),"00af50")),Object(r.b)("li",{parentName:"ul"},"Take off the codec from eventloop ",Object(r.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/panjf2000/gnet/commit/bc85c34e5f347fa055b5fea1ecb84fbbdf85ef91"}),"bc85c3")),Object(r.b)("li",{parentName:"ul"},"Refactor for buffer in Conn ",Object(r.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/panjf2000/gnet/commit/455c5ae5241e0875fc79a9338fefc38b4a5c17bc"}),"455c5a")),Object(r.b)("li",{parentName:"ul"},"Refactor the load-balancing algorithm of source addr hash ",Object(r.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/panjf2000/gnet/commit/abbf5820c1d264fa22e8bf8d00755d6093a86767"}),"abbf58")),Object(r.b)("li",{parentName:"ul"},"Make channel buffered if necessary ",Object(r.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/panjf2000/gnet/commit/43f93ca57010dbb9b87f07928400301e487af65e"}),"43f93c"))),Object(r.b)("h2",{id:"bugfixes"},"Bugfixes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Fix a bug that led to negative counter of sync.WaitGroup on Windows ",Object(r.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/panjf2000/gnet/commit/16ed4ab6719b70b396b47d5d51c1f70f44e1205a"}),"16ed4a")),Object(r.b)("li",{parentName:"ul"},'Add "windows" build tag under SO_REUSEPORT mode ',Object(r.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/panjf2000/gnet/commit/7862f3e2cb60554928c2d22f66213916dd69dbee"}),"7862f3")),Object(r.b)("li",{parentName:"ul"},"Supplement all the formal protocol formats of TCP and UDP ",Object(r.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/panjf2000/gnet/commit/258253c7813a6577e338561f0c3da1bd7c5e57da"}),"258253")),Object(r.b)("li",{parentName:"ul"},"Resolve the issue of closing one fd twice ",Object(r.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/panjf2000/gnet/commit/b5a5c715ca07f8b4e3c371a8460274e77953bbdf"}),"b5a5c7")),Object(r.b)("li",{parentName:"ul"},"Fix concurrent loopCloseConn causes panic ",Object(r.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/panjf2000/gnet/pull/111"}),"#111")),Object(r.b)("li",{parentName:"ul"},"Eliminate duplicate calls to loopCloseConn ",Object(r.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/panjf2000/gnet/commit/a72f5fd30757fa51cad4ad10c9583468c450b68e"}),"a72f5f"))),Object(r.b)("h2",{id:"docs"},"Docs"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Add a customized codec example ",Object(r.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/panjf2000/gnet/pull/90"}),"#90")),Object(r.b)("li",{parentName:"ul"},"Add placeholder for user cases and new relevant article ",Object(r.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/panjf2000/gnet/commit/5197f186792670851ddcfdbe94b5317196e3ef6a"}),"5197f1")),Object(r.b)("li",{parentName:"ul"},"Renew results of techempower benchmark ",Object(r.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/panjf2000/gnet/commit/61eee8fa29105002d2e1af17d2c1afc54001c6be"}),"61eee8")),Object(r.b)("li",{parentName:"ul"},"Add the list of donors ",Object(r.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/panjf2000/gnet/commit/42e04ddc6ba2299ab89d107d2731725dacb31dcf"}),"42e04d")),Object(r.b)("li",{parentName:"ul"},"Add xs:code ",Object(r.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/panjf2000/gnet/commit/33a3e5744e0c3c6c3ac1d3d965eabc5c5a93307d"}),"33a3e5")),Object(r.b)("li",{parentName:"ul"},"Build an official website for gnet ",Object(r.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/panjf2000/gnet/commit/49363cd41c73852bf52807a59b980ff2968f2e46"}),"49363c")),Object(r.b)("li",{parentName:"ul"},"Move the majority of content to website and simplify READMEs ",Object(r.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/panjf2000/gnet/commit/903ff8433d2d635f86b366b79eb304915c3fa662"}),"903ff8"))),Object(r.b)("h2",{id:"misc"},"Misc"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Fix a typo and improve code comments ",Object(r.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/panjf2000/gnet/commit/37d75cce99609c9c17f25df2f6cfbfd3cf212ef8"}),"37d75c")),Object(r.b)("li",{parentName:"ul"},"Use SyscallError to wrap system calls errors ",Object(r.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/panjf2000/gnet/commit/c3907e00e2bb725cc4616587fb2e52f1c74c5999"}),"c3907e")),Object(r.b)("li",{parentName:"ul"},"Refine ",Object(r.b)("inlineCode",{parentName:"li"},"go build")," tags of operating systems ",Object(r.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/panjf2000/gnet/commit/637144b487d4fa4f0a3ef40a2dada40586e188b5"}),"637144")),Object(r.b)("li",{parentName:"ul"},"Format copyright info ",Object(r.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/panjf2000/gnet/commit/6872c20ab7c97342512149843322ff6111003ec3"}),"6872c2")),Object(r.b)("li",{parentName:"ul"},"Remove all examples from the source-code repo ",Object(r.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/panjf2000/gnet/commit/a704e0683e9c261c9f1e49c7443086068160fed2"}),"a704e0")),Object(r.b)("li",{parentName:"ul"},"refine the usage of os.NewSyscallError ",Object(r.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/panjf2000/gnet/commit/2d54d80f42a6fa8e293db63a35033e1daa60cd56"}),"2d54d8"))))}f.isMDXComponent=!0},265:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return d}));var c=a(0),n=a.n(c);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,c)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,c,n=function(e,t){if(null==e)return{};var a,c,n={},r=Object.keys(e);for(c=0;c<r.length;c++)a=r[c],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(c=0;c<r.length;c++)a=r[c],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),f=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},m=function(e){var t=f(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},s=Object(c.forwardRef)((function(e,t){var a=e.components,c=e.mdxType,r=e.originalType,b=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),m=f(a),s=c,d=m["".concat(b,".").concat(s)]||m[s]||p[s]||r;return a?n.a.createElement(d,i({ref:t},l,{components:a})):n.a.createElement(d,i({ref:t},l))}));function d(e,t){var a=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var r=a.length,b=new Array(r);b[0]=s;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:c,b[1]=i;for(var l=2;l<r;l++)b[l]=a[l];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);