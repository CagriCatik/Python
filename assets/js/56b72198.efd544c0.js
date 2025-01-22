"use strict";(self.webpackChunkmy_docusaurus_site=self.webpackChunkmy_docusaurus_site||[]).push([[5183],{8947:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>p});const o=JSON.parse('{"id":"guide/Lists/Dont_Loop_Modify/README","title":"Looping and Modifying Lists: A Cautionary Tale","description":"When working with lists in Python, it\'s crucial to be mindful of how you manipulate them, especially when looping through them. This README serves as a cautionary tale and provides guidance on best practices to avoid unexpected behavior when modifying lists during iteration.","source":"@site/docs/guide/06_Lists/03_Dont_Loop_Modify/README.md","sourceDirName":"guide/06_Lists/03_Dont_Loop_Modify","slug":"/guide/Lists/Dont_Loop_Modify/","permalink":"/Python/docs/guide/Lists/Dont_Loop_Modify/","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guide/06_Lists/03_Dont_Loop_Modify/README.md","tags":[],"version":"current","frontMatter":{},"sidebar":"guideSidebar","previous":{"title":"Slicing in Python","permalink":"/Python/docs/guide/Lists/Slicing/"},"next":{"title":"Grocery List App","permalink":"/Python/docs/guide/Lists/Grocery_List/"}}');var n=t(4848),s=t(8453);const r={},a="Looping and Modifying Lists: A Cautionary Tale",l={},p=[{value:"The Pitfall of Modifying Lists While Looping",id:"the-pitfall-of-modifying-lists-while-looping",level:2},{value:"Best Practice: Using a Temporary List",id:"best-practice-using-a-temporary-list",level:2}];function d(e){const i={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"looping-and-modifying-lists-a-cautionary-tale",children:"Looping and Modifying Lists: A Cautionary Tale"})}),"\n",(0,n.jsx)(i.p,{children:"When working with lists in Python, it's crucial to be mindful of how you manipulate them, especially when looping through them. This README serves as a cautionary tale and provides guidance on best practices to avoid unexpected behavior when modifying lists during iteration."}),"\n",(0,n.jsx)(i.h2,{id:"the-pitfall-of-modifying-lists-while-looping",children:"The Pitfall of Modifying Lists While Looping"}),"\n",(0,n.jsx)(i.p,{children:"A common mistake is attempting to modify a list while iterating through it. This can lead to unexpected outcomes and potentially erroneous results in your program. Let's explore an example to illustrate this issue:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-python",children:'people = ["Anna", "Bob", "Chris", "David", "Fred"]\n\nfor person in people:\n    print(person)\n    if person == "Bob":\n        print("Removing that person:", person)\n        people.remove("Bob")\n\nprint("Final list:", people)\n'})}),"\n",(0,n.jsx)(i.p,{children:'In this example, we attempt to remove "Bob" from the list while looping through it. However, when we run the code, we encounter unexpected behavior \u2013 "Chris" mysteriously disappears from the output. This occurs because modifying the list alters its structure mid-iteration, causing elements to be skipped or misplaced.'}),"\n",(0,n.jsx)(i.h2,{id:"best-practice-using-a-temporary-list",children:"Best Practice: Using a Temporary List"}),"\n",(0,n.jsx)(i.p,{children:"To avoid such issues, it's recommended to use a temporary list when making modifications to the original list during iteration. Here's how we can refactor the previous example to adhere to this best practice:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-python",children:'people = ["Anna", "Bob", "Chris", "David", "Fred"]\nnew_people = []\n\nfor person in people:\n    if person == "Bob":\n        continue  # Skip \'Bob\'\n    new_people.append(person)\n\nprint("Final list:", new_people)\n'})}),"\n",(0,n.jsxs)(i.p,{children:["In this revised approach, we create a new list (",(0,n.jsx)(i.code,{children:"new_people"}),") to store the modified elements. We iterate through the original list (",(0,n.jsx)(i.code,{children:"people"}),") but perform modifications on the temporary list. As a result, we avoid altering the original list during iteration, preventing unexpected behavior. When working with lists in Python, remember the golden rule: never modify a list while looping through it. By using a temporary list for modifications, you can ensure your code behaves predictably and avoid potential bugs. Stay vigilant and follow best practices to write clean, reliable code."]})]})}function c(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,i,t)=>{t.d(i,{R:()=>r,x:()=>a});var o=t(6540);const n={},s=o.createContext(n);function r(e){const i=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),o.createElement(s.Provider,{value:i},e.children)}}}]);