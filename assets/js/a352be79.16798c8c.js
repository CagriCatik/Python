"use strict";(self.webpackChunkmy_docusaurus_site=self.webpackChunkmy_docusaurus_site||[]).push([[861],{5259:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"python-guide/File-Management/File-Handling","title":"File Handling in Python","description":"In this tutorial, we\'ll delve into the fundamentals of file handling in Python. Whether you\'re dealing with text files, JSON files, or images, understanding how to interact with files programmatically is essential. We\'ll cover basic file operations such as creating, reading, writing, and appending to files.","source":"@site/docs/python-guide/15_File-Management/01_File-Handling.md","sourceDirName":"python-guide/15_File-Management","slug":"/python-guide/File-Management/File-Handling","permalink":"/Python/docs/python-guide/File-Management/File-Handling","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/python-guide/15_File-Management/01_File-Handling.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{},"sidebar":"guideSidebar","previous":{"title":"File-Management","permalink":"/Python/docs/category/file-management"},"next":{"title":"File Handling with the with Statement in Python","permalink":"/Python/docs/python-guide/File-Management/Reading-Files"}}');var l=i(4848),s=i(8453);const a={},o="File Handling in Python",r={},d=[{value:"Creating a Text File",id:"creating-a-text-file",level:2},{value:"Absolute vs. Relative Paths",id:"absolute-vs-relative-paths",level:3},{value:"Opening Files",id:"opening-files",level:2}];function h(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"file-handling-in-python",children:"File Handling in Python"})}),"\n",(0,l.jsx)(n.p,{children:"In this tutorial, we'll delve into the fundamentals of file handling in Python. Whether you're dealing with text files, JSON files, or images, understanding how to interact with files programmatically is essential. We'll cover basic file operations such as creating, reading, writing, and appending to files."}),"\n",(0,l.jsx)(n.h2,{id:"creating-a-text-file",children:"Creating a Text File"}),"\n",(0,l.jsxs)(n.p,{children:["Let's start by creating a text file named ",(0,l.jsx)(n.code,{children:"sample_text.txt"})," where we can write some content using Python."]}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Open your Python editor."}),"\n",(0,l.jsxs)(n.li,{children:["Write the following lines of text:","\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-plaintext",children:"Hello world\nSecond line\n"})}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"Save the file in the local directory."}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"absolute-vs-relative-paths",children:"Absolute vs. Relative Paths"}),"\n",(0,l.jsx)(n.p,{children:"Understanding paths is crucial when working with files. Python can use both absolute and relative paths to locate files."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Absolute Path"}),": Specifies the exact location of a file on the system."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Relative Path"}),": Specifies the location of a file relative to the current working directory."]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"To find the absolute path of a file:"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Right-click on the file."}),"\n",(0,l.jsx)(n.li,{children:'Select "Copy Path" or "Copy Path and Reference".'}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Using relative paths is convenient, but if the file cannot be found, resort to using the absolute path."}),"\n",(0,l.jsx)(n.h2,{id:"opening-files",children:"Opening Files"}),"\n",(0,l.jsxs)(n.p,{children:["To open a file in Python, we use the ",(0,l.jsx)(n.code,{children:"open()"})," function. It takes two arguments: the file name and the mode."]}),"\n",(0,l.jsx)(n.p,{children:"Modes:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"'r'"}),": Read mode (default). Opens the file for reading."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"'a'"}),": Append mode. Opens the file for appending new content."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"'w'"}),": Write mode. Opens the file for writing, truncating the file first."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"'x'"}),": Create mode. Creates a new file, returning an error if the file already exists."]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Additionally, files can be opened in text mode ('t') or binary mode ('b')."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"# Example: Open a text file in read mode\nfile = open('sample_text.txt', 'r')\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"# Example: Open a binary file in write mode\nimage_file = open('image.png', 'wb')\n"})}),"\n",(0,l.jsx)(n.p,{children:"In the upcoming sections, we'll explore various file operations such as reading, writing, appending, and deleting content. Stay tuned for more detailed examples!"})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var t=i(6540);const l={},s=t.createContext(l);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);