"use strict";(self.webpackChunkpython=self.webpackChunkpython||[]).push([[5785],{4862:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"python-guide/Built_in_Functions/enumerate()/README","title":"Enumerate Function in Python","description":"Introduction","source":"@site/docs/python-guide/08_Built_in_Functions/02_enumerate()/README.md","sourceDirName":"python-guide/08_Built_in_Functions/02_enumerate()","slug":"/python-guide/Built_in_Functions/enumerate()/","permalink":"/Python/docs/python-guide/Built_in_Functions/enumerate()/","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/python-guide/08_Built_in_Functions/02_enumerate()/README.md","tags":[],"version":"current","frontMatter":{},"sidebar":"guideSidebar","previous":{"title":"Python Print Statement","permalink":"/Python/docs/python-guide/Built_in_Functions/print()/"},"next":{"title":"Python Float Rounding Tutorial","permalink":"/Python/docs/python-guide/Built_in_Functions/round()/"}}');var o=t(4848),r=t(8453);const a={},s="Enumerate Function in Python",u={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Example Scenario",id:"example-scenario",level:2},{value:"Using Enumerate",id:"using-enumerate",level:2},{value:"Using Enumerate in a For Loop",id:"using-enumerate-in-a-for-loop",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"enumerate-function-in-python",children:"Enumerate Function in Python"})}),"\n",(0,o.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"enumerate"})," function in Python is a powerful tool that allows you to iterate through elements in a sequence while keeping track of the index or position of each element. This tutorial will guide you through the basics of using the ",(0,o.jsx)(n.code,{children:"enumerate"})," function with code snippets for a better understanding."]}),"\n",(0,o.jsx)(n.h2,{id:"example-scenario",children:"Example Scenario"}),"\n",(0,o.jsx)(n.p,{children:"Consider the following code snippet where you have a collection of elements, and you want to associate each element with a unique number in a growing order."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"elements = ['apple', 'banana', 'orange', 'grape']\n\n# Traditional Approach\nindex = 0\nfor element in elements:\n    print(f\"{index}: {element}\")\n    index += 1\n"})}),"\n",(0,o.jsxs)(n.p,{children:["This traditional approach works, but it involves writing additional code and is not very efficient. Let's explore a more elegant solution using the ",(0,o.jsx)(n.code,{children:"enumerate"})," function."]}),"\n",(0,o.jsx)(n.h2,{id:"using-enumerate",children:"Using Enumerate"}),"\n",(0,o.jsxs)(n.p,{children:["To use the ",(0,o.jsx)(n.code,{children:"enumerate"})," function, you can create a variable, say ",(0,o.jsx)(n.code,{children:"enumeration"}),", of type ",(0,o.jsx)(n.code,{children:"enumerate"})," and pass in the elements. Then, convert the result into a list or tuple for a clearer view."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"elements = ['apple', 'banana', 'orange', 'grape']\n\n# Using Enumerate\nenumeration = enumerate(elements)\nenumeration_list = list(enumeration)\n\nprint(enumeration_list)\n"})}),"\n",(0,o.jsxs)(n.p,{children:["By default, the enumeration starts at zero. To customize the start value, you can provide a second argument to ",(0,o.jsx)(n.code,{children:"enumerate"}),", specifying the starting index."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"enumeration_starting_from_one = enumerate(elements, start=1)\nenumeration_list_starting_from_one = list(enumeration_starting_from_one)\n\nprint(enumeration_list_starting_from_one)\n"})}),"\n",(0,o.jsx)(n.h2,{id:"using-enumerate-in-a-for-loop",children:"Using Enumerate in a For Loop"}),"\n",(0,o.jsxs)(n.p,{children:["The real power of ",(0,o.jsx)(n.code,{children:"enumerate"})," shines when used in a ",(0,o.jsx)(n.code,{children:"for"})," loop. You can unpack the tuple obtained from ",(0,o.jsx)(n.code,{children:"enumerate"})," directly in the loop header."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"elements = ['apple', 'banana', 'orange', 'grape']\n\n# Using Enumerate in a For Loop\nfor index, element in enumerate(elements):\n    print(f\"{index}: {element}\")\n"})}),"\n",(0,o.jsxs)(n.p,{children:["By default, the index starts at zero. To start from a different value, you can still provide the ",(0,o.jsx)(n.code,{children:"start"})," argument in the ",(0,o.jsx)(n.code,{children:"enumerate"})," function."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'for index, element in enumerate(elements, start=1):\n    print(f"{index}: {element}")\n'})}),"\n",(0,o.jsx)(n.p,{children:"This approach is not only more readable but can also be considered more performant as it avoids the need to manually increment the index in each iteration."}),"\n",(0,o.jsx)(n.p,{children:"Feel free to adapt and integrate these code snippets into your projects for efficient and clean iteration through elements."})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var i=t(6540);const o={},r=i.createContext(o);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);