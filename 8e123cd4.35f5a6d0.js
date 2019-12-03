(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{118:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return l}));var a=n(1),r=(n(0),n(139));const o={id:"node-modules-compiling",title:"Node modules compiling",sidebar_label:"Node modules compiling"},i=[],c={rightToc:i},p="wrapper";function l({components:e,...t}){return Object(r.b)(p,Object(a.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The boilerplate includes ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/moxystudio/next-compile-node-modules"}),Object(r.b)("inlineCode",{parentName:"a"},"@moxy/next-compile-node-modules")),", a Next.js plugin that ensures Babel will compile ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules"),"."),Object(r.b)("p",null,"As package authors aren't aware of what context their packages will be used in, this should instead be a concern of app developers, who would use use ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://babeljs.io/docs/en/babel-preset-env"}),Object(r.b)("inlineCode",{parentName:"a"},"@babel/preset-env")),' to compile included packages to be compatible with their desired targets (e.g., "IE 11").'),Object(r.b)("p",null,"Popular boilerplate projects such as ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebook/create-react-app"}),Object(r.b)("inlineCode",{parentName:"a"},"create-react-app"))," now compile all ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules"),", so we have opted to implement this behavior by default."))}l.isMDXComponent=!0},139:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a),o=r.a.createContext({}),i=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},c=function(e){var t=i(e.components);return r.a.createElement(o.Provider,{value:t},e.children)};var p="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),s=i(n),u=a,b=s[c+"."+u]||s[u]||l[u]||o;return n?r.a.createElement(b,Object.assign({},{ref:t},p,{components:n})):r.a.createElement(b,Object.assign({},{ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);