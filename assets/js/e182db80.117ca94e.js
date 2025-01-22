"use strict";(self.webpackChunkmy_docusaurus_site=self.webpackChunkmy_docusaurus_site||[]).push([[6925],{1634:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"design-patterns/behavioral/behavioral","title":"Introduction","description":"Behavioral design patterns focus on object collaboration and responsibilities, describing how objects interact and communicate with each other to fulfill certain tasks. They promote loose coupling and flexibility in the system\'s design. In this tutorial, we will explore three fundamental behavioral design patterns: Observer, Strategy, and Command.","source":"@site/docs/design-patterns/03_behavioral/01_behavioral.md","sourceDirName":"design-patterns/03_behavioral","slug":"/design-patterns/behavioral/behavioral","permalink":"/Python/docs/design-patterns/behavioral/behavioral","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/design-patterns/03_behavioral/01_behavioral.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{},"sidebar":"designPatternsSidebar","previous":{"title":"Behavioral Design Patterns","permalink":"/Python/docs/category/behavioral-design-patterns"}}');var a=t(4848),r=t(8453);const i={},o="Introduction",l={},c=[{value:"1. Observer Pattern",id:"1-observer-pattern",level:2},{value:"Key Features:",id:"key-features",level:3},{value:"Implementation:",id:"implementation",level:3},{value:"Usage:",id:"usage",level:3},{value:"Use Cases:",id:"use-cases",level:3},{value:"2. Strategy Pattern",id:"2-strategy-pattern",level:2},{value:"Key Features:",id:"key-features-1",level:3},{value:"Implementation:",id:"implementation-1",level:3},{value:"Usage:",id:"usage-1",level:3},{value:"Use Cases:",id:"use-cases-1",level:3},{value:"3. Command Pattern",id:"3-command-pattern",level:2},{value:"Key Features:",id:"key-features-2",level:3},{value:"Implementation:",id:"implementation-2",level:3},{value:"Usage:",id:"usage-2",level:3},{value:"Use Cases:",id:"use-cases-2",level:3},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"introduction",children:"Introduction"})}),"\n",(0,a.jsx)(n.p,{children:"Behavioral design patterns focus on object collaboration and responsibilities, describing how objects interact and communicate with each other to fulfill certain tasks. They promote loose coupling and flexibility in the system's design. In this tutorial, we will explore three fundamental behavioral design patterns: Observer, Strategy, and Command."}),"\n",(0,a.jsx)(n.h2,{id:"1-observer-pattern",children:"1. Observer Pattern"}),"\n",(0,a.jsx)(n.p,{children:"The Observer pattern defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically. It enables efficient communication between objects without them being tightly coupled."}),"\n",(0,a.jsx)(n.h3,{id:"key-features",children:"Key Features:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Subject, which maintains a list of observers and notifies them of state changes."}),"\n",(0,a.jsx)(n.li,{children:"Observer, which defines the interface for objects that should be notified of changes."}),"\n",(0,a.jsx)(n.li,{children:"Concrete subject, which implements the subject interface and sends notifications to observers."}),"\n",(0,a.jsx)(n.li,{children:"Concrete observer, which implements the observer interface and receives notifications from the subject."}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"implementation",children:"Implementation:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'from abc import ABC, abstractmethod\n\nclass Subject(ABC):\n    def __init__(self):\n        self._observers = []\n\n    def attach(self, observer):\n        self._observers.append(observer)\n\n    def detach(self, observer):\n        self._observers.remove(observer)\n\n    def notify(self):\n        for observer in self._observers:\n            observer.update()\n\nclass Observer(ABC):\n    @abstractmethod\n    def update(self):\n        pass\n\nclass ConcreteSubject(Subject):\n    def __init__(self):\n        super().__init__()\n        self._state = None\n\n    def get_state(self):\n        return self._state\n\n    def set_state(self, state):\n        self._state = state\n        self.notify()\n\nclass ConcreteObserver(Observer):\n    def __init__(self, subject):\n        self._subject = subject\n        self._subject.attach(self)\n\n    def update(self):\n        print(f"Observer updated, new state: {self._subject.get_state()}")\n'})}),"\n",(0,a.jsx)(n.h3,{id:"usage",children:"Usage:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'subject = ConcreteSubject()\nobserver1 = ConcreteObserver(subject)\nobserver2 = ConcreteObserver(subject)\n\nsubject.set_state("New State")\n'})}),"\n",(0,a.jsx)(n.h3,{id:"use-cases",children:"Use Cases:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Implementing distributed event handling systems."}),"\n",(0,a.jsx)(n.li,{children:"Maintaining consistency between related objects."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"2-strategy-pattern",children:"2. Strategy Pattern"}),"\n",(0,a.jsx)(n.p,{children:"The Strategy pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable. It allows the algorithm to vary independently from clients that use it, promoting flexibility and easy switching between different algorithms."}),"\n",(0,a.jsx)(n.h3,{id:"key-features-1",children:"Key Features:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Context, which maintains a reference to the strategy object and delegates algorithm execution to it."}),"\n",(0,a.jsx)(n.li,{children:"Strategy, which defines the interface for all supported algorithms."}),"\n",(0,a.jsx)(n.li,{children:"Concrete strategies, which implement specific algorithms."}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"implementation-1",children:"Implementation:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'from abc import ABC, abstractmethod\n\nclass Strategy(ABC):\n    @abstractmethod\n    def execute(self):\n        pass\n\nclass ConcreteStrategyA(Strategy):\n    def execute(self):\n        return "ConcreteStrategyA executed"\n\nclass ConcreteStrategyB(Strategy):\n    def execute(self):\n        return "ConcreteStrategyB executed"\n\nclass Context:\n    def __init__(self, strategy):\n        self._strategy = strategy\n\n    def set_strategy(self, strategy):\n        self._strategy = strategy\n\n    def execute_strategy(self):\n        return self._strategy.execute()\n'})}),"\n",(0,a.jsx)(n.h3,{id:"usage-1",children:"Usage:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'strategy_a = ConcreteStrategyA()\ncontext = Context(strategy_a)\nresult = context.execute_strategy()\nprint(result)  # Output: "ConcreteStrategyA executed"\n'})}),"\n",(0,a.jsx)(n.h3,{id:"use-cases-1",children:"Use Cases:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Dynamically selecting algorithms based on specific requirements."}),"\n",(0,a.jsx)(n.li,{children:"Encapsulating algorithm-specific logic."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"3-command-pattern",children:"3. Command Pattern"}),"\n",(0,a.jsx)(n.p,{children:"The Command pattern encapsulates a request as an object, thereby allowing for parameterization of clients with queues, requests, and operations. It decouples the sender and receiver of a request, allowing for parameterization of commands and enabling support for undoable operations."}),"\n",(0,a.jsx)(n.h3,{id:"key-features-2",children:"Key Features:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Command, which declares an interface for executing an operation."}),"\n",(0,a.jsx)(n.li,{children:"Concrete command, which defines a binding between a receiver object and an action."}),"\n",(0,a.jsx)(n.li,{children:"Invoker, which sends requests to execute commands."}),"\n",(0,a.jsx)(n.li,{children:"Receiver, which knows how to perform the requested operations."}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"implementation-2",children:"Implementation:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'from abc import ABC, abstractmethod\n\nclass Command(ABC):\n    @abstractmethod\n    def execute(self):\n        pass\n\nclass ConcreteCommand(Command):\n    def __init__(self, receiver):\n        self._receiver = receiver\n\n    def execute(self):\n        return self._receiver.action()\n\nclass Receiver:\n    def action(self):\n        return "Receiver action performed"\n\nclass Invoker:\n    def __init__(self):\n        self._command = None\n\n    def set_command(self, command):\n        self._command = command\n\n    def execute_command(self):\n        return self._command.execute()\n'})}),"\n",(0,a.jsx)(n.h3,{id:"usage-2",children:"Usage:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'receiver = Receiver()\ncommand = ConcreteCommand(receiver)\ninvoker = Invoker()\n\ninvoker.set_command(command)\nresult = invoker.execute_command()\nprint(result)  # Output: "Receiver action performed"\n'})}),"\n",(0,a.jsx)(n.h3,{id:"use-cases-2",children:"Use Cases:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Implementing undo/redo functionality."}),"\n",(0,a.jsx)(n.li,{children:"Queuing and scheduling requests."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,a.jsx)(n.p,{children:"Behavioral design patterns provide solutions for designing flexible and efficient object collaboration and responsibilities. By understanding and implementing patterns like Observer, Strategy, and Command, developers can improve code modularity, maintainability, and extensibility. These patterns offer proven techniques for managing object interaction complexity and promoting best practices in software architecture."})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var s=t(6540);const a={},r=s.createContext(a);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);