"use strict";(self.webpackChunkpython=self.webpackChunkpython||[]).push([[9493],{8324:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"data-analysis/NumPy/Arrays","title":"Introduction to NumPy Arrays","description":"In this tutorial, we\'ll delve into the fundamental concepts of arrays in NumPy, a powerful library for numerical computing in Python. Arrays are the central data structure in NumPy, providing a versatile and efficient way to work with large datasets.","source":"@site/docs/data-analysis/08_NumPy/02_Arrays.md","sourceDirName":"data-analysis/08_NumPy","slug":"/data-analysis/NumPy/Arrays","permalink":"/Python/docs/data-analysis/NumPy/Arrays","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/data-analysis/08_NumPy/02_Arrays.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{},"sidebar":"dataAnalysisSidebar","previous":{"title":"Numpy Arrays vs. Python Lists: Understanding the Difference","permalink":"/Python/docs/data-analysis/NumPy/Lists_vs_NumPy"},"next":{"title":"Sorting and Concatenating Arrays","permalink":"/Python/docs/data-analysis/NumPy/Sorting_Concatenating"}}');var s=r(4848),t=r(8453);const i={},o="Introduction to NumPy Arrays",l={},c=[{value:"What are Arrays?",id:"what-are-arrays",level:2},{value:"Creating NumPy Arrays",id:"creating-numpy-arrays",level:2},{value:"Accessing Array Elements",id:"accessing-array-elements",level:2},{value:"Common Terms",id:"common-terms",level:2},{value:"Understanding Array Axes and Shapes",id:"understanding-array-axes-and-shapes",level:2},{value:"Numpy Basics Tutorial",id:"numpy-basics-tutorial",level:2},{value:"Importing Numpy",id:"importing-numpy",level:2},{value:"Creating Numpy Arrays",id:"creating-numpy-arrays-1",level:2},{value:"Specifying Data Types",id:"specifying-data-types",level:3},{value:"Creating Arrays with Zeros, Ones, and Empty",id:"creating-arrays-with-zeros-ones-and-empty",level:3},{value:"Creating a Range",id:"creating-a-range",level:3},{value:"Creating Linearly Spaced Values",id:"creating-linearly-spaced-values",level:3},{value:"Conclusion",id:"conclusion",level:2}];function d(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"introduction-to-numpy-arrays",children:"Introduction to NumPy Arrays"})}),"\n",(0,s.jsx)(e.p,{children:"In this tutorial, we'll delve into the fundamental concepts of arrays in NumPy, a powerful library for numerical computing in Python. Arrays are the central data structure in NumPy, providing a versatile and efficient way to work with large datasets."}),"\n",(0,s.jsx)(e.h2,{id:"what-are-arrays",children:"What are Arrays?"}),"\n",(0,s.jsx)(e.p,{children:"Arrays in NumPy are grid-like structures containing values of the same data type. They encapsulate raw data, facilitate element location, and interpretation. Here are some key points about arrays:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Data Structure"}),": Arrays are the primary data structure in NumPy."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Homogeneous Data"}),": All elements in an array are of the same type, known as the array's data type."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Indexing"}),": Arrays can be indexed using non-negative integers, booleans, other arrays, or integers."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Rank"}),": The rank of an array refers to the number of dimensions it possesses."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Shape"}),": The shape of an array is a tuple indicating the size of each dimension."]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"Let's dive into some code examples to understand these concepts better."}),"\n",(0,s.jsx)(e.h2,{id:"creating-numpy-arrays",children:"Creating NumPy Arrays"}),"\n",(0,s.jsxs)(e.p,{children:["You can create NumPy arrays from Python lists using the ",(0,s.jsx)(e.code,{children:"numpy.array()"})," function. For instance:"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'import numpy as np\n\n# Creating a 1D array from a Python list\narr_1d = np.array([1, 2, 3, 4, 5])\n\n# Creating a 2D array from a nested Python list\nnested_list = [[1, 2, 3], [4, 5, 6]]\narr_2d = np.array(nested_list)\n\nprint("1D Array:")\nprint(arr_1d)\nprint("2D Array:")\nprint(arr_2d)\n'})}),"\n",(0,s.jsx)(e.h2,{id:"accessing-array-elements",children:"Accessing Array Elements"}),"\n",(0,s.jsx)(e.p,{children:"You can access elements of a NumPy array using regular square bracket notation. For example:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'# Accessing elements of a 2D array\nprint("First element of 2D array:", arr_2d[0])\nprint("Element at index (1,1) of 2D array:", arr_2d[1][1])\nprint("Last element of 2D array:", arr_2d[-1])\n'})}),"\n",(0,s.jsx)(e.h2,{id:"common-terms",children:"Common Terms"}),"\n",(0,s.jsxs)(e.p,{children:["When working with NumPy, you'll encounter several terms like ",(0,s.jsx)(e.code,{children:"ndarray"}),", vectors, matrices, and tensors. Here's a brief overview:"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"ndarray"}),": Short for n-dimensional array, representing arrays with any number of dimensions."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Vector"}),": An array with a single dimension."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Matrix"}),": An array with two dimensions."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Tensor"}),": An array with three or more dimensions."]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"understanding-array-axes-and-shapes",children:"Understanding Array Axes and Shapes"}),"\n",(0,s.jsx)(e.p,{children:"Arrays have axes corresponding to their dimensions. The shape of an array indicates its size along each axis. Here's how you can access this information:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'# Getting the shape of a 2D array\nprint("Shape of 2D array:", arr_2d.shape)\n\n# Getting the data type of elements in the array\nprint("Data type of array:", arr_2d.dtype)\n'})}),"\n",(0,s.jsx)(e.h2,{id:"numpy-basics-tutorial",children:"Numpy Basics Tutorial"}),"\n",(0,s.jsx)(e.p,{children:"In this tutorial, we will cover the basics of numpy arrays, including creating arrays with different methods and specifying data types."}),"\n",(0,s.jsx)(e.h2,{id:"importing-numpy",children:"Importing Numpy"}),"\n",(0,s.jsxs)(e.p,{children:["Firstly, you need to import numpy. It's a common convention to alias numpy as ",(0,s.jsx)(e.code,{children:"np"}),":"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"import numpy as np\n"})}),"\n",(0,s.jsx)(e.h2,{id:"creating-numpy-arrays-1",children:"Creating Numpy Arrays"}),"\n",(0,s.jsxs)(e.p,{children:["To create a numpy array, you can pass a Python list into ",(0,s.jsx)(e.code,{children:"np.array()"}),". Let's start with a simple example:"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"arr = np.array([1, 2, 3, 4])\nprint(arr)\n"})}),"\n",(0,s.jsx)(e.p,{children:"This will output:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"[1 2 3 4]\n"})}),"\n",(0,s.jsx)(e.h3,{id:"specifying-data-types",children:"Specifying Data Types"}),"\n",(0,s.jsxs)(e.p,{children:["You can specify the data type of the elements in the array using the ",(0,s.jsx)(e.code,{children:"dtype"})," parameter. For example:"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"arr_str = np.array([1, 2, 3, 4], dtype=str)\narr_int8 = np.array([1, 2, 3, 4], dtype=np.int8)\nprint(arr_str)\nprint(arr_int8)\n"})}),"\n",(0,s.jsx)(e.h3,{id:"creating-arrays-with-zeros-ones-and-empty",children:"Creating Arrays with Zeros, Ones, and Empty"}),"\n",(0,s.jsxs)(e.p,{children:["Numpy provides convenient methods to create arrays filled with zeros, ones, or random values using ",(0,s.jsx)(e.code,{children:"np.zeros()"}),", ",(0,s.jsx)(e.code,{children:"np.ones()"}),", and ",(0,s.jsx)(e.code,{children:"np.empty()"})," respectively."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"zeros_arr = np.zeros(5)\nones_arr = np.ones(5)\nempty_arr = np.empty(5)\n\nprint(zeros_arr)\nprint(ones_arr)\nprint(empty_arr)\n"})}),"\n",(0,s.jsx)(e.h3,{id:"creating-a-range",children:"Creating a Range"}),"\n",(0,s.jsxs)(e.p,{children:["You can create a range of numbers using ",(0,s.jsx)(e.code,{children:"np.arange()"}),". It works similarly to Python's built-in ",(0,s.jsx)(e.code,{children:"range()"})," function."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"range_arr = np.arange(5)\nprint(range_arr)\n\n# Specifying start, stop, and step\ncustom_range_arr = np.arange(2, 10, 2)\nprint(custom_range_arr)\n"})}),"\n",(0,s.jsx)(e.h3,{id:"creating-linearly-spaced-values",children:"Creating Linearly Spaced Values"}),"\n",(0,s.jsxs)(e.p,{children:["Numpy's ",(0,s.jsx)(e.code,{children:"np.linspace()"})," function generates evenly spaced numbers over a specified interval."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"lin_space_arr = np.linspace(0, 10, 5)\nprint(lin_space_arr)\n\n# Splitting into 3 parts\nlin_space_3_arr = np.linspace(0, 10, 3)\nprint(lin_space_3_arr)\n\n# Splitting into 20 parts\nlin_space_20_arr = np.linspace(0, 10, 20)\nprint(lin_space_20_arr)\n"})}),"\n",(0,s.jsx)(e.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsx)(e.p,{children:"In this tutorial, we've covered the basics of creating numpy arrays using various methods and specifying data types. Numpy provides powerful tools for numerical computing in Python, and understanding these fundamental concepts will help you work more effectively with arrays and matrices in your data science projects."})]})}function p(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},8453:(n,e,r)=>{r.d(e,{R:()=>i,x:()=>o});var a=r(6540);const s={},t=a.createContext(s);function i(n){const e=a.useContext(t);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:i(n.components),a.createElement(t.Provider,{value:e},n.children)}}}]);