"use strict";(self.webpackChunkpython=self.webpackChunkpython||[]).push([[3234],{7962:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>c,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"python-guide/OOP/Attributes_Class_and_Instance","title":"Class and Instance Attributes","description":"In object-oriented programming, classes and instances play a pivotal role. Python, being an object-oriented language, leverages classes to define objects and their behavior. An important aspect of this paradigm is understanding the distinction between class attributes and instance attributes. This tutorial will provide a comprehensive examination of these concepts, their differences, and how to utilize them effectively in Python.","source":"@site/docs/python-guide/07_OOP/05_Attributes_Class_and_Instance.md","sourceDirName":"python-guide/07_OOP","slug":"/python-guide/OOP/Attributes_Class_and_Instance","permalink":"/Python/docs/python-guide/OOP/Attributes_Class_and_Instance","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/python-guide/07_OOP/05_Attributes_Class_and_Instance.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{},"sidebar":"guideSidebar","previous":{"title":"self Parameter","permalink":"/Python/docs/python-guide/OOP/self"},"next":{"title":"Dunder Methods","permalink":"/Python/docs/python-guide/OOP/Dunder_Methods"}}');var a=t(4848),i=t(8453);const c={},r="Class and Instance Attributes",l={},o=[{value:"Class Attributes",id:"class-attributes",level:2},{value:"Example of Class Attributes",id:"example-of-class-attributes",level:3},{value:"Instance Attributes",id:"instance-attributes",level:2},{value:"Example of Instance Attributes",id:"example-of-instance-attributes",level:3},{value:"Differences Between Class and Instance Attributes",id:"differences-between-class-and-instance-attributes",level:2},{value:"Modifying Class Attributes",id:"modifying-class-attributes",level:3},{value:"Modifying Instance Attributes",id:"modifying-instance-attributes",level:3},{value:"Practical Considerations",id:"practical-considerations",level:2},{value:"Example: Combining Class and Instance Attributes",id:"example-combining-class-and-instance-attributes",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"class-and-instance-attributes",children:"Class and Instance Attributes"})}),"\n",(0,a.jsx)(n.p,{children:"In object-oriented programming, classes and instances play a pivotal role. Python, being an object-oriented language, leverages classes to define objects and their behavior. An important aspect of this paradigm is understanding the distinction between class attributes and instance attributes. This tutorial will provide a comprehensive examination of these concepts, their differences, and how to utilize them effectively in Python."}),"\n",(0,a.jsx)(n.h2,{id:"class-attributes",children:"Class Attributes"}),"\n",(0,a.jsx)(n.p,{children:"Class attributes are variables that are defined within a class but outside any instance methods. They are shared across all instances of the class, meaning every object created from the class will have access to the same value for a class attribute. This is useful for attributes that should be consistent across all instances, such as constants or configuration settings."}),"\n",(0,a.jsx)(n.h3,{id:"example-of-class-attributes",children:"Example of Class Attributes"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'class Vehicle:\n    # Class attribute\n    category = "transport"\n\n    def __init__(self, make, model):\n        self.make = make  # Instance attribute\n        self.model = model  # Instance attribute\n\n# Accessing class attribute\nprint(Vehicle.category)  # Output: transport\n\n# Creating instances of Vehicle\ncar = Vehicle("Toyota", "Corolla")\nbike = Vehicle("Honda", "CBR")\n\n# Accessing class attribute via instances\nprint(car.category)  # Output: transport\nprint(bike.category)  # Output: transport\n'})}),"\n",(0,a.jsxs)(n.p,{children:["In this example, ",(0,a.jsx)(n.code,{children:"category"})," is a class attribute, and it is shared among all instances of the ",(0,a.jsx)(n.code,{children:"Vehicle"})," class. Changing the ",(0,a.jsx)(n.code,{children:"category"})," attribute through the class will reflect in all instances."]}),"\n",(0,a.jsx)(n.h2,{id:"instance-attributes",children:"Instance Attributes"}),"\n",(0,a.jsxs)(n.p,{children:["Instance attributes are variables that are defined within the ",(0,a.jsx)(n.code,{children:"__init__"})," method (or other instance methods) and are specific to each instance of the class. Each object can have different values for these attributes."]}),"\n",(0,a.jsx)(n.h3,{id:"example-of-instance-attributes",children:"Example of Instance Attributes"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'class Vehicle:\n    def __init__(self, make, model):\n        self.make = make  # Instance attribute\n        self.model = model  # Instance attribute\n\n# Creating instances of Vehicle\ncar = Vehicle("Toyota", "Corolla")\nbike = Vehicle("Honda", "CBR")\n\n# Accessing instance attributes\nprint(car.make)  # Output: Toyota\nprint(car.model)  # Output: Corolla\nprint(bike.make)  # Output: Honda\nprint(bike.model)  # Output: CBR\n'})}),"\n",(0,a.jsxs)(n.p,{children:["In this example, ",(0,a.jsx)(n.code,{children:"make"})," and ",(0,a.jsx)(n.code,{children:"model"})," are instance attributes, and they are specific to each instance of the ",(0,a.jsx)(n.code,{children:"Vehicle"})," class. Each instance can have different values for these attributes."]}),"\n",(0,a.jsx)(n.h2,{id:"differences-between-class-and-instance-attributes",children:"Differences Between Class and Instance Attributes"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Scope"}),":"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Class attributes are defined at the class level and shared among all instances."}),"\n",(0,a.jsxs)(n.li,{children:["Instance attributes are defined within methods (usually ",(0,a.jsx)(n.code,{children:"__init__"}),") and are unique to each instance."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Access"}),":"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Class attributes can be accessed using the class name or any instance."}),"\n",(0,a.jsx)(n.li,{children:"Instance attributes can only be accessed through instances."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Modification"}),":"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Modifying a class attribute affects all instances."}),"\n",(0,a.jsx)(n.li,{children:"Modifying an instance attribute affects only that particular instance."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"modifying-class-attributes",children:"Modifying Class Attributes"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'class Vehicle:\n    category = "transport"\n\n# Creating instances\ncar = Vehicle("Toyota", "Corolla")\nbike = Vehicle("Honda", "CBR")\n\n# Modifying class attribute\nVehicle.category = "automobile"\n\nprint(car.category)  # Output: automobile\nprint(bike.category)  # Output: automobile\n'})}),"\n",(0,a.jsx)(n.h3,{id:"modifying-instance-attributes",children:"Modifying Instance Attributes"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'class Vehicle:\n    def __init__(self, make, model):\n        self.make = make\n        self.model = model\n\n# Creating instances\ncar = Vehicle("Toyota", "Corolla")\nbike = Vehicle("Honda", "CBR")\n\n# Modifying instance attribute\ncar.model = "Camry"\n\nprint(car.model)  # Output: Camry\nprint(bike.model)  # Output: CBR\n'})}),"\n",(0,a.jsx)(n.h2,{id:"practical-considerations",children:"Practical Considerations"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Use class attributes for properties that should be shared across all instances, such as default settings or constants."}),"\n",(0,a.jsx)(n.li,{children:"Use instance attributes for properties that vary between instances, such as unique identifiers or specific states."}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"example-combining-class-and-instance-attributes",children:"Example: Combining Class and Instance Attributes"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'class Employee:\n    # Class attribute\n    company_name = "TechCorp"\n\n    def __init__(self, name, position):\n        self.name = name  # Instance attribute\n        self.position = position  # Instance attribute\n\n# Creating instances\nemp1 = Employee("Alice", "Developer")\nemp2 = Employee("Bob", "Manager")\n\n# Accessing class and instance attributes\nprint(emp1.company_name)  # Output: TechCorp\nprint(emp2.company_name)  # Output: TechCorp\n\nprint(emp1.name)  # Output: Alice\nprint(emp1.position)  # Output: Developer\n\nprint(emp2.name)  # Output: Bob\nprint(emp2.position)  # Output: Manager\n\n# Modifying class attribute\nEmployee.company_name = "Innovatech"\n\nprint(emp1.company_name)  # Output: Innovatech\nprint(emp2.company_name)  # Output: Innovatech\n'})}),"\n",(0,a.jsxs)(n.p,{children:["In this example, ",(0,a.jsx)(n.code,{children:"company_name"})," is a class attribute shared among all instances, while ",(0,a.jsx)(n.code,{children:"name"})," and ",(0,a.jsx)(n.code,{children:"position"})," are instance attributes unique to each ",(0,a.jsx)(n.code,{children:"Employee"})," instance."]}),"\n",(0,a.jsx)(n.p,{children:"Understanding and correctly using class and instance attributes is fundamental to writing clear and maintainable object-oriented code in Python. This distinction allows developers to design classes that effectively encapsulate both shared and unique properties of the objects they model."})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>r});var s=t(6540);const a={},i=s.createContext(a);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);