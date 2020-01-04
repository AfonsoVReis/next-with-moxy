(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{109:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"rightToc",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(1),r=(n(0),n(116));const i={id:"docker",title:"Docker",sidebar_label:"Docker"},o=[{value:"Multi-stage builds",id:"multi-stage-builds",children:[]}],c={id:"what-is-included/docker",title:"Docker",description:"We provide a `Dockerfile` so that you can easily use [**Docker**](https://www.docker.com/) to run the application you're building in a containerized environment.",source:"@site/docs/what-is-included/docker.md",permalink:"/docs/what-is-included/docker",sidebar_label:"Docker",sidebar:"docs",previous:{title:"Environment Variables",permalink:"/docs/what-is-included/environment-variables"},next:{title:"Webpack loaders for common files",permalink:"/docs/what-is-included/webpack-file-loaders"}},l={rightToc:o,metadata:c},s="wrapper";function p({components:e,...t}){return Object(r.b)(s,Object(a.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"We provide a ",Object(r.b)("inlineCode",{parentName:"p"},"Dockerfile")," so that you can easily use ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.docker.com/"}),Object(r.b)("strong",{parentName:"a"},"Docker"))," to run the application you're building in a containerized environment."),Object(r.b)("p",null,"To run this app in Docker, you can use the following commands from the project's folder:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker build -t {project-name}:latest .\ndocker run --name={project-name} -p 3000:3000 --restart=unless-stopped -d {project-name}:latest\n")),Object(r.b)("p",null,"Afterwards you'll be able to find your project running at ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://localhost:3000"}),"http://localhost:3000"),"."),Object(r.b)("p",null,"This ",Object(r.b)("inlineCode",{parentName:"p"},"Dockerfile")," is also how you can pass environment variables to your Docker container running this application. In the ",Object(r.b)("inlineCode",{parentName:"p"},"Dockerfile"),", you do this with two steps:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Define an ",Object(r.b)("inlineCode",{parentName:"li"},"ARG")," for the variable to be received."),Object(r.b)("li",{parentName:"ul"},"Pass that ",Object(r.b)("inlineCode",{parentName:"li"},"ARG")," into an ",Object(r.b)("inlineCode",{parentName:"li"},"ENV")," argument that will exist during the build process as well as the server-runtime process.")),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# Define build arguments & map them to environment variables\nARG SOME_ARGUMENT\nENV SOME_ENV_VAR $SOME_ARGUMENT\n")),Object(r.b)("p",null,"You can check the existing ",Object(r.b)("inlineCode",{parentName:"p"},"Dockerfile")," to see how we're configuring ",Object(r.b)("inlineCode",{parentName:"p"},"GA_TRACKING_ID"),"."),Object(r.b)("h2",{id:"multi-stage-builds"},"Multi-stage builds"),Object(r.b)("p",null,"The Dockerfile we provide allows for ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.docker.com/develop/develop-images/multistage-build/"}),"multi-stage builds"),", with the following benefits:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The final runtime image is much lighter because it doesn't contain dev dependencies and other intermediate artifacts produced during the build phase."),Object(r.b)("li",{parentName:"ul"},"It allows to target a specific stage when building, which is useful to create a CI/CD pipeline. As an example, you may run the project tests by specifying ",Object(r.b)("inlineCode",{parentName:"li"},"--target check")," when calling ",Object(r.b)("inlineCode",{parentName:"li"},"docker build"),".")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u2139\ufe0f You may leverage Docker ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.docker.com/develop/develop-images/build_enhancements/"}),"BuildKit")," to ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/docker/cli/issues/1134#issuecomment-399005853"}),"skip stages")," that are not needed for the specified target. To do so, set DOCKER_BUILDKIT=1 when running ",Object(r.b)("inlineCode",{parentName:"p"},"docker build"),".")))}p.isMDXComponent=!0},116:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a),i=r.a.createContext({}),o=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},c=function(e){var t=o(e.components);return r.a.createElement(i.Provider,{value:t},e.children)};var l="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),p=o(n),u=a,b=p[c+"."+u]||p[u]||s[u]||i;return n?r.a.createElement(b,Object.assign({},{ref:t},l,{components:n})):r.a.createElement(b,Object.assign({},{ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[l]="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);