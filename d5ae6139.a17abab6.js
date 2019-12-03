(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{130:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(1),a=n(8),o=(n(0),n(139)),i={id:"what-is-this",title:"What is this",sidebar_label:"What is this"},c=[{value:"Motivation",id:"motivation",children:[]},{value:"Next.js",id:"nextjs",children:[]}],s={rightToc:c},p="wrapper";function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)(p,Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This project is MOXY's boilerplate to accelerate the setup of new React based web applications."),Object(o.b)("h2",{id:"motivation"},"Motivation"),Object(o.b)("p",null,"Creating your own isomorphic web application from the ground up can be very challenging and complex. You would have to bother with endless Webpack configurations, complex server rendering code and developer experience, just to name a few."),Object(o.b)("p",null,"The goal of this project is to get your new isomorphic React web application started in seconds. It offers many features and it's built on industry best practices & standards."),Object(o.b)("p",null,"To start with our stack, we introduce you ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://nextjs.org"}),"Next.js"),"."),Object(o.b)("h2",{id:"nextjs"},"Next.js"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://nextjs.org"}),"Next.js")," is a React framework built to provide server-side rendering."),Object(o.b)("p",null,"Server-side rendering (SSR) is a popular technique for rendering a normally client-side only single page app (SPA) on the server and then sending a fully rendered page to the client. The client's JavaScript bundle can then take over and the SPA can operate as normal. Amongst other benefits, SSR improves the perceived performance of your application and helps with delivering SEO."),Object(o.b)("p",null,"Next.js is an open-source project that has gained a lot of community traction and is currently our preferred option for SSR React applications."),Object(o.b)("p",null,"If you wish to learn more about Next.js, we recommend taking a look at ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://nextjs.org/learn/basics/getting-started"}),"their documentation"),"."))}l.isMDXComponent=!0},139:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r),o=a.a.createContext({}),i=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},c=function(e){var t=i(e.components);return a.a.createElement(o.Provider,{value:t},e.children)};var s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},l=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),l=i(n),u=r,d=l[c+"."+u]||l[u]||p[u]||o;return n?a.a.createElement(d,Object.assign({},{ref:t},s,{components:n})):a.a.createElement(d,Object.assign({},{ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=l;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[s]="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}l.displayName="MDXCreateElement"}}]);