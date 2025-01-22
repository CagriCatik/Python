"use strict";(self.webpackChunkmy_docusaurus_site=self.webpackChunkmy_docusaurus_site||[]).push([[145],{9366:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"guide/Advanced/Generators/README","title":"Generators in Python","description":"Welcome to this tutorial on generators in Python! Generators are a powerful concept that offers memory efficiency and lazy evaluation. Let\'s dive into the basics and explore some examples.","source":"@site/docs/guide/10_Advanced/04_Generators/README.md","sourceDirName":"guide/10_Advanced/04_Generators","slug":"/guide/Advanced/Generators/","permalink":"/Python/docs/guide/Advanced/Generators/","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guide/10_Advanced/04_Generators/README.md","tags":[],"version":"current","frontMatter":{},"sidebar":"guideSidebar","previous":{"title":"Lambda Functions in Python","permalink":"/Python/docs/guide/Advanced/Lambda_Functions/"},"next":{"title":"AsyncIO","permalink":"/Python/docs/category/asyncio"}}');var a=t(4848),i=t(8453);const o={},s="Generators in Python",d={},c=[{value:"Introduction to Generators",id:"introduction-to-generators",level:2},{value:"Memory Efficiency with Large Data Sets",id:"memory-efficiency-with-large-data-sets",level:2},{value:"Generating Different Data Types",id:"generating-different-data-types",level:2},{value:"Handling Exhaustion",id:"handling-exhaustion",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"generators-in-python",children:"Generators in Python"})}),"\n",(0,a.jsx)(n.p,{children:"Welcome to this tutorial on generators in Python! Generators are a powerful concept that offers memory efficiency and lazy evaluation. Let's dive into the basics and explore some examples."}),"\n",(0,a.jsx)(n.h2,{id:"introduction-to-generators",children:"Introduction to Generators"}),"\n",(0,a.jsx)(n.p,{children:"Generators in Python are a way to create iterators using a function. They are memory-efficient compared to lists, tuples, and most other iterables."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"from typing import Generator\n\n# Define a simple generator function\ndef five_numbers() -> Generator[int, None, None]:\n    for i in range(1, 6):\n        yield i\n\n# Use the generator\nnumbers = five_numbers()\n\n# Retrieve and print values\nfor _ in range(5):\n    print(next(numbers))\n\n# Output:\n# 1\n# 2\n# 3\n# 4\n# 5\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Generators use the ",(0,a.jsx)(n.code,{children:"yield"})," keyword to provide values one at a time, making them suitable for scenarios where memory efficiency is crucial."]}),"\n",(0,a.jsx)(n.h2,{id:"memory-efficiency-with-large-data-sets",children:"Memory Efficiency with Large Data Sets"}),"\n",(0,a.jsx)(n.p,{children:"Generators shine when dealing with large data sets. In this example, we simulate a massive amount of data."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"def huge_data() -> Generator[int, None, None]:\n    for i in range(1, 100000000001):\n        yield i\n\ndata = huge_data()\n\n# Retrieve and print values\nfor _ in range(200):\n    print(next(data))\n"})}),"\n",(0,a.jsx)(n.p,{children:"Generators allow you to work with massive data sets without loading everything into memory at once."}),"\n",(0,a.jsx)(n.h2,{id:"generating-different-data-types",children:"Generating Different Data Types"}),"\n",(0,a.jsx)(n.p,{children:"Generators can yield any type of data, not just integers. Here's an example with strings."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"def generate_vowels() -> Generator[str, None, None]:\n    vowels = ['a', 'e', 'i', 'o', 'u']\n    for vowel in vowels:\n        yield vowel\n\nvowels_generator = generate_vowels()\n\n# Retrieve and print values\nfor _ in range(3):\n    print(next(vowels_generator))\n\n# Output:\n# a\n# e\n# i\n"})}),"\n",(0,a.jsx)(n.p,{children:"Generators can be used to create iterators for different data types, making them versatile."}),"\n",(0,a.jsx)(n.h2,{id:"handling-exhaustion",children:"Handling Exhaustion"}),"\n",(0,a.jsxs)(n.p,{children:["Generators are exhaustive; once you retrieve a value, it's gone. Attempting to get more values than available will raise a ",(0,a.jsx)(n.code,{children:"StopIteration"})," exception."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'try:\n    print(next(vowels_generator))\nexcept StopIteration:\n    print("The generator is empty.")\n'})}),"\n",(0,a.jsx)(n.p,{children:"This exception signals the end of the generator. In a for loop, this is handled implicitly."}),"\n",(0,a.jsx)(n.p,{children:"Generators are a powerful tool for efficient iteration and lazy evaluation in Python. Consider using them when dealing with large data sets or when memory efficiency is crucial. Happy coding!"})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var r=t(6540);const a={},i=r.createContext(a);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);