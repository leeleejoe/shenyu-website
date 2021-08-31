"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[2287],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),h=p(r),f=o,m=h["".concat(c,".").concat(f)]||h[f]||l[f]||i;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=h;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},5500:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return h}});var n=r(7462),o=r(3366),i=r(7294),a=r(3905),u=function(){var e=(0,i.useState)([]),t=e[0],r=e[1];(0,i.useEffect)((function(){fetch("https://api.github.com/repos/apache/incubator-shenyu/contributors?page=1&per_page=10000").then((function(e){return e.json()})).then((function(e){r(e)}))}));var n="<table>";return t&&Array.isArray(t)&&t.forEach((function(e,r){r%5==0&&(r>0&&(n+="</tr>"),n+="<tr>"),n+='<td><a href="'+e.html_url+'" target="_blank"><img src="'+e.avatar_url+'" height="20" /> @'+e.login+"</a></td>",r===t.length-1&&(n+="</tr>")})),n+="</table>",i.createElement("div",{dangerouslySetInnerHTML:{__html:n}})},c=["components"],p={title:"Apache ShenYu Contributors",description:"Apache ShenYu Contributors",author:"xiaoyu",loadContributorList:!0,categories:"Apache ShenYu",tags:["ContributorList"]},s=void 0,l={unversionedId:"Apache-ShenYu-Contributors",id:"Apache-ShenYu-Contributors",isDocsHomePage:!1,title:"Apache ShenYu Contributors",description:"Apache ShenYu Contributors",source:"@site/community/9-Apache-ShenYu-Contributors.mdx",sourceDirName:".",slug:"/Apache-ShenYu-Contributors",permalink:"/community/Apache-ShenYu-Contributors",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/community/9-Apache-ShenYu-Contributors.mdx",version:"current",lastUpdatedBy:"fengzhenbing",lastUpdatedAt:1630426532,formattedLastUpdatedAt:"8/31/2021",sidebarPosition:9,frontMatter:{title:"Apache ShenYu Contributors",description:"Apache ShenYu Contributors",author:"xiaoyu",loadContributorList:!0,categories:"Apache ShenYu",tags:["ContributorList"]},sidebar:"community",previous:{title:"Sign ICLA Guide",permalink:"/community/Sign-ICLA-Guide"},next:{title:"User Registration",permalink:"/community/User-Registration"}},h=[],f={toc:h};function m(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Hundreds of people have contributed articles and code to Apache ShenYu so far, thank you very much!"),(0,a.kt)("p",null,"If you want to contribute, you can go to the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-shenyu/"},"Apache ShenYu")," and fork it."),(0,a.kt)(u,{mdxType:"Contributors"}))}m.isMDXComponent=!0}}]);