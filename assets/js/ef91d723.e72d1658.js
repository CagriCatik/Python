"use strict";(self.webpackChunkmy_docusaurus_site=self.webpackChunkmy_docusaurus_site||[]).push([[1146],{7051:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"python-guide/AsyncIO/Gather","title":"Asynchronous Operations with Futures in Python","description":"In this tutorial, we will explore the concept of futures in Python to efficiently handle multiple asynchronous tasks. Instead of creating individual tasks and awaiting each one separately, we will use futures to initiate multiple tasks simultaneously.","source":"@site/docs/python-guide/11_AsyncIO/04_Gather.md","sourceDirName":"python-guide/11_AsyncIO","slug":"/python-guide/AsyncIO/Gather","permalink":"/Python/docs/python-guide/AsyncIO/Gather","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/python-guide/11_AsyncIO/04_Gather.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{},"sidebar":"guideSidebar","previous":{"title":"Tasks","permalink":"/Python/docs/python-guide/AsyncIO/Tasks"},"next":{"title":"Asynchronous Website Status Checker","permalink":"/Python/docs/python-guide/AsyncIO/Website_Status"}}');var a=t(4848),i=t(8453);const r={},o="Asynchronous Operations with Futures in Python",u={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Code Setup",id:"code-setup",level:2},{value:"Creating a Future",id:"creating-a-future",level:2},{value:"Handling Exceptions",id:"handling-exceptions",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"asynchronous-operations-with-futures-in-python",children:"Asynchronous Operations with Futures in Python"})}),"\n",(0,a.jsx)(n.p,{children:"In this tutorial, we will explore the concept of futures in Python to efficiently handle multiple asynchronous tasks. Instead of creating individual tasks and awaiting each one separately, we will use futures to initiate multiple tasks simultaneously."}),"\n",(0,a.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsx)(n.p,{children:"Make sure you have a basic understanding of asynchronous programming in Python and have the necessary libraries installed. If not, consider revisiting the previous lecture."}),"\n",(0,a.jsx)(n.h2,{id:"code-setup",children:"Code Setup"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'import asyncio\n\n# Our asynchronous function fetching data with a delay\nasync def fetch_data(input_value, delay):\n    await asyncio.sleep(delay)\n    return {"input": input_value, "result": f"Data for {input_value}"}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"creating-a-future",children:"Creating a Future"}),"\n",(0,a.jsxs)(n.p,{children:["In the main entry point of your program, create a future using ",(0,a.jsx)(n.code,{children:"asyncio.gather()"}),". A future represents the eventual result of an asynchronous operation."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'# Creating a future to handle multiple tasks\nasync def main():\n    tasks = asyncio.gather(\n        fetch_data(1, 1),\n        fetch_data(2, 2),\n        fetch_data(3, 2),  # Simulating a task that will raise an exception\n        return_exceptions=True  # Return exceptions instead of failing\n    )\n  \n    results = await tasks\n    print_results(results)\n\n# Printing results in a readable format\ndef print_results(results):\n    for result in results:\n        if isinstance(result, Exception):\n            print(f"An exception occurred: {result}")\n        else:\n            print(result["result"])\n\n# Running the main function\nasyncio.run(main())\n'})}),"\n",(0,a.jsxs)(n.p,{children:["In the example above, we create a future named ",(0,a.jsx)(n.code,{children:"tasks"})," using ",(0,a.jsx)(n.code,{children:"asyncio.gather()"}),". This allows us to start all tasks simultaneously. The ",(0,a.jsx)(n.code,{children:"return_exceptions=True"})," parameter ensures that exceptions are returned instead of causing the entire operation to fail."]}),"\n",(0,a.jsx)(n.h2,{id:"handling-exceptions",children:"Handling Exceptions"}),"\n",(0,a.jsxs)(n.p,{children:["To demonstrate exception handling within the ",(0,a.jsx)(n.code,{children:"asyncio.gather()"})," function, modify your asynchronous function to raise an exception based on a parameter:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'async def fetch_data(input_value, delay, fails=False):\n    await asyncio.sleep(delay)\n    if fails:\n        raise Exception("Something went wrong!")\n    return {"input": input_value, "result": f"Data for {input_value}"}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Now, when calling ",(0,a.jsx)(n.code,{children:"fetch_data(3, 2, fails=True)"}),", it will simulate a task that raises an exception. The ",(0,a.jsx)(n.code,{children:"asyncio.gather()"})," function, with ",(0,a.jsx)(n.code,{children:"return_exceptions=True"}),", ensures that the exceptions are captured and returned along with the results. By using futures and ",(0,a.jsx)(n.code,{children:"asyncio.gather()"}),", you can efficiently handle multiple asynchronous tasks in a single block of code. Additionally, you learned how to handle exceptions within the gathering process and print results in a more readable format. Experiment with these concepts to enhance your understanding of asynchronous programming in Python."]})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var s=t(6540);const a={},i=s.createContext(a);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);