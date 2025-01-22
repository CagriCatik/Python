"use strict";(self.webpackChunkmy_docusaurus_site=self.webpackChunkmy_docusaurus_site||[]).push([[3738],{9395:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"guide/OOP/Name_Mangling/README","title":"Understanding Name Mangling","description":"Introduction to Name Mangling","source":"@site/docs/guide/07_OOP/16_Name_Mangling/README.md","sourceDirName":"guide/07_OOP/16_Name_Mangling","slug":"/guide/OOP/Name_Mangling/","permalink":"/Python/docs/guide/OOP/Name_Mangling/","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guide/07_OOP/16_Name_Mangling/README.md","tags":[],"version":"current","frontMatter":{},"sidebar":"guideSidebar","previous":{"title":"Abstract Methods and Classes in Python","permalink":"/Python/docs/guide/OOP/@abstractmethod/"},"next":{"title":"Built in Functions","permalink":"/Python/docs/category/built-in-functions"}}');var t=a(4848),i=a(8453);const r={},l="Understanding Name Mangling",c={},d=[{value:"Introduction to Name Mangling",id:"introduction-to-name-mangling",level:2},{value:"Reasons for Name Mangling",id:"reasons-for-name-mangling",level:2},{value:"Creating a Class with Name Mangling",id:"creating-a-class-with-name-mangling",level:2},{value:"Step-by-Step Example",id:"step-by-step-example",level:2},{value:"Inheritance and Name Clashes",id:"inheritance-and-name-clashes",level:2},{value:"Handling Mangled Names in Subclasses",id:"handling-mangled-names-in-subclasses",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Code Summary",id:"code-summary",level:2}];function o(n){const e={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"understanding-name-mangling",children:"Understanding Name Mangling"})}),"\n",(0,t.jsx)(e.h2,{id:"introduction-to-name-mangling",children:"Introduction to Name Mangling"}),"\n",(0,t.jsx)(e.p,{children:"Name mangling is a mechanism in Python to ensure that the names of class attributes are unique and not easily accessible outside their defining class. This feature is particularly useful for encapsulating data and preventing name clashes in inheritance hierarchies."}),"\n",(0,t.jsx)(e.h2,{id:"reasons-for-name-mangling",children:"Reasons for Name Mangling"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Encapsulation"}),": Name mangling makes it harder to access objects that should not be accessed outside of the class, enhancing data encapsulation."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Preventing Name Clashes"}),": Inheritance can lead to name clashes. Name mangling prevents such conflicts by altering the attribute names in a unique way."]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"creating-a-class-with-name-mangling",children:"Creating a Class with Name Mangling"}),"\n",(0,t.jsx)(e.p,{children:"Consider the following example to illustrate name mangling in a class."}),"\n",(0,t.jsx)(e.h2,{id:"step-by-step-example",children:"Step-by-Step Example"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.strong,{children:"Define the Class and Attributes"})}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:'class Car:\n    __year = 2000  # Class-level attribute with name mangling\n\n    def __init__(self, brand: str, fuel_type: str) -> None:\n        self.__brand = brand  # Instance attribute with name mangling\n        self.__fuel_type = fuel_type  # Instance attribute with name mangling\n        self.var = "red"  # Regular instance attribute\n\n    def drive(self) -> None:\n        print(f"Driving {self.__brand}")\n\n    def __get_description(self) -> None:  # Method with name mangling\n        print(f"{self.__brand} has {self.__fuel_type}")\n\n    def display_color(self) -> None:\n        print(f"{self.__brand} is {self.var.capitalize()}")\n'})}),"\n",(0,t.jsxs)(e.p,{children:["In the ",(0,t.jsx)(e.code,{children:"Car"})," class:"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"__year"}),", ",(0,t.jsx)(e.code,{children:"__brand"}),", and ",(0,t.jsx)(e.code,{children:"__fuel_type"})," are defined with double leading underscores."]}),"\n",(0,t.jsx)(e.li,{children:"These attributes will undergo name mangling."}),"\n"]}),"\n",(0,t.jsxs)(e.ol,{start:"2",children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.strong,{children:"Creating an Instance and Accessing Mangled Attributes"})}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:'if __name__ == "__main__":\n    car = Car("Toyota", "Electric")\n    car.drive()  # This works fine\n    # Accessing the mangled attributes directly is not straightforward\n    # print(car.__brand)  # This will raise an AttributeError\n\n    # Accessing mangled names using their mangled forms\n    print(car._Car__brand)  # This works\n    car._Car__get_description()  # This works\n'})}),"\n",(0,t.jsx)(e.h2,{id:"inheritance-and-name-clashes",children:"Inheritance and Name Clashes"}),"\n",(0,t.jsx)(e.p,{children:"Name mangling can prevent name clashes in inheritance scenarios."}),"\n",(0,t.jsxs)(e.ol,{start:"3",children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.strong,{children:"Inheritance with Name Mangling"})}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:'class Toyota(Car):\n    def __init__(self, fuel_type: str) -> None:\n        super().__init__("Toyota", fuel_type)\n        self.var = 100  # This can cause a name clash\n\n    def get_year(self) -> int:\n        return self._Car__year  # Accessing mangled class attribute\n'})}),"\n",(0,t.jsxs)(e.p,{children:["Creating an instance of the ",(0,t.jsx)(e.code,{children:"Toyota"})," class and demonstrating the name clash resolution:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:'if __name__ == "__main__":\n    toyota = Toyota("Electric")\n    toyota.display_color()  # This will now refer to the correct \'var\' attribute\n    print(toyota.get_year())  # Accessing the mangled class attribute\n'})}),"\n",(0,t.jsx)(e.h2,{id:"handling-mangled-names-in-subclasses",children:"Handling Mangled Names in Subclasses"}),"\n",(0,t.jsx)(e.p,{children:"When dealing with subclasses, name mangling requires careful handling to avoid attribute errors."}),"\n",(0,t.jsxs)(e.ol,{start:"4",children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.strong,{children:"Handling Mangled Names in Subclasses"})}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:'class Honda(Car):\n    def get_year(self) -> int:\n        # Trying to access a mangled class attribute from the parent class\n        try:\n            return self.__year  # This will raise an AttributeError\n        except AttributeError:\n            return self._Car__year  # Correct way to access the mangled attribute\n\nif __name__ == "__main__":\n    honda = Honda("Petrol")\n    print(honda.get_year())  # Correctly accessing the mangled attribute\n'})}),"\n",(0,t.jsx)(e.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsx)(e.p,{children:"Name mangling is a useful feature in Python for ensuring data encapsulation and preventing name clashes. By altering the names of class attributes and methods in a unique way, it makes them harder to access from outside the class, while still being accessible within the class using their mangled names."}),"\n",(0,t.jsx)(e.h2,{id:"code-summary",children:"Code Summary"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:'class Car:\n    __year = 2000\n\n    def __init__(self, brand: str, fuel_type: str) -> None:\n        self.__brand = brand\n        self.__fuel_type = fuel_type\n        self.var = "red"\n\n    def drive(self) -> None:\n        print(f"Driving {self.__brand}")\n\n    def __get_description(self) -> None:\n        print(f"{self.__brand} has {self.__fuel_type}")\n\n    def display_color(self) -> None:\n        print(f"{self.__brand} is {self.var.capitalize()}")\n\nclass Toyota(Car):\n    def __init__(self, fuel_type: str) -> None:\n        super().__init__("Toyota", fuel_type)\n        self.var = 100\n\n    def get_year(self) -> int:\n        return self._Car__year\n\nclass Honda(Car):\n    def get_year(self) -> int:\n        try:\n            return self.__year\n        except AttributeError:\n            return self._Car__year\n\nif __name__ == "__main__":\n    car = Car("Toyota", "Electric")\n    car.drive()\n    print(car._Car__brand)\n    car._Car__get_description()\n\n    toyota = Toyota("Electric")\n    toyota.display_color()\n    print(toyota.get_year())\n\n    honda = Honda("Petrol")\n    print(honda.get_year())\n'})}),"\n",(0,t.jsx)(e.p,{children:"This tutorial highlights the importance of name mangling in Python and provides practical examples of its application and benefits."})]})}function h(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(o,{...n})}):o(n)}},8453:(n,e,a)=>{a.d(e,{R:()=>r,x:()=>l});var s=a(6540);const t={},i=s.createContext(t);function r(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:r(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);