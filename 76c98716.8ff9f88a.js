(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{197:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(1),r=n(9),o=(n(0),n(263)),i={last_modified_on:"2023-07-01",$schema:"/.meta/.schemas/highlights.json",title:"Release of gnet v2.3.0",description:"Release of the official stable version of v2.3.0",author_github:"https://github.com/panjf2000",pr_numbers:["59a3c61"],release:"2.3.0",hide_on_release_notes:!1,tags:["type: tag","domain: v2.3.0"]},c={date:"2023-07-01T00:00:00.000Z",description:"Release of the official stable version of v2.3.0",permalink:"/highlights/2023-07-01-release-of-gnet-v2-3-0",readingTime:"2 min read",source:"@site/highlights/2023-07-01-release-of-gnet-v2-3-0.md",tags:[{label:"type: tag",permalink:"/highlights/tags/type-tag"},{label:"domain: v2.3.0",permalink:"/highlights/tags/domain-v-2-3-0"}],title:"Release of gnet v2.3.0",truncated:!1,prevItem:{title:"Gnet tops the TechEmpower benchmark leaderboard",permalink:"/highlights/2023-11-11-gnet-techempower-benchmark-top1"},nextItem:{title:"Release candidate for gnet v2.3.0",permalink:"/highlights/2023-05-19-release-candidate-for-gnet-v2-3-0"}},l=[{value:"Intro",id:"intro",children:[]}],p={rightToc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"intro"},"Intro"),Object(o.b)("p",null,"The two major updates in this official release are ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/panjf2000/gnet/pull/460"}),"#460")," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/panjf2000/gnet/pull/461"}),"#461"),"."),Object(o.b)("p",null,"We introduced a new data structure ",Object(o.b)("inlineCode",{parentName:"p"},"matrix")," in ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/panjf2000/gnet/pull/460"}),"#460")," to displace the default ",Object(o.b)("inlineCode",{parentName:"p"},"map")," for managing connections internally, with the help of this new data structure, we can eliminate the pointers in ",Object(o.b)("inlineCode",{parentName:"p"},"map")," and store connections in the form of a matrix (an array of slices), which will significantly reduce GC (Garbage Collection) latency:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"goos: darwin\ngoarch: arm64\npkg: github.com/panjf2000/gnet/v2\n                                    \u2502     old      \u2502                 new                  \u2502\n                                    \u2502    sec/op    \u2502    sec/op     vs base                \u2502\nGC4El100k/Run-4-eventloop-100000-10    30.74m \xb1 3%   19.68m \xb1 10%  -35.98% (p=0.000 n=10)\nGC4El200k/Run-4-eventloop-200000-10    63.64m \xb1 3%   38.16m \xb1 11%  -40.04% (p=0.000 n=10)\nGC4El500k/Run-4-eventloop-500000-10   177.28m \xb1 8%   95.21m \xb1  4%  -46.29% (p=0.000 n=10)\ngeomean                                70.26m        41.51m        -40.92%\n\n                                    \u2502     old     \u2502                new                 \u2502\n                                    \u2502    B/op     \u2502    B/op      vs base               \u2502\nGC4El100k/Run-4-eventloop-100000-10   27.50 \xb1 35%   25.50 \xb1 33%       ~ (p=0.423 n=10)\nGC4El200k/Run-4-eventloop-200000-10   27.50 \xb1 53%   20.50 \xb1 66%       ~ (p=0.642 n=10)\nGC4El500k/Run-4-eventloop-500000-10   16.00 \xb1   ?   18.00 \xb1   ?       ~ (p=0.357 n=10)\ngeomean                               22.96         21.11        -8.04%\n\n                                    \u2502     old      \u2502                 new                 \u2502\n                                    \u2502  allocs/op   \u2502 allocs/op   vs base                 \u2502\nGC4El100k/Run-4-eventloop-100000-10   0.000 \xb1 0%     0.000 \xb1 0%       ~ (p=1.000 n=10) \xb9\nGC4El200k/Run-4-eventloop-200000-10   0.000 \xb1 0%     0.000 \xb1 0%       ~ (p=1.000 n=10) \xb9\nGC4El500k/Run-4-eventloop-500000-10   0.000 \xb1 0%     0.000 \xb1 0%       ~ (p=1.000 n=10) \xb9\ngeomean                                          \xb2               +0.00%                \xb2\n\xb9 all samples are equal\n\xb2 summaries must be >0 to compute geomean\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"The more connections there are, the more pronounced the effect.")),Object(o.b)("p",null,"While we have performed sufficient testing on ",Object(o.b)("inlineCode",{parentName:"p"},"matrix"),", we are still using ",Object(o.b)("inlineCode",{parentName:"p"},"map")," as the default connection storage in this RC version for the sake of caution, but you can enable the new data structure by specifying build tags: -tags=gc_opt. This can be considered as a precautionary measure so that in case ",Object(o.b)("inlineCode",{parentName:"p"},"matrix")," has any unexpected bugs, you can quickly fall back to the default ",Object(o.b)("inlineCode",{parentName:"p"},"map"),". We will consider promoting ",Object(o.b)("inlineCode",{parentName:"p"},"matrix")," to be the default storage for connections in a subsequent official release."),Object(o.b)("p",null,"Another significant leap is ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/panjf2000/gnet/pull/461"}),"#461"),", you can now run ",Object(o.b)("inlineCode",{parentName:"p"},"gnet")," on Windows, it should be noted that the Windows version of ",Object(o.b)("inlineCode",{parentName:"p"},"gnet")," is intended for development purposes and is not recommended for use in production."),Object(o.b)("p",null,"Visit the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/panjf2000/gnet/releases/tag/v2.3.0"}),"release notes")," for more details."))}s.isMDXComponent=!0},263:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,f=u["".concat(i,".").concat(m)]||u[m]||b[m]||o;return n?r.a.createElement(f,c({ref:t},p,{components:n})):r.a.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);