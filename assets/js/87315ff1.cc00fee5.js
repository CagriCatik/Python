"use strict";(self.webpackChunkmy_docusaurus_site=self.webpackChunkmy_docusaurus_site||[]).push([[5150],{1845:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"guide/Advanced/Walrus_Operator/README","title":"Python Walrus Operator Examples","description":"In recent years, Python introduced a new operator known as the walrus operator (:=). This operator allows for the creation of a variable and the evaluation of an expression simultaneously, reducing the need for additional lines of code. However, it\'s crucial to note that the walrus operator was introduced in Python 3.8, so using it in earlier versions will result in errors.","source":"@site/docs/guide/10_Advanced/02_Walrus_Operator/README.md","sourceDirName":"guide/10_Advanced/02_Walrus_Operator","slug":"/guide/Advanced/Walrus_Operator/","permalink":"/Python/docs/guide/Advanced/Walrus_Operator/","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guide/10_Advanced/02_Walrus_Operator/README.md","tags":[],"version":"current","frontMatter":{},"sidebar":"guideSidebar","previous":{"title":"Mypy Static Type Checker Tutorial","permalink":"/Python/docs/guide/Advanced/Mypy/"},"next":{"title":"Lambda Functions in Python","permalink":"/Python/docs/guide/Advanced/Lambda_Functions/"}}');var r=t(4848),a=t(8453);const o={},s="Python Walrus Operator Examples",l={},c=[{value:"Function Example: Calculating Description of a List of Numbers",id:"function-example-calculating-description-of-a-list-of-numbers",level:2},{value:"Main Entry Point Example",id:"main-entry-point-example",level:2},{value:"Checking for Item Existence in a Dictionary",id:"checking-for-item-existence-in-a-dictionary",level:2},{value:"Controversy and Considerations",id:"controversy-and-considerations",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"python-walrus-operator-examples",children:"Python Walrus Operator Examples"})}),"\n",(0,r.jsxs)(n.p,{children:["In recent years, Python introduced a new operator known as the walrus operator (",(0,r.jsx)(n.code,{children:":="}),"). This operator allows for the creation of a variable and the evaluation of an expression simultaneously, reducing the need for additional lines of code. However, it's crucial to note that the walrus operator was introduced in Python 3.8, so using it in earlier versions will result in errors."]}),"\n",(0,r.jsx)(n.h2,{id:"function-example-calculating-description-of-a-list-of-numbers",children:"Function Example: Calculating Description of a List of Numbers"}),"\n",(0,r.jsx)(n.p,{children:"Let's explore how to use the walrus operator in a function that calculates the length, sum, and mean of a list of integers. Initially, we'll write the function without the walrus operator:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"def description(numbers):\n    n_length = len(numbers)\n    n_sum = sum(numbers)\n    n_mean = n_sum / n_length\n    details = {\n        'length': n_length,\n        'sum': n_sum,\n        'mean': n_mean\n    }\n    return details\n"})}),"\n",(0,r.jsx)(n.p,{children:"Now, let's use the walrus operator to simplify the code within the dictionary creation:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"def description(numbers):\n    details = {\n        'length': (n_length := len(numbers)),\n        'sum': (n_sum := sum(numbers)),\n        'mean': (n_mean := n_sum / n_length)\n    }\n    return details\n"})}),"\n",(0,r.jsx)(n.p,{children:"This reduces the number of lines needed to create variables and improves code readability."}),"\n",(0,r.jsx)(n.h2,{id:"main-entry-point-example",children:"Main Entry Point Example"}),"\n",(0,r.jsxs)(n.p,{children:["In the main entry point, we create a list of numbers and print their description using the ",(0,r.jsx)(n.code,{children:"description"})," function:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"numbers = [110, 5, 200, -4, 7]\nprint(description(numbers))\n"})}),"\n",(0,r.jsx)(n.p,{children:"This will output a dictionary containing the length, sum, and mean of the provided numbers."}),"\n",(0,r.jsx)(n.h2,{id:"checking-for-item-existence-in-a-dictionary",children:"Checking for Item Existence in a Dictionary"}),"\n",(0,r.jsx)(n.p,{children:"The walrus operator can also be useful for checking the existence of an item in a dictionary and using it immediately. Here's an example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"items = {1: 'cup', 2: 'cha'}\nif (item := items.get(3)) is not None:\n    print(f'You have the item: {item}')\nelse:\n    print('No item found')\n"})}),"\n",(0,r.jsx)(n.p,{children:"This example demonstrates how the walrus operator simplifies the code by combining the check and assignment in a single line."}),"\n",(0,r.jsx)(n.h2,{id:"controversy-and-considerations",children:"Controversy and Considerations"}),"\n",(0,r.jsx)(n.p,{children:"It's essential to note that the walrus operator might be considered controversial due to potential readability issues. Some developers find it hard to read, while others see it as a concise way to simplify code. Consider your team's coding standards and prioritize readability when deciding whether to use the walrus operator."}),"\n",(0,r.jsx)(n.p,{children:"Remember, the most crucial aspect of coding is to write clear and understandable code. If the walrus operator enhances readability in your specific use case, feel free to leverage it; otherwise, stick to more conventional approaches.data"})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var i=t(6540);const r={},a=i.createContext(r);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);