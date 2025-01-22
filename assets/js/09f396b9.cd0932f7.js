"use strict";(self.webpackChunkmy_docusaurus_site=self.webpackChunkmy_docusaurus_site||[]).push([[4565],{1085:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"data-analysis/Series/intro","title":"Series in Pandas","description":"Series are one-dimensional labeled arrays capable of holding various data types, such as integers, strings, floating-point numbers, or Python objects. They serve as the building blocks for more complex data structures like DataFrames.Let\'s break down the key concepts and demonstrate how to create, manipulate, and utilize Series effectively in Python.","source":"@site/docs/data-analysis/01_Series/01_intro.md","sourceDirName":"data-analysis/01_Series","slug":"/data-analysis/Series/intro","permalink":"/Python/docs/data-analysis/Series/intro","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/data-analysis/01_Series/01_intro.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{},"sidebar":"dataAnalysisSidebar","previous":{"title":"Series","permalink":"/Python/docs/category/series"},"next":{"title":"Attributes","permalink":"/Python/docs/data-analysis/Series/attributes"}}');var a=n(4848),r=n(8453);const t={},d="Series in Pandas",l={},o=[{value:"1. Introduction to Series",id:"1-introduction-to-series",level:2},{value:"2. Importing Pandas",id:"2-importing-pandas",level:2},{value:"3. Creating Series",id:"3-creating-series",level:2},{value:"3.1. Creating Series from a List",id:"31-creating-series-from-a-list",level:3},{value:"3.2. Creating Series from a Dictionary",id:"32-creating-series-from-a-dictionary",level:3},{value:"4. Indexing and Data Types",id:"4-indexing-and-data-types",level:2},{value:"4.1. Custom Indexing",id:"41-custom-indexing",level:3},{value:"4.2. Data Types",id:"42-data-types",level:3},{value:"5. Handling Missing Values",id:"5-handling-missing-values",level:2},{value:"6. Assignment",id:"6-assignment",level:2}];function c(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.header,{children:(0,a.jsx)(s.h1,{id:"series-in-pandas",children:"Series in Pandas"})}),"\n",(0,a.jsx)(s.p,{children:"Series are one-dimensional labeled arrays capable of holding various data types, such as integers, strings, floating-point numbers, or Python objects. They serve as the building blocks for more complex data structures like DataFrames.Let's break down the key concepts and demonstrate how to create, manipulate, and utilize Series effectively in Python."}),"\n",(0,a.jsx)(s.h2,{id:"1-introduction-to-series",children:"1. Introduction to Series"}),"\n",(0,a.jsx)(s.p,{children:"Series are essentially one-dimensional arrays with associated labels, known as the index. This index facilitates efficient data manipulation and retrieval."}),"\n",(0,a.jsx)(s.h2,{id:"2-importing-pandas",children:"2. Importing Pandas"}),"\n",(0,a.jsxs)(s.p,{children:["Before working with Series, ensure you have Pandas installed. Conventionally, Pandas is imported using the alias ",(0,a.jsx)(s.code,{children:"pd"}),". Here's how to import it:"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-python",children:"import pandas as pd\n"})}),"\n",(0,a.jsx)(s.h2,{id:"3-creating-series",children:"3. Creating Series"}),"\n",(0,a.jsxs)(s.p,{children:["You can create a Series from a Python list or dictionary using the ",(0,a.jsx)(s.code,{children:"pd.Series()"})," constructor."]}),"\n",(0,a.jsx)(s.h3,{id:"31-creating-series-from-a-list",children:"3.1. Creating Series from a List"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-python",children:"# Creating a Series from a list of numbers\nnumbers = [1, 2, 3, 4, 5]\nseries_from_list = pd.Series(numbers)\nprint(series_from_list)\n"})}),"\n",(0,a.jsx)(s.h3,{id:"32-creating-series-from-a-dictionary",children:"3.2. Creating Series from a Dictionary"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-python",children:"# Creating a Series from a dictionary\ndata = {'Name': 'Luigi', 'Age': 26, 'Work': 'Unemployed'}\nseries_from_dict = pd.Series(data)\nprint(series_from_dict)\n"})}),"\n",(0,a.jsx)(s.h2,{id:"4-indexing-and-data-types",children:"4. Indexing and Data Types"}),"\n",(0,a.jsx)(s.h3,{id:"41-custom-indexing",children:"4.1. Custom Indexing"}),"\n",(0,a.jsx)(s.p,{children:"You can specify custom index labels when creating a Series."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-python",children:"# Custom indexing\ncustom_index = ['Letter One', 'Letter Two', 'Letter Three']\nseries_custom_index = pd.Series(numbers, index=custom_index)\nprint(series_custom_index)\n"})}),"\n",(0,a.jsx)(s.h3,{id:"42-data-types",children:"4.2. Data Types"}),"\n",(0,a.jsx)(s.p,{children:"Series can hold data of various types. Pandas infers the data type unless explicitly specified."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-python",children:"# Specifying data type\nseries_custom_dtype = pd.Series(numbers, dtype=float)\nprint(series_custom_dtype)\n"})}),"\n",(0,a.jsx)(s.h2,{id:"5-handling-missing-values",children:"5. Handling Missing Values"}),"\n",(0,a.jsx)(s.p,{children:"When creating Series from dictionaries, missing keys result in NaN (Not a Number) values."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-python",children:"# Handling missing values\ndata_missing = {'Name': 'Luigi', 'Age': 26}\nseries_missing = pd.Series(data_missing, index=['Name', 'Age', 'Job'])\nprint(series_missing)\n"})}),"\n",(0,a.jsx)(s.h2,{id:"6-assignment",children:"6. Assignment"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsx)(s.li,{children:"Creating Series:"}),"\n"]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["Create a Series named series_numbers from the list ",(0,a.jsx)(s.code,{children:"[10, 20, 30, 40, 50]"}),"."]}),"\n",(0,a.jsxs)(s.li,{children:["Create a Series named series_info from the dictionary ",(0,a.jsx)(s.code,{children:"{'Name': 'Mario', 'Age': 30, 'Occupation': 'Plumber'}"}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.ol,{start:"2",children:["\n",(0,a.jsx)(s.li,{children:"Custom Indexing and Data Types:"}),"\n"]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["Create a Series named series_custom_index using the list ",(0,a.jsx)(s.code,{children:"[100, 200, 300]"})," with custom index labels as ",(0,a.jsx)(s.code,{children:"['A', 'B', 'C']"}),"."]}),"\n",(0,a.jsxs)(s.li,{children:["Create a Series named series_custom_dtype using the list ",(0,a.jsx)(s.code,{children:"[11, 22, 33]"})," with data type explicitly set as float."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.ol,{start:"3",children:["\n",(0,a.jsx)(s.li,{children:"Handling Missing Values:"}),"\n"]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["Create a Series named series_missing from the dictionary ",(0,a.jsx)(s.code,{children:"{'Name': 'Peach', 'Age': 28}"})," with custom index labels as ",(0,a.jsx)(s.code,{children:"['Name', 'Age', 'Occupation']"}),". Ensure to handle missing values appropriately."]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>t,x:()=>d});var i=n(6540);const a={},r=i.createContext(a);function t(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);