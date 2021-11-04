"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[6745],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,h=m["".concat(p,".").concat(d)]||m[d]||c[d]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4889:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={slug:"start-demo",title:"Apache ShenYu Start Demo",author:"Kunshuai Zhu",author_title:"Apache ShenYu Contributor",author_url:"https://github.com/JooKS-me",author_image_url:"https://avatars1.githubusercontent.com/u/62384022?v=4",tags:["Apache ShenYu"]},p=void 0,s={permalink:"/blog/start-demo",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/blog/SourceCode-Analysis-Start-Demo.md",source:"@site/blog/SourceCode-Analysis-Start-Demo.md",title:"Apache ShenYu Start Demo",description:"Environmental preparation",date:"2021-11-04T07:50:45.169Z",formattedDate:"November 4, 2021",tags:[{label:"Apache ShenYu",permalink:"/blog/tags/apache-shen-yu"}],readingTime:1.41,truncated:!1,nextItem:{title:"WebSocket Data Synchronization Source Code Analysis",permalink:"/blog/code-analysis-websocket-data-sync"}},u=[{value:"Environmental preparation",id:"environmental-preparation",children:[]},{value:"Pull ShenYu code",id:"pull-shenyu-code",children:[]},{value:"Compile code",id:"compile-code",children:[]},{value:"Start the gateway service",id:"start-the-gateway-service",children:[]},{value:"Start application service",id:"start-application-service",children:[]},{value:"Test Http request",id:"test-http-request",children:[]},{value:"Use more plugins",id:"use-more-plugins",children:[]}],c={toc:u};function m(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"environmental-preparation"},"Environmental preparation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install JDK1.8+ locally"),(0,o.kt)("li",{parentName:"ul"},"Install Git locally"),(0,o.kt)("li",{parentName:"ul"},"Install Maven locally"),(0,o.kt)("li",{parentName:"ul"},"Choose a development tool, such as IDEA")),(0,o.kt)("h3",{id:"pull-shenyu-code"},"Pull ShenYu code"),(0,o.kt)("p",null,"Use Git to clone code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"> git clone https://github.com/apache/incubator-shenyu.git\n")),(0,o.kt)("h3",{id:"compile-code"},"Compile code"),(0,o.kt)("p",null,"Compile with Maven"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"> cd incubator-shenyu\n> mvn clean install -Dmaven.javadoc.skip=true -B -Drat.skip=true -Djacoco.skip=true -DskipITs -DskipTests\n")),(0,o.kt)("h3",{id:"start-the-gateway-service"},"Start the gateway service"),(0,o.kt)("p",null,"Use development tools, take IDEA as an example."),(0,o.kt)("p",null,"Start ",(0,o.kt)("inlineCode",{parentName:"p"},"shenyu-admin")," (use H2 database by default)"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"start-demo-admin",src:n(57150).Z})),(0,o.kt)("p",null,"Start ",(0,o.kt)("inlineCode",{parentName:"p"},"shenyu-bootstrap")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"start-demo-bootstrap",src:n(77274).Z})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"At this point, shenyu gateway has been activated."),(0,o.kt)("p",{parentName:"blockquote"},"We can open the browser and access the admin console: ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:9095/"},"http://localhost:9095/"))),(0,o.kt)("h3",{id:"start-application-service"},"Start application service"),(0,o.kt)("p",null,"Apache ShenYu provides examples for Http, Dubbo, SpringCloud and other applications to access the shenyu gateway, located in the ",(0,o.kt)("inlineCode",{parentName:"p"},"shenyu-example")," module. Here we take the Http service as an example."),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"shenyu-example")," is not marked as a Maven project by IDEA, you can right-click the ",(0,o.kt)("inlineCode",{parentName:"p"},"pom.xml")," file in the ",(0,o.kt)("inlineCode",{parentName:"p"},"shenyu-example")," directory to add it as a Maven project."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"start-demo-maven",src:n(75382).Z})),(0,o.kt)("p",null,"Start ",(0,o.kt)("inlineCode",{parentName:"p"},"shenyu-examples-http"),"\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"start-demo-examples-http",src:n(37509).Z})),(0,o.kt)("p",null,"At this time, ",(0,o.kt)("inlineCode",{parentName:"p"},"shenyu-examples-http")," will automatically register the interface method annotated with ",(0,o.kt)("inlineCode",{parentName:"p"},"@ShenyuSpringMvcClient")," and the related configuration in application.yml to the gateway. When we open the admin console, you can see the relevant configuration in divide and context-path."),(0,o.kt)("h3",{id:"test-http-request"},"Test Http request"),(0,o.kt)("p",null,"Now use ",(0,o.kt)("inlineCode",{parentName:"p"},"postman")," to simulate ",(0,o.kt)("inlineCode",{parentName:"p"},"http")," to request your ",(0,o.kt)("inlineCode",{parentName:"p"},"http")," service:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"start-demo-post-http",src:n(19680).Z})),(0,o.kt)("h3",{id:"use-more-plugins"},"Use more plugins"),(0,o.kt)("p",null,"We can refer to ",(0,o.kt)("a",{parentName:"p",href:"../docs/index"},"Official Document")," to use other plugins."),(0,o.kt)("p",null,"Here is an example of using the param-mapping plugin."),(0,o.kt)("p",null,"Edit the param-mapping plugin in ",(0,o.kt)("inlineCode",{parentName:"p"},"BasicConfig -> Plugin")," and set ",(0,o.kt)("inlineCode",{parentName:"p"},"status"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"start-demo-plugin",src:n(36475).Z})),(0,o.kt)("p",null,"Configure selectors and rules in ",(0,o.kt)("inlineCode",{parentName:"p"},"PluginList -> http process"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"start-demo-selector",src:n(51608).Z})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"start-demo-rules",src:n(35896).Z})),(0,o.kt)("p",null,"Then use ",(0,o.kt)("inlineCode",{parentName:"p"},"postman")," to make an http request to ",(0,o.kt)("inlineCode",{parentName:"p"},"/http/test/payment"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"start-demo-post-param-mapping",src:n(20693).Z})))}m.isMDXComponent=!0},57150:function(e,t,n){t.Z=n.p+"assets/images/start-demo-admin-debdd1ee5e979a4892f26e4d54572ead.png"},77274:function(e,t,n){t.Z=n.p+"assets/images/start-demo-bootstrap-cafa4d22b0d69bb6ee82c01e7b45d239.png"},37509:function(e,t,n){t.Z=n.p+"assets/images/start-demo-examples-http-a42235638d82a4be8aeefbb819d419be.png"},75382:function(e,t,n){t.Z=n.p+"assets/images/start-demo-maven-a52eeb99414c79d32a127312a5d22d6f.png"},36475:function(e,t,n){t.Z=n.p+"assets/images/start-demo-plugin-8525f3812e42bed70e28ce23540069b7.png"},19680:function(e,t,n){t.Z=n.p+"assets/images/start-demo-post-http-a7e95883d3147d67e6080236d980d72b.png"},20693:function(e,t,n){t.Z=n.p+"assets/images/start-demo-post-param-mapping-d5d632dc96eb1f0080c451820e8f7df4.png"},35896:function(e,t,n){t.Z=n.p+"assets/images/start-demo-rules-581013f9d7f0f9996b01aab85efcc8e7.png"},51608:function(e,t,n){t.Z=n.p+"assets/images/start-demo-selector-98b0b1ae460bdbed17edc40ab730a182.png"}}]);