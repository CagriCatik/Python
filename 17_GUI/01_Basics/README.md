# **PySide Basics**

## **1. Introduction to PySide**
PySide is a Python binding for the Qt application framework. It enables the development of cross-platform GUI applications. This documentation covers essential PySide concepts, including the use of `QWidget`, `QMainWindow`, signals and slots, layout management, and basic widgets.

---

## **2. Understanding `QWidget` and `QMainWindow`**

### **`QWidget`**
- The base class for all UI objects in PySide.
- Represents a rectangular area in a window.

### **`QMainWindow`**
- A specialized widget that provides a framework for building complex applications.
- Includes predefined layout areas such as a menu bar, toolbar, status bar, and central widget.

### **Example: Using `QWidget` and `QMainWindow`**

```python
import sys
from PySide6.QtWidgets import QApplication, QWidget, QMainWindow

# QWidget Example
class SimpleWidget(QWidget):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("QWidget Example")
        self.resize(300, 200)

# QMainWindow Example
class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("QMainWindow Example")
        self.resize(400, 300)

if __name__ == "__main__":
    app = QApplication(sys.argv)

    # Uncomment to try QWidget
    # window = SimpleWidget()

    # Uncomment to try QMainWindow
    window = MainWindow()

    window.show()
    sys.exit(app.exec())
```

---

## **3. Signals and Slots**

Signals and slots form the event handling mechanism in PySide:
- **Signals:** Events triggered by widgets.
- **Slots:** Functions that respond to signals.

### **Example: Connecting a Signal to a Slot**

```python
from PySide6.QtWidgets import QApplication, QPushButton, QVBoxLayout, QWidget

class SignalSlotExample(QWidget):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Signals and Slots")
        self.resize(200, 100)

        # Create a button
        self.button = QPushButton("Click Me")
        self.button.clicked.connect(self.on_button_click)  # Connect signal to slot

        # Layout
        layout = QVBoxLayout()
        layout.addWidget(self.button)
        self.setLayout(layout)

    def on_button_click(self):
        print("Button clicked!")

if __name__ == "__main__":
    app = QApplication([])
    window = SignalSlotExample()
    window.show()
    app.exec()
```

---

## **4. Layout Management**

### **4.1 `QVBoxLayout`**
Organizes widgets vertically.

```python
from PySide6.QtWidgets import QApplication, QVBoxLayout, QPushButton, QWidget

class VBoxLayoutExample(QWidget):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("QVBoxLayout Example")

        # Layout
        layout = QVBoxLayout()

        # Add buttons
        for i in range(3):
            layout.addWidget(QPushButton(f"Button {i + 1}"))

        self.setLayout(layout)

if __name__ == "__main__":
    app = QApplication([])
    window = VBoxLayoutExample()
    window.show()
    app.exec()
```

### **4.2 `QHBoxLayout`**
Organizes widgets horizontally.

```python
class HBoxLayoutExample(QWidget):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("QHBoxLayout Example")

        # Layout
        layout = QHBoxLayout()

        # Add buttons
        for i in range(3):
            layout.addWidget(QPushButton(f"Button {i + 1}"))

        self.setLayout(layout)
```

### **4.3 `QGridLayout`**
Arranges widgets in a grid.

```python
from PySide6.QtWidgets import QGridLayout

class GridLayoutExample(QWidget):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("QGridLayout Example")

        # Layout
        layout = QGridLayout()

        # Add buttons
        for row in range(2):
            for col in range(3):
                layout.addWidget(QPushButton(f"({row}, {col})"), row, col)

        self.setLayout(layout)
```

### **4.4 `QStackedLayout`**
Stacks widgets on top of each other, displaying only one at a time.

```python
from PySide6.QtWidgets import QStackedLayout

class StackedLayoutExample(QWidget):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("QStackedLayout Example")

        # Layout
        self.layout = QStackedLayout()

        # Add widgets
        for i in range(3):
            self.layout.addWidget(QPushButton(f"Page {i + 1}"))

        self.setLayout(self.layout)
        self.layout.setCurrentIndex(1)  # Show the second page
```

---

## **5. Basic Widgets**

### **5.1 `QLabel`, `QPushButton`, `QLineEdit`, and `QTextEdit`**
```python
from PySide6.QtWidgets import QLabel, QLineEdit, QTextEdit

class BasicWidgetsExample(QWidget):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Basic Widgets")

        # Layout
        layout = QVBoxLayout()

        # Add widgets
        layout.addWidget(QLabel("This is a QLabel"))
        layout.addWidget(QPushButton("This is a QPushButton"))
        layout.addWidget(QLineEdit("This is a QLineEdit"))
        layout.addWidget(QTextEdit("This is a QTextEdit"))

        self.setLayout(layout)
```

### **5.2 `QCheckBox`, `QRadioButton`, and `QComboBox`**
```python
from PySide6.QtWidgets import QCheckBox, QRadioButton, QComboBox

class AdditionalWidgetsExample(QWidget):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Additional Widgets")

        # Layout
        layout = QVBoxLayout()

        # Add widgets
        layout.addWidget(QCheckBox("This is a QCheckBox"))
        layout.addWidget(QRadioButton("This is a QRadioButton"))
        
        combo_box = QComboBox()
        combo_box.addItems(["Option 1", "Option 2", "Option 3"])
        layout.addWidget(combo_box)

        self.setLayout(layout)
```

---

## **Conclusion**
This documentation introduces the basics of PySide, focusing on foundational concepts, layout management, and essential widgets. Each section includes practical code examples to help you start building robust GUI applications.