"use strict";(self.webpackChunkmy_docusaurus_site=self.webpackChunkmy_docusaurus_site||[]).push([[5563],{2560:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"python-guide/Lists/Grocery_List","title":"Grocery List App","description":"This Python project implements a simple grocery list application where users can add, remove, list, and exit items from their grocery list.","source":"@site/docs/python-guide/06_Lists/04_Grocery_List.md","sourceDirName":"python-guide/06_Lists","slug":"/python-guide/Lists/Grocery_List","permalink":"/Python/docs/python-guide/Lists/Grocery_List","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/python-guide/06_Lists/04_Grocery_List.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{},"sidebar":"guideSidebar","previous":{"title":"Looping and Modifying Lists: A Cautionary Tale","permalink":"/Python/docs/python-guide/Lists/Dont_Loop_Modify"},"next":{"title":"OOP","permalink":"/Python/docs/category/oop"}}');var s=i(4848),r=i(8453);const o={},l="Grocery List App",a={},d=[{value:"How to Use",id:"how-to-use",level:2},{value:"Functionalities",id:"functionalities",level:2},{value:"Welcome Message",id:"welcome-message",level:3},{value:"Add Item",id:"add-item",level:3},{value:"Remove Item",id:"remove-item",level:3},{value:"List Items",id:"list-items",level:3},{value:"Valid Option Check",id:"valid-option-check",level:3},{value:"Exit Program",id:"exit-program",level:3},{value:"Bugs and Enhancements",id:"bugs-and-enhancements",level:2},{value:"Additional Notes",id:"additional-notes",level:2}];function c(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"grocery-list-app",children:"Grocery List App"})}),"\n",(0,s.jsx)(t.p,{children:"This Python project implements a simple grocery list application where users can add, remove, list, and exit items from their grocery list."}),"\n",(0,s.jsx)(t.h2,{id:"how-to-use",children:"How to Use"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Run the Python script."}),"\n",(0,s.jsxs)(t.li,{children:["Follow the on-screen instructions to perform various actions:","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Enter ",(0,s.jsx)(t.code,{children:"1"})," to add an item."]}),"\n",(0,s.jsxs)(t.li,{children:["Enter ",(0,s.jsx)(t.code,{children:"2"})," to remove an item."]}),"\n",(0,s.jsxs)(t.li,{children:["Enter ",(0,s.jsx)(t.code,{children:"3"})," to list all items."]}),"\n",(0,s.jsxs)(t.li,{children:["Enter ",(0,s.jsx)(t.code,{children:"0"})," to exit the program."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"functionalities",children:"Functionalities"}),"\n",(0,s.jsx)(t.h3,{id:"welcome-message",children:"Welcome Message"}),"\n",(0,s.jsx)(t.p,{children:"Upon starting the program, users are greeted with a welcome message and instructions on how to use the application."}),"\n",(0,s.jsx)(t.h3,{id:"add-item",children:"Add Item"}),"\n",(0,s.jsx)(t.p,{children:"Users can add items to their grocery list by entering the item name when prompted."}),"\n",(0,s.jsx)(t.h3,{id:"remove-item",children:"Remove Item"}),"\n",(0,s.jsx)(t.p,{children:"Users can remove items from their grocery list by entering the name of the item they wish to remove when prompted."}),"\n",(0,s.jsx)(t.h3,{id:"list-items",children:"List Items"}),"\n",(0,s.jsx)(t.p,{children:"Users can view all the items currently on their grocery list."}),"\n",(0,s.jsx)(t.h3,{id:"valid-option-check",children:"Valid Option Check"}),"\n",(0,s.jsx)(t.p,{children:"The program checks whether the user input is a valid option and prompts the user to enter a valid option if necessary."}),"\n",(0,s.jsx)(t.h3,{id:"exit-program",children:"Exit Program"}),"\n",(0,s.jsxs)(t.p,{children:["Users can exit the program at any time by entering ",(0,s.jsx)(t.code,{children:"0"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"bugs-and-enhancements",children:"Bugs and Enhancements"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Currently, if the user tries to add an item without entering anything, it will add an empty string as an item. This behavior needs to be fixed."}),"\n",(0,s.jsx)(t.li,{children:"Optionally, users can enhance the program by adding a fourth option that allows them to modify an existing list item."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"additional-notes",children:"Additional Notes"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"The program handles cases where users try to remove an item that does not exist in the grocery list."}),"\n",(0,s.jsx)(t.li,{children:"Enumerate is used to display items in the list starting from 1 instead of 0 for better user understanding."}),"\n",(0,s.jsx)(t.li,{children:"This project serves as a simple exercise to practice Python programming skills."}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>l});var n=i(6540);const s={},r=n.createContext(s);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);