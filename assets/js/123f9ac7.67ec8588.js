"use strict";(self.webpackChunkpython=self.webpackChunkpython||[]).push([[6249],{1223:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"gui-development/pyside/beginner/layouts","title":"Working with Layouts","description":"In this tutorial, we\'ll learn how to arrange widgets in your window using layouts. Layouts help create responsive and organized interfaces without manually positioning each widget. We\u2019ll explore two common layouts:","source":"@site/docs/gui-development/04_pyside/01_beginner/04_layouts.md","sourceDirName":"gui-development/04_pyside/01_beginner","slug":"/gui-development/pyside/beginner/layouts","permalink":"/Python/docs/gui-development/pyside/beginner/layouts","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/gui-development/04_pyside/01_beginner/04_layouts.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{},"sidebar":"guiSidebar","previous":{"title":"Basic Widgets and Interaction","permalink":"/Python/docs/gui-development/pyside/beginner/widgets-interactions"},"next":{"title":"Styling and Widget Properties","permalink":"/Python/docs/gui-development/pyside/beginner/styling"}}');var i=n(4848),a=n(8453);const s={},l="Working with Layouts",r={},d=[{value:"Step-by-Step Tutorial",id:"step-by-step-tutorial",level:2},{value:"Example Code",id:"example-code",level:2},{value:"Explanation",id:"explanation",level:2}];function u(e){const t={br:"br",code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"working-with-layouts",children:"Working with Layouts"})}),"\n",(0,i.jsx)(t.p,{children:"In this tutorial, we'll learn how to arrange widgets in your window using layouts. Layouts help create responsive and organized interfaces without manually positioning each widget. We\u2019ll explore two common layouts:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"QVBoxLayout:"})," Arranges widgets vertically."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"QHBoxLayout:"})," Arranges widgets horizontally."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"We\u2019ll also see how to set a central widget and apply a layout to it."}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"step-by-step-tutorial",children:"Step-by-Step Tutorial"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Setting a Central Widget:"}),(0,i.jsx)(t.br,{}),"\n","In a QMainWindow, you can only set one central widget. This widget will contain your layout, and all other widgets will be added to it."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Using QVBoxLayout:"}),(0,i.jsx)(t.br,{}),"\n","Create a QVBoxLayout to arrange widgets from top to bottom. This layout is great for stacking widgets vertically."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Using QHBoxLayout:"}),(0,i.jsx)(t.br,{}),"\n","Within the vertical layout, you can nest a QHBoxLayout to arrange a group of widgets side by side."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"example-code",children:"Example Code"}),"\n",(0,i.jsxs)(t.p,{children:["Create a Python file (e.g., ",(0,i.jsx)(t.code,{children:"layouts_example.py"}),") with the following code:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:'import sys\nfrom PySide6.QtWidgets import QApplication, QMainWindow, QWidget, QVBoxLayout, QHBoxLayout, QLabel, QPushButton\n\nclass MainWindow(QMainWindow):\n    def __init__(self):\n        super().__init__()\n        self.setWindowTitle("Working with Layouts")\n\n        # Create a central widget and set it as the central widget of the main window\n        central_widget = QWidget()\n        self.setCentralWidget(central_widget)\n\n        # Create a QVBoxLayout to arrange widgets vertically\n        v_layout = QVBoxLayout(central_widget)\n\n        # Add a label at the top\n        top_label = QLabel("Top Label")\n        v_layout.addWidget(top_label)\n\n        # Create a QHBoxLayout to group buttons horizontally\n        h_layout = QHBoxLayout()\n        button1 = QPushButton("Button 1")\n        button2 = QPushButton("Button 2")\n        button3 = QPushButton("Button 3")\n        h_layout.addWidget(button1)\n        h_layout.addWidget(button2)\n        h_layout.addWidget(button3)\n\n        # Add the horizontal layout to the vertical layout\n        v_layout.addLayout(h_layout)\n\n        # Add another label at the bottom\n        bottom_label = QLabel("Bottom Label")\n        v_layout.addWidget(bottom_label)\n\n# Create the application instance and run the event loop\napp = QApplication(sys.argv)\nwindow = MainWindow()\nwindow.show()\nsys.exit(app.exec())\n'})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"explanation",children:"Explanation"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Central Widget:"}),(0,i.jsx)(t.br,{}),"\n","We create a central widget (",(0,i.jsx)(t.code,{children:"QWidget"}),") and set it using ",(0,i.jsx)(t.code,{children:"self.setCentralWidget(central_widget)"}),". All layouts and widgets are added to this widget."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"QVBoxLayout:"}),(0,i.jsx)(t.br,{}),"\n","A vertical layout (",(0,i.jsx)(t.code,{children:"v_layout"}),") is applied to the central widget to stack widgets vertically."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"QHBoxLayout:"}),(0,i.jsx)(t.br,{}),"\n","A horizontal layout (",(0,i.jsx)(t.code,{children:"h_layout"}),") is created and added to the vertical layout. This horizontal layout arranges three buttons side by side."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Responsive Design:"}),(0,i.jsx)(t.br,{}),"\n","By using layouts, the window automatically adjusts the size and position of widgets when resized, ensuring a responsive design."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"This example demonstrates how to combine vertical and horizontal layouts to create a clean, responsive user interface in PySide6. Experiment with adding more widgets and different layouts to suit your application's needs!"})]})}function c(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var o=n(6540);const i={},a=o.createContext(i);function s(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);