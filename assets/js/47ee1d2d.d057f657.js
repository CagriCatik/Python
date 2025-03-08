"use strict";(self.webpackChunkpython=self.webpackChunkpython||[]).push([[7947],{2231:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"solid/srp","title":"Single Responsibility Principle","description":"The Single Responsibility Principle (SRP) is one of the five SOLID design principles. It states that a class or module should have only one reason to change\u2014in other words, it should perform only one task or hold a single responsibility. In the automotive industry, where software is responsible for a multitude of functions (from engine control and diagnostics to infotainment systems), following SRP is critical. It helps reduce complexity, improve maintainability, and ensure that changes in one part of the system do not inadvertently affect others.","source":"@site/docs/solid/01_srp.md","sourceDirName":"solid","slug":"/solid/srp","permalink":"/Python/docs/solid/srp","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/solid/01_srp.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{},"sidebar":"solidSidebar","previous":{"title":"Getting Started","permalink":"/Python/docs/solid/getting-started"},"next":{"title":"Open/Closed Principle","permalink":"/Python/docs/solid/ocp"}}');var i=t(4848),o=t(8453);const a={},r="Single Responsibility Principle",l={},d=[{value:"What is SRP?",id:"what-is-srp",level:2},{value:"Importance of SRP in Automotive Software",id:"importance-of-srp-in-automotive-software",level:2},{value:"Automotive Example: OBD System",id:"automotive-example-obd-system",level:2},{value:"Bad Practice Example",id:"bad-practice-example",level:3},{value:"Best Practice Example",id:"best-practice-example",level:3},{value:"Conclusion",id:"conclusion",level:2}];function c(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"single-responsibility-principle",children:"Single Responsibility Principle"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Single Responsibility Principle (SRP)"})," is one of the five SOLID design principles. It states that ",(0,i.jsx)(n.strong,{children:"a class or module should have only one reason to change"}),"\u2014in other words, it should perform only one task or hold a single responsibility. In the automotive industry, where software is responsible for a multitude of functions (from engine control and diagnostics to infotainment systems), following SRP is critical. It helps reduce complexity, improve maintainability, and ensure that changes in one part of the system do not inadvertently affect others."]}),"\n",(0,i.jsx)(n.h2,{id:"what-is-srp",children:"What is SRP?"}),"\n",(0,i.jsxs)(n.p,{children:["SRP is about ",(0,i.jsx)(n.strong,{children:"separation of concerns"}),". When a class is responsible for more than one functionality, it becomes more challenging to maintain and test. A change in one responsibility might have unintended side effects on another, leading to higher risks of bugs and system failures. By ensuring that each component of the software has only a single responsibility, engineers can isolate changes, making the system more robust and easier to update."]}),"\n",(0,i.jsx)(n.h2,{id:"importance-of-srp-in-automotive-software",children:"Importance of SRP in Automotive Software"}),"\n",(0,i.jsx)(n.p,{children:"Automotive software often needs to be:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Highly reliable:"})," Safety-critical systems must perform without unexpected side effects."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Easily maintainable:"})," Automotive systems undergo regular updates to comply with new regulations or integrate new features."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Modular:"})," With multiple subsystems (e.g., engine diagnostics, sensor data collection, and report generation), a modular design helps teams work on different aspects concurrently without interference."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["For example, consider an ",(0,i.jsx)(n.strong,{children:"On-Board Diagnostics (OBD)"})," system. Such a system might gather sensor data (like vehicle speed and fuel levels) and also generate reports for further analysis or display. Combining these two tasks in one class would mean that any change in the way data is reported (perhaps due to a new format requirement) could affect the sensor data collection logic\u2014and vice versa."]}),"\n",(0,i.jsx)(n.h2,{id:"automotive-example-obd-system",children:"Automotive Example: OBD System"}),"\n",(0,i.jsx)(n.p,{children:"To illustrate SRP, let\u2019s consider a simplified OBD system. We'll first show a design that violates SRP by mixing responsibilities and then refactor it into a design that adheres to SRP."}),"\n",(0,i.jsx)(n.h3,{id:"bad-practice-example",children:"Bad Practice Example"}),"\n",(0,i.jsxs)(n.p,{children:["In the following example, the ",(0,i.jsx)(n.code,{children:"OBDSystem"})," class is responsible for both collecting diagnostic data from the vehicle's sensors and generating a report from that data. This violates SRP because the class has multiple reasons to change."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'class OBDSystem:\n    """\n    Represents an On-Board Diagnostics (OBD) system that handles both data collection and report generation.\n    This design violates the Single Responsibility Principle.\n    """\n    def __init__(self):\n        self.data = []\n    \n    def collect_data(self):\n        # Simulate reading sensor data (e.g., speed, fuel level)\n        self.data.append("Speed: 100 km/h")\n        self.data.append("Fuel: 50%")\n    \n    def generate_report(self):\n        # Generate a simple report from the collected data\n        report_lines = []\n        for entry in self.data:\n            report_lines.append(f"Report Entry: {entry}")\n        return "\\n".join(report_lines)\n\n# Usage of the bad design:\nobd = OBDSystem()\nobd.collect_data()\nprint(obd.generate_report())\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Issues with the Bad Example:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Multiple Responsibilities:"})," The class handles both sensor data collection and report generation."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Inflexibility:"})," Changes in how data is collected or how the report is formatted require modifying the same class, increasing the chance of bugs."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Difficult Maintenance:"})," Testing and debugging become more challenging because the class does too much."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"best-practice-example",children:"Best Practice Example"}),"\n",(0,i.jsx)(n.p,{children:"Now, we refactor the design by separating the responsibilities into two distinct classes: one for data collection and one for report generation. This approach adheres to SRP."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'class OBDDataCollector:\n    """\n    Responsible solely for collecting diagnostic data from vehicle sensors.\n    Adheres to the Single Responsibility Principle by focusing only on data collection.\n    """\n    def __init__(self):\n        self.data = []\n    \n    def collect_data(self):\n        # Simulate reading sensor data\n        self.data.clear()  # Clear previous data\n        self.data.append("Speed: 100 km/h")\n        self.data.append("Fuel: 50%")\n        return self.data\n\nclass OBDReportGenerator:\n    """\n    Responsible solely for generating reports from diagnostic data.\n    This class has one well-defined responsibility: report generation.\n    """\n    def generate_report(self, data):\n        # Generate a formatted report based on the collected data\n        report_lines = [f"Report Entry: {entry}" for entry in data]\n        return "\\n".join(report_lines)\n\n# Usage of the SRP-compliant design:\ncollector = OBDDataCollector()\ndiagnostic_data = collector.collect_data()  # Only collects sensor data\n\nreporter = OBDReportGenerator()\nprint(reporter.generate_report(diagnostic_data))  # Only generates report from data\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Benefits of the Best Practice Example:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Separation of Concerns:"})," Each class has a clear and single responsibility."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Enhanced Maintainability:"})," Changes to the reporting format or data collection methods can be made independently."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Improved Testability:"})," Components can be unit tested in isolation, ensuring robust and reliable code."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Flexibility:"})," New features or modifications in one module (e.g., new sensor types or report formats) do not affect the other module."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsx)(n.p,{children:"The Single Responsibility Principle is a cornerstone of clean software architecture\u2014especially in the automotive domain where safety, reliability, and maintainability are paramount. By ensuring that each class or module in the software has only one reason to change, automotive systems become easier to maintain, test, and extend. The provided OBD system example demonstrates how separating data collection from report generation leads to a more modular, flexible, and robust design."}),"\n",(0,i.jsx)(n.p,{children:"Adopting SRP in automotive applications not only simplifies development and maintenance but also paves the way for future scalability and integration of new technologies, ensuring that automotive software remains reliable and adaptable in a rapidly evolving industry."})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var s=t(6540);const i={},o=s.createContext(i);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);