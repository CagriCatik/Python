# **Dialogs and Input Handling in PySide6**

This guide demonstrates how to use built-in dialogs in PySide6 (`QFileDialog`, `QColorDialog`, `QFontDialog`, `QMessageBox`) and create custom dialogs with `QDialog`.

---

## **1. Using Built-in Dialogs**

### 1.1 File Selection with `QFileDialog`

The `QFileDialog` provides a dialog for selecting files or directories.

#### Code Example

```python
from PySide6.QtWidgets import QFileDialog, QMainWindow, QApplication
import sys

class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("File Dialog Example")

        self.open_file_dialog()

    def open_file_dialog(self):
        file_path, _ = QFileDialog.getOpenFileName(self, "Open File", "", "All Files (*);;Text Files (*.txt)")
        if file_path:
            print(f"Selected file: {file_path}")

if __name__ == "__main__":
    app = QApplication(sys.argv)
    window = MainWindow()
    window.show()
    sys.exit(app.exec())
```

---

### 1.2 Color Picker with `QColorDialog`

The `QColorDialog` provides a dialog for selecting colors.

#### Code Example

```python
from PySide6.QtWidgets import QColorDialog, QMainWindow, QApplication
from PySide6.QtGui import QColor
import sys

class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Color Dialog Example")

        self.pick_color()

    def pick_color(self):
        color = QColorDialog.getColor(QColor("blue"), self, "Pick a Color")
        if color.isValid():
            print(f"Selected color: {color.name()}")

if __name__ == "__main__":
    app = QApplication(sys.argv)
    window = MainWindow()
    window.show()
    sys.exit(app.exec())
```

---

### 1.3 Font Picker with `QFontDialog`

The `QFontDialog` provides a dialog for selecting fonts.

#### Code Example

```python
from PySide6.QtWidgets import QFontDialog, QMainWindow, QApplication
import sys

class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Font Dialog Example")

        self.pick_font()

    def pick_font(self):
        font, ok = QFontDialog.getFont(self)
        if ok:
            print(f"Selected font: {font.family()}")

if __name__ == "__main__":
    app = QApplication(sys.argv)
    window = MainWindow()
    window.show()
    sys.exit(app.exec())
```

---

### 1.4 Message Boxes with `QMessageBox`

The `QMessageBox` displays informational, warning, or error messages.

#### Code Example

```python
from PySide6.QtWidgets import QMessageBox, QMainWindow, QApplication
import sys

class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Message Box Example")

        self.show_message_box()

    def show_message_box(self):
        result = QMessageBox.information(self, "Information", "This is an information message.")
        if result == QMessageBox.Ok:
            print("OK clicked")

if __name__ == "__main__":
    app = QApplication(sys.argv)
    window = MainWindow()
    window.show()
    sys.exit(app.exec())
```

---

## **2. Creating Custom Dialogs with `QDialog`**

Custom dialogs allow for tailored input handling.

#### Code Example

```python
from PySide6.QtWidgets import QDialog, QLabel, QLineEdit, QPushButton, QVBoxLayout, QApplication
import sys

class CustomDialog(QDialog):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Custom Dialog")
        self.init_ui()

    def init_ui(self):
        layout = QVBoxLayout()

        # Add input field
        self.label = QLabel("Enter your name:")
        self.input_field = QLineEdit()

        # Add buttons
        self.ok_button = QPushButton("OK")
        self.cancel_button = QPushButton("Cancel")

        self.ok_button.clicked.connect(self.accept)
        self.cancel_button.clicked.connect(self.reject)

        # Add widgets to layout
        layout.addWidget(self.label)
        layout.addWidget(self.input_field)
        layout.addWidget(self.ok_button)
        layout.addWidget(self.cancel_button)

        self.setLayout(layout)

    def get_input(self):
        return self.input_field.text()


class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Custom Dialog Example")

        self.show_custom_dialog()

    def show_custom_dialog(self):
        dialog = CustomDialog()
        if dialog.exec():
            print(f"Name entered: {dialog.get_input()}")
        else:
            print("Dialog canceled")

if __name__ == "__main__":
    app = QApplication(sys.argv)
    window = MainWindow()
    window.show()
    sys.exit(app.exec())
```

---

## **Complete Project**

Below is a project integrating built-in dialogs and a custom dialog:

```python
class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Dialogs and Input Handling Example")
        self.setGeometry(100, 100, 400, 200)

        self.create_menu()

    def create_menu(self):
        menu_bar = self.menuBar()

        dialog_menu = menu_bar.addMenu("Dialogs")
        
        file_action = QAction("Open File", self)
        file_action.triggered.connect(self.open_file_dialog)
        dialog_menu.addAction(file_action)

        color_action = QAction("Pick Color", self)
        color_action.triggered.connect(self.pick_color)
        dialog_menu.addAction(color_action)

        font_action = QAction("Pick Font", self)
        font_action.triggered.connect(self.pick_font)
        dialog_menu.addAction(font_action)

        message_action = QAction("Show Message", self)
        message_action.triggered.connect(self.show_message)
        dialog_menu.addAction(message_action)

        custom_action = QAction("Custom Dialog", self)
        custom_action.triggered.connect(self.show_custom_dialog)
        dialog_menu.addAction(custom_action)

    def open_file_dialog(self):
        file_path, _ = QFileDialog.getOpenFileName(self, "Open File", "", "All Files (*)")
        if file_path:
            QMessageBox.information(self, "File Selected", f"Selected file: {file_path}")

    def pick_color(self):
        color = QColorDialog.getColor(self)
        if color.isValid():
            QMessageBox.information(self, "Color Selected", f"Selected color: {color.name()}")

    def pick_font(self):
        font, ok = QFontDialog.getFont(self)
        if ok:
            QMessageBox.information(self, "Font Selected", f"Selected font: {font.family()}")

    def show_message(self):
        QMessageBox.information(self, "Hello", "This is a message box.")

    def show_custom_dialog(self):
        dialog = CustomDialog()
        if dialog.exec():
            QMessageBox.information(self, "Name Entered", f"You entered: {dialog.get_input()}")


if __name__ == "__main__":
    app = QApplication(sys.argv)
    window = MainWindow()
    window.show()
    sys.exit(app.exec())
```
