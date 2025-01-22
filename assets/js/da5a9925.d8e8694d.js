"use strict";(self.webpackChunkmy_docusaurus_site=self.webpackChunkmy_docusaurus_site||[]).push([[9350],{2553:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"guide/AsyncIO/Tasks","title":"Tasks","description":"Tasks are scheduled and independently managed coroutines, providing flexibility in handling asynchronous operations.","source":"@site/docs/guide/11_AsyncIO/03_Tasks.md","sourceDirName":"guide/11_AsyncIO","slug":"/guide/AsyncIO/Tasks","permalink":"/Python/docs/guide/AsyncIO/Tasks","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guide/11_AsyncIO/03_Tasks.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{},"sidebar":"guideSidebar","previous":{"title":"Asynchronous Programming with Asyncio in Python","permalink":"/Python/docs/guide/AsyncIO/Getting_Started"},"next":{"title":"Asynchronous Operations with Futures in Python","permalink":"/Python/docs/guide/AsyncIO/Gather"}}');var s=a(4848),i=a(8453);const r={},c="Tasks",o={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Example: Running a Task",id:"example-running-a-task",level:2},{value:"Example: Canceling a Task",id:"example-canceling-a-task",level:2},{value:"Example: Accessing Task Result and Checking Completion",id:"example-accessing-task-result-and-checking-completion",level:2},{value:"Example: Setting a Timeout for a Task",id:"example-setting-a-timeout-for-a-task",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"tasks",children:"Tasks"})}),"\n",(0,s.jsx)(n.p,{children:"Tasks are scheduled and independently managed coroutines, providing flexibility in handling asynchronous operations."}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.p,{children:["Ensure you have the ",(0,s.jsx)(n.code,{children:"asyncio"})," library available in your Python environment."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"import asyncio\nfrom datetime import datetime\n"})}),"\n",(0,s.jsx)(n.h2,{id:"example-running-a-task",children:"Example: Running a Task"}),"\n",(0,s.jsxs)(n.p,{children:["Let's start with a basic example using the ",(0,s.jsx)(n.code,{children:"asyncio.create_task"})," method to create and run a non-blocking task."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'async def fetch_data(input_data, delay):\n    # Simulate fetching data from an API with a specified delay\n    await asyncio.sleep(delay)\n    return {"input_data": input_data, "timestamp": str(datetime.now())}\n\nasync def main():\n    task = asyncio.create_task(fetch_data(1, 3))\n    print("Running other code while the task is active.")\n    await asyncio.sleep(1)  # Simulate other code running concurrently\n    data = await task\n    print("Retrieved data:", data)\n\nasyncio.run(main())\n'})}),"\n",(0,s.jsx)(n.p,{children:"This example demonstrates that while the task is fetching data asynchronously, other code can continue to run concurrently."}),"\n",(0,s.jsx)(n.h2,{id:"example-canceling-a-task",children:"Example: Canceling a Task"}),"\n",(0,s.jsx)(n.p,{children:"In some cases, you might want to cancel a task if it takes too long. Here's an example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'async def fetch_data(input_data, delay):\n    await asyncio.sleep(delay)\n    return {"input_data": input_data, "timestamp": str(datetime.now())}\n\nasync def main():\n    task = asyncio.create_task(fetch_data(2, 10))\n    await asyncio.sleep(1)  # Give the task time to start\n    task.cancel("Took too long")\n  \n    try:\n        data = await task\n        print("Retrieved data:", data)\n    except asyncio.CancelledError:\n        print("Task was canceled.")\n'})}),"\n",(0,s.jsx)(n.p,{children:"This example cancels the task after one second and demonstrates handling the cancellation with a try-except block."}),"\n",(0,s.jsx)(n.h2,{id:"example-accessing-task-result-and-checking-completion",children:"Example: Accessing Task Result and Checking Completion"}),"\n",(0,s.jsx)(n.p,{children:"You can access the result of a task and check if it's completed. Here's an example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'async def fetch_data(input_data, delay):\n    await asyncio.sleep(delay)\n    return {"input_data": input_data, "timestamp": str(datetime.now())}\n\nasync def main():\n    task = asyncio.create_task(fetch_data(3, 3))\n  \n    try:\n        data = task.result()  # Try to access the result without waiting\n        print("Retrieved data without waiting:", data)\n    except asyncio.InvalidStateError as e:\n        print(f"Error: {e}")\n\n    await asyncio.sleep(4)  # Give the task time to complete\n    try:\n        data = await task\n        print("Retrieved data after waiting:", data)\n    except asyncio.CancelledError:\n        print("Task was canceled.")\n  \n    print("Is the task done?", task.done())\n\nasyncio.run(main())\n'})}),"\n",(0,s.jsx)(n.p,{children:"This example showcases attempting to access the result without waiting and checking if the task is done before retrieving the result."}),"\n",(0,s.jsx)(n.h2,{id:"example-setting-a-timeout-for-a-task",children:"Example: Setting a Timeout for a Task"}),"\n",(0,s.jsx)(n.p,{children:"To prevent tasks from taking too long, you can set a timeout. Here's an example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'async def fetch_data(input_data, delay):\n    await asyncio.sleep(delay)\n    return {"input_data": input_data, "timestamp": str(datetime.now())}\n\nasync def main():\n    task = asyncio.create_task(fetch_data(5, 30))\n  \n    try:\n        data = await asyncio.wait_for(task, timeout=3)\n        print("Retrieved data within the timeout:", data)\n    except asyncio.TimeoutError:\n        print("Request took too long. Try again.")\n    except asyncio.CancelledError:\n        print("Task was canceled.")\n\nasyncio.run(main())\n'})}),"\n",(0,s.jsxs)(n.p,{children:["This example sets a timeout of 3 seconds, indicating that if the task takes longer, it should raise a ",(0,s.jsx)(n.code,{children:"TimeoutError"}),". The code then handles this exception appropriately."]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>r,x:()=>c});var t=a(6540);const s={},i=t.createContext(s);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);