"use strict";(self.webpackChunkmy_docusaurus_site=self.webpackChunkmy_docusaurus_site||[]).push([[8046],{6247:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"python-guide/Dataclasses/InitVar/README","title":"Tutorial: Using Post Initializer with Init Var in Data Classes","description":"Step 1: Import the init file","source":"@site/docs/python-guide/09_Dataclasses/04_InitVar/README.md","sourceDirName":"python-guide/09_Dataclasses/04_InitVar","slug":"/python-guide/Dataclasses/InitVar/","permalink":"/Python/docs/python-guide/Dataclasses/InitVar/","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/python-guide/09_Dataclasses/04_InitVar/README.md","tags":[],"version":"current","frontMatter":{},"sidebar":"guideSidebar","previous":{"title":"Python Post Initializers Tutorial","permalink":"/Python/docs/python-guide/Dataclasses/post_init/"},"next":{"title":"Using @property in Python","permalink":"/Python/docs/python-guide/Dataclasses/@property/"}}');var s=i(4848),r=i(8453);const a={},o="Tutorial: Using Post Initializer with Init Var in Data Classes",l={},c=[{value:"Step 1: Import the init file",id:"step-1-import-the-init-file",level:2},{value:"Step 2: Define an Init Var",id:"step-2-define-an-init-var",level:2},{value:"Step 3: Implement Post Initializer",id:"step-3-implement-post-initializer",level:2},{value:"Step 4: Create Fruit Objects",id:"step-4-create-fruit-objects",level:2},{value:"Step 5: Print Object Details",id:"step-5-print-object-details",level:2}];function p(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"tutorial-using-post-initializer-with-init-var-in-data-classes",children:"Tutorial: Using Post Initializer with Init Var in Data Classes"})}),"\n",(0,s.jsx)(t.h2,{id:"step-1-import-the-init-file",children:"Step 1: Import the init file"}),"\n",(0,s.jsx)(t.p,{children:"To get started, we need to import an init file. This file will be used to define an init var, which will be part of the initializer and not the class itself."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"from __future__ import annotations  # Importing annotations to enable forward references in type hints\n"})}),"\n",(0,s.jsx)(t.h2,{id:"step-2-define-an-init-var",children:"Step 2: Define an Init Var"}),"\n",(0,s.jsxs)(t.p,{children:["Create an init var called ",(0,s.jsx)(t.code,{children:"Israir"})," inside the class, specifying its type as an optional boolean. This init var will be part of the initializer, allowing us to perform custom actions during the post initialization phase."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"class Fruit:\n    def __init__(self, name: str, quantity: str, price_per_kilo: float, Israir: bool = None):\n        self.name = name\n        self.quantity = quantity\n        self.price_per_kilo = price_per_kilo\n        self.Israir = Israir\n"})}),"\n",(0,s.jsx)(t.h2,{id:"step-3-implement-post-initializer",children:"Step 3: Implement Post Initializer"}),"\n",(0,s.jsxs)(t.p,{children:["Inside the class, use the post initializer to perform custom actions based on the provided init var. In this example, the price per kilo will be doubled if the Israir value is ",(0,s.jsx)(t.code,{children:"True"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"    def __post_init__(self):\n        if self.Israir:\n            self.price_per_kilo *= 2\n"})}),"\n",(0,s.jsx)(t.h2,{id:"step-4-create-fruit-objects",children:"Step 4: Create Fruit Objects"}),"\n",(0,s.jsxs)(t.p,{children:["In the ",(0,s.jsx)(t.code,{children:'if __name__ == "__main__":'})," block, create instances of the ",(0,s.jsx)(t.code,{children:"Fruit"})," class with different attributes, including the optional ",(0,s.jsx)(t.code,{children:"Israir"})," parameter."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'if __name__ == "__main__":\n    apple = Fruit(name="Apple", quantity="200g", price_per_kilo=5.0)\n    orange = Fruit(name="Orange", quantity="150g", price_per_kilo=4.0, Israir=False)\n    passion = Fruit(name="Passion Fruit", quantity="100g", price_per_kilo=50.0, Israir=True)\n'})}),"\n",(0,s.jsx)(t.h2,{id:"step-5-print-object-details",children:"Step 5: Print Object Details"}),"\n",(0,s.jsxs)(t.p,{children:["Print the details of the fruit objects, including the effect of the post initializer on the price if ",(0,s.jsx)(t.code,{children:"Israir"})," is ",(0,s.jsx)(t.code,{children:"True"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"    print(apple)\n    print(orange)\n    print(passion)\n"})}),"\n",(0,s.jsx)(t.p,{children:"Now, when you run this Python script, you will see the details of the fruit objects, and the price of passion fruit will be doubled due to the post initializer."}),"\n",(0,s.jsx)(t.p,{children:"This tutorial demonstrates the power of using init var in combination with post initializers to customize the behavior of data classes without cluttering the class definition."})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>o});var n=i(6540);const s={},r=n.createContext(s);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);