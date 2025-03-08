"use strict";(self.webpackChunkpython=self.webpackChunkpython||[]).push([[4130],{4536:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"python-guide/Python_Basics/None","title":"None Type","description":"The None type in Python is a special data type used to represent the absence of a value or the concept of nothing. It is often returned by certain functions to indicate that no meaningful value is available.","source":"@site/docs/python-guide/01_Python_Basics/20_None.md","sourceDirName":"python-guide/01_Python_Basics","slug":"/python-guide/Python_Basics/None","permalink":"/Python/docs/python-guide/Python_Basics/None","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/python-guide/01_Python_Basics/20_None.md","tags":[],"version":"current","sidebarPosition":20,"frontMatter":{},"sidebar":"guideSidebar","previous":{"title":"Dictionary","permalink":"/Python/docs/python-guide/Python_Basics/Dictionaries"},"next":{"title":"Mad Libs Game","permalink":"/Python/docs/python-guide/Python_Basics/Mad_Libs_Project"}}');var o=t(4848),s=t(8453);const a={},r="None Type",c={},l=[{value:"Basics of None Type",id:"basics-of-none-type",level:2},{value:"Example with Dictionaries",id:"example-with-dictionaries",level:2},{value:"Optional Values",id:"optional-values",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"none-type",children:"None Type"})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"None"})," type in Python is a special data type used to represent the absence of a value or the concept of nothing. It is often returned by certain functions to indicate that no meaningful value is available."]}),"\n",(0,o.jsx)(n.h2,{id:"basics-of-none-type",children:"Basics of None Type"}),"\n",(0,o.jsxs)(n.p,{children:["In its simplest form, the ",(0,o.jsx)(n.code,{children:"None"})," type is a value that signifies the absence of any meaningful data."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"# Creating a variable with None value\nno_value = None\n\n# Printing the value and type of the variable\nprint(no_value)  # Output: None\nprint(type(no_value))  # Output: <class 'NoneType'>\n"})}),"\n",(0,o.jsx)(n.h2,{id:"example-with-dictionaries",children:"Example with Dictionaries"}),"\n",(0,o.jsxs)(n.p,{children:["One common use case for the ",(0,o.jsx)(n.code,{children:"None"})," type is when working with dictionaries. The ",(0,o.jsx)(n.code,{children:"get"})," method of dictionaries allows us to retrieve a value for a given key, and if the key doesn't exist, it returns ",(0,o.jsx)(n.code,{children:"None"})," instead of raising an exception."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"# Example with a dictionary of users\nusers = {1: 'Mario', 2: 'Luigi'}\n\n# Trying to get a user with a non-existent key\nuser = users.get(3)\nprint(user)  # Output: None\n"})}),"\n",(0,o.jsx)(n.h2,{id:"optional-values",children:"Optional Values"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"None"})," type is often used in defining optional values, indicating that a variable may or may not have a value."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"# Example of an optional value\npossible_user: str or None = users.get(3)\nprint(possible_user)  # Output: None (if key doesn't exist) or a string (if key exists)\n"})}),"\n",(0,o.jsxs)(n.p,{children:["In this example, ",(0,o.jsx)(n.code,{children:"possible_user"})," is declared as a string or ",(0,o.jsx)(n.code,{children:"None"})," type, and it can hold either a string or ",(0,o.jsx)(n.code,{children:"None"})," value, depending on the result of the ",(0,o.jsx)(n.code,{children:"get"})," method. These are just basic examples, and you will encounter the ",(0,o.jsx)(n.code,{children:"None"})," type frequently throughout your Python journey. It plays a crucial role in handling cases where the absence of a value needs to be explicitly represented."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var i=t(6540);const o={},s=i.createContext(o);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);