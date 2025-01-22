"use strict";(self.webpackChunkmy_docusaurus_site=self.webpackChunkmy_docusaurus_site||[]).push([[4334],{2638:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>r,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"guide/AsyncIO/Intro","title":"Introduction","description":"In this tutorial, we\'ll explore the concept of async IO, understand its purpose, and see how it can be beneficial in handling IO-bound tasks.","source":"@site/docs/guide/11_AsyncIO/01_Intro.md","sourceDirName":"guide/11_AsyncIO","slug":"/guide/AsyncIO/Intro","permalink":"/Python/docs/guide/AsyncIO/Intro","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guide/11_AsyncIO/01_Intro.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{},"sidebar":"guideSidebar","previous":{"title":"AsyncIO","permalink":"/Python/docs/category/asyncio"},"next":{"title":"Asynchronous Programming with Asyncio in Python","permalink":"/Python/docs/guide/AsyncIO/Getting_Started"}}');var o=t(4848),i=t(8453);const r={},a="Introduction",c={},u=[{value:"What is Async IO?",id:"what-is-async-io",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"introduction",children:"Introduction"})}),"\n",(0,o.jsx)(n.p,{children:"In this tutorial, we'll explore the concept of async IO, understand its purpose, and see how it can be beneficial in handling IO-bound tasks."}),"\n",(0,o.jsx)(n.h2,{id:"what-is-async-io",children:"What is Async IO?"}),"\n",(0,o.jsx)(n.p,{children:"In programming, making requests to fetch data from the internet is a common task. However, waiting for responses, especially if they take several seconds, can be inefficient and lead to frozen programs. Async IO, which stands for asynchronous input and output, addresses this issue by allowing the program to continue with other tasks while waiting for responses."}),"\n",(0,o.jsx)(n.p,{children:"Async IO is particularly useful for IO-bound tasks, such as fetching data from APIs. Asynchronous programming, in this context, means executing tasks not at the same time, in contrast to synchronous programming where tasks happen sequentially."}),"\n",(0,o.jsx)(n.p,{children:"To illustrate the concept visually, consider two functions, Function One and Function Two, both making requests to fetch data from the internet."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"# Synchronous Example\n# Total execution time: 3 seconds\nresponse_one = function_one()  # Takes 2 seconds\nresponse_two = function_two()  # Takes 1 second\n\n# Async IO Example\n# Total execution time: 2 seconds\nresponse_one = await function_one()  # Takes 2 seconds\nresponse_two = await function_two()  # Takes 1 second\n"})}),"\n",(0,o.jsxs)(n.p,{children:["In the synchronous example, we would wait for ",(0,o.jsx)(n.code,{children:"function_one"})," to complete before moving on to ",(0,o.jsx)(n.code,{children:"function_two"}),", resulting in a total execution time of 3 seconds. However, with async IO, we can start both functions seemingly simultaneously, allowing the program to proceed with other tasks while waiting for responses. It's crucial to note that async IO doesn't speed up code execution; instead, it enables the continuation of other code while waiting for external sources' results, such as server responses or web page data."]})]})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var s=t(6540);const o={},i=s.createContext(o);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);