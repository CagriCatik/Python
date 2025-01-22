"use strict";(self.webpackChunkmy_docusaurus_site=self.webpackChunkmy_docusaurus_site||[]).push([[4176],{363:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>i,toc:()=>p});const i=JSON.parse('{"id":"python-guide/Python_Basics/Type_Hints","title":"Dynamic Typing and Type Hints","description":"Python is a dynamically typed language, allowing flexibility in changing variable types during program execution. However, it\'s good practice to use type hints or annotations to make code more explicit and catch potential errors early on.","source":"@site/docs/python-guide/01_Python_Basics/06_Type_Hints.md","sourceDirName":"python-guide/01_Python_Basics","slug":"/python-guide/Python_Basics/Type_Hints","permalink":"/Python/docs/python-guide/Python_Basics/Type_Hints","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/python-guide/01_Python_Basics/06_Type_Hints.md","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{},"sidebar":"guideSidebar","previous":{"title":"Data Types","permalink":"/Python/docs/python-guide/Python_Basics/Data_Types"},"next":{"title":"Shortcut","permalink":"/Python/docs/python-guide/Python_Basics/Shortcut_Format"}}');var a=t(4848),s=t(8453);const r={},o="Dynamic Typing and Type Hints",c={},p=[{value:"Dynamic Typing Example",id:"dynamic-typing-example",level:2},{value:"Type Hints and Annotations",id:"type-hints-and-annotations",level:2}];function d(n){const e={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,s.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.header,{children:(0,a.jsx)(e.h1,{id:"dynamic-typing-and-type-hints",children:"Dynamic Typing and Type Hints"})}),"\n",(0,a.jsx)(e.p,{children:"Python is a dynamically typed language, allowing flexibility in changing variable types during program execution. However, it's good practice to use type hints or annotations to make code more explicit and catch potential errors early on."}),"\n",(0,a.jsx)(e.h2,{id:"dynamic-typing-example",children:"Dynamic Typing Example"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:"number = 10\nprint(number)\nprint(type(number))\n\n# Reassigning 'number' to a string\nnumber = \"hello\"\nprint(number)\nprint(type(number))\n"})}),"\n",(0,a.jsxs)(e.p,{children:["In this example, we initially assign an integer to ",(0,a.jsx)(e.code,{children:"number"}),", print it, and print its type. Then, we reassign it to a string, demonstrating Python's dynamic typing."]}),"\n",(0,a.jsx)(e.h2,{id:"type-hints-and-annotations",children:"Type Hints and Annotations"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:'number: int = 10\nprint(number)\n\n# Trying to reassign \'number\' to a string will trigger a warning\nnumber = "hello"  # Type hint provides early warning for incorrect type\n\ntext: str = "hello"\nprint(text + "!")\n'})}),"\n",(0,a.jsxs)(e.p,{children:["Here, we use type hints to explicitly state the expected types for ",(0,a.jsx)(e.code,{children:"number"})," and ",(0,a.jsx)(e.code,{children:"text"}),". The type hints act as a safety mechanism, providing warnings during development if the assigned types don't match the hints."]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:"# Incorrect usage will trigger a warning during development\n# Uncomment the line below to see the warning\n# text = 100\n"})}),"\n",(0,a.jsx)(e.p,{children:"This commented-out line demonstrates that attempting to assign an incorrect type (integer in this case) will result in a warning, preventing potential runtime errors. Keep in mind that type hints are for developers' benefit and are ignored by Python during runtime. They serve as documentation and aid in catching errors early in the development process."})]})}function l(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(d,{...n})}):d(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>r,x:()=>o});var i=t(6540);const a={},s=i.createContext(a);function r(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:r(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);