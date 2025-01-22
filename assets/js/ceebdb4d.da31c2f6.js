"use strict";(self.webpackChunkmy_docusaurus_site=self.webpackChunkmy_docusaurus_site||[]).push([[8252],{3384:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"python-guide/Control_Flow/For_Loop","title":"For Loop","description":"In Python, looping constructs are essential for repetitive tasks. One of the fundamental looping mechanisms is the for loop. This tutorial delves into the for loop, illustrating its syntax and functionality through examples.","source":"@site/docs/python-guide/02_Control_Flow/03_For_Loop.md","sourceDirName":"python-guide/02_Control_Flow","slug":"/python-guide/Control_Flow/For_Loop","permalink":"/Python/docs/python-guide/Control_Flow/For_Loop","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/python-guide/02_Control_Flow/03_For_Loop.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{},"sidebar":"guideSidebar","previous":{"title":"Shorthand If-Else Statements","permalink":"/Python/docs/python-guide/Control_Flow/If_Else_Shorthand"},"next":{"title":"While Loop","permalink":"/Python/docs/python-guide/Control_Flow/While_Loop"}}');var t=i(4848),l=i(8453);const r={},s="For Loop",a={},c=[{value:"Basic Syntax and Functionality",id:"basic-syntax-and-functionality",level:2},{value:"Example 1: Printing a String Multiple Times",id:"example-1-printing-a-string-multiple-times",level:2},{value:"Example 2: Using the Loop Variable",id:"example-2-using-the-loop-variable",level:2},{value:"Example 3: Iterating Over a List",id:"example-3-iterating-over-a-list",level:2},{value:"Example 4: Adding Conditional Logic",id:"example-4-adding-conditional-logic",level:2},{value:"Example 5: Iterating Over a Tuple",id:"example-5-iterating-over-a-tuple",level:2},{value:"Conclusion",id:"conclusion",level:2}];function h(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"for-loop",children:"For Loop"})}),"\n",(0,t.jsxs)(n.p,{children:["In Python, looping constructs are essential for repetitive tasks. One of the fundamental looping mechanisms is the ",(0,t.jsx)(n.code,{children:"for"})," loop. This tutorial delves into the ",(0,t.jsx)(n.code,{children:"for"})," loop, illustrating its syntax and functionality through examples."]}),"\n",(0,t.jsx)(n.h2,{id:"basic-syntax-and-functionality",children:"Basic Syntax and Functionality"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"for"})," loop in Python allows iteration over any iterable object, such as lists, strings, tuples, and more. The general syntax is:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"for variable in iterable:\n    # Code to execute on each iteration\n"})}),"\n",(0,t.jsx)(n.p,{children:"To elucidate, let's start with a basic example."}),"\n",(0,t.jsx)(n.h2,{id:"example-1-printing-a-string-multiple-times",children:"Example 1: Printing a String Multiple Times"}),"\n",(0,t.jsxs)(n.p,{children:["Consider a string ",(0,t.jsx)(n.code,{children:"text"})," initialized as follows:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'text = "Hello World"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["To print this string three times, we can use the ",(0,t.jsx)(n.code,{children:"for"})," loop:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"for i in range(3):\n    print(text)\n"})}),"\n",(0,t.jsx)(n.p,{children:"In this example:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"range(3)"})," function generates an iterable producing the sequence [0, 1, 2]."]}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"for"})," loop iterates over each value in this sequence."]}),"\n",(0,t.jsxs)(n.li,{children:["During each iteration, ",(0,t.jsx)(n.code,{children:"text"})," is printed."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["This method efficiently handles repetitive printing compared to manually copying and pasting the ",(0,t.jsx)(n.code,{children:"print"})," statement multiple times."]}),"\n",(0,t.jsx)(n.h2,{id:"example-2-using-the-loop-variable",children:"Example 2: Using the Loop Variable"}),"\n",(0,t.jsxs)(n.p,{children:["The loop variable (",(0,t.jsx)(n.code,{children:"i"})," in the previous example) can also be incorporated within the loop body. For instance, to print the iteration number along with the text, we modify the ",(0,t.jsx)(n.code,{children:"print"})," statement:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'for i in range(3):\n    print(f"{i} Hello World")\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Here, an f-string (formatted string literal) is used to embed the value of ",(0,t.jsx)(n.code,{children:"i"})," in the output. The resulting output will be:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"0 Hello World\n1 Hello World\n2 Hello World\n"})}),"\n",(0,t.jsx)(n.h2,{id:"example-3-iterating-over-a-list",children:"Example 3: Iterating Over a List"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"for"})," loop can iterate over various iterable objects. Consider a list of names:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'people = ["Bob", "James", "Maria"]\n'})}),"\n",(0,t.jsxs)(n.p,{children:["To print each name in the list, use the following ",(0,t.jsx)(n.code,{children:"for"})," loop:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"for person in people:\n    print(person)\n"})}),"\n",(0,t.jsx)(n.p,{children:"In this case:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The loop iterates over each element in the ",(0,t.jsx)(n.code,{children:"people"})," list."]}),"\n",(0,t.jsxs)(n.li,{children:["Each element is assigned to the variable ",(0,t.jsx)(n.code,{children:"person"})," during each iteration, and ",(0,t.jsx)(n.code,{children:"print(person)"})," outputs the name."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"example-4-adding-conditional-logic",children:"Example 4: Adding Conditional Logic"}),"\n",(0,t.jsx)(n.p,{children:"We can incorporate conditional statements within the loop for more complex operations. For instance, checking the length of each name and printing a message accordingly:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'for person in people:\n    if len(person) > 4:\n        print(f"{person} has a long name")\n    else:\n        print(f"{person} has a short name")\n'})}),"\n",(0,t.jsx)(n.p,{children:"This code evaluates the length of each name:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"If the length is greater than 4, it prints that the person has a long name."}),"\n",(0,t.jsx)(n.li,{children:"Otherwise, it prints that the person has a short name."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"For the given list, the output will be:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Bob has a short name\nJames has a long name\nMaria has a long name\n"})}),"\n",(0,t.jsx)(n.h2,{id:"example-5-iterating-over-a-tuple",children:"Example 5: Iterating Over a Tuple"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"for"})," loop also works with tuples. Consider a tuple of numbers:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"numbers = (1, 2, 3, 4, 5)\n"})}),"\n",(0,t.jsx)(n.p,{children:"To print each number, use the following loop:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"for number in numbers:\n    print(number)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The loop iterates over each element in the ",(0,t.jsx)(n.code,{children:"numbers"})," tuple, printing each value."]}),"\n",(0,t.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"for"})," loop in Python is a powerful construct for iterating over iterable objects, executing a block of code on each iteration. This tutorial has covered basic usage, incorporating the loop variable, iterating over lists and tuples, and adding conditional logic within the loop. These examples demonstrate the flexibility and efficiency of ",(0,t.jsx)(n.code,{children:"for"})," loops in managing repetitive tasks, making code more readable and maintainable."]}),"\n",(0,t.jsx)(n.p,{children:"For further exploration, consider experimenting with other iterable types such as dictionaries and sets, and integrating more complex logic within the loop to handle various programming scenarios."})]})}function d(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>s});var o=i(6540);const t={},l=o.createContext(t);function r(e){const n=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(l.Provider,{value:n},e.children)}}}]);