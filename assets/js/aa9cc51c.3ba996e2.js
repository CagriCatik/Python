"use strict";(self.webpackChunkmy_docusaurus_site=self.webpackChunkmy_docusaurus_site||[]).push([[3625],{9784:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"guide/File-Management/Caching-JSON","title":"Creating a JSON Cache for API Data in Python","description":"In this tutorial, we\'ll learn how to create a JSON cache for API data in Python. This will help us avoid making repetitive requests to the API by storing the fetched data locally. We\'ll be using the requests library for making HTTP requests and the json module for handling JSON data.","source":"@site/docs/guide/15_File-Management/07_Caching-JSON.md","sourceDirName":"guide/15_File-Management","slug":"/guide/File-Management/Caching-JSON","permalink":"/Python/docs/guide/File-Management/Caching-JSON","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guide/15_File-Management/07_Caching-JSON.md","tags":[],"version":"current","sidebarPosition":7,"frontMatter":{},"sidebar":"guideSidebar","previous":{"title":"Handling-JSON","permalink":"/Python/docs/guide/File-Management/Handling-JSON"},"next":{"title":"Glob","permalink":"/Python/docs/guide/File-Management/Glob"}}');var i=t(4848),s=t(8453);const r={},o="Creating a JSON Cache for API Data in Python",c={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step 1: Import Libraries",id:"step-1-import-libraries",level:2},{value:"Step 2: Create the Fetch Data Function",id:"step-2-create-the-fetch-data-function",level:2},{value:"Step 3: Implementing the Main Function",id:"step-3-implementing-the-main-function",level:2},{value:"Step 4: Testing the Script",id:"step-4-testing-the-script",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"creating-a-json-cache-for-api-data-in-python",children:"Creating a JSON Cache for API Data in Python"})}),"\n",(0,i.jsxs)(n.p,{children:["In this tutorial, we'll learn how to create a JSON cache for API data in Python. This will help us avoid making repetitive requests to the API by storing the fetched data locally. We'll be using the ",(0,i.jsx)(n.code,{children:"requests"})," library for making HTTP requests and the ",(0,i.jsx)(n.code,{children:"json"})," module for handling JSON data."]}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(n.p,{children:["Make sure you have Python installed on your system. Additionally, you'll need to install the ",(0,i.jsx)(n.code,{children:"requests"})," library. You can do this using pip:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pip install requests\n"})}),"\n",(0,i.jsx)(n.h2,{id:"step-1-import-libraries",children:"Step 1: Import Libraries"}),"\n",(0,i.jsxs)(n.p,{children:["First, let's import the necessary libraries - ",(0,i.jsx)(n.code,{children:"json"})," and ",(0,i.jsx)(n.code,{children:"requests"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import json\nimport requests\n"})}),"\n",(0,i.jsx)(n.h2,{id:"step-2-create-the-fetch-data-function",children:"Step 2: Create the Fetch Data Function"}),"\n",(0,i.jsxs)(n.p,{children:["Next, we'll create a function called ",(0,i.jsx)(n.code,{children:"fetch_data"})," that will retrieve data from the API and cache it locally."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"def fetch_data(*, update=False, json_cache='data.json', url):\n    try:\n        if update:\n            json_data = None\n        else:\n            with open(json_cache, 'r') as file:\n                json_data = json.load(file)\n                print('Fetched data from the local cache.')\n\n    except (FileNotFoundError, json.JSONDecodeError) as e:\n        print(f'No local cache found: {e}')\n        json_data = None\n\n    if not json_data:\n        print('Fetching new JSON data...')\n        response = requests.get(url)\n        json_data = response.json()\n\n        with open(json_cache, 'w') as file:\n            json.dump(json_data, file)\n            print('Creating local cache.')\n\n    return json_data\n"})}),"\n",(0,i.jsx)(n.h2,{id:"step-3-implementing-the-main-function",children:"Step 3: Implementing the Main Function"}),"\n",(0,i.jsxs)(n.p,{children:["Now, let's implement the main part of our script where we'll define the API URL, cache file name, and call the ",(0,i.jsx)(n.code,{children:"fetch_data"})," function."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"if __name__ == '__main__':\n    api_url = 'https://jsonplaceholder.typicode.com/comments'\n    cache_file = 'comments.json'\n\n    data = fetch_data(url=api_url, json_cache=cache_file)\n\n    print(data)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"step-4-testing-the-script",children:"Step 4: Testing the Script"}),"\n",(0,i.jsx)(n.p,{children:"Run the script to test if everything is working correctly. It should fetch data from the API and cache it locally."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"python script.py\n"})}),"\n",(0,i.jsx)(n.p,{children:"If successful, you'll see the fetched data printed on the console. In this tutorial, we've learned how to create a JSON cache for API data in Python. Caching data locally can help improve performance and reduce unnecessary API requests, saving both time and resources. This concept is essential in real-world applications where efficient use of APIs is crucial."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var a=t(6540);const i={},s=a.createContext(i);function r(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);