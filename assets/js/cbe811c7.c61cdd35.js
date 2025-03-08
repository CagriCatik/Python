"use strict";(self.webpackChunkpython=self.webpackChunkpython||[]).push([[499],{3738:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"python-guide/Modules/Website_Status","title":"Website Status Project","description":"This project aims to create a simple website status checker in Python. The program allows users to input a URL and provides information about the status of the website, including its online status, response code, presence of links, encoding, and whether it\'s a redirect or a permanent redirect.","source":"@site/docs/python-guide/05_Modules/06_Website_Status.md","sourceDirName":"python-guide/05_Modules","slug":"/python-guide/Modules/Website_Status","permalink":"/Python/docs/python-guide/Modules/Website_Status","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/python-guide/05_Modules/06_Website_Status.md","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{},"sidebar":"guideSidebar","previous":{"title":"Library vs. Package","permalink":"/Python/docs/python-guide/Modules/Libraries"},"next":{"title":"Lists","permalink":"/Python/docs/category/lists"}}');var i=t(4848),o=t(8453);const r={},a="Website Status Project",l={},c=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Implementation Details",id:"implementation-details",level:2},{value:"Functions",id:"functions",level:3},{value:"<code>get_response(url: str) -&gt; Response</code>",id:"get_responseurl-str---response",level:4},{value:"<code>show_response_info(response: Response)</code>",id:"show_response_inforesponse-response",level:4},{value:"Main Entry Point",id:"main-entry-point",level:3},{value:"Example",id:"example",level:2},{value:"Live Template (Optional)",id:"live-template-optional",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"website-status-project",children:"Website Status Project"})}),"\n",(0,i.jsx)(n.p,{children:"This project aims to create a simple website status checker in Python. The program allows users to input a URL and provides information about the status of the website, including its online status, response code, presence of links, encoding, and whether it's a redirect or a permanent redirect."}),"\n",(0,i.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(n.p,{children:"Before running the project, ensure you have the necessary library installed. You can install it via pip:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pip install requests\n"})}),"\n",(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Open your terminal."}),"\n",(0,i.jsx)(n.li,{children:"Clone this repository."}),"\n",(0,i.jsx)(n.li,{children:"Navigate to the project directory."}),"\n",(0,i.jsxs)(n.li,{children:["Run the Python script using the command ",(0,i.jsx)(n.code,{children:"python website_status.py"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Enter the URL you want to check when prompted."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"implementation-details",children:"Implementation Details"}),"\n",(0,i.jsxs)(n.p,{children:["The project is implemented in Python and uses the ",(0,i.jsx)(n.code,{children:"requests"})," library to simplify the process of retrieving information from the given URL."]}),"\n",(0,i.jsx)(n.h3,{id:"functions",children:"Functions"}),"\n",(0,i.jsx)(n.h4,{id:"get_responseurl-str---response",children:(0,i.jsx)(n.code,{children:"get_response(url: str) -> Response"})}),"\n",(0,i.jsx)(n.p,{children:"This function takes a URL as input and returns a response object containing information about the website."}),"\n",(0,i.jsx)(n.h4,{id:"show_response_inforesponse-response",children:(0,i.jsx)(n.code,{children:"show_response_info(response: Response)"})}),"\n",(0,i.jsx)(n.p,{children:"This function takes a response object as input and displays various information about the website, including status code, online status, links, encoding, redirects, and permanent redirects."}),"\n",(0,i.jsx)(n.h3,{id:"main-entry-point",children:"Main Entry Point"}),"\n",(0,i.jsxs)(n.p,{children:["The main entry point of the program retrieves a response from a specified website URL using the ",(0,i.jsx)(n.code,{children:"get_response"})," function and then displays the response information using the ",(0,i.jsx)(n.code,{children:"show_response_info"})," function."]}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.p,{children:"Running the program with a valid URL will provide information such as the status code, online status, links, encoding, redirects, and permanent redirects. For invalid or non-existent URLs, appropriate error messages will be displayed."}),"\n",(0,i.jsx)(n.h2,{id:"live-template-optional",children:"Live Template (Optional)"}),"\n",(0,i.jsx)(n.p,{children:"The project creator used a PyCharm live template to speed up workflow, which automatically generates the main entry point syntax. This is not essential for running the project but can be useful for enhancing productivity."}),"\n",(0,i.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsx)(n.p,{children:"This project demonstrates a simple yet effective way to check the status of a website using Python. It provides valuable insights into website health and can be further extended or customized as per specific requirements."})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var s=t(6540);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);