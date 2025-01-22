"use strict";(self.webpackChunkmy_docusaurus_site=self.webpackChunkmy_docusaurus_site||[]).push([[7934],{7664:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>h,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"tips-and-tricks/python-python3","title":"Python not found, WTF!","description":"The error message indicates that the python command is not found, which means the Python interpreter is not installed or not properly linked to the python command. Here\'s how you can resolve this issue on Ubuntu:","source":"@site/docs/tips-and-tricks/python-python3.md","sourceDirName":"tips-and-tricks","slug":"/tips-and-tricks/python-python3","permalink":"/Python/docs/tips-and-tricks/python-python3","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tips-and-tricks/python-python3.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tipsAndTricksSidebar","previous":{"title":"Python not found, WTF","permalink":"/Python/docs/tips-and-tricks/python-is-python3"},"next":{"title":"R.I.P GIL in Python 3.13: Will Python Become Faster?","permalink":"/Python/docs/tips-and-tricks/rip-gil"}}');var o=t(4848),i=t(8453);const r={},c="Python not found, WTF!",h={},l=[];function a(n){const e={code:"code",h1:"h1",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.header,{children:(0,o.jsx)(e.h1,{id:"python-not-found-wtf",children:"Python not found, WTF!"})}),"\n",(0,o.jsxs)(e.p,{children:["The error message indicates that the ",(0,o.jsx)(e.code,{children:"python"})," command is not found, which means the Python interpreter is not installed or not properly linked to the ",(0,o.jsx)(e.code,{children:"python"})," command. Here's how you can resolve this issue on Ubuntu:"]}),"\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.strong,{children:"Check if Python is installed"}),":\nUbuntu uses ",(0,o.jsx)(e.code,{children:"python3"})," as the default Python interpreter. You can check if it's installed by running:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:"python3 --version\n"})}),"\n",(0,o.jsx)(e.p,{children:"If Python 3 is installed, this command will show the version number."}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.strong,{children:"Install Python if not installed"}),":\nIf ",(0,o.jsx)(e.code,{children:"python3"})," is not installed, you can install it by running:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:"sudo apt update\nsudo apt install python3\n"})}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:[(0,o.jsxs)(e.strong,{children:["Create a symbolic link for ",(0,o.jsx)(e.code,{children:"python"})]}),":\nIf you want to use the ",(0,o.jsx)(e.code,{children:"python"})," command to run Python 3, you can create a symbolic link:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:"sudo ln -s /usr/bin/python3 /usr/bin/python\n"})}),"\n",(0,o.jsxs)(e.p,{children:["This command creates a symbolic link from ",(0,o.jsx)(e.code,{children:"python3"})," to ",(0,o.jsx)(e.code,{children:"python"}),", so that you can use the ",(0,o.jsx)(e.code,{children:"python"})," command to run Python 3."]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:[(0,o.jsxs)(e.strong,{children:["Install ",(0,o.jsx)(e.code,{children:"python-is-python3"})," package"]}),":\nAlternatively, you can install the ",(0,o.jsx)(e.code,{children:"python-is-python3"})," package, which automatically sets up the symbolic link:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:"sudo apt install python-is-python3\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(e.p,{children:["After following these steps, you should be able to run your Python script using the ",(0,o.jsx)(e.code,{children:"python"})," command:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:"python example.py\n"})})]})}function d(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(a,{...n})}):a(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>r,x:()=>c});var s=t(6540);const o={},i=s.createContext(o);function r(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:r(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);