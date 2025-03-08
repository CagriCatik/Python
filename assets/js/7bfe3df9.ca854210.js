"use strict";(self.webpackChunkpython=self.webpackChunkpython||[]).push([[5630],{9459:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"python-guide/OOP/Classes_and_Objects","title":"Classes and Objects","description":"Object-oriented programming (OOP) is a programming paradigm that uses \\"objects\\" to model real-world entities. These objects are instances of \\"classes,\\" which can be thought of as blueprints for creating specific types of objects. In this tutorial, we will explore the basics of classes and objects in Python by developing a program that models cars.","source":"@site/docs/python-guide/07_OOP/02_Classes_and_Objects.md","sourceDirName":"python-guide/07_OOP","slug":"/python-guide/OOP/Classes_and_Objects","permalink":"/Python/docs/python-guide/OOP/Classes_and_Objects","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/python-guide/07_OOP/02_Classes_and_Objects.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{},"sidebar":"guideSidebar","previous":{"title":"Object Oriented Programming","permalink":"/Python/docs/python-guide/OOP/OOP"},"next":{"title":"__init__ Method","permalink":"/Python/docs/python-guide/OOP/init"}}');var t=s(4848),a=s(8453);const o={},c="Classes and Objects",r={},l=[{value:"Introduction to Classes and Objects",id:"introduction-to-classes-and-objects",level:2},{value:"Defining a Car Class",id:"defining-a-car-class",level:2},{value:"Explanation of the Code",id:"explanation-of-the-code",level:2},{value:"Creating and Using Car Objects",id:"creating-and-using-car-objects",level:2},{value:"Explanation of the Code",id:"explanation-of-the-code-1",level:2},{value:"Output",id:"output",level:2},{value:"Benefits of Using Classes and Objects",id:"benefits-of-using-classes-and-objects",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"classes-and-objects",children:"Classes and Objects"})}),"\n",(0,t.jsx)(n.p,{children:'Object-oriented programming (OOP) is a programming paradigm that uses "objects" to model real-world entities. These objects are instances of "classes," which can be thought of as blueprints for creating specific types of objects. In this tutorial, we will explore the basics of classes and objects in Python by developing a program that models cars.'}),"\n",(0,t.jsx)(n.h2,{id:"introduction-to-classes-and-objects",children:"Introduction to Classes and Objects"}),"\n",(0,t.jsx)(n.p,{children:"A class in Python defines a type of object. It encapsulates data for the object and methods to manipulate that data. An object is an instance of a class. Once a class is defined, multiple objects can be created from it, each with its own unique data but sharing the same functionality."}),"\n",(0,t.jsx)(n.h2,{id:"defining-a-car-class",children:"Defining a Car Class"}),"\n",(0,t.jsxs)(n.p,{children:["To demonstrate the concept of classes and objects, we'll create a ",(0,t.jsx)(n.code,{children:"Car"})," class. This class will serve as a blueprint for creating car objects, each with a specific brand and number of wheels."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'class Car:\n    def __init__(self, brand: str, wheels: int):\n        self.brand = brand\n        self.wheels = wheels\n\n    def turn_on(self):\n        print(f"Turning on the {self.brand}.")\n\n    def turn_off(self):\n        print(f"Turning off the {self.brand}.")\n\n    def drive(self, kilometers: int):\n        print(f"Driving the {self.brand} for {kilometers} kilometers.")\n\n    def describe(self):\n        print(f"{self.brand} is a car with {self.wheels} wheels.")\n'})}),"\n",(0,t.jsx)(n.h2,{id:"explanation-of-the-code",children:"Explanation of the Code"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Class Definition"}),": The ",(0,t.jsx)(n.code,{children:"Car"})," class is defined using the ",(0,t.jsx)(n.code,{children:"class"})," keyword followed by the class name."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsxs)(n.strong,{children:["Initializer (",(0,t.jsx)(n.code,{children:"__init__"})," method)"]}),": This special method is called when a new object is instantiated. It initializes the object's attributes.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"self"}),": Refers to the instance of the class. It is used to access the attributes and methods of the class."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"brand"}),": The brand of the car."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"wheels"}),": The number of wheels the car has."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Methods"}),": These are functions defined within the class that describe the behavior of the objects.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"turn_on()"}),": Prints a message indicating the car is being turned on."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"turn_off()"}),": Prints a message indicating the car is being turned off."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"drive()"}),": Prints a message indicating the car is being driven for a specified distance."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"describe()"}),": Prints a description of the car."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"creating-and-using-car-objects",children:"Creating and Using Car Objects"}),"\n",(0,t.jsxs)(n.p,{children:["Now that we have defined the ",(0,t.jsx)(n.code,{children:"Car"})," class, we can create instances (objects) of this class and use its methods."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'if __name__ == "__main__":\n    bmw = Car("BMW", 4)\n    bmw.turn_on()\n    bmw.drive(10)\n    bmw.turn_off()\n    bmw.describe()\n\n    volvo = Car("Volvo", 6)\n    volvo.turn_on()\n    volvo.drive(30)\n    volvo.turn_off()\n    volvo.describe()\n'})}),"\n",(0,t.jsx)(n.h2,{id:"explanation-of-the-code-1",children:"Explanation of the Code"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Main Entry Point"}),": The ",(0,t.jsx)(n.code,{children:'if __name__ == "__main__":'})," block ensures that the code inside it runs only when the script is executed directly."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Creating Objects"}),": ",(0,t.jsx)(n.code,{children:"bmw"})," and ",(0,t.jsx)(n.code,{children:"volvo"})," are objects of the ",(0,t.jsx)(n.code,{children:"Car"})," class."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Using Methods"}),": The methods ",(0,t.jsx)(n.code,{children:"turn_on()"}),", ",(0,t.jsx)(n.code,{children:"drive()"}),", ",(0,t.jsx)(n.code,{children:"turn_off()"}),", and ",(0,t.jsx)(n.code,{children:"describe()"})," are called on these objects to perform actions and print information."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"output",children:"Output"}),"\n",(0,t.jsx)(n.p,{children:"Running the above script will produce the following output:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Turning on the BMW.\nDriving the BMW for 10 kilometers.\nTurning off the BMW.\nBMW is a car with 4 wheels.\nTurning on the Volvo.\nDriving the Volvo for 30 kilometers.\nTurning off the Volvo.\nVolvo is a car with 6 wheels.\n"})}),"\n",(0,t.jsx)(n.h2,{id:"benefits-of-using-classes-and-objects",children:"Benefits of Using Classes and Objects"}),"\n",(0,t.jsx)(n.p,{children:"Using classes and objects provides several benefits:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Reusability"}),": Once a class is defined, it can be reused to create multiple objects, each with different attribute values."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Modularity"}),": Classes encapsulate data and functionality, making code easier to manage and understand."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Extensibility"}),": New functionality can be added to existing classes without modifying the existing code."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Maintainability"}),": Encapsulation helps in isolating changes to specific parts of the code, making maintenance easier."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsxs)(n.p,{children:["In this tutorial, we have learned the basics of classes and objects in Python by creating a ",(0,t.jsx)(n.code,{children:"Car"})," class. We have seen how to define a class, initialize objects, and use methods to perform actions on those objects. Understanding these fundamental concepts is crucial for effective programming in Python, as they form the basis for more advanced topics in object-oriented programming."]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>c});var i=s(6540);const t={},a=i.createContext(t);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);