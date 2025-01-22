"use strict";(self.webpackChunkmy_docusaurus_site=self.webpackChunkmy_docusaurus_site||[]).push([[2398],{7144:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"guide/Python_Basics/Frozensets/README","title":"Frozen Sets","description":"Frozen sets are a special data type in Python that is similar to sets but comes with the added feature of immutability. Once a frozen set is created, its elements cannot be modified or changed, making it a suitable choice when you want to ensure the integrity of your data. This immutability also contributes to slightly better memory efficiency, akin to the distinction between tuples and lists.","source":"@site/docs/guide/01_Python_Basics/18_Frozensets/README.md","sourceDirName":"guide/01_Python_Basics/18_Frozensets","slug":"/guide/Python_Basics/Frozensets/","permalink":"/Python/docs/guide/Python_Basics/Frozensets/","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guide/01_Python_Basics/18_Frozensets/README.md","tags":[],"version":"current","frontMatter":{},"sidebar":"guideSidebar","previous":{"title":"Sets","permalink":"/Python/docs/guide/Python_Basics/Sets/"},"next":{"title":"Dictionary","permalink":"/Python/docs/guide/Python_Basics/Dictionaries/"}}');var a=n(4848),i=n(8453);const r={},o="Frozen Sets",c={},u=[{value:"Creating a Frozen Set",id:"creating-a-frozen-set",level:2},{value:"Immutable Nature",id:"immutable-nature",level:2},{value:"Use Cases",id:"use-cases",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"frozen-sets",children:"Frozen Sets"})}),"\n",(0,a.jsx)(t.p,{children:"Frozen sets are a special data type in Python that is similar to sets but comes with the added feature of immutability. Once a frozen set is created, its elements cannot be modified or changed, making it a suitable choice when you want to ensure the integrity of your data. This immutability also contributes to slightly better memory efficiency, akin to the distinction between tuples and lists."}),"\n",(0,a.jsx)(t.h2,{id:"creating-a-frozen-set",children:"Creating a Frozen Set"}),"\n",(0,a.jsxs)(t.p,{children:["To create a frozen set, you can use the ",(0,a.jsx)(t.code,{children:"frozenset"})," data type and pass in a regular set. Here's an example:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'# Creating a frozen set\nregular_set = {99, True, "Bob", 11233, "Bob"}\nfrozen_set = frozenset(regular_set)\nprint(frozen_set)\n'})}),"\n",(0,a.jsx)(t.p,{children:"In this example, the duplicates in the set are automatically removed, demonstrating that whether it's a frozen set or a regular set, duplicates are not allowed."}),"\n",(0,a.jsx)(t.h2,{id:"immutable-nature",children:"Immutable Nature"}),"\n",(0,a.jsxs)(t.p,{children:["One crucial characteristic of frozen sets is their immutability. Attempting to modify a frozen set after creation will result in an ",(0,a.jsx)(t.code,{children:"AttributeError"}),". For example:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'# Attempting to add an element to a frozen set\ntry:\n    frozen_set.add("Alice")\nexcept AttributeError as e:\n    print(f"AttributeError: {e}")\n'})}),"\n",(0,a.jsxs)(t.p,{children:["The above code will raise an ",(0,a.jsx)(t.code,{children:"AttributeError"})," since adding elements is not supported for frozen sets."]}),"\n",(0,a.jsx)(t.h2,{id:"use-cases",children:"Use Cases"}),"\n",(0,a.jsx)(t.p,{children:"Frozen sets are particularly useful when you want to ensure that your data remains unchanged throughout the execution of your code. If you know that your data won't be modified, using a frozen set can provide additional safety and prevent unintended alterations. In conclusion, frozen sets in Python are identical to normal sets in most aspects, with the key difference being their immutability. They are a niche data type that may not be used frequently, but understanding them can be valuable in situations where data integrity is paramount. Consider using frozen sets when you want assurance that your data remains constant throughout your program."})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var s=n(6540);const a={},i=s.createContext(a);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);