"use strict";(self.webpackChunkpython=self.webpackChunkpython||[]).push([[6689],{8060:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"gui-development/pyside/beginner/styling","title":"Styling and Widget Properties","description":"In this section, we\'ll learn how to customize the appearance of your PySide6 widgets and explore some basic widget properties and methods. You\'ll see how to set window titles, icons, fonts, and colors, and get an introduction to various widget properties.","source":"@site/docs/gui-development/04_pyside/01_beginner/05_styling.md","sourceDirName":"gui-development/04_pyside/01_beginner","slug":"/gui-development/pyside/beginner/styling","permalink":"/Python/docs/gui-development/pyside/beginner/styling","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/gui-development/04_pyside/01_beginner/05_styling.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{},"sidebar":"guiSidebar","previous":{"title":"Working with Layouts","permalink":"/Python/docs/gui-development/pyside/beginner/layouts"}}');var s=t(4848),o=t(8453);const d={},r="Styling and Widget Properties",l={},a=[{value:"Step 1: Customizing the Window and Widgets",id:"step-1-customizing-the-window-and-widgets",level:2},{value:"Step 2: Example Code",id:"step-2-example-code",level:2},{value:"Explanation",id:"explanation",level:2}];function c(e){const n={br:"br",code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"styling-and-widget-properties",children:"Styling and Widget Properties"})}),"\n",(0,s.jsx)(n.p,{children:"In this section, we'll learn how to customize the appearance of your PySide6 widgets and explore some basic widget properties and methods. You'll see how to set window titles, icons, fonts, and colors, and get an introduction to various widget properties."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"step-1-customizing-the-window-and-widgets",children:"Step 1: Customizing the Window and Widgets"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Window Title and Icon:"}),(0,s.jsx)(n.br,{}),"\n","Set a custom title for your window using ",(0,s.jsx)(n.code,{children:"setWindowTitle()"})," and assign an icon with ",(0,s.jsx)(n.code,{children:"setWindowIcon()"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Fonts:"}),(0,s.jsx)(n.br,{}),"\n","Customize the text appearance of widgets by setting custom fonts using the QFont class."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Colors and Styles:"}),(0,s.jsx)(n.br,{}),"\n","Use style sheets to modify colors, padding, borders, and other visual properties for widgets."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"step-2-example-code",children:"Step 2: Example Code"}),"\n",(0,s.jsxs)(n.p,{children:["Below is an example that demonstrates these concepts. Make sure to have an icon file (e.g., ",(0,s.jsx)(n.code,{children:"icon.png"}),") in your project directory or adjust the path as needed."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import sys\nfrom PySide6.QtWidgets import QApplication, QMainWindow, QLabel, QVBoxLayout, QWidget, QPushButton, QLineEdit\nfrom PySide6.QtGui import QFont, QIcon\nfrom PySide6.QtCore import Qt\n\nclass MainWindow(QMainWindow):\n    def __init__(self):\n        super().__init__()\n        \n        # Set window title and icon\n        self.setWindowTitle("Styled PySide6 App")\n        self.setWindowIcon(QIcon("icon.png"))  # Ensure \'icon.png\' is in your project folder\n\n        # Create a central widget and apply a vertical layout\n        central_widget = QWidget()\n        self.setCentralWidget(central_widget)\n        layout = QVBoxLayout(central_widget)\n\n        # Create a label and customize its properties\n        label = QLabel("Welcome to the Styled App!")\n        label.setAlignment(Qt.AlignCenter)\n        label.setFont(QFont("Verdana", 16, QFont.Bold))\n        label.setStyleSheet("color: white; background-color: #0078D7; padding: 10px;")\n        layout.addWidget(label)\n\n        # Create a line edit widget with a placeholder and custom styling\n        line_edit = QLineEdit()\n        line_edit.setPlaceholderText("Type something here...")\n        line_edit.setFont(QFont("Courier New", 12))\n        line_edit.setStyleSheet("border: 2px solid #0078D7; border-radius: 5px; padding: 5px;")\n        layout.addWidget(line_edit)\n\n        # Create a button with a custom style and font\n        button = QPushButton("Click Me")\n        button.setFont(QFont("Arial", 14))\n        button.setStyleSheet("""\n            QPushButton {\n                background-color: #28a745;\n                color: white;\n                border-radius: 10px;\n                padding: 10px;\n            }\n            QPushButton:hover {\n                background-color: #218838;\n            }\n        """)\n        layout.addWidget(button)\n\n# Create the application instance and run the event loop\napp = QApplication(sys.argv)\nwindow = MainWindow()\nwindow.resize(400, 300)\nwindow.show()\nsys.exit(app.exec())\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"explanation",children:"Explanation"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Window Customization:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'setWindowTitle("Styled PySide6 App")'})," sets the window title."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'setWindowIcon(QIcon("icon.png"))'})," assigns an icon to the window (make sure the file exists)."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Label Styling:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The label is centered with ",(0,s.jsx)(n.code,{children:"setAlignment(Qt.AlignCenter)"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Its font is set to Verdana, size 16, bold using ",(0,s.jsx)(n.code,{children:'QFont("Verdana", 16, QFont.Bold)'}),"."]}),"\n",(0,s.jsx)(n.li,{children:"A style sheet sets the text color to white, the background to a blue shade, and adds padding."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Line Edit Customization:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["A placeholder text guides the user with ",(0,s.jsx)(n.code,{children:"setPlaceholderText()"}),"."]}),"\n",(0,s.jsx)(n.li,{children:'A monospaced font ("Courier New") is applied, and a border with rounded corners is set via a style sheet.'}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Button Styling and Interaction:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The button uses Arial font at size 14."}),"\n",(0,s.jsx)(n.li,{children:"Its style sheet sets a green background, white text, rounded corners, and custom padding."}),"\n",(0,s.jsx)(n.li,{children:"A hover effect is added to change the background color when the mouse is over the button."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Widget Properties and Methods:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Methods like ",(0,s.jsx)(n.code,{children:"setFont()"}),", ",(0,s.jsx)(n.code,{children:"setStyleSheet()"}),", and ",(0,s.jsx)(n.code,{children:"setPlaceholderText()"})," are used to modify widget properties."]}),"\n",(0,s.jsx)(n.li,{children:"Layouts (here, QVBoxLayout) ensure that widgets are arranged responsively when the window is resized."}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>r});var i=t(6540);const s={},o=i.createContext(s);function d(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);