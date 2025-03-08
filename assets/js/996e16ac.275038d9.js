"use strict";(self.webpackChunkpython=self.webpackChunkpython||[]).push([[6079],{6633:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"data-analysis/Series/counting_values","title":"Using the value_counts() Method in Pandas","description":"In this tutorial, we\'ll explore the value_counts() method in Pandas, a powerful tool for counting the occurrences of values within a Series in a DataFrame. We\'ll cover its basic usage, as well as various arguments you can use to customize its behavior.","source":"@site/docs/data-analysis/01_Series/07_counting_values.md","sourceDirName":"data-analysis/01_Series","slug":"/data-analysis/Series/counting_values","permalink":"/Python/docs/data-analysis/Series/counting_values","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/data-analysis/01_Series/07_counting_values.md","tags":[],"version":"current","sidebarPosition":7,"frontMatter":{},"sidebar":"dataAnalysisSidebar","previous":{"title":"Sorting Pandas Series and DataFrames","permalink":"/Python/docs/data-analysis/Series/sorting_values"},"next":{"title":"Accessing Elements by Position in Pandas","permalink":"/Python/docs/data-analysis/Series/accessing_elements_position"}}');var i=s(4848),t=s(8453);const r={},d="Using the value_counts() Method in Pandas",o={},l=[{value:"1. Introduction to <code>value_counts()</code>",id:"1-introduction-to-value_counts",level:2},{value:"1.1 Syntax:",id:"11-syntax",level:3},{value:"1.2 Parameters:",id:"12-parameters",level:3},{value:"2. Basic Usage",id:"2-basic-usage",level:2},{value:"2.1 Example Data",id:"21-example-data",level:3},{value:"3. Understanding Parameters",id:"3-understanding-parameters",level:2},{value:"3.1 <code>normalize</code>",id:"31-normalize",level:3},{value:"3.2 <code>sort</code> and <code>ascending</code>",id:"32-sort-and-ascending",level:3},{value:"3.3 <code>bins</code>",id:"33-bins",level:3},{value:"3.4 <code>dropna</code>",id:"34-dropna",level:3}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsxs)(n.h1,{id:"using-the-value_counts-method-in-pandas",children:["Using the ",(0,i.jsx)(n.code,{children:"value_counts()"})," Method in Pandas"]})}),"\n",(0,i.jsxs)(n.p,{children:["In this tutorial, we'll explore the ",(0,i.jsx)(n.code,{children:"value_counts()"})," method in Pandas, a powerful tool for counting the occurrences of values within a Series in a DataFrame. We'll cover its basic usage, as well as various arguments you can use to customize its behavior."]}),"\n",(0,i.jsxs)(n.h2,{id:"1-introduction-to-value_counts",children:["1. Introduction to ",(0,i.jsx)(n.code,{children:"value_counts()"})]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"value_counts()"})," method in Pandas is used to count the occurrences of unique values in a Series. It's particularly useful when you want to analyze the distribution of categorical data within a DataFrame."]}),"\n",(0,i.jsx)(n.h3,{id:"11-syntax",children:"1.1 Syntax:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"Series.value_counts(normalize=False, sort=True, ascending=False, bins=None, dropna=True)\n"})}),"\n",(0,i.jsx)(n.h3,{id:"12-parameters",children:"1.2 Parameters:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"normalize"}),": If True, returns the relative frequencies of the unique values."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"sort"}),": If True, sorts the counts in descending order by default."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ascending"}),": If True, sorts in ascending order."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"bins"}),": Specifies the number of equal-width bins to divide the data into (only works with numerical data)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"dropna"}),": If False, does not drop NaN values from the result."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Now, let's dive into each parameter and see how it influences the behavior of ",(0,i.jsx)(n.code,{children:"value_counts()"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"2-basic-usage",children:"2. Basic Usage"}),"\n",(0,i.jsx)(n.h3,{id:"21-example-data",children:"2.1 Example Data"}),"\n",(0,i.jsx)(n.p,{children:"Let's assume we have a DataFrame containing information about the top richest people in the world. We'll focus on the 'industry' column for our examples."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import pandas as pd\n\n# Assuming 'df' is our DataFrame containing the data\nindustry_counts = df['industry'].value_counts().sort_index()\nprint(industry_counts)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Output:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Fashion and retail    18\nFinance               13\nTechnology            15\nName: industry, dtype: int64\n"})}),"\n",(0,i.jsx)(n.h2,{id:"3-understanding-parameters",children:"3. Understanding Parameters"}),"\n",(0,i.jsxs)(n.h3,{id:"31-normalize",children:["3.1 ",(0,i.jsx)(n.code,{children:"normalize"})]}),"\n",(0,i.jsxs)(n.p,{children:["Setting ",(0,i.jsx)(n.code,{children:"normalize=True"})," returns the relative frequencies of unique values instead of counts."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"industry_normalized = df['industry'].value_counts(normalize=True)\nprint(industry_normalized)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Output:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Fashion and retail    0.45\nFinance               0.325\nTechnology            0.225\nName: industry, dtype: float64\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"32-sort-and-ascending",children:["3.2 ",(0,i.jsx)(n.code,{children:"sort"})," and ",(0,i.jsx)(n.code,{children:"ascending"})]}),"\n",(0,i.jsxs)(n.p,{children:["By default, ",(0,i.jsx)(n.code,{children:"sort=True"})," sorts the values in descending order. You can change the sorting order using the ",(0,i.jsx)(n.code,{children:"ascending"})," parameter."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"industry_sorted = df['industry'].value_counts(sort=True, ascending=False)\nprint(industry_sorted)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Output:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Fashion and retail    18\nTechnology            15\nFinance               13\nName: industry, dtype: int64\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"33-bins",children:["3.3 ",(0,i.jsx)(n.code,{children:"bins"})]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"bins"})," parameter divides numerical data into equal-width intervals and counts the occurrences within each interval. This is useful for analyzing distributions."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"age_bins = df['age'].value_counts(bins=5)\nprint(age_bins)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Output:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"(29.9, 42.8]    5\n(42.8, 55.6]    17\n...             ...\nName: age, dtype: int64\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"34-dropna",children:["3.4 ",(0,i.jsx)(n.code,{children:"dropna"})]}),"\n",(0,i.jsxs)(n.p,{children:["By default, ",(0,i.jsx)(n.code,{children:"dropna=True"})," excludes NaN values from the result. Set it to False if you want to include NaN values."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"industry_with_na = df['industry'].value_counts(dropna=False)\nprint(industry_with_na)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Output:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Fashion and retail    18\nFinance               13\nTechnology            15\nNaN                    3\nName: industry, dtype: int64\n"})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>d});var a=s(6540);const i={},t=a.createContext(i);function r(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);