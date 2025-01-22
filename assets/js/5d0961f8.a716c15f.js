"use strict";(self.webpackChunkmy_docusaurus_site=self.webpackChunkmy_docusaurus_site||[]).push([[8968],{5124:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>d,metadata:()=>i,toc:()=>s});const i=JSON.parse('{"id":"python-guide/File-Management/Writing-Creating-Files","title":"File Manipulation","description":"In this tutorial, we will learn how to manipulate text files in Python, including reading, writing, and appending text. We will cover different modes of file operations and how to handle them effectively.","source":"@site/docs/python-guide/15_File-Management/03_Writing-Creating-Files.md","sourceDirName":"python-guide/15_File-Management","slug":"/python-guide/File-Management/Writing-Creating-Files","permalink":"/Python/docs/python-guide/File-Management/Writing-Creating-Files","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/python-guide/15_File-Management/03_Writing-Creating-Files.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{},"sidebar":"guideSidebar","previous":{"title":"File Handling with the with Statement","permalink":"/Python/docs/python-guide/File-Management/Reading-Files"},"next":{"title":"Deleting_Files","permalink":"/Python/docs/python-guide/File-Management/Deleting_Files"}}');var a=t(4848),r=t(8453);const d={},l="File Manipulation",o={},s=[{value:"Reading from a Text File",id:"reading-from-a-text-file",level:2},{value:"Editing a Text File",id:"editing-a-text-file",level:2},{value:"Appending Text to a File",id:"appending-text-to-a-file",level:3},{value:"Reading After Appending",id:"reading-after-appending",level:3},{value:"Writing Mode",id:"writing-mode",level:3},{value:"Exclusive Creation Mode (X Mode)",id:"exclusive-creation-mode-x-mode",level:3},{value:"Appending in Exclusive Creation Mode",id:"appending-in-exclusive-creation-mode",level:3}];function p(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"file-manipulation",children:"File Manipulation"})}),"\n",(0,a.jsx)(n.p,{children:"In this tutorial, we will learn how to manipulate text files in Python, including reading, writing, and appending text. We will cover different modes of file operations and how to handle them effectively."}),"\n",(0,a.jsx)(n.h2,{id:"reading-from-a-text-file",children:"Reading from a Text File"}),"\n",(0,a.jsx)(n.p,{children:"In the previous example, we learned how to read from a text file. Let's recap the code snippet:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"with open('sample.txt', 'r') as text:\n    content = text.read()\n    print(content)\n"})}),"\n",(0,a.jsxs)(n.p,{children:["This code opens the file named ",(0,a.jsx)(n.code,{children:"sample.txt"})," in read mode ('r'), reads its content, and prints it to the console."]}),"\n",(0,a.jsx)(n.h2,{id:"editing-a-text-file",children:"Editing a Text File"}),"\n",(0,a.jsx)(n.p,{children:"Now, let's delve into editing a text file by either appending text to it or replacing the text entirely."}),"\n",(0,a.jsx)(n.h3,{id:"appending-text-to-a-file",children:"Appending Text to a File"}),"\n",(0,a.jsx)(n.p,{children:"To append text to a file, we use the append mode ('a'). Here's how to do it:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"with open('sample.txt', 'a') as text:\n    text.write('new text\\n')\n"})}),"\n",(0,a.jsx)(n.p,{children:"In this code snippet, 'new text' is added to the end of the file. The '\\n' character ensures a new line after appending."}),"\n",(0,a.jsx)(n.h3,{id:"reading-after-appending",children:"Reading After Appending"}),"\n",(0,a.jsx)(n.p,{children:"When appending to a file, the file pointer is at the end. To read the appended content, we need to seek to the beginning of the file:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"with open('sample.txt', 'a+') as text:\n    text.seek(0)\n    content = text.read()\n    print(content)\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"seek(0)"})," function moves the file pointer to the beginning, allowing us to read the entire content, including the newly appended text."]}),"\n",(0,a.jsx)(n.h3,{id:"writing-mode",children:"Writing Mode"}),"\n",(0,a.jsx)(n.p,{children:"In writing mode ('w'), the entire file is replaced with the new content. Here's how to use it:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"with open('sample.txt', 'w') as text:\n    text.write('replacing\\n')\n"})}),"\n",(0,a.jsx)(n.p,{children:"Each time the file is opened in writing mode, it replaces the existing content entirely."}),"\n",(0,a.jsx)(n.h3,{id:"exclusive-creation-mode-x-mode",children:"Exclusive Creation Mode (X Mode)"}),"\n",(0,a.jsx)(n.p,{children:"The 'x' mode ensures that the file doesn't already exist. Let's see how it works:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"try:\n    with open('new_file.txt', 'x') as text:\n        text.write('Hello World\\n')\n        text.seek(0)\n        content = text.read()\n        print(content)\nexcept FileExistsError:\n    print(\"The file already exists.\")\n"})}),"\n",(0,a.jsxs)(n.p,{children:["In this example, we attempt to create a new file named 'new_file.txt'. If the file already exists, a ",(0,a.jsx)(n.code,{children:"FileExistsError"})," is raised."]}),"\n",(0,a.jsx)(n.h3,{id:"appending-in-exclusive-creation-mode",children:"Appending in Exclusive Creation Mode"}),"\n",(0,a.jsx)(n.p,{children:"We can combine 'x' mode with 'a+' mode to create a new file and append to it:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"with open('new_file.txt', 'a+') as text:\n    text.write('Hello World\\n')\n    text.seek(0)\n    content = text.read()\n    print(content)\n"})}),"\n",(0,a.jsx)(n.p,{children:"File manipulation in Python offers various modes to read, write, and append text. Understanding these modes and using them appropriately is essential for efficient file handling."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{})}),"\n",(0,a.jsx)(n.h1,{id:"file-manipulation-example",children:"File Manipulation Example"}),"\n",(0,a.jsx)(n.h1,{id:"appending-text-to-a-file-1",children:"Appending text to a file"}),"\n",(0,a.jsx)(n.p,{children:"with open('sample.txt', 'a') as text:\ntext.write('new text\\n')"}),"\n",(0,a.jsx)(n.h1,{id:"reading-after-appending-1",children:"Reading after appending"}),"\n",(0,a.jsx)(n.p,{children:"with open('sample.txt', 'a+') as text:\ntext.seek(0)\ncontent = text.read()\nprint(\"Content after appending:\\n\", content)"}),"\n",(0,a.jsx)(n.h1,{id:"replacing-the-entire-content-of-the-file",children:"Replacing the entire content of the file"}),"\n",(0,a.jsx)(n.p,{children:"with open('sample.txt', 'w') as text:\ntext.write('replacing\\n')"}),"\n",(0,a.jsx)(n.h1,{id:"reading-after-replacing",children:"Reading after replacing"}),"\n",(0,a.jsx)(n.p,{children:"with open('sample.txt', 'a+') as text:\ntext.seek(0)\ncontent = text.read()\nprint(\"Content after replacing:\\n\", content)"}),"\n",(0,a.jsx)(n.h1,{id:"exclusive-creation-mode-x-mode-1",children:"Exclusive creation mode (X mode)"}),"\n",(0,a.jsx)(n.p,{children:"try:\nwith open('new_file.txt', 'x') as text:\ntext.write('Hello World\\n')\ntext.seek(0)\ncontent = text.read()\nprint(\"Content of new_file.txt:\\n\", content)\nexcept FileExistsError:\nprint(\"The file already exists.\")"}),"\n",(0,a.jsx)(n.h1,{id:"appending-in-exclusive-creation-mode-1",children:"Appending in exclusive creation mode"}),"\n",(0,a.jsx)(n.p,{children:"with open('new_file.txt', 'a+') as text:\ntext.write('Appending in exclusive creation mode\\n')\ntext.seek(0)\ncontent = text.read()\nprint(\"Content after appending in exclusive creation mode:\\n\", content)"})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>l});var i=t(6540);const a={},r=i.createContext(a);function d(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);