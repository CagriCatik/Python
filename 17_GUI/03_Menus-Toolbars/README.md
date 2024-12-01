# **Working with Menus and Toolbars**

This guide explains how to work with menus and toolbars in PySide6. We will cover adding a menu bar, creating actions, adding toolbars, and creating context menus.

---

## **1. Adding a Menu Bar with `QMenuBar`**

A `QMenuBar` allows you to add menus at the top of the application window. These menus typically contain actions that the user can perform.

### Code Example

```python
from PySide6.QtWidgets import QApplication, QMainWindow, QMenuBar, QMenu, QAction
import sys

class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Menu Bar Example")

        # Create a menu bar
        menu_bar = self.menuBar()

        # Add a File menu
        file_menu = menu_bar.addMenu("File")

        # Add actions to the File menu
        open_action = QAction("Open", self)
        save_action = QAction("Save", self)
        exit_action = QAction("Exit", self)
        exit_action.triggered.connect(self.close)  # Connect action to close application

        file_menu.addAction(open_action)
        file_menu.addAction(save_action)
        file_menu.addSeparator()  # Add a separator
        file_menu.addAction(exit_action)

        # Add an Edit menu
        edit_menu = menu_bar.addMenu("Edit")
        edit_menu.addAction(QAction("Undo", self))
        edit_menu.addAction(QAction("Redo", self))

if __name__ == "__main__":
    app = QApplication(sys.argv)
    window = MainWindow()
    window.show()
    sys.exit(app.exec())
```

---

## **2. Creating Actions with `QAction`**

`QAction` represents an action that can be triggered from a menu, toolbar, or other widgets.

### Code Example

```python
class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("QAction Example")

        # Create actions
        open_action = QAction("Open", self)
        open_action.setShortcut("Ctrl+O")  # Add a shortcut
        open_action.triggered.connect(self.open_file)

        save_action = QAction("Save", self)
        save_action.setShortcut("Ctrl+S")
        save_action.triggered.connect(self.save_file)

        # Create menu bar and add actions
        menu_bar = self.menuBar()
        file_menu = menu_bar.addMenu("File")
        file_menu.addAction(open_action)
        file_menu.addAction(save_action)

    def open_file(self):
        print("Open file action triggered")

    def save_file(self):
        print("Save file action triggered")
```

---

## **3. Adding Toolbars with `QToolBar`**

Toolbars are horizontal or vertical bars that provide quick access to commonly used actions.

### Code Example

```python
from PySide6.QtWidgets import QToolBar

class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Toolbar Example")

        # Create a toolbar
        toolbar = QToolBar("Main Toolbar", self)
        self.addToolBar(toolbar)

        # Create actions for the toolbar
        new_action = QAction("New", self)
        open_action = QAction("Open", self)
        save_action = QAction("Save", self)

        # Add actions to the toolbar
        toolbar.addAction(new_action)
        toolbar.addAction(open_action)
        toolbar.addAction(save_action)

        # Connect actions to methods
        new_action.triggered.connect(self.new_file)
        open_action.triggered.connect(self.open_file)
        save_action.triggered.connect(self.save_file)

    def new_file(self):
        print("New file action triggered")

    def open_file(self):
        print("Open file action triggered")

    def save_file(self):
        print("Save file action triggered")
```

---

## **4. Context Menus with `QMenu`**

Context menus appear when the user right-clicks on a widget. These are implemented using the `contextMenuEvent` method and the `QMenu` class.

### Code Example

```python
from PySide6.QtCore import Qt

class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Context Menu Example")

    def contextMenuEvent(self, event):
        # Create a context menu
        context_menu = QMenu(self)

        # Add actions to the context menu
        cut_action = QAction("Cut", self)
        copy_action = QAction("Copy", self)
        paste_action = QAction("Paste", self)

        context_menu.addAction(cut_action)
        context_menu.addAction(copy_action)
        context_menu.addAction(paste_action)

        # Show the context menu at the cursor position
        context_menu.exec(event.globalPos())
```

---

## **Complete Example**

Here is a combined example demonstrating all the features discussed above.

```python
class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Menus and Toolbars Example")

        # Menu bar
        menu_bar = self.menuBar()
        file_menu = menu_bar.addMenu("File")
        open_action = QAction("Open", self)
        save_action = QAction("Save", self)
        file_menu.addAction(open_action)
        file_menu.addAction(save_action)

        # Toolbar
        toolbar = QToolBar("Main Toolbar", self)
        self.addToolBar(toolbar)
        toolbar.addAction(open_action)
        toolbar.addAction(save_action)

        # Context menu
    def contextMenuEvent(self, event):
        context_menu = QMenu(self)
        context_menu.addAction(QAction("Cut", self))
        context_menu.addAction(QAction("Copy", self))
        context_menu.addAction(QAction("Paste", self))
        context_menu.exec(event.globalPos())

if __name__ == "__main__":
    app = QApplication(sys.argv)
    window = MainWindow()
    window.show()
    sys.exit(app.exec())
```
