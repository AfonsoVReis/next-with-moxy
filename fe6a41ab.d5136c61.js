(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{136:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"rightToc",(function(){return r})),n.d(t,"default",(function(){return s}));var a=n(1),i=(n(0),n(139));const o={id:"internationalization",title:"Internationalization",sidebar_label:"Internationalization"},r=[{value:"Adding a new locale",id:"adding-a-new-locale",children:[]},{value:"Adding a new policy",id:"adding-a-new-policy",children:[]}],l={rightToc:r},c="wrapper";function s({components:e,...t}){return Object(i.b)(c,Object(a.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"All of our projects have I18N support built-in, even if there's no need to initially have more than one locale. By having I18N support from the very beggining, the project itself is built with that in mind, making it very easy to add new locales in the future without having to refactor a good surface of your app."),Object(i.b)("p",null,"We have choosen ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/formatjs/react-intl/"}),Object(i.b)("inlineCode",{parentName:"a"},"react-intl"))," for internalization and localization because:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"It has a large community and is being actively maintained."),Object(i.b)("li",{parentName:"ul"},"Built on the standard ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl"}),"Intl")," API."),Object(i.b)("li",{parentName:"ul"},"It can localize strings, numbers, dates and relative dates."),Object(i.b)("li",{parentName:"ul"},"Runs in the browser and Node.js.")),Object(i.b)("p",null,"The integration of ",Object(i.b)("inlineCode",{parentName:"p"},"react-intl")," into Next.js is made by ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/moxystudio/"}),"next-intl"),"."),Object(i.b)("h2",{id:"adding-a-new-locale"},"Adding a new locale"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Add the locale to the ",Object(i.b)("inlineCode",{parentName:"li"},"intl/index.js")," file, following the default ",Object(i.b)("inlineCode",{parentName:"li"},"en-US")," locale."),Object(i.b)("li",{parentName:"ol"},"Add the messages file to ",Object(i.b)("inlineCode",{parentName:"li"},"intl/messages/<locale>.json"),".")),Object(i.b)("h2",{id:"adding-a-new-policy"},"Adding a new policy"),Object(i.b)("p",null,"Policies control which locale is active at a given point, amongst other things."),Object(i.b)("p",null,"You may want to create custom policies for certain use-cases. One common use-case is to have a policy that matches against the locale saved in the account preferences of authenticated users."),Object(i.b)("p",null,"Please check ",Object(i.b)("inlineCode",{parentName:"p"},"next-intl")," ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/moxystudio/next-intl#custom-policies"}),"documentation")," to know more."))}s.isMDXComponent=!0},139:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var a=n(0),i=n.n(a),o=i.a.createContext({}),r=function(e){var t=i.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},l=function(e){var t=r(e.components);return i.a.createElement(o.Provider,{value:t},e.children)};var c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),p=r(n),b=a,u=p[l+"."+b]||p[b]||s[b]||o;return n?i.a.createElement(u,Object.assign({},{ref:t},c,{components:n})):i.a.createElement(u,Object.assign({},{ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,r[1]=l;for(var b=2;b<o;b++)r[b]=n[b];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);