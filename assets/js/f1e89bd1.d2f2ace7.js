"use strict";(self.webpackChunkmy_docusaurus_site=self.webpackChunkmy_docusaurus_site||[]).push([[4115],{344:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"python-guide/Dataclasses/Fields","title":"Data Class with Mutable Defaults","description":"Step 1: Importing Dependencies","source":"@site/docs/python-guide/09_Dataclasses/02_Fields.md","sourceDirName":"python-guide/09_Dataclasses","slug":"/python-guide/Dataclasses/Fields","permalink":"/Python/docs/python-guide/Dataclasses/Fields","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/python-guide/09_Dataclasses/02_Fields.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{},"sidebar":"guideSidebar","previous":{"title":"Data Classes","permalink":"/Python/docs/python-guide/Dataclasses/@dataclass"},"next":{"title":"Post Initializers","permalink":"/Python/docs/python-guide/Dataclasses/post_init"}}');var n=s(4848),i=s(8453);const r={},l="Data Class with Mutable Defaults",c={},d=[{value:"Step 1: Importing Dependencies",id:"step-1-importing-dependencies",level:2},{value:"Step 2: Creating a Data Class",id:"step-2-creating-a-data-class",level:2},{value:"Step 3: Creating Instances",id:"step-3-creating-instances",level:2}];function o(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"data-class-with-mutable-defaults",children:"Data Class with Mutable Defaults"})}),"\n",(0,n.jsx)(t.h2,{id:"step-1-importing-dependencies",children:"Step 1: Importing Dependencies"}),"\n",(0,n.jsx)(t.p,{children:"First, import the necessary modules and functions:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"from dataclasses import dataclass, field\n"})}),"\n",(0,n.jsx)(t.h2,{id:"step-2-creating-a-data-class",children:"Step 2: Creating a Data Class"}),"\n",(0,n.jsxs)(t.p,{children:["Now, let's create a data class named ",(0,n.jsx)(t.code,{children:"Fruit"})," with mutable defaults:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"@dataclass\nclass Fruit:\n    name: str\n    grams: float\n    price_per_kilo: float\n    edible: bool = True\n    related_fruits: list = field(default_factory=list)\n"})}),"\n",(0,n.jsxs)(t.p,{children:["In this example, the ",(0,n.jsx)(t.code,{children:"Fruit"})," class has fields for ",(0,n.jsx)(t.code,{children:"name"}),", ",(0,n.jsx)(t.code,{children:"grams"}),", ",(0,n.jsx)(t.code,{children:"price_per_kilo"}),", ",(0,n.jsx)(t.code,{children:"edible"})," (with a default value of ",(0,n.jsx)(t.code,{children:"True"}),"), and ",(0,n.jsx)(t.code,{children:"related_fruits"})," (using ",(0,n.jsx)(t.code,{children:"field"})," with ",(0,n.jsx)(t.code,{children:"default_factory"})," to create an empty list)."]}),"\n",(0,n.jsx)(t.h2,{id:"step-3-creating-instances",children:"Step 3: Creating Instances"}),"\n",(0,n.jsxs)(t.p,{children:["Now, let's create instances of the ",(0,n.jsx)(t.code,{children:"Fruit"})," class:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'if __name__ == "__main__":\n    # Creating an apple without specifying default values\n    apple = Fruit(name="Apple", grams=100, price_per_kilo=5)\n\n    # Creating a pear with custom values\n    pear = Fruit(name="Pear", grams=250, price_per_kilo=10, edible=True, related_fruits=["Apple", "Orange"])\n\n    # Printing the fruits\n    print(apple)\n    print(pear)\n    print("Related Fruits:", pear.related_fruits)\n'})}),"\n",(0,n.jsxs)(t.p,{children:["In this example, the ",(0,n.jsx)(t.code,{children:"Fruit"})," instances are created with and without specifying custom values. Note that default values are used for unspecified fields."]}),"\n",(0,n.jsxs)(t.p,{children:["Now you can run your Python script, and you should see the output displaying the created ",(0,n.jsx)(t.code,{children:"Fruit"})," instances."]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>l});var a=s(6540);const n={},i=a.createContext(n);function r(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);