"use strict";(self.webpackChunkmy_docusaurus_site=self.webpackChunkmy_docusaurus_site||[]).push([[7281],{3625:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"guide/Design-Patterns/structural/README.md","title":"Comprehensive Tutorial on Structural Design Patterns","description":"Structural design patterns are a category of design patterns in software engineering that focus on object composition or structure. They address the arrangement of classes and objects to form larger structures, promoting flexibility and efficiency in software design. In this tutorial, we will delve into three fundamental structural design patterns: Adapter, Decorator, and Proxy.","source":"@site/docs/guide/16_Design-Patterns/02_structural/README.md.md","sourceDirName":"guide/16_Design-Patterns/02_structural","slug":"/guide/Design-Patterns/structural/README.md","permalink":"/Python/docs/guide/Design-Patterns/structural/README.md","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guide/16_Design-Patterns/02_structural/README.md.md","tags":[],"version":"current","frontMatter":{},"sidebar":"guideSidebar","previous":{"title":"Comprehensive Tutorial on Structural Design Patterns","permalink":"/Python/docs/guide/Design-Patterns/structural/"},"next":{"title":"Comprehensive Tutorial on Behavioral Design Patterns","permalink":"/Python/docs/guide/Design-Patterns/behavioral/"}}');var s=n(4848),a=n(8453);const i={},o="Comprehensive Tutorial on Structural Design Patterns",l={},c=[{value:"1. Adapter Pattern",id:"1-adapter-pattern",level:2},{value:"Key Features:",id:"key-features",level:3},{value:"Implementation:",id:"implementation",level:3},{value:"Usage:",id:"usage",level:3},{value:"Use Cases:",id:"use-cases",level:3},{value:"2. Decorator Pattern",id:"2-decorator-pattern",level:2},{value:"Key Features:",id:"key-features-1",level:3},{value:"Implementation:",id:"implementation-1",level:3},{value:"Usage:",id:"usage-1",level:3},{value:"Use Cases:",id:"use-cases-1",level:3},{value:"3. Proxy Pattern",id:"3-proxy-pattern",level:2},{value:"Key Features:",id:"key-features-2",level:3},{value:"Implementation:",id:"implementation-2",level:3},{value:"Usage:",id:"usage-2",level:3},{value:"Use Cases:",id:"use-cases-2",level:3},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"comprehensive-tutorial-on-structural-design-patterns",children:"Comprehensive Tutorial on Structural Design Patterns"})}),"\n",(0,s.jsx)(t.p,{children:"Structural design patterns are a category of design patterns in software engineering that focus on object composition or structure. They address the arrangement of classes and objects to form larger structures, promoting flexibility and efficiency in software design. In this tutorial, we will delve into three fundamental structural design patterns: Adapter, Decorator, and Proxy."}),"\n",(0,s.jsx)(t.h2,{id:"1-adapter-pattern",children:"1. Adapter Pattern"}),"\n",(0,s.jsx)(t.p,{children:"The Adapter pattern allows objects with incompatible interfaces to collaborate. It acts as a bridge between two incompatible interfaces, allowing them to work together seamlessly without the need for modifying existing code."}),"\n",(0,s.jsx)(t.h3,{id:"key-features",children:"Key Features:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Adapter interface that wraps the incompatible interface."}),"\n",(0,s.jsx)(t.li,{children:"Adaptee, which is the existing class with an incompatible interface."}),"\n",(0,s.jsx)(t.li,{children:"Client, which uses the Adapter to interact with the Adaptee."}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"implementation",children:"Implementation:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"class Target:\n    def request(self):\n        pass\n\nclass Adaptee:\n    def specific_request(self):\n        pass\n\nclass Adapter(Target):\n    def __init__(self, adaptee):\n        self.adaptee = adaptee\n\n    def request(self):\n        self.adaptee.specific_request()\n"})}),"\n",(0,s.jsx)(t.h3,{id:"usage",children:"Usage:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"adaptee = Adaptee()\nadapter = Adapter(adaptee)\nadapter.request()\n"})}),"\n",(0,s.jsx)(t.h3,{id:"use-cases",children:"Use Cases:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Integrating new features or third-party libraries with existing codebases."}),"\n",(0,s.jsx)(t.li,{children:"Interoperability between different systems with incompatible interfaces."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"2-decorator-pattern",children:"2. Decorator Pattern"}),"\n",(0,s.jsx)(t.p,{children:"The Decorator pattern adds behavior to objects dynamically without altering their structure. It allows for the extension of functionality of individual objects at runtime by wrapping them with decorator objects."}),"\n",(0,s.jsx)(t.h3,{id:"key-features-1",children:"Key Features:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Component interface, which defines the interface for objects that can be decorated."}),"\n",(0,s.jsx)(t.li,{children:"Concrete component, which is the base object to be decorated."}),"\n",(0,s.jsx)(t.li,{children:"Decorator, which adds additional behavior to the component."}),"\n",(0,s.jsx)(t.li,{children:"Concrete decorators, which implement specific behavior and can be stacked on top of each other."}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"implementation-1",children:"Implementation:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'from abc import ABC, abstractmethod\n\nclass Component(ABC):\n    @abstractmethod\n    def operation(self):\n        pass\n\nclass ConcreteComponent(Component):\n    def operation(self):\n        return "ConcreteComponent operation"\n\nclass Decorator(Component):\n    def __init__(self, component):\n        self._component = component\n\n    def operation(self):\n        return self._component.operation()\n\nclass ConcreteDecorator(Decorator):\n    def operation(self):\n        return f"ConcreteDecorator operation, {self._component.operation()}"\n'})}),"\n",(0,s.jsx)(t.h3,{id:"usage-1",children:"Usage:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'component = ConcreteComponent()\ndecorator = ConcreteDecorator(component)\nresult = decorator.operation()\nprint(result)  # Output: "ConcreteDecorator operation, ConcreteComponent operation"\n'})}),"\n",(0,s.jsx)(t.h3,{id:"use-cases-1",children:"Use Cases:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Adding responsibilities to objects dynamically."}),"\n",(0,s.jsx)(t.li,{children:"Extending the functionality of objects without subclassing."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"3-proxy-pattern",children:"3. Proxy Pattern"}),"\n",(0,s.jsx)(t.p,{children:"The Proxy pattern provides a surrogate or placeholder for another object to control access to it. It allows for the implementation of additional functionality such as lazy initialization, access control, logging, and monitoring of objects."}),"\n",(0,s.jsx)(t.h3,{id:"key-features-2",children:"Key Features:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Subject interface, which defines the common interface for the RealSubject and Proxy."}),"\n",(0,s.jsx)(t.li,{children:"RealSubject, which is the real object that the Proxy represents."}),"\n",(0,s.jsx)(t.li,{children:"Proxy, which acts as an intermediary between the client and the RealSubject."}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"implementation-2",children:"Implementation:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'from abc import ABC, abstractmethod\n\nclass Subject(ABC):\n    @abstractmethod\n    def request(self):\n        pass\n\nclass RealSubject(Subject):\n    def request(self):\n        return "RealSubject request"\n\nclass Proxy(Subject):\n    def __init__(self):\n        self._real_subject = RealSubject()\n\n    def request(self):\n        # Additional logic before forwarding request to RealSubject\n        return f"Proxy request, {self._real_subject.request()}"\n'})}),"\n",(0,s.jsx)(t.h3,{id:"usage-2",children:"Usage:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'proxy = Proxy()\nresult = proxy.request()\nprint(result)  # Output: "Proxy request, RealSubject request"\n'})}),"\n",(0,s.jsx)(t.h3,{id:"use-cases-2",children:"Use Cases:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Implementing lazy initialization of objects."}),"\n",(0,s.jsx)(t.li,{children:"Controlling access to sensitive resources."}),"\n",(0,s.jsx)(t.li,{children:"Logging and monitoring of method calls."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsx)(t.p,{children:"Structural design patterns play a crucial role in software design by facilitating the composition of classes and objects to form larger structures. By understanding and implementing patterns like Adapter, Decorator, and Proxy, developers can improve code modularity, maintainability, and extensibility. These patterns offer proven techniques for managing object composition complexity and promoting best practices in software architecture."})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var r=n(6540);const s={},a=r.createContext(s);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);