"use strict";(self.webpackChunkpython=self.webpackChunkpython||[]).push([[4468],{664:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"python-guide/OOP/Inheritance","title":"Inheritance","description":"Object-Oriented Programming is a programming paradigm that uses objects and classes to organize and structure code. It allows for modularity, reusability, and abstraction. Python, as an object-oriented language, supports OOP features, including inheritance, polymorphism, encapsulation, and abstraction. This tutorial will focus on the principles of OOP, specifically inheritance, in Python.","source":"@site/docs/python-guide/07_OOP/11_Inheritance.md","sourceDirName":"python-guide/07_OOP","slug":"/python-guide/OOP/Inheritance","permalink":"/Python/docs/python-guide/OOP/Inheritance","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/python-guide/07_OOP/11_Inheritance.md","tags":[],"version":"current","sidebarPosition":11,"frontMatter":{},"sidebar":"guideSidebar","previous":{"title":"Functions and Methods","permalink":"/Python/docs/python-guide/OOP/Methods_Functions"},"next":{"title":"super()","permalink":"/Python/docs/python-guide/OOP/super()"}}');var s=i(4848),t=i(8453);const r={},l="Inheritance",o={},c=[{value:"Object-Oriented Programming Basics",id:"object-oriented-programming-basics",level:2},{value:"Classes and Objects",id:"classes-and-objects",level:3},{value:"Defining a Class",id:"defining-a-class",level:4},{value:"Inheritance",id:"inheritance-1",level:3},{value:"Single Inheritance",id:"single-inheritance",level:4},{value:"Multiple Inheritance",id:"multiple-inheritance",level:4},{value:"Method Overriding",id:"method-overriding",level:3},{value:"The <code>super()</code> Function",id:"the-super-function",level:3},{value:"Encapsulation",id:"encapsulation",level:3},{value:"Polymorphism",id:"polymorphism",level:3},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"inheritance",children:"Inheritance"})}),"\n",(0,s.jsx)(n.p,{children:"Object-Oriented Programming is a programming paradigm that uses objects and classes to organize and structure code. It allows for modularity, reusability, and abstraction. Python, as an object-oriented language, supports OOP features, including inheritance, polymorphism, encapsulation, and abstraction. This tutorial will focus on the principles of OOP, specifically inheritance, in Python."}),"\n",(0,s.jsx)(n.h2,{id:"object-oriented-programming-basics",children:"Object-Oriented Programming Basics"}),"\n",(0,s.jsx)(n.h3,{id:"classes-and-objects",children:"Classes and Objects"}),"\n",(0,s.jsx)(n.p,{children:"In Python, a class is a blueprint for creating objects. An object is an instance of a class. Classes encapsulate data and behaviors related to that data."}),"\n",(0,s.jsx)(n.h4,{id:"defining-a-class",children:"Defining a Class"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'class Vehicle:\n    def __init__(self, make, model, year):\n        self.make = make\n        self.model = model\n        self.year = year\n\n    def display_info(self):\n        print(f"Vehicle: {self.year} {self.make} {self.model}")\n\n# Creating an instance of the Vehicle class\nmy_vehicle = Vehicle("Toyota", "Corolla", 2020)\nmy_vehicle.display_info()\n'})}),"\n",(0,s.jsx)(n.h3,{id:"inheritance-1",children:"Inheritance"}),"\n",(0,s.jsx)(n.p,{children:"Inheritance allows a class to inherit attributes and methods from another class. The class that inherits is called the child class or subclass, while the class being inherited from is the parent class or superclass. Inheritance promotes code reusability and can create a hierarchical relationship between classes."}),"\n",(0,s.jsx)(n.h4,{id:"single-inheritance",children:"Single Inheritance"}),"\n",(0,s.jsx)(n.p,{children:"Single inheritance involves a child class inheriting from a single parent class."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'class Car(Vehicle):\n    def __init__(self, make, model, year, num_doors):\n        super().__init__(make, model, year)\n        self.num_doors = num_doors\n\n    def display_info(self):\n        super().display_info()\n        print(f"Number of doors: {self.num_doors}")\n\n# Creating an instance of the Car class\nmy_car = Car("Honda", "Civic", 2019, 4)\nmy_car.display_info()\n'})}),"\n",(0,s.jsx)(n.h4,{id:"multiple-inheritance",children:"Multiple Inheritance"}),"\n",(0,s.jsx)(n.p,{children:"Multiple inheritance allows a child class to inherit from more than one parent class. This can introduce complexity and potential conflicts."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'class Electric:\n    def __init__(self, battery_size):\n        self.battery_size = battery_size\n\n    def display_battery_info(self):\n        print(f"Battery size: {self.battery_size} kWh")\n\nclass ElectricCar(Car, Electric):\n    def __init__(self, make, model, year, num_doors, battery_size):\n        Car.__init__(self, make, model, year, num_doors)\n        Electric.__init__(self, battery_size)\n\n# Creating an instance of the ElectricCar class\nmy_electric_car = ElectricCar("Tesla", "Model S", 2021, 4, 100)\nmy_electric_car.display_info()\nmy_electric_car.display_battery_info()\n'})}),"\n",(0,s.jsx)(n.h3,{id:"method-overriding",children:"Method Overriding"}),"\n",(0,s.jsx)(n.p,{children:"Method overriding allows a child class to provide a specific implementation of a method that is already defined in its parent class."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'class Animal:\n    def make_sound(self):\n        print("Animal makes a sound")\n\nclass Dog(Animal):\n    def make_sound(self):\n        print("Dog barks")\n\n# Creating instances of Animal and Dog\ngeneric_animal = Animal()\ngeneric_animal.make_sound()\n\nmy_dog = Dog()\nmy_dog.make_sound()\n'})}),"\n",(0,s.jsxs)(n.h3,{id:"the-super-function",children:["The ",(0,s.jsx)(n.code,{children:"super()"})," Function"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"super()"})," function provides a way to call the parent class's methods from the child class. It is commonly used to extend or modify the behavior of inherited methods."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'class Bird(Animal):\n    def make_sound(self):\n        super().make_sound()\n        print("Bird chirps")\n\n# Creating an instance of the Bird class\nmy_bird = Bird()\nmy_bird.make_sound()\n'})}),"\n",(0,s.jsx)(n.h3,{id:"encapsulation",children:"Encapsulation"}),"\n",(0,s.jsx)(n.p,{children:"Encapsulation restricts direct access to some of an object's attributes and methods. This is achieved using private and protected access specifiers."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Private members are declared with a double underscore prefix (e.g., ",(0,s.jsx)(n.code,{children:"__private_var"}),")."]}),"\n",(0,s.jsxs)(n.li,{children:["Protected members are declared with a single underscore prefix (e.g., ",(0,s.jsx)(n.code,{children:"_protected_var"}),")."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'class EncapsulatedClass:\n    def __init__(self):\n        self._protected_var = "Protected"\n        self.__private_var = "Private"\n\n    def display_vars(self):\n        print(f"Protected: {self._protected_var}")\n        print(f"Private: {self.__private_var}")\n\nobj = EncapsulatedClass()\nobj.display_vars()\nprint(obj._protected_var)  # Accessible but should be treated as non-public\n# print(obj.__private_var)  # Raises AttributeError\n'})}),"\n",(0,s.jsx)(n.h3,{id:"polymorphism",children:"Polymorphism"}),"\n",(0,s.jsx)(n.p,{children:"Polymorphism allows objects of different classes to be treated as objects of a common super class. It is achieved through method overriding and interfaces."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'class Cat(Animal):\n    def make_sound(self):\n        print("Cat meows")\n\ndef make_animal_sound(animal):\n    animal.make_sound()\n\n# Demonstrating polymorphism\nmake_animal_sound(generic_animal)\nmake_animal_sound(my_dog)\nmake_animal_sound(Cat())\n'})}),"\n",(0,s.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsxs)(n.p,{children:["Object-Oriented Programming in Python is a powerful paradigm that enhances code organization, reusability, and scalability. Inheritance is a fundamental concept in OOP that allows for hierarchical class relationships, promoting code reuse and extending functionality. This tutorial has covered the basics of classes, objects, inheritance, method overriding, the ",(0,s.jsx)(n.code,{children:"super()"})," function, encapsulation, and polymorphism, providing a comprehensive understanding of these concepts in Python."]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>l});var a=i(6540);const s={},t=a.createContext(s);function r(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);