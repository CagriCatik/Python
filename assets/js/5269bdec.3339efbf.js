"use strict";(self.webpackChunkpython=self.webpackChunkpython||[]).push([[2019],{1236:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"python-guide/AsyncIO/Website_Status","title":"Asynchronous Website Status Checker","description":"This Python project demonstrates how to create an asynchronous website status checker using the power of asynchronous tasks. By leveraging Python\'s asyncio library, the program efficiently fetches the status of multiple websites concurrently, providing detailed information about each request.","source":"@site/docs/python-guide/11_AsyncIO/05_Website_Status.md","sourceDirName":"python-guide/11_AsyncIO","slug":"/python-guide/AsyncIO/Website_Status","permalink":"/Python/docs/python-guide/AsyncIO/Website_Status","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/python-guide/11_AsyncIO/05_Website_Status.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{},"sidebar":"guideSidebar","previous":{"title":"Using Futures for Asynchronous Tasks","permalink":"/Python/docs/python-guide/AsyncIO/Gather"},"next":{"title":"Multiprocessing","permalink":"/Python/docs/category/multiprocessing"}}');var i=n(4848),r=n(8453);const o={},c="Asynchronous Website Status Checker",a={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Code Implementation",id:"code-implementation",level:2},{value:"How It Works",id:"how-it-works",level:2},{value:"How to Run",id:"how-to-run",level:2},{value:"Example Output",id:"example-output",level:2},{value:"Key Features",id:"key-features",level:2},{value:"Applications",id:"applications",level:2}];function u(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"asynchronous-website-status-checker",children:"Asynchronous Website Status Checker"})}),"\n",(0,i.jsxs)(t.p,{children:["This Python project demonstrates how to create an asynchronous website status checker using the power of asynchronous tasks. By leveraging Python's ",(0,i.jsx)(t.code,{children:"asyncio"})," library, the program efficiently fetches the status of multiple websites concurrently, providing detailed information about each request."]}),"\n",(0,i.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(t.p,{children:"Ensure you have the required library installed by running the following command:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"pip install requests\n"})}),"\n",(0,i.jsx)(t.h2,{id:"code-implementation",children:"Code Implementation"}),"\n",(0,i.jsx)(t.p,{children:"Below is the complete implementation of the asynchronous website status checker:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:'from datetime import datetime\nimport asyncio\nimport requests\n\nasync def check_status(url: str) -> dict:\n    start_time = datetime.now()\n\n    try:\n        # Using \'to_thread\' to make a synchronous function asynchronous\n        response_object = await asyncio.to_thread(requests.get, url)\n        end_time = datetime.now()\n\n        # Return a dictionary containing website details\n        return {\n            "website": url,\n            "status": response_object.status_code,\n            "start_time": start_time.strftime("%H:%M:%S"),\n            "end_time": end_time.strftime("%H:%M:%S")\n        }\n\n    except Exception as e:\n        end_time = datetime.now()\n        # Return exception details if an error occurs\n        return {\n            "website": url,\n            "status": f"Error: {str(e)}",\n            "start_time": start_time.strftime("%H:%M:%S"),\n            "end_time": end_time.strftime("%H:%M:%S")\n        }\n\nasync def main():\n    # List of websites to check\n    tasks = asyncio.gather(\n        check_status("https://www.bing.com"),\n        check_status("https://www.google.com"),\n        check_status("https://www.apple.com"),\n        check_status("https://www.bbc.com"),\n        check_status("https://lol"),\n        return_exceptions=True\n    )\n\n    print("Fetching results...")\n    results = await tasks\n\n    # Display results\n    for result in results:\n        print(result)\n\nif __name__ == "__main__":\n    asyncio.run(main())\n'})}),"\n",(0,i.jsx)(t.h2,{id:"how-it-works",children:"How It Works"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsxs)(t.strong,{children:["Function ",(0,i.jsx)(t.code,{children:"check_status(url)"})]}),":"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Fetches the status of a given URL asynchronously."}),"\n",(0,i.jsxs)(t.li,{children:["Uses ",(0,i.jsx)(t.code,{children:"asyncio.to_thread"})," to execute the synchronous ",(0,i.jsx)(t.code,{children:"requests.get"})," function in a thread pool."]}),"\n",(0,i.jsx)(t.li,{children:"Captures the start and end times to provide detailed timing information."}),"\n",(0,i.jsx)(t.li,{children:"Handles exceptions gracefully, returning error details if a request fails."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsxs)(t.strong,{children:["Function ",(0,i.jsx)(t.code,{children:"main()"})]}),":"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Gathers all website status-checking tasks using ",(0,i.jsx)(t.code,{children:"asyncio.gather()"}),"."]}),"\n",(0,i.jsx)(t.li,{children:"Fetches results concurrently and prints the output for each website."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Asynchronous Execution"}),":"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Tasks are run concurrently, reducing the total execution time."}),"\n",(0,i.jsx)(t.li,{children:"The program does not block while waiting for individual requests to complete."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"how-to-run",children:"How to Run"}),"\n",(0,i.jsxs)(t.p,{children:["Save the script to a file (e.g., ",(0,i.jsx)(t.code,{children:"website_status_checker.py"}),") and run it using the following command:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"python website_status_checker.py\n"})}),"\n",(0,i.jsx)(t.h2,{id:"example-output",children:"Example Output"}),"\n",(0,i.jsx)(t.p,{children:"Here is an example of the output you might see when running the script:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"Fetching results...\n{'website': 'https://www.bing.com', 'status': 200, 'start_time': '12:01:45', 'end_time': '12:01:46'}\n{'website': 'https://www.google.com', 'status': 200, 'start_time': '12:01:45', 'end_time': '12:01:46'}\n{'website': 'https://www.apple.com', 'status': 200, 'start_time': '12:01:45', 'end_time': '12:01:46'}\n{'website': 'https://www.bbc.com', 'status': 200, 'start_time': '12:01:45', 'end_time': '12:01:46'}\n{'website': 'https://lol', 'status': 'Error: Invalid URL', 'start_time': '12:01:45', 'end_time': '12:01:45'}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"key-features",children:"Key Features"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Concurrent Requests"}),": By using ",(0,i.jsx)(t.code,{children:"asyncio.gather()"}),", multiple requests are handled concurrently, minimizing execution time."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Detailed Output"}),": Each result includes the website URL, HTTP status code (or error message), and the start and end times for the request."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Graceful Error Handling"}),": Invalid URLs or failed requests are captured and reported without disrupting the execution."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"applications",children:"Applications"}),"\n",(0,i.jsx)(t.p,{children:"This asynchronous website status checker can be extended for various use cases, such as:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Monitoring website uptime."}),"\n",(0,i.jsx)(t.li,{children:"Fetching metadata from multiple APIs concurrently."}),"\n",(0,i.jsx)(t.li,{children:"Building scalable network tools."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"By using this approach, you can efficiently manage multiple network requests in your Python applications."})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var s=n(6540);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);