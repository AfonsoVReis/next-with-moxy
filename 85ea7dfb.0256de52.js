(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{137:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"rightToc",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(1),o=n(9),i=(n(0),n(151)),r={id:"instructions",title:"Instructions",sidebar_label:"Instructions"},l=[{value:"1. Tweak some project files",id:"1-tweak-some-project-files",children:[]},{value:"2. Replace the root README.md",id:"2-replace-the-root-readmemd",children:[]},{value:"3. Setup favicon & manifest",id:"3-setup-favicon--manifest",children:[]},{value:"4. Setup documentation",id:"4-setup-documentation",children:[]}],c={id:"welcome/instructions",title:"Instructions",description:"To kick-start your own project from this boilerplate, you can fork it from its [repository](https://github.com/moxystudio/next-with-moxy).",source:"@site/docs/welcome/instructions.md",permalink:"/docs/welcome/instructions",sidebar_label:"Instructions",sidebar:"docs",previous:{title:"What is this",permalink:"/docs/welcome/what-is-this"},next:{title:"Conventions",permalink:"/docs/welcome/conventions"}},p={rightToc:l,metadata:c},s="wrapper";function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)(s,Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"To kick-start your own project from this boilerplate, you can fork it from its ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/moxystudio/next-with-moxy"}),"repository"),".\nAfterwards, you'll just need to install its dependencies and you're good to go! \ud83d\ude80"),Object(i.b)("p",null,"Keep in mind, part of adapting this boilerplate into a deliverable project is also changing this document into one that's about your project in specific. There are some things you must change to clean up any evidence of using this boilerplate."),Object(i.b)("h2",{id:"1-tweak-some-project-files"},"1. Tweak some project files"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Change all instances of ",Object(i.b)("inlineCode",{parentName:"p"},"{project-name}")," into the name of your project:"),Object(i.b)("p",{parentName:"li"},"You must change all instances of {project-name} into the name of your project, which you can find by using your editor to search the entire workspace for project-name."),Object(i.b)("p",{parentName:"li"},"In any case, here's a list of all places you'll find it:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"package.json"),": In the ",Object(i.b)("inlineCode",{parentName:"li"},"name")," field."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"App.data.js"),": In the ",Object(i.b)("inlineCode",{parentName:"li"},"title")," field."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Contacts.data.js"),": In the ",Object(i.b)("inlineCode",{parentName:"li"},"name")," field. This file is a sample file and you might want to delete it altogether."),Object(i.b)("li",{parentName:"ul"},"In this document, in case you want to use it."))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Change all instances of ",Object(i.b)("inlineCode",{parentName:"p"},"{project-domain}")," into the domain that will be used in production:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"package.json"),": In the ",Object(i.b)("inlineCode",{parentName:"li"},"description")," field."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"App.data.js"),": In the ",Object(i.b)("inlineCode",{parentName:"li"},"url")," field."))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Delete the following files and folders:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"LICENSE")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},".github"))))),Object(i.b)("h2",{id:"2-replace-the-root-readmemd"},"2. Replace the root README.md"),Object(i.b)("p",null,"Replace the root README.md file of the project with:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-md"}),"# {Project Name}\n\n{Brief explanation of the project}\n\n## Documentation\n\nThis project comes with a documentation web page. To view it:\n\n```bash\nnpm i --prefix docusarus\nnpm run docs\n```\n\n")),Object(i.b)("h2",{id:"3-setup-favicon--manifest"},"3. Setup favicon & manifest"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Use a favicon generator"),Object(i.b)("p",{parentName:"li"},"It is recommended the use of the generator ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://realfavicongenerator.net/"}),"RealFaviconGenerator"),". Follow the next steps:"),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Select an image (PNG, JPG or SVG). Your image should be 260x260 or more for optimal results.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Tweak the options for each of the sections. Please include a UI Designer in this process for optimal results.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},'\u2757\ufe0fAt the bottom, on the "Favicon Generator Options" section go to:'),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},'The "Path" tab, select the second option and write ',Object(i.b)("inlineCode",{parentName:"li"},"/favicons"),"."),Object(i.b)("li",{parentName:"ul"},'The "Version/Refresh" tab and select the second option.'),Object(i.b)("li",{parentName:"ul"},'The "Compression" tab and select "Very high quality, very low compression factor".'),Object(i.b)("li",{parentName:"ul"},'The "App name" tab, select the second option and add the name of your project.'))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Press the button to generate the favicon package and HTML code. Once the package is ready, download it and save the HTML code.")))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Add the files to the ",Object(i.b)("inlineCode",{parentName:"p"},"public/favicons")," folder"),Object(i.b)("p",{parentName:"li"},"Extract the package you downloaded to the ",Object(i.b)("inlineCode",{parentName:"p"},"public/favicons")," folder, overwriting all the files that are already there.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Add the HTML code to ",Object(i.b)("inlineCode",{parentName:"p"},"www/app/App.js")),Object(i.b)("p",{parentName:"li"},"Finally, add the HTML code you previously saved to the ",Object(i.b)("inlineCode",{parentName:"p"},"<Head>"),", replacing the same tags that are already there."))),Object(i.b)("p",null,"\u2139\ufe0f Most operating systems now offer light and dark modes. You may ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/recipes/favicon-os-theme"}),"setup different favicons for each OS theme")," if the favicon does doesn't have enough contrast in dark mode."),Object(i.b)("h2",{id:"4-setup-documentation"},"4. Setup documentation"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Remove algolia search from Docusaurus config:"),Object(i.b)("p",{parentName:"li"},"Remove the ",Object(i.b)("inlineCode",{parentName:"p"},"themeConfig.algolia")," key from ",Object(i.b)("inlineCode",{parentName:"p"},"docusaurus/docusaurus.config.js"),". The reason is that the search results indexed by Algolia will become out of sync with the documentation, causing it to possibly return wrong results (404 pages).")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Prepare the rest of the documentation website to be deliverable to your clients!"))))}b.isMDXComponent=!0},151:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var a=n(0),o=n.n(a),i=o.a.createContext({}),r=function(e){var t=o.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},l=function(e){var t=r(e.components);return o.a.createElement(i.Provider,{value:t},e.children)};var c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),s=r(n),b=a,m=s[l+"."+b]||s[b]||p[b]||i;return n?o.a.createElement(m,Object.assign({},{ref:t},c,{components:n})):o.a.createElement(m,Object.assign({},{ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,r[1]=l;for(var b=2;b<i;b++)r[b]=n[b];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);