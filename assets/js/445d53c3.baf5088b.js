"use strict";(self.webpackChunkpython=self.webpackChunkpython||[]).push([[4386],{1218:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"python-guide/Python_Basics/Booleans","title":"Boolean Data Type","description":"In Python, a boolean is a data type used to represent true and false values. It is particularly useful for expressing conditions and making decisions in your code. Booleans are often encountered when working with comparison operators and conditional statements.","source":"@site/docs/python-guide/01_Python_Basics/14_Booleans.md","sourceDirName":"python-guide/01_Python_Basics","slug":"/python-guide/Python_Basics/Booleans","permalink":"/Python/docs/python-guide/Python_Basics/Booleans","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/python-guide/01_Python_Basics/14_Booleans.md","tags":[],"version":"current","sidebarPosition":14,"frontMatter":{},"sidebar":"guideSidebar","previous":{"title":"Simple Adder Program","permalink":"/Python/docs/python-guide/Python_Basics/Simple_Adder_Project"},"next":{"title":"Lists","permalink":"/Python/docs/python-guide/Python_Basics/Lists"}}');var o=t(4848),a=t(8453);const i={},r="Boolean Data Type",l={},c=[{value:"Example Usage",id:"example-usage",level:2},{value:"True and False as Constants",id:"true-and-false-as-constants",level:2},{value:"Conditional Statements",id:"conditional-statements",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"boolean-data-type",children:"Boolean Data Type"})}),"\n",(0,o.jsx)(n.p,{children:"In Python, a boolean is a data type used to represent true and false values. It is particularly useful for expressing conditions and making decisions in your code. Booleans are often encountered when working with comparison operators and conditional statements."}),"\n",(0,o.jsx)(n.h2,{id:"example-usage",children:"Example Usage"}),"\n",(0,o.jsx)(n.p,{children:"Let's explore some examples to understand how booleans work in Python."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'# Example 1: Creating a boolean variable\nis_connected = True\nprint(f"Is connected: {is_connected}")\n\n# Example 2: Checking if there is money in the bank account\nhas_money = False\nprint(f"Has money in the bank account: {has_money}")\n\n# Example 3: Using booleans with comparison operators\nresult = 10 > 5\nprint(f"Is 10 greater than 5? {result}")\n'})}),"\n",(0,o.jsx)(n.p,{children:"In the above examples:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"is_connected"})," is a boolean variable set to ",(0,o.jsx)(n.code,{children:"True"}),", indicating a successful connection."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"has_money"})," is a boolean variable set to ",(0,o.jsx)(n.code,{children:"False"}),", indicating the absence of money in the bank account."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"result"})," is a boolean variable resulting from the comparison ",(0,o.jsx)(n.code,{children:"10 > 5"}),", which evaluates to ",(0,o.jsx)(n.code,{children:"True"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"true-and-false-as-constants",children:"True and False as Constants"}),"\n",(0,o.jsxs)(n.p,{children:["It's important to note that ",(0,o.jsx)(n.code,{children:"True"})," and ",(0,o.jsx)(n.code,{children:"False"})," are actually constants representing the integers 1 and 0, respectively. This allows for some interesting operations."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'# Example 4: True and False as constants\nprint(f"Integer value of True: {int(True)}")\nprint(f"Integer value of False: {int(False)}")\n\n# Example 5: Performing operations with True and False\nresult_sum = True + True\nprint(f"Sum of True and True: {result_sum}")\n'})}),"\n",(0,o.jsxs)(n.p,{children:["In Example 4, we demonstrate that the integer value of ",(0,o.jsx)(n.code,{children:"True"})," is 1, and the integer value of ",(0,o.jsx)(n.code,{children:"False"})," is 0. Example 5 showcases a less conventional operation, adding ",(0,o.jsx)(n.code,{children:"True"})," to ",(0,o.jsx)(n.code,{children:"True"}),", resulting in the sum of 2."]}),"\n",(0,o.jsx)(n.h2,{id:"conditional-statements",children:"Conditional Statements"}),"\n",(0,o.jsx)(n.p,{children:"Booleans are often used in conditional statements to control the flow of the program. Here's a preview of how this might look:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'# Example 6: Conditional statement using a boolean\nif is_connected:\n    print("There is internet.")\nelse:\n    print("No internet connection.")\n'})}),"\n",(0,o.jsxs)(n.p,{children:["In this example, the program checks whether ",(0,o.jsx)(n.code,{children:"is_connected"})," is ",(0,o.jsx)(n.code,{children:"True"}),'. If true, it prints "There is internet"; otherwise, it prints "No internet connection."']})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>r});var s=t(6540);const o={},a=s.createContext(o);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);