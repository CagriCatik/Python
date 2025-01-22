"use strict";(self.webpackChunkmy_docusaurus_site=self.webpackChunkmy_docusaurus_site||[]).push([[9500],{8274:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>n,toc:()=>u});const n=JSON.parse('{"id":"guide/AsyncIO/Website_Status","title":"Asynchronous Website Status Checker","description":"In this Python project, we will create an asynchronous website status checker using the power of asynchronous tasks. This program efficiently fetches the status of multiple websites and provides detailed information about each request.","source":"@site/docs/guide/11_AsyncIO/05_Website_Status.md","sourceDirName":"guide/11_AsyncIO","slug":"/guide/AsyncIO/Website_Status","permalink":"/Python/docs/guide/AsyncIO/Website_Status","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guide/11_AsyncIO/05_Website_Status.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{},"sidebar":"guideSidebar","previous":{"title":"Asynchronous Operations with Futures in Python","permalink":"/Python/docs/guide/AsyncIO/Gather"},"next":{"title":"Multiprocessing","permalink":"/Python/docs/category/multiprocessing"}}');var i=s(4848),r=s(8453);const o={},a="Asynchronous Website Status Checker",c={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Code Implementation",id:"code-implementation",level:2},{value:"How to Run",id:"how-to-run",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"asynchronous-website-status-checker",children:"Asynchronous Website Status Checker"})}),"\n",(0,i.jsx)(t.p,{children:"In this Python project, we will create an asynchronous website status checker using the power of asynchronous tasks. This program efficiently fetches the status of multiple websites and provides detailed information about each request."}),"\n",(0,i.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(t.p,{children:"Ensure you have the required libraries installed by running:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"pip install requests\n"})}),"\n",(0,i.jsx)(t.h2,{id:"code-implementation",children:"Code Implementation"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:'from datetime import datetime\nimport asyncio\nfrom requests import response\n\nasync def check_status(url: str) -> dict:\n    start_time = datetime.now()\n  \n    try:\n        # Using \'to_thread\' to make a synchronous function asynchronous\n        response_object: response = await asyncio.to_thread(requests.get, url, None)\n        end_time = datetime.now()\n\n        # Return a dictionary containing website details\n        return {\n            "website": url,\n            "status": response_object.status_code,\n            "start_time": start_time.strftime("%H:%M:%S"),\n            "end_time": end_time.strftime("%H:%M:%S")\n        }\n\n    except Exception as e:\n        end_time = datetime.now()\n        # Return exception details if an error occurs\n        return {\n            "website": url,\n            "status": f"Error: {str(e)}",\n            "start_time": start_time.strftime("%H:%M:%S"),\n            "end_time": end_time.strftime("%H:%M:%S")\n        }\n\nasync def main():\n    tasks = asyncio.gather(\n        check_status("https://www.bing.com"),\n        check_status("https://www.google.com"),\n        check_status("https://www.apple.com"),\n        check_status("https://www.bbc.com"),\n        check_status("https://lol"),\n        return_exceptions=True\n    )\n  \n    print("Fetching results...")\n    results = await tasks\n\n    for result in results:\n        print(result)\n\nif __name__ == "__main__":\n    asyncio.run(main())\n'})}),"\n",(0,i.jsx)(t.h2,{id:"how-to-run",children:"How to Run"}),"\n",(0,i.jsxs)(t.p,{children:["Save the code in a file (e.g., ",(0,i.jsx)(t.code,{children:"website_status_checker.py"}),") and run it using the following command:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"python website_status_checker.py\n"})}),"\n",(0,i.jsx)(t.p,{children:"This script checks the status of several websites concurrently, displaying the results including status codes, start and end times, and any exceptions encountered during the process. The use of asynchronous tasks ensures efficient execution, allowing requests to seemingly occur simultaneously."})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>a});var n=s(6540);const i={},r=n.createContext(i);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);