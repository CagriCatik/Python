"use strict";(self.webpackChunkmy_docusaurus_site=self.webpackChunkmy_docusaurus_site||[]).push([[4040],{2438:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"python-guide/Python_Basics/Type_Conversion","title":"Type Conversion","description":"Type conversion is essential when dealing with incompatible data types that need to be used together in operations. Python provides straightforward ways to convert between different data types.","source":"@site/docs/python-guide/01_Python_Basics/12_Type_Conversion.md","sourceDirName":"python-guide/01_Python_Basics","slug":"/python-guide/Python_Basics/Type_Conversion","permalink":"/Python/docs/python-guide/Python_Basics/Type_Conversion","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/python-guide/01_Python_Basics/12_Type_Conversion.md","tags":[],"version":"current","sidebarPosition":12,"frontMatter":{},"sidebar":"guideSidebar","previous":{"title":"Strings","permalink":"/Python/docs/python-guide/Python_Basics/Strings"},"next":{"title":"Simple Adder Program","permalink":"/Python/docs/python-guide/Python_Basics/Simple_Adder_Project"}}');var i=n(4848),r=n(8453);const s={},a="Type Conversion",l={},c=[{value:"Code Examples",id:"code-examples",level:2},{value:"Option 1: Convert Text to Integer",id:"option-1-convert-text-to-integer",level:3},{value:"Option 2: Convert Integer to Text",id:"option-2-convert-integer-to-text",level:3},{value:"Compatibility of Floats and Integers",id:"compatibility-of-floats-and-integers",level:3},{value:"Handling Incompatible Type Conversion",id:"handling-incompatible-type-conversion",level:3}];function d(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"type-conversion",children:"Type Conversion"})}),"\n",(0,i.jsx)(t.p,{children:"Type conversion is essential when dealing with incompatible data types that need to be used together in operations. Python provides straightforward ways to convert between different data types."}),"\n",(0,i.jsx)(t.h2,{id:"code-examples",children:"Code Examples"}),"\n",(0,i.jsx)(t.p,{children:"Let's start by creating two values, one as a text value of type string and another as an integer:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"text_value = str(100)\nint_value = 50\n"})}),"\n",(0,i.jsx)(t.h3,{id:"option-1-convert-text-to-integer",children:"Option 1: Convert Text to Integer"}),"\n",(0,i.jsx)(t.p,{children:"To add the text and integer values, we can convert the text value to an integer:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"result_option1 = int(text_value) + int_value\nprint(result_option1)  # Output: 150\n"})}),"\n",(0,i.jsx)(t.h3,{id:"option-2-convert-integer-to-text",children:"Option 2: Convert Integer to Text"}),"\n",(0,i.jsx)(t.p,{children:"Alternatively, we can convert the integer value to a string:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"result_option2 = text_value + str(int_value)\nprint(result_option2)  # Output: '10050'\n"})}),"\n",(0,i.jsx)(t.h3,{id:"compatibility-of-floats-and-integers",children:"Compatibility of Floats and Integers"}),"\n",(0,i.jsx)(t.p,{children:"Python automatically handles compatibility between floats and integers:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"result_float_int = 5.5 + 1\nprint(result_float_int)  # Output: 6.5\nprint(type(result_float_int))  # Output: <class 'float'>\n"})}),"\n",(0,i.jsx)(t.h3,{id:"handling-incompatible-type-conversion",children:"Handling Incompatible Type Conversion"}),"\n",(0,i.jsx)(t.p,{children:"It's important to use compatible values for type conversion. Attempting to convert an incompatible type may result in an error:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:'# Example causing a ValueError\ntry:\n    invalid_conversion = int("ten")\nexcept ValueError as e:\n    print(f"Error: {e}")\n'})}),"\n",(0,i.jsx)(t.p,{children:"Ensure that the values provided for conversion are compatible to avoid errors."})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var o=n(6540);const i={},r=o.createContext(i);function s(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);