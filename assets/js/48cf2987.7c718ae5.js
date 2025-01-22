"use strict";(self.webpackChunkmy_docusaurus_site=self.webpackChunkmy_docusaurus_site||[]).push([[6200],{763:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"guide/Multiprocessing/Pools-Map","title":"Process Pools","description":"In this tutorial, we will explore the use of process pools in Python to efficiently distribute computational tasks across multiple CPU cores. By utilizing the multiprocessing module, we can run multiple computations in parallel, significantly reducing the execution time for CPU-bound tasks. This guide will walk through creating a process pool, mapping tasks to it, and understanding the impact of core availability on task execution.","source":"@site/docs/guide/12_Multiprocessing/03_Pools-Map.md","sourceDirName":"guide/12_Multiprocessing","slug":"/guide/Multiprocessing/Pools-Map","permalink":"/Python/docs/guide/Multiprocessing/Pools-Map","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guide/12_Multiprocessing/03_Pools-Map.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{},"sidebar":"guideSidebar","previous":{"title":"Multiprocessing","permalink":"/Python/docs/guide/Multiprocessing/Processes"},"next":{"title":"Pools-Starmap","permalink":"/Python/docs/guide/Multiprocessing/Pools-Starmap"}}');var t=o(4848),s=o(8453);const l={},r="Process Pools",a={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Introduction to Process Pools",id:"introduction-to-process-pools",level:2},{value:"Example Scenario",id:"example-scenario",level:2},{value:"Step-by-Step Implementation",id:"step-by-step-implementation",level:3},{value:"Step 1: Import Required Modules",id:"step-1-import-required-modules",level:3},{value:"Step 2: Define the CPU-bound Function",id:"step-2-define-the-cpu-bound-function",level:3},{value:"Step 3: Create the Main Function",id:"step-3-create-the-main-function",level:3},{value:"Step 4: Experiment with Different Pool Sizes",id:"step-4-experiment-with-different-pool-sizes",level:3},{value:"Explanation of the Code",id:"explanation-of-the-code",level:3},{value:"Performance Considerations",id:"performance-considerations",level:3},{value:"Conclusion",id:"conclusion",level:3},{value:"Further Exploration",id:"further-exploration",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"process-pools",children:"Process Pools"})}),"\n",(0,t.jsxs)(n.p,{children:["In this tutorial, we will explore the use of process pools in Python to efficiently distribute computational tasks across multiple CPU cores. By utilizing the ",(0,t.jsx)(n.code,{children:"multiprocessing"})," module, we can run multiple computations in parallel, significantly reducing the execution time for CPU-bound tasks. This guide will walk through creating a process pool, mapping tasks to it, and understanding the impact of core availability on task execution."]}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(n.p,{children:"Ensure you have Python installed on your machine. This tutorial assumes familiarity with basic Python programming and concepts such as functions and loops."}),"\n",(0,t.jsx)(n.h2,{id:"introduction-to-process-pools",children:"Introduction to Process Pools"}),"\n",(0,t.jsxs)(n.p,{children:["A process pool allows us to manage and execute multiple processes concurrently. The ",(0,t.jsx)(n.code,{children:"multiprocessing"})," module in Python provides a ",(0,t.jsx)(n.code,{children:"Pool"})," class to facilitate this. Using a pool, we can distribute tasks across available CPU cores and collect results once all tasks are completed."]}),"\n",(0,t.jsx)(n.h2,{id:"example-scenario",children:"Example Scenario"}),"\n",(0,t.jsx)(n.p,{children:"We will create a function that simulates a CPU-bound task by sleeping for a certain period. We will then use a process pool to execute this function in parallel across multiple input values."}),"\n",(0,t.jsx)(n.h3,{id:"step-by-step-implementation",children:"Step-by-Step Implementation"}),"\n",(0,t.jsx)(n.h3,{id:"step-1-import-required-modules",children:"Step 1: Import Required Modules"}),"\n",(0,t.jsx)(n.p,{children:"First, import the necessary modules:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import multiprocessing as mp\nimport time\n"})}),"\n",(0,t.jsx)(n.h3,{id:"step-2-define-the-cpu-bound-function",children:"Step 2: Define the CPU-bound Function"}),"\n",(0,t.jsxs)(n.p,{children:["Define a function that simulates a CPU-bound task. For demonstration purposes, this function will use ",(0,t.jsx)(n.code,{children:"time.sleep"})," to simulate a delay."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'def convert_to_x(n):\n    time.sleep(2)  # Simulate a CPU-bound task\n    return f"{n}X"\n'})}),"\n",(0,t.jsx)(n.h3,{id:"step-3-create-the-main-function",children:"Step 3: Create the Main Function"}),"\n",(0,t.jsx)(n.p,{children:"In the main function, we will:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Print the number of available CPU cores."}),"\n",(0,t.jsx)(n.li,{children:"Create a list of values to process."}),"\n",(0,t.jsx)(n.li,{children:"Use a process pool to execute the function in parallel."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'def main():\n    # Print the number of available CPU cores\n    cores_available = mp.cpu_count()\n    print(f"Number of CPU cores available: {cores_available}")\n\n    # Create a list of values to process\n    values = list(range(1, 9))  # Creating values 1 to 8\n\n    # Create a pool with the number of available cores\n    with mp.Pool(cores_available) as pool:\n        # Map the function to the values and execute in parallel\n        results = pool.map(convert_to_x, values)\n\n    # Print the results\n    print(results)\n\n# Run the main function\nif __name__ == "__main__":\n    main()\n'})}),"\n",(0,t.jsx)(n.h3,{id:"step-4-experiment-with-different-pool-sizes",children:"Step 4: Experiment with Different Pool Sizes"}),"\n",(0,t.jsx)(n.p,{children:"To understand the impact of the number of processes on execution time, we can experiment with different pool sizes. Modify the pool size and observe the behavior:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'def main():\n    cores_available = mp.cpu_count()\n    print(f"Number of CPU cores available: {cores_available}")\n\n    values = list(range(1, 18))  # Creating values 1 to 17\n\n    # Create a pool with a limited number of processes\n    with mp.Pool(4) as pool:  # Limiting to 4 processes\n        results = pool.map(convert_to_x, values)\n\n    print(results)\n\nif __name__ == "__main__":\n    main()\n'})}),"\n",(0,t.jsx)(n.h3,{id:"explanation-of-the-code",children:"Explanation of the Code"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Import Modules"}),": We import ",(0,t.jsx)(n.code,{children:"multiprocessing"})," as ",(0,t.jsx)(n.code,{children:"mp"})," and ",(0,t.jsx)(n.code,{children:"time"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"CPU-bound Function"}),": The ",(0,t.jsx)(n.code,{children:"convert_to_x"})," function simulates a CPU-bound task by sleeping for 2 seconds and then returning a string."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Main Function"}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Core Availability"}),": ",(0,t.jsx)(n.code,{children:"mp.cpu_count()"})," returns the number of available CPU cores."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Values to Process"}),": We create a list of values from 1 to 8 (or more)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Process Pool"}),": We create a pool with the number of cores available and use ",(0,t.jsx)(n.code,{children:"pool.map"})," to apply the ",(0,t.jsx)(n.code,{children:"convert_to_x"})," function to each value in the list."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Results"}),": The results are collected and printed."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"performance-considerations",children:"Performance Considerations"}),"\n",(0,t.jsx)(n.p,{children:"The execution time depends on the number of available cores and the number of tasks. If the number of tasks exceeds the number of cores, tasks are queued and executed as cores become available. This introduces a delay corresponding to the number of additional tasks and their execution time."}),"\n",(0,t.jsx)(n.h3,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsxs)(n.p,{children:["Using the ",(0,t.jsx)(n.code,{children:"multiprocessing"})," module and process pools, we can efficiently parallelize CPU-bound tasks, leveraging multiple cores to reduce overall execution time. This tutorial demonstrated the creation and utilization of a process pool, along with experiments to understand core utilization and task management."]}),"\n",(0,t.jsx)(n.p,{children:"By mastering process pools, you can significantly improve the performance of CPU-intensive Python applications, making them more efficient and responsive."}),"\n",(0,t.jsx)(n.h3,{id:"further-exploration",children:"Further Exploration"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Experiment with more complex CPU-bound tasks."}),"\n",(0,t.jsxs)(n.li,{children:["Explore the ",(0,t.jsx)(n.code,{children:"apply"})," and ",(0,t.jsx)(n.code,{children:"apply_async"})," methods for more control over task execution."]}),"\n",(0,t.jsx)(n.li,{children:"Combine multiprocessing with threading for mixed I/O and CPU-bound operations."}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>l,x:()=>r});var i=o(6540);const t={},s=i.createContext(t);function l(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);