"use strict";(self.webpackChunkmy_docusaurus_site=self.webpackChunkmy_docusaurus_site||[]).push([[9518],{6687:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"guide/OOP/eq__()/README","title":"Implementing Object Comparison in Python with the __eq__ Method","description":"Object-oriented programming (OOP) in Python offers a powerful way to structure and organize code. One essential aspect of OOP is the ability to compare objects meaningfully. By default, Python compares objects based on their memory addresses, which might not always be the desired behavior, especially when dealing with objects that encapsulate data. To customize this comparison, Python provides the eq method, also known as the equality dunder method.","source":"@site/docs/guide/07_OOP/08__eq__()/README.md","sourceDirName":"guide/07_OOP/08__eq__()","slug":"/guide/OOP/eq__()/","permalink":"/Python/docs/guide/OOP/eq__()/","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guide/07_OOP/08__eq__()/README.md","tags":[],"version":"current","frontMatter":{},"sidebar":"guideSidebar","previous":{"title":"Comprehensive Tutorial on str() and repr() in Python","permalink":"/Python/docs/guide/OOP/str()_repr()/"},"next":{"title":"Understanding Functions and Methods in Python: A Detailed Tutorial","permalink":"/Python/docs/guide/OOP/Methods_Functions/"}}');var o=n(4848),s=n(8453);const r={},a="Implementing Object Comparison in Python with the __eq__ Method",d={},c=[{value:"Step-by-Step Implementation",id:"step-by-step-implementation",level:2},{value:"Detailed Explanation",id:"detailed-explanation",level:2},{value:"Initialization",id:"initialization",level:2},{value:"Equality Method (<code>__eq__</code>)",id:"equality-method-__eq__",level:2},{value:"Main Block",id:"main-block",level:2},{value:"Conclusion",id:"conclusion",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsxs)(t.h1,{id:"implementing-object-comparison-in-python-with-the-__eq__-method",children:["Implementing Object Comparison in Python with the ",(0,o.jsx)(t.code,{children:"__eq__"})," Method"]})}),"\n",(0,o.jsxs)(t.p,{children:["Object-oriented programming (OOP) in Python offers a powerful way to structure and organize code. One essential aspect of OOP is the ability to compare objects meaningfully. By default, Python compares objects based on their memory addresses, which might not always be the desired behavior, especially when dealing with objects that encapsulate data. To customize this comparison, Python provides the ",(0,o.jsx)(t.code,{children:"__eq__"})," method, also known as the equality dunder method."]}),"\n",(0,o.jsxs)(t.p,{children:["This tutorial demonstrates how to implement the ",(0,o.jsx)(t.code,{children:"__eq__"})," method to compare objects of a custom class. We will use a ",(0,o.jsx)(t.code,{children:"Car"})," class as our example, comparing cars based on their attributes."]}),"\n",(0,o.jsx)(t.h2,{id:"step-by-step-implementation",children:"Step-by-Step Implementation"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Import Necessary Modules:"})}),"\n",(0,o.jsxs)(t.p,{children:["We will begin by importing the ",(0,o.jsx)(t.code,{children:"Self"})," type from the ",(0,o.jsx)(t.code,{children:"typing"})," module to provide type hints for better code clarity and maintainability."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:"from typing import Self\n"})}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:(0,o.jsxs)(t.strong,{children:["Define the ",(0,o.jsx)(t.code,{children:"Car"})," Class:"]})}),"\n",(0,o.jsxs)(t.p,{children:["Create a ",(0,o.jsx)(t.code,{children:"Car"})," class with an initializer method that sets the car's attributes: brand, car ID, and color."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:"class Car:\n    def __init__(self, brand: str, car_id: int, color: str) -> None:\n        self.brand = brand\n        self.car_id = car_id\n        self.color = color\n"})}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:(0,o.jsxs)(t.strong,{children:["Implement the ",(0,o.jsx)(t.code,{children:"__eq__"})," Method:"]})}),"\n",(0,o.jsxs)(t.p,{children:["Define the ",(0,o.jsx)(t.code,{children:"__eq__"})," method to compare ",(0,o.jsx)(t.code,{children:"Car"})," objects. This method will compare all attributes of the cars to determine equality."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:"class Car:\n    def __init__(self, brand: str, car_id: int, color: str) -> None:\n        self.brand = brand\n        self.car_id = car_id\n        self.color = color\n\n    def __eq__(self, other: Self) -> bool:\n        if isinstance(other, Car):\n            return (self.brand == other.brand and\n                    self.car_id == other.car_id and\n                    self.color == other.color)\n        return False\n"})}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Create Car Objects and Compare Them:"})}),"\n",(0,o.jsxs)(t.p,{children:["Instantiate two ",(0,o.jsx)(t.code,{children:"Car"})," objects with identical attributes and compare them using the equality operator (",(0,o.jsx)(t.code,{children:"=="}),"). Without the ",(0,o.jsx)(t.code,{children:"__eq__"})," method, this comparison would return ",(0,o.jsx)(t.code,{children:"False"})," because it would compare the objects' memory addresses instead of their attributes."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:'if __name__ == "__main__":\n    car1 = Car("BMW", 1, "Red")\n    car2 = Car("BMW", 1, "Red")\n\n    print(car1 == car2)  # This should print True\n'})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"detailed-explanation",children:"Detailed Explanation"}),"\n",(0,o.jsx)(t.h2,{id:"initialization",children:"Initialization"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"__init__"})," method initializes the ",(0,o.jsx)(t.code,{children:"Car"})," objects with the provided brand, car ID, and color. Each attribute is assigned to the instance (",(0,o.jsx)(t.code,{children:"self"}),")."]}),"\n",(0,o.jsxs)(t.h2,{id:"equality-method-__eq__",children:["Equality Method (",(0,o.jsx)(t.code,{children:"__eq__"}),")"]}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"__eq__"})," method is a special method in Python used to define the behavior of the equality operator (",(0,o.jsx)(t.code,{children:"=="}),"). It takes two parameters: ",(0,o.jsx)(t.code,{children:"self"})," and ",(0,o.jsx)(t.code,{children:"other"}),". The method first checks if ",(0,o.jsx)(t.code,{children:"other"})," is an instance of the ",(0,o.jsx)(t.code,{children:"Car"})," class. If it is, the method compares the ",(0,o.jsx)(t.code,{children:"brand"}),", ",(0,o.jsx)(t.code,{children:"car_id"}),", and ",(0,o.jsx)(t.code,{children:"color"})," attributes of the two cars. If all attributes match, it returns ",(0,o.jsx)(t.code,{children:"True"}),"; otherwise, it returns ",(0,o.jsx)(t.code,{children:"False"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"main-block",children:"Main Block"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:'if __name__ == "__main__":'})," block ensures that the code inside it runs only when the script is executed directly, not when imported as a module. Within this block, two ",(0,o.jsx)(t.code,{children:"Car"})," objects are created with the same attributes, and their equality is tested using the ",(0,o.jsx)(t.code,{children:"=="})," operator. Due to the ",(0,o.jsx)(t.code,{children:"__eq__"})," method, this comparison returns ",(0,o.jsx)(t.code,{children:"True"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,o.jsxs)(t.p,{children:["By implementing the ",(0,o.jsx)(t.code,{children:"__eq__"})," method, we can control how objects of a class are compared, enabling meaningful equality checks based on object attributes rather than memory addresses. This tutorial demonstrated how to define and use the ",(0,o.jsx)(t.code,{children:"__eq__"})," method in Python with a practical example involving a ",(0,o.jsx)(t.code,{children:"Car"})," class. This approach can be extended to any class where custom comparison logic is needed."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var i=n(6540);const o={},s=i.createContext(o);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);