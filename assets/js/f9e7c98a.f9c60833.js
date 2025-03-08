"use strict";(self.webpackChunkpython=self.webpackChunkpython||[]).push([[6633],{3147:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"python-guide/OOP/super()","title":"super()","description":"In Python\'s Object-Oriented Programming (OOP) paradigm, the super() function is a crucial component for managing class inheritance hierarchies. This tutorial aims to provide a comprehensive and detailed explanation of super(), its use cases, and potential pitfalls.","source":"@site/docs/python-guide/07_OOP/12_super().md","sourceDirName":"python-guide/07_OOP","slug":"/python-guide/OOP/super()","permalink":"/Python/docs/python-guide/OOP/super()","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/python-guide/07_OOP/12_super().md","tags":[],"version":"current","sidebarPosition":12,"frontMatter":{},"sidebar":"guideSidebar","previous":{"title":"Inheritance","permalink":"/Python/docs/python-guide/OOP/Inheritance"},"next":{"title":"@staticmethod","permalink":"/Python/docs/python-guide/OOP/@staticmethod"}}');var t=i(4848),l=i(8453);const r={},a="super()",c={},d=[{value:"Basics of <code>super()</code>",id:"basics-of-super",level:2},{value:"Simple Example",id:"simple-example",level:3},{value:"Output:",id:"output",level:3},{value:"Using <code>super()</code> in Multi-Level Inheritance",id:"using-super-in-multi-level-inheritance",level:2},{value:"Example:",id:"example",level:3},{value:"Output:",id:"output-1",level:3},{value:"Diamond Inheritance and Method Resolution Order (MRO)",id:"diamond-inheritance-and-method-resolution-order-mro",level:2},{value:"Example:",id:"example-1",level:3},{value:"Output:",id:"output-2",level:3},{value:"Checking the MRO",id:"checking-the-mro",level:3},{value:"Output:",id:"output-3",level:3},{value:"Practical Use Cases",id:"practical-use-cases",level:2},{value:"Calling Parent Class Methods",id:"calling-parent-class-methods",level:3},{value:"Output:",id:"output-4",level:3},{value:"Multiple Inheritance with Cooperative Methods",id:"multiple-inheritance-with-cooperative-methods",level:3},{value:"Output:",id:"output-5",level:3},{value:"Conclusion",id:"conclusion",level:2}];function o(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"super",children:(0,t.jsx)(n.code,{children:"super()"})})}),"\n",(0,t.jsxs)(n.p,{children:["In Python's Object-Oriented Programming (OOP) paradigm, the ",(0,t.jsx)(n.code,{children:"super()"})," function is a crucial component for managing class inheritance hierarchies. This tutorial aims to provide a comprehensive and detailed explanation of ",(0,t.jsx)(n.code,{children:"super()"}),", its use cases, and potential pitfalls."]}),"\n",(0,t.jsxs)(n.h2,{id:"basics-of-super",children:["Basics of ",(0,t.jsx)(n.code,{children:"super()"})]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"super()"})," function returns a proxy object that delegates method calls to a parent or sibling class of the type. This is often used to ensure that methods from the base class are called, allowing for method overriding in derived classes."]}),"\n",(0,t.jsx)(n.h3,{id:"simple-example",children:"Simple Example"}),"\n",(0,t.jsxs)(n.p,{children:["Consider the following example to illustrate the basic use of ",(0,t.jsx)(n.code,{children:"super()"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'class Base:\n    def __init__(self):\n        self.value = "Base Value"\n        print("Base.__init__")\n\nclass Derived(Base):\n    def __init__(self):\n        super().__init__()\n        print("Derived.__init__")\n\nd = Derived()\nprint(d.value)\n'})}),"\n",(0,t.jsx)(n.p,{children:"In this example:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"Base"})," class has an ",(0,t.jsx)(n.code,{children:"__init__"})," method that initializes an instance variable and prints a message."]}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"Derived"})," class inherits from ",(0,t.jsx)(n.code,{children:"Base"})," and overrides the ",(0,t.jsx)(n.code,{children:"__init__"})," method. Inside this method, ",(0,t.jsx)(n.code,{children:"super().__init__()"})," is called to initialize the ",(0,t.jsx)(n.code,{children:"Base"})," part of the object before executing its own initialization code."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"output",children:"Output:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Base.__init__\nDerived.__init__\nBase Value\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This output demonstrates that the ",(0,t.jsx)(n.code,{children:"Base"})," class's initializer is called before the ",(0,t.jsx)(n.code,{children:"Derived"})," class's initializer."]}),"\n",(0,t.jsxs)(n.h2,{id:"using-super-in-multi-level-inheritance",children:["Using ",(0,t.jsx)(n.code,{children:"super()"})," in Multi-Level Inheritance"]}),"\n",(0,t.jsxs)(n.p,{children:["In a multi-level inheritance scenario, ",(0,t.jsx)(n.code,{children:"super()"})," ensures that all base classes are properly initialized."]}),"\n",(0,t.jsx)(n.h3,{id:"example",children:"Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'class A:\n    def __init__(self):\n        print("A.__init__")\n        \nclass B(A):\n    def __init__(self):\n        super().__init__()\n        print("B.__init__")\n\nclass C(B):\n    def __init__(self):\n        super().__init__()\n        print("C.__init__")\n\nc = C()\n'})}),"\n",(0,t.jsx)(n.h3,{id:"output-1",children:"Output:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"A.__init__\nB.__init__\nC.__init__\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"super()"})," function ensures that each class in the hierarchy initializes itself in the correct order, from the topmost base class to the most derived class."]}),"\n",(0,t.jsx)(n.h2,{id:"diamond-inheritance-and-method-resolution-order-mro",children:"Diamond Inheritance and Method Resolution Order (MRO)"}),"\n",(0,t.jsx)(n.p,{children:"When dealing with multiple inheritance, especially in diamond-shaped inheritance patterns, the Method Resolution Order (MRO) becomes significant. The MRO is the order in which base classes are searched when executing a method. Python uses the C3 linearization algorithm to determine the MRO."}),"\n",(0,t.jsx)(n.h3,{id:"example-1",children:"Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'class A:\n    def __init__(self):\n        print("A.__init__")\n\nclass B(A):\n    def __init__(self):\n        super().__init__()\n        print("B.__init__")\n\nclass C(A):\n    def __init__(self):\n        super().__init__()\n        print("C.__init__")\n\nclass D(B, C):\n    def __init__(self):\n        super().__init__()\n        print("D.__init__")\n\nd = D()\n'})}),"\n",(0,t.jsx)(n.h3,{id:"output-2",children:"Output:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"A.__init__\nC.__init__\nB.__init__\nD.__init__\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Here, the MRO is ",(0,t.jsx)(n.code,{children:"D -> B -> C -> A"}),". The ",(0,t.jsx)(n.code,{children:"super()"})," function in ",(0,t.jsx)(n.code,{children:"D"})," calls the ",(0,t.jsx)(n.code,{children:"__init__"})," method of ",(0,t.jsx)(n.code,{children:"B"}),", which then calls ",(0,t.jsx)(n.code,{children:"C"}),", and finally ",(0,t.jsx)(n.code,{children:"A"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"checking-the-mro",children:"Checking the MRO"}),"\n",(0,t.jsxs)(n.p,{children:["The MRO can be checked using the ",(0,t.jsx)(n.code,{children:"__mro__"})," attribute or the ",(0,t.jsx)(n.code,{children:"mro()"})," method:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"print(D.__mro__)\nprint(D.mro())\n"})}),"\n",(0,t.jsx)(n.h3,{id:"output-3",children:"Output:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"(<class '__main__.D'>, <class '__main__.B'>, <class '__main__.C'>, <class '__main__.A'>, <class 'object'>)\n[<class '__main__.D'>, <class '__main__.B'>, <class '__main__.C'>, <class '__main__.A'>, <class 'object'>]\n"})}),"\n",(0,t.jsx)(n.h2,{id:"practical-use-cases",children:"Practical Use Cases"}),"\n",(0,t.jsx)(n.h3,{id:"calling-parent-class-methods",children:"Calling Parent Class Methods"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"super()"})," is often used to call methods of a parent class in a way that respects the class hierarchy and MRO. For example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'class Logger:\n    def log(self, message):\n        print(f"Log: {message}")\n\nclass FileLogger(Logger):\n    def log(self, message):\n        super().log(message)\n        print(f"File log: {message}")\n\nfl = FileLogger()\nfl.log("Test message")\n'})}),"\n",(0,t.jsx)(n.h3,{id:"output-4",children:"Output:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Log: Test message\nFile log: Test message\n"})}),"\n",(0,t.jsx)(n.h3,{id:"multiple-inheritance-with-cooperative-methods",children:"Multiple Inheritance with Cooperative Methods"}),"\n",(0,t.jsxs)(n.p,{children:["In complex multiple inheritance scenarios, ",(0,t.jsx)(n.code,{children:"super()"})," helps ensure all parent classes are appropriately initialized and their methods are called."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'class X:\n    def method(self):\n        print("X.method")\n\nclass Y(X):\n    def method(self):\n        super().method()\n        print("Y.method")\n\nclass Z(X):\n    def method(self):\n        super().method()\n        print("Z.method")\n\nclass A(Y, Z):\n    def method(self):\n        super().method()\n        print("A.method")\n\na = A()\na.method()\n'})}),"\n",(0,t.jsx)(n.h3,{id:"output-5",children:"Output:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"X.method\nZ.method\nY.method\nA.method\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This example demonstrates how ",(0,t.jsx)(n.code,{children:"super()"})," helps coordinate method calls in a multiple inheritance scenario."]}),"\n",(0,t.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"super()"})," function in Python is a powerful feature for managing inheritance hierarchies, ensuring that parent class methods are called in a controlled and predictable manner. By understanding and correctly using ",(0,t.jsx)(n.code,{children:"super()"}),", developers can create robust and maintainable OOP designs, especially in complex inheritance scenarios."]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var s=i(6540);const t={},l=s.createContext(t);function r(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);