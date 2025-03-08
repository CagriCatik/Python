"use strict";(self.webpackChunkpython=self.webpackChunkpython||[]).push([[249],{2051:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"data-analysis/Series/sorting_values","title":"Sorting Pandas Series and DataFrames","description":"In this tutorial, we will explore how to sort values in Pandas Series and DataFrames using the sortvalues() method. We will cover various arguments of this method and understand their functionalities with code examples. Additionally, we will learn about sorting by index using the sortindex() method.","source":"@site/docs/data-analysis/01_Series/06_sorting_values.md","sourceDirName":"data-analysis/01_Series","slug":"/data-analysis/Series/sorting_values","permalink":"/Python/docs/data-analysis/Series/sorting_values","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/data-analysis/01_Series/06_sorting_values.md","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{},"sidebar":"dataAnalysisSidebar","previous":{"title":"Reading and Previewing CSV Files with Pandas","permalink":"/Python/docs/data-analysis/Series/head-and-tail"},"next":{"title":"Using the value_counts() Method in Pandas","permalink":"/Python/docs/data-analysis/Series/counting_values"}}');var i=s(4848),t=s(8453);const a={},d="Sorting Pandas Series and DataFrames",o={},l=[];function c(e){const n={code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"sorting-pandas-series-and-dataframes",children:"Sorting Pandas Series and DataFrames"})}),"\n",(0,i.jsxs)(n.p,{children:["In this tutorial, we will explore how to sort values in Pandas Series and DataFrames using the ",(0,i.jsx)(n.code,{children:"sort_values()"})," method. We will cover various arguments of this method and understand their functionalities with code examples. Additionally, we will learn about sorting by index using the ",(0,i.jsx)(n.code,{children:"sort_index()"})," method."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"1. Importing Pandas and Reading Data"})}),"\n",(0,i.jsx)(n.p,{children:"First, let's start by importing the Pandas library and reading a CSV file into a Pandas Series."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import pandas as pd\n\n# Read CSV file into a Pandas Series\nrichest = pd.read_csv('your_file.csv', usecols=['name'], squeeze=True)\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"2. Sorting Values"})}),"\n",(0,i.jsx)(n.p,{children:"Now, let's sort the values in the Series alphabetically in ascending order."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"richest_sorted = richest.sort_values(ascending=True)\nprint(richest_sorted)\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"3. Understanding Arguments"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"sort_values()"})," method takes several arguments:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ascending"}),": Specifies whether to sort in ascending or descending order."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"kind"}),": Defines the algorithm to be used for sorting."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"na_position"}),": Specifies where to place NaN values."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ignore_index"}),": Determines whether to reset the index after sorting."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"inplace"}),": Controls whether to perform the operation in place."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"4. Sorting in Descending Order"})}),"\n",(0,i.jsxs)(n.p,{children:["To sort the values in descending order, set the ",(0,i.jsx)(n.code,{children:"ascending"})," argument to ",(0,i.jsx)(n.code,{children:"False"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"richest_descending = richest.sort_values(ascending=False)\nprint(richest_descending)\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"5. Handling NaN Values"})}),"\n",(0,i.jsxs)(n.p,{children:["You can specify where to place NaN values using the ",(0,i.jsx)(n.code,{children:"na_position"})," argument. By default, NaN values are placed at the end."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"richest_nan_last = richest.sort_values(na_position='last')\nprint(richest_nan_last)\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"6. Resetting Index"})}),"\n",(0,i.jsxs)(n.p,{children:["To reset the index after sorting, set the ",(0,i.jsx)(n.code,{children:"ignore_index"})," argument to ",(0,i.jsx)(n.code,{children:"True"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"richest_reset_index = richest.sort_values(ignore_index=True)\nprint(richest_reset_index)\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"7. Performing Operation In-Place"})}),"\n",(0,i.jsxs)(n.p,{children:["You can perform the sorting operation in place by setting the ",(0,i.jsx)(n.code,{children:"inplace"})," argument to ",(0,i.jsx)(n.code,{children:"True"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"richest.sort_values(inplace=True)\nprint(richest)\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"8. Sorting by Index"})}),"\n",(0,i.jsxs)(n.p,{children:["Similarly, you can sort the Series by index using the ",(0,i.jsx)(n.code,{children:"sort_index()"})," method."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"richest_sorted_index = richest.sort_index(ascending=False)\nprint(richest_sorted_index)\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>d});var r=s(6540);const i={},t=r.createContext(i);function a(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);