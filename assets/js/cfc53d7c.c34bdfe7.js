"use strict";(self.webpackChunkmy_docusaurus_site=self.webpackChunkmy_docusaurus_site||[]).push([[8419],{420:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"guide/Multiprocessing/Processes","title":"Multiprocessing","description":"This tutorial addresses the implementation of multiprocessing in Python to enhance program performance. It will also compare multiprocessing with threading to highlight the differences and appropriate use cases. The tutorial includes creating helper scripts for timing functions, generating timestamps, and simulating time-consuming operations. These scripts will be integrated into a main program utilizing Python\'s multiprocessing module.","source":"@site/docs/guide/12_Multiprocessing/02_Processes.md","sourceDirName":"guide/12_Multiprocessing","slug":"/guide/Multiprocessing/Processes","permalink":"/Python/docs/guide/Multiprocessing/Processes","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guide/12_Multiprocessing/02_Processes.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{},"sidebar":"guideSidebar","previous":{"title":"Introduction","permalink":"/Python/docs/guide/Multiprocessing/Intro"},"next":{"title":"Process Pools","permalink":"/Python/docs/guide/Multiprocessing/Pools-Map"}}');var s=i(4848),t=i(8453);const a={},o="Multiprocessing",l={},c=[{value:"Helper Script Creation",id:"helper-script-creation",level:2},{value:"Helper Script: <code>time_utils.py</code>",id:"helper-script-time_utilspy",level:2},{value:"Main Script with Multiprocessing",id:"main-script-with-multiprocessing",level:2},{value:"Main Script: <code>main_multiprocessing.py</code>",id:"main-script-main_multiprocessingpy",level:2},{value:"Comparing with Threading",id:"comparing-with-threading",level:2},{value:"Threading Script: <code>main_threading.py</code>",id:"threading-script-main_threadingpy",level:2},{value:"Analysis and Explanation",id:"analysis-and-explanation",level:2},{value:"Performance and Parallelism",id:"performance-and-parallelism",level:3},{value:"Overhead of Process Creation",id:"overhead-of-process-creation",level:3},{value:"Conclusion",id:"conclusion",level:2},{value:"Further Learning",id:"further-learning",level:2}];function p(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"multiprocessing",children:"Multiprocessing"})}),"\n",(0,s.jsxs)(n.p,{children:["This tutorial addresses the implementation of multiprocessing in Python to enhance program performance. It will also compare multiprocessing with threading to highlight the differences and appropriate use cases. The tutorial includes creating helper scripts for timing functions, generating timestamps, and simulating time-consuming operations. These scripts will be integrated into a main program utilizing Python's ",(0,s.jsx)(n.code,{children:"multiprocessing"})," module."]}),"\n",(0,s.jsx)(n.h2,{id:"helper-script-creation",children:"Helper Script Creation"}),"\n",(0,s.jsx)(n.p,{children:"We will start by creating a helper script to include utility functions for timing, generating timestamps, and simulating time-consuming operations."}),"\n",(0,s.jsxs)(n.h2,{id:"helper-script-time_utilspy",children:["Helper Script: ",(0,s.jsx)(n.code,{children:"time_utils.py"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'from time import perf_counter\nfrom functools import wraps\nfrom datetime import datetime\n\ndef get_time(func):\n    @wraps(func)\n    def wrapper(*args, **kwargs):\n        start_time = perf_counter()\n        result = func(*args, **kwargs)\n        end_time = perf_counter()\n        print(f"Time taken by {func.__name__}: {end_time - start_time:.4f} seconds")\n        return result\n    return wrapper\n\ndef timestamp():\n    return datetime.now().strftime("%H:%M:%S")\n\ndef kill_time():\n    for _ in range(10**8):\n        pass\n'})}),"\n",(0,s.jsx)(n.h2,{id:"main-script-with-multiprocessing",children:"Main Script with Multiprocessing"}),"\n",(0,s.jsxs)(n.p,{children:["Next, we will use the ",(0,s.jsx)(n.code,{children:"multiprocessing"})," module to run tasks in parallel. This will involve creating processes, starting them, and waiting for them to complete."]}),"\n",(0,s.jsxs)(n.h2,{id:"main-script-main_multiprocessingpy",children:["Main Script: ",(0,s.jsx)(n.code,{children:"main_multiprocessing.py"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"import multiprocessing as mp\nfrom time_utils import get_time, timestamp, kill_time\nimport os\n\ndef worker_task(param):\n    print(f\"Starting process: {mp.current_process().name}, PID: {os.getpid()}, Timestamp: {timestamp()}\")\n    kill_time()\n    print(f\"Finished process: PID: {os.getpid()}, Timestamp: {timestamp()}\")\n\n@get_time\ndef main():\n    process1 = mp.Process(name='Process_1', target=worker_task, args=('arg1',))\n    process2 = mp.Process(name='Process_2', target=worker_task, args=('arg2',))\n\n    process1.start()\n    process2.start()\n\n    process1.join()\n    process2.join()\n\nif __name__ == '__main__':\n    main()\n"})}),"\n",(0,s.jsx)(n.h2,{id:"comparing-with-threading",children:"Comparing with Threading"}),"\n",(0,s.jsx)(n.p,{children:"To demonstrate the performance differences, we will implement a similar task using threading."}),"\n",(0,s.jsxs)(n.h2,{id:"threading-script-main_threadingpy",children:["Threading Script: ",(0,s.jsx)(n.code,{children:"main_threading.py"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"import threading\nfrom time_utils import get_time, timestamp, kill_time\nimport os\n\ndef worker_task(param):\n    print(f\"Starting thread: {threading.current_thread().name}, PID: {os.getpid()}, Timestamp: {timestamp()}\")\n    kill_time()\n    print(f\"Finished thread: PID: {os.getpid()}, Timestamp: {timestamp()}\")\n\n@get_time\ndef main():\n    thread1 = threading.Thread(name='Thread_1', target=worker_task, args=('arg1',))\n    thread2 = threading.Thread(name='Thread_2', target=worker_task, args=('arg2',))\n\n    thread1.start()\n    thread2.start()\n\n    thread1.join()\n    thread2.join()\n\nif __name__ == '__main__':\n    main()\n"})}),"\n",(0,s.jsx)(n.h2,{id:"analysis-and-explanation",children:"Analysis and Explanation"}),"\n",(0,s.jsx)(n.h3,{id:"performance-and-parallelism",children:"Performance and Parallelism"}),"\n",(0,s.jsxs)(n.p,{children:["When you run ",(0,s.jsx)(n.code,{children:"main_multiprocessing.py"}),", you will observe that the processes run in parallel, each having a unique process ID. This is true parallel execution, as each process runs independently on separate CPU cores if available."]}),"\n",(0,s.jsxs)(n.p,{children:["When you run ",(0,s.jsx)(n.code,{children:"main_threading.py"}),", the threads share the same process ID and execute concurrently within the same process. Due to Python's Global Interpreter Lock (GIL), true parallel execution is not achieved with threading. Threads are more suitable for I/O-bound tasks, whereas multiprocessing is better for CPU-bound tasks."]}),"\n",(0,s.jsx)(n.h3,{id:"overhead-of-process-creation",children:"Overhead of Process Creation"}),"\n",(0,s.jsx)(n.p,{children:"Creating processes involves more overhead compared to threads due to the need to allocate separate memory space and resources for each process. Therefore, for small tasks, threading or regular function calls may be more efficient."}),"\n",(0,s.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsx)(n.p,{children:"Multiprocessing is a powerful tool for parallelizing CPU-bound tasks in Python. It allows true parallel execution by utilizing multiple cores of the CPU. However, it comes with higher overhead compared to threading, making it more suitable for larger tasks. Threading, on the other hand, is more appropriate for I/O-bound tasks where tasks spend significant time waiting for external resources."}),"\n",(0,s.jsx)(n.p,{children:"In subsequent lessons, we will explore advanced multiprocessing techniques and scenarios, such as process pools, inter-process communication, and handling larger-scale parallel computing tasks."}),"\n",(0,s.jsx)(n.h2,{id:"further-learning",children:"Further Learning"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Process Pools"}),": Efficiently manage and reuse multiple processes."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Inter-process Communication (IPC)"}),": Share data between processes using queues and pipes."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Error Handling in Multiprocessing"}),": Properly manage exceptions and errors in multiprocessing environments."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"By mastering these concepts, you will be well-equipped to leverage multiprocessing to its fullest potential in Python applications."})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var r=i(6540);const s={},t=r.createContext(s);function a(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);