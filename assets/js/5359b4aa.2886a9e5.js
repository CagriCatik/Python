"use strict";(self.webpackChunkpython=self.webpackChunkpython||[]).push([[1145],{3695:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>a,frontMatter:()=>t,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"python-guide/Control_Flow/Loop-Else","title":"else Block in for and while Loops","description":"Introduction","source":"@site/docs/python-guide/02_Control_Flow/06_Loop-Else.md","sourceDirName":"python-guide/02_Control_Flow","slug":"/python-guide/Control_Flow/Loop-Else","permalink":"/Python/docs/python-guide/Control_Flow/Loop-Else","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/python-guide/02_Control_Flow/06_Loop-Else.md","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{},"sidebar":"guideSidebar","previous":{"title":"break and continue","permalink":"/Python/docs/python-guide/Control_Flow/Break_and_Continue"},"next":{"title":"Building a Rock, Paper, Scissors Game","permalink":"/Python/docs/python-guide/Control_Flow/Rock_Paper_Scissors"}}');var s=o(4848),l=o(8453);const t={},c="else Block in for and while Loops",r={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Basic Loop Constructs",id:"basic-loop-constructs",level:2},{value:"For Loop",id:"for-loop",level:3},{value:"While Loop",id:"while-loop",level:3},{value:"Introducing the <code>else</code> Block",id:"introducing-the-else-block",level:2},{value:"For Loop with <code>else</code>",id:"for-loop-with-else",level:3},{value:"While Loop with <code>else</code>",id:"while-loop-with-else",level:3},{value:"Why Use the <code>else</code> Block?",id:"why-use-the-else-block",level:2},{value:"Example: Searching for an Item",id:"example-searching-for-an-item",level:3},{value:"Conclusion",id:"conclusion",level:2}];function h(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsxs)(n.h1,{id:"else-block-in-for-and-while-loops",children:[(0,s.jsx)(n.code,{children:"else"})," Block in ",(0,s.jsx)(n.code,{children:"for"})," and ",(0,s.jsx)(n.code,{children:"while"})," Loops"]})}),"\n",(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsxs)(n.p,{children:["In Python, ",(0,s.jsx)(n.code,{children:"for"})," and ",(0,s.jsx)(n.code,{children:"while"})," loops are fundamental constructs for iterating over sequences and executing blocks of code multiple times. However, Python includes a rarely used but potentially useful feature: the ",(0,s.jsx)(n.code,{children:"else"})," block associated with these loops. This tutorial will delve into the functionality of the ",(0,s.jsx)(n.code,{children:"else"})," block in loops, demonstrating its use and clarifying its behavior."]}),"\n",(0,s.jsx)(n.h2,{id:"basic-loop-constructs",children:"Basic Loop Constructs"}),"\n",(0,s.jsxs)(n.p,{children:["Before we explore the ",(0,s.jsx)(n.code,{children:"else"})," block, let's revisit the basic syntax and functionality of ",(0,s.jsx)(n.code,{children:"for"})," and ",(0,s.jsx)(n.code,{children:"while"})," loops."]}),"\n",(0,s.jsx)(n.h3,{id:"for-loop",children:"For Loop"}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.code,{children:"for"})," loop iterates over a sequence, such as a list or a range, and executes a block of code for each item in the sequence."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'for i in range(3):\n    print(f"Iteration {i}")\n'})}),"\n",(0,s.jsx)(n.p,{children:"This loop will print:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Iteration 0\nIteration 1\nIteration 2\n"})}),"\n",(0,s.jsx)(n.h3,{id:"while-loop",children:"While Loop"}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.code,{children:"while"})," loop repeatedly executes a block of code as long as a specified condition remains ",(0,s.jsx)(n.code,{children:"True"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'i = 3\nwhile i > 0:\n    print("OK")\n    i -= 1\n'})}),"\n",(0,s.jsx)(n.p,{children:"This loop will print:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"OK\nOK\nOK\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"introducing-the-else-block",children:["Introducing the ",(0,s.jsx)(n.code,{children:"else"})," Block"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"else"})," block in a loop is a feature that many find non-intuitive and confusing. Its purpose is to execute a block of code only if the loop completes all its iterations without encountering a ",(0,s.jsx)(n.code,{children:"break"})," statement."]}),"\n",(0,s.jsxs)(n.h3,{id:"for-loop-with-else",children:["For Loop with ",(0,s.jsx)(n.code,{children:"else"})]}),"\n",(0,s.jsxs)(n.p,{children:["Here is how the ",(0,s.jsx)(n.code,{children:"else"})," block works with a ",(0,s.jsx)(n.code,{children:"for"})," loop:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'for i in range(3):\n    print(f"Iteration {i}")\nelse:\n    print("Success")\n'})}),"\n",(0,s.jsx)(n.p,{children:"Output:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Iteration 0\nIteration 1\nIteration 2\nSuccess\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In this example, the ",(0,s.jsx)(n.code,{children:"else"})," block executes because the loop completed all iterations successfully without a ",(0,s.jsx)(n.code,{children:"break"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Now, let's see what happens when we introduce a ",(0,s.jsx)(n.code,{children:"break"})," statement:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'for i in range(3):\n    print(f"Iteration {i}")\n    if i == 1:\n        break\nelse:\n    print("Success")\n'})}),"\n",(0,s.jsx)(n.p,{children:"Output:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Iteration 0\nIteration 1\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Here, the ",(0,s.jsx)(n.code,{children:"else"})," block does not execute because the loop was terminated by the ",(0,s.jsx)(n.code,{children:"break"})," statement."]}),"\n",(0,s.jsxs)(n.h3,{id:"while-loop-with-else",children:["While Loop with ",(0,s.jsx)(n.code,{children:"else"})]}),"\n",(0,s.jsxs)(n.p,{children:["The same concept applies to ",(0,s.jsx)(n.code,{children:"while"})," loops. Let's consider a simple example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'i = 3\nwhile i > 0:\n    print("OK")\n    i -= 1\nelse:\n    print("Success")\n'})}),"\n",(0,s.jsx)(n.p,{children:"Output:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"OK\nOK\nOK\nSuccess\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"else"})," block executes because the loop's condition (",(0,s.jsx)(n.code,{children:"i > 0"}),") eventually evaluated to ",(0,s.jsx)(n.code,{children:"False"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Introducing a ",(0,s.jsx)(n.code,{children:"break"})," statement:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'i = 3\nwhile i > 0:\n    print("OK")\n    if i == 2:\n        break\n    i -= 1\nelse:\n    print("Success")\n'})}),"\n",(0,s.jsx)(n.p,{children:"Output:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"OK\nOK\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"else"})," block does not execute because the loop was terminated prematurely by the ",(0,s.jsx)(n.code,{children:"break"})," statement."]}),"\n",(0,s.jsxs)(n.h2,{id:"why-use-the-else-block",children:["Why Use the ",(0,s.jsx)(n.code,{children:"else"})," Block?"]}),"\n",(0,s.jsxs)(n.p,{children:["The key distinction of the ",(0,s.jsx)(n.code,{children:"else"})," block in loops is that it only executes if the loop terminates normally (i.e., without encountering a ",(0,s.jsx)(n.code,{children:"break"}),"). This can be particularly useful for scenarios where you need to confirm that a loop ran to completion."]}),"\n",(0,s.jsx)(n.h3,{id:"example-searching-for-an-item",children:"Example: Searching for an Item"}),"\n",(0,s.jsxs)(n.p,{children:["Consider a scenario where you search for an item in a list. If the item is found, you ",(0,s.jsx)(n.code,{children:"break"})," out of the loop. If the item is not found, you want to execute some code. Using the ",(0,s.jsx)(n.code,{children:"else"})," block simplifies this logic:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'items = [1, 2, 3, 4, 5]\nsearch_for = 6\n\nfor item in items:\n    if item == search_for:\n        print("Item found")\n        break\nelse:\n    print("Item not found")\n'})}),"\n",(0,s.jsx)(n.p,{children:"Output:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Item not found\n"})}),"\n",(0,s.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"else"})," block in ",(0,s.jsx)(n.code,{children:"for"})," and ",(0,s.jsx)(n.code,{children:"while"})," loops is a unique feature that provides a way to execute code only if the loop completes all iterations without encountering a ",(0,s.jsx)(n.code,{children:"break"}),". While it may seem unintuitive at first, understanding its behavior can help in writing more precise and readable code for specific scenarios."]}),"\n",(0,s.jsxs)(n.p,{children:["Despite its rarity in everyday code, being familiar with the ",(0,s.jsx)(n.code,{children:"else"})," block can be beneficial, especially when reading or maintaining code written by others who might use this feature."]})]})}function a(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>t,x:()=>c});var i=o(6540);const s={},l=i.createContext(s);function t(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);