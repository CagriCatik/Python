"use strict";(self.webpackChunkpython=self.webpackChunkpython||[]).push([[9366],{902:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"python-guide/Control_Flow/Break_and_Continue","title":"break and continue","description":"In Python, loops are a fundamental part of controlling the flow of a program. They allow for repeated execution of a block of code. Two important control keywords that can be used within loops are break and continue. These keywords provide additional control by allowing us to prematurely exit a loop or skip specific iterations. This tutorial provides a detailed examination of these keywords and their use cases.","source":"@site/docs/python-guide/02_Control_Flow/05_Break_and_Continue.md","sourceDirName":"python-guide/02_Control_Flow","slug":"/python-guide/Control_Flow/Break_and_Continue","permalink":"/Python/docs/python-guide/Control_Flow/Break_and_Continue","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/python-guide/02_Control_Flow/05_Break_and_Continue.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{},"sidebar":"guideSidebar","previous":{"title":"While Loop","permalink":"/Python/docs/python-guide/Control_Flow/While_Loop"},"next":{"title":"else Block in for and while Loops","permalink":"/Python/docs/python-guide/Control_Flow/Loop-Else"}}');var o=i(4848),r=i(8453);const s={},l="break and continue",c={},d=[{value:"The <code>break</code> Statement",id:"the-break-statement",level:2},{value:"The <code>continue</code> Statement",id:"the-continue-statement",level:2},{value:"Practical Example: A Simple Calculator",id:"practical-example-a-simple-calculator",level:2},{value:"Using <code>break</code> and <code>continue</code> in <code>for</code> Loops",id:"using-break-and-continue-in-for-loops",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsxs)(n.h1,{id:"break-and-continue",children:[(0,o.jsx)(n.code,{children:"break"})," and ",(0,o.jsx)(n.code,{children:"continue"})]})}),"\n",(0,o.jsxs)(n.p,{children:["In Python, loops are a fundamental part of controlling the flow of a program. They allow for repeated execution of a block of code. Two important control keywords that can be used within loops are ",(0,o.jsx)(n.code,{children:"break"})," and ",(0,o.jsx)(n.code,{children:"continue"}),". These keywords provide additional control by allowing us to prematurely exit a loop or skip specific iterations. This tutorial provides a detailed examination of these keywords and their use cases."]}),"\n",(0,o.jsxs)(n.h2,{id:"the-break-statement",children:["The ",(0,o.jsx)(n.code,{children:"break"})," Statement"]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"break"})," statement is used to exit a loop immediately, regardless of the loop\u2019s condition. This can be particularly useful when a specific condition is met, and there is no need to continue iterating. Here is an example using a ",(0,o.jsx)(n.code,{children:"while"})," loop:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'number = 5\n\nwhile number > 0:\n    number -= 1\n    if number == 2:\n        print("Breaking at 2")\n        break\n    print(number)\nprint("Done")\n'})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Explanation:"})}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"number"})," is initialized to 5."]}),"\n",(0,o.jsxs)(n.li,{children:["The ",(0,o.jsx)(n.code,{children:"while"})," loop continues as long as ",(0,o.jsx)(n.code,{children:"number"})," is greater than 0."]}),"\n",(0,o.jsxs)(n.li,{children:["Within the loop, ",(0,o.jsx)(n.code,{children:"number"})," is decremented by 1 in each iteration."]}),"\n",(0,o.jsxs)(n.li,{children:["If ",(0,o.jsx)(n.code,{children:"number"})," equals 2, the ",(0,o.jsx)(n.code,{children:"break"})," statement is executed, exiting the loop immediately."]}),"\n",(0,o.jsxs)(n.li,{children:["The current value of ",(0,o.jsx)(n.code,{children:"number"})," is printed if the loop does not break."]}),"\n",(0,o.jsx)(n.li,{children:'After the loop exits, "Done" is printed.'}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Without the ",(0,o.jsx)(n.code,{children:"break"})," statement, the loop would continue until ",(0,o.jsx)(n.code,{children:"number"})," reaches 0, printing all values from 4 to 0. With ",(0,o.jsx)(n.code,{children:"break"}),", the loop exits as soon as ",(0,o.jsx)(n.code,{children:"number"})," becomes 2."]}),"\n",(0,o.jsxs)(n.h2,{id:"the-continue-statement",children:["The ",(0,o.jsx)(n.code,{children:"continue"})," Statement"]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"continue"})," statement skips the rest of the code inside the loop for the current iteration and jumps back to the start of the loop for the next iteration. Here\u2019s how it works in a ",(0,o.jsx)(n.code,{children:"while"})," loop:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'number = 5\n\nwhile number > 0:\n    number -= 1\n    if number == 2:\n        print("Skipping 2")\n        continue\n    print(number)\nprint("Done")\n'})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Explanation:"})}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"number"})," is initialized to 5."]}),"\n",(0,o.jsxs)(n.li,{children:["The ",(0,o.jsx)(n.code,{children:"while"})," loop continues as long as ",(0,o.jsx)(n.code,{children:"number"})," is greater than 0."]}),"\n",(0,o.jsxs)(n.li,{children:["Within the loop, ",(0,o.jsx)(n.code,{children:"number"})," is decremented by 1 in each iteration."]}),"\n",(0,o.jsxs)(n.li,{children:["If ",(0,o.jsx)(n.code,{children:"number"})," equals 2, the ",(0,o.jsx)(n.code,{children:"continue"})," statement is executed, skipping the rest of the code in the loop for that iteration."]}),"\n",(0,o.jsxs)(n.li,{children:["The current value of ",(0,o.jsx)(n.code,{children:"number"})," is printed unless ",(0,o.jsx)(n.code,{children:"continue"})," is executed."]}),"\n",(0,o.jsx)(n.li,{children:'After the loop exits, "Done" is printed.'}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["With ",(0,o.jsx)(n.code,{children:"continue"}),", when ",(0,o.jsx)(n.code,{children:"number"})," is 2, the loop skips printing the number and immediately proceeds to the next iteration."]}),"\n",(0,o.jsx)(n.h2,{id:"practical-example-a-simple-calculator",children:"Practical Example: A Simple Calculator"}),"\n",(0,o.jsxs)(n.p,{children:["Let\u2019s implement a practical example that incorporates both ",(0,o.jsx)(n.code,{children:"break"})," and ",(0,o.jsx)(n.code,{children:"continue"})," statements. We will create a simple calculator that adds positive numbers and exits when the user inputs zero."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'total = 0\n\nprint("Welcome to Calc Plus")\nprint("Add positive numbers or insert zero to exit.")\n\nwhile True:\n    user_input = int(input("Enter a number: "))\n  \n    if user_input < 0:\n        print("Please enter positive numbers only.")\n        continue\n  \n    if user_input == 0:\n        print(f"Total is {total}")\n        break\n  \n    total += user_input\n'})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Explanation:"})}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"total"})," is initialized to 0 to keep track of the sum."]}),"\n",(0,o.jsx)(n.li,{children:"Instructions are printed to guide the user."}),"\n",(0,o.jsxs)(n.li,{children:["An infinite ",(0,o.jsx)(n.code,{children:"while"})," loop is created using ",(0,o.jsx)(n.code,{children:"while True"}),"."]}),"\n",(0,o.jsx)(n.li,{children:"The user is prompted to enter a number, which is converted to an integer."}),"\n",(0,o.jsxs)(n.li,{children:["If the user inputs a negative number, a warning message is displayed, and the ",(0,o.jsx)(n.code,{children:"continue"})," statement skips to the next iteration without adding the number to the total."]}),"\n",(0,o.jsxs)(n.li,{children:["If the user inputs zero, the total sum is printed, and the loop exits with the ",(0,o.jsx)(n.code,{children:"break"})," statement."]}),"\n",(0,o.jsxs)(n.li,{children:["If a positive number is inputted, it is added to the ",(0,o.jsx)(n.code,{children:"total"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["This example demonstrates the use of ",(0,o.jsx)(n.code,{children:"break"})," to exit the loop when the user inputs zero and ",(0,o.jsx)(n.code,{children:"continue"})," to skip processing when the user inputs a negative number."]}),"\n",(0,o.jsxs)(n.h2,{id:"using-break-and-continue-in-for-loops",children:["Using ",(0,o.jsx)(n.code,{children:"break"})," and ",(0,o.jsx)(n.code,{children:"continue"})," in ",(0,o.jsx)(n.code,{children:"for"})," Loops"]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"break"})," and ",(0,o.jsx)(n.code,{children:"continue"})," statements can be used similarly within ",(0,o.jsx)(n.code,{children:"for"})," loops. Here\u2019s an example:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'for number in range(5, 0, -1):\n    if number == 2:\n        print("Skipping 2")\n        continue\n    if number == 1:\n        print("Breaking at 1")\n        break\n    print(number)\nprint("Done")\n'})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Explanation:"})}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["The ",(0,o.jsx)(n.code,{children:"for"})," loop iterates over a range of numbers from 5 to 1."]}),"\n",(0,o.jsxs)(n.li,{children:["If ",(0,o.jsx)(n.code,{children:"number"})," is 2, ",(0,o.jsx)(n.code,{children:"continue"})," skips the print statement for that iteration."]}),"\n",(0,o.jsxs)(n.li,{children:["If ",(0,o.jsx)(n.code,{children:"number"})," is 1, ",(0,o.jsx)(n.code,{children:"break"})," exits the loop."]}),"\n",(0,o.jsxs)(n.li,{children:["All other values of ",(0,o.jsx)(n.code,{children:"number"})," are printed."]}),"\n",(0,o.jsx)(n.li,{children:'"Done" is printed after the loop exits.'}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["In summary, ",(0,o.jsx)(n.code,{children:"break"})," and ",(0,o.jsx)(n.code,{children:"continue"})," provide powerful control mechanisms within loops, allowing for early exit or skipping iterations based on specific conditions. Understanding these keywords enhances the ability to write efficient and effective Python code."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>l});var t=i(6540);const o={},r=t.createContext(o);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);