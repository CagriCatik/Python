"use strict";(self.webpackChunkmy_docusaurus_site=self.webpackChunkmy_docusaurus_site||[]).push([[1933],{1012:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>r});const i=JSON.parse('{"id":"guide/File-Management/yaml/README","title":"README","description":"Using YAML with Python","source":"@site/docs/guide/15_File-Management/10_yaml/README.md","sourceDirName":"guide/15_File-Management/10_yaml","slug":"/guide/File-Management/yaml/","permalink":"/Python/docs/guide/File-Management/yaml/","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guide/15_File-Management/10_yaml/README.md","tags":[],"version":"current","frontMatter":{},"sidebar":"guideSidebar","previous":{"title":"README","permalink":"/Python/docs/guide/File-Management/Pickling/"},"next":{"title":"Design Patterns","permalink":"/Python/docs/category/design-patterns"}}');var t=a(4848),s=a(8453);const l={},o=void 0,d={},r=[{value:"Using YAML with Python",id:"using-yaml-with-python",level:2},{value:"Introduction to YAML",id:"introduction-to-yaml",level:3},{value:"YAML Syntax",id:"yaml-syntax",level:3},{value:"Installing PyYAML",id:"installing-pyyaml",level:3},{value:"Reading YAML Files in Python",id:"reading-yaml-files-in-python",level:3},{value:"Writing YAML Files in Python",id:"writing-yaml-files-in-python",level:3},{value:"Advanced Usage",id:"advanced-usage",level:3},{value:"Handling Custom Objects",id:"handling-custom-objects",level:4},{value:"Handling Anchors and Aliases",id:"handling-anchors-and-aliases",level:4},{value:"Conclusion",id:"conclusion",level:3}];function c(e){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"using-yaml-with-python",children:"Using YAML with Python"}),"\n",(0,t.jsx)(n.h3,{id:"introduction-to-yaml",children:"Introduction to YAML"}),"\n",(0,t.jsx)(n.p,{children:"YAML (YAML Ain't Markup Language) is a human-readable data serialization format. It is commonly used for configuration files, data exchange between applications, and also as a language-independent alternative to XML or JSON. YAML's simplicity and readability make it popular among developers."}),"\n",(0,t.jsx)(n.h3,{id:"yaml-syntax",children:"YAML Syntax"}),"\n",(0,t.jsx)(n.p,{children:"YAML uses indentation and whitespace to represent data structures. It supports various data types including mappings (key-value pairs), sequences (arrays/lists), strings, integers, floats, booleans, null values, and more."}),"\n",(0,t.jsx)(n.p,{children:"Here's a basic example of YAML syntax:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"key1: value1\nkey2: value2\nnested_key:\n  - item1\n  - item2\n"})}),"\n",(0,t.jsx)(n.h3,{id:"installing-pyyaml",children:"Installing PyYAML"}),"\n",(0,t.jsx)(n.p,{children:"PyYAML is a Python library that allows you to work with YAML files. To install PyYAML, you can use pip, Python's package manager:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pip install pyyaml\n"})}),"\n",(0,t.jsx)(n.h3,{id:"reading-yaml-files-in-python",children:"Reading YAML Files in Python"}),"\n",(0,t.jsxs)(n.p,{children:["You can use the ",(0,t.jsx)(n.code,{children:"yaml"})," module in Python to read YAML files. The ",(0,t.jsx)(n.code,{children:"yaml.safe_load()"})," function is commonly used to safely load YAML data from a file or a string."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import yaml\n\nwith open('data.yaml', 'r') as file:\n    data = yaml.safe_load(file)\n\nprint(data)\n"})}),"\n",(0,t.jsx)(n.h3,{id:"writing-yaml-files-in-python",children:"Writing YAML Files in Python"}),"\n",(0,t.jsxs)(n.p,{children:["To write data to a YAML file in Python, you can use the ",(0,t.jsx)(n.code,{children:"yaml.dump()"})," function. It serializes Python data into a YAML formatted string."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import yaml\n\ndata = {\n    'key1': 'value1',\n    'key2': [1, 2, 3],\n    'key3': {'nested_key': 'nested_value'}\n}\n\nwith open('output.yaml', 'w') as file:\n    yaml.dump(data, file)\n"})}),"\n",(0,t.jsx)(n.h3,{id:"advanced-usage",children:"Advanced Usage"}),"\n",(0,t.jsx)(n.h4,{id:"handling-custom-objects",children:"Handling Custom Objects"}),"\n",(0,t.jsxs)(n.p,{children:["PyYAML supports serialization and deserialization of custom objects. You can define custom ",(0,t.jsx)(n.code,{children:"representer"})," and ",(0,t.jsx)(n.code,{children:"constructor"})," functions to handle serialization and deserialization of custom objects respectively."]}),"\n",(0,t.jsx)(n.h4,{id:"handling-anchors-and-aliases",children:"Handling Anchors and Aliases"}),"\n",(0,t.jsxs)(n.p,{children:["YAML allows the use of anchors (",(0,t.jsx)(n.code,{children:"&"}),") and aliases (",(0,t.jsx)(n.code,{children:"*"}),") to reference the same data elsewhere in the document. PyYAML provides support for handling anchors and aliases during parsing and dumping YAML data."]}),"\n",(0,t.jsx)(n.h3,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsx)(n.p,{children:"YAML is a versatile data serialization format that is widely used in the software development community. With PyYAML, you can easily work with YAML files in Python, enabling seamless integration of YAML data into your Python applications. Whether you're reading configuration files, exchanging data between systems, or storing structured data, YAML combined with Python offers a powerful and flexible solution."})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>l,x:()=>o});var i=a(6540);const t={},s=i.createContext(t);function l(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);