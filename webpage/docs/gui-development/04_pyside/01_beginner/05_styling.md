# Styling and Widget Properties

In this section, we'll learn how to customize the appearance of your PySide6 widgets and explore some basic widget properties and methods. You'll see how to set window titles, icons, fonts, and colors, and get an introduction to various widget properties.

---

## Step 1: Customizing the Window and Widgets

- **Window Title and Icon:**  
  Set a custom title for your window using `setWindowTitle()` and assign an icon with `setWindowIcon()`.  
- **Fonts:**  
  Customize the text appearance of widgets by setting custom fonts using the QFont class.  
- **Colors and Styles:**  
  Use style sheets to modify colors, padding, borders, and other visual properties for widgets.

---

## Step 2: Example Code

Below is an example that demonstrates these concepts. Make sure to have an icon file (e.g., `icon.png`) in your project directory or adjust the path as needed.

```python
import sys
from PySide6.QtWidgets import QApplication, QMainWindow, QLabel, QVBoxLayout, QWidget, QPushButton, QLineEdit
from PySide6.QtGui import QFont, QIcon
from PySide6.QtCore import Qt

class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        
        # Set window title and icon
        self.setWindowTitle("Styled PySide6 App")
        self.setWindowIcon(QIcon("icon.png"))  # Ensure 'icon.png' is in your project folder

        # Create a central widget and apply a vertical layout
        central_widget = QWidget()
        self.setCentralWidget(central_widget)
        layout = QVBoxLayout(central_widget)

        # Create a label and customize its properties
        label = QLabel("Welcome to the Styled App!")
        label.setAlignment(Qt.AlignCenter)
        label.setFont(QFont("Verdana", 16, QFont.Bold))
        label.setStyleSheet("color: white; background-color: #0078D7; padding: 10px;")
        layout.addWidget(label)

        # Create a line edit widget with a placeholder and custom styling
        line_edit = QLineEdit()
        line_edit.setPlaceholderText("Type something here...")
        line_edit.setFont(QFont("Courier New", 12))
        line_edit.setStyleSheet("border: 2px solid #0078D7; border-radius: 5px; padding: 5px;")
        layout.addWidget(line_edit)

        # Create a button with a custom style and font
        button = QPushButton("Click Me")
        button.setFont(QFont("Arial", 14))
        button.setStyleSheet("""
            QPushButton {
                background-color: #28a745;
                color: white;
                border-radius: 10px;
                padding: 10px;
            }
            QPushButton:hover {
                background-color: #218838;
            }
        """)
        layout.addWidget(button)

# Create the application instance and run the event loop
app = QApplication(sys.argv)
window = MainWindow()
window.resize(400, 300)
window.show()
sys.exit(app.exec())
```

---

## Explanation

1. **Window Customization:**  
   - `setWindowTitle("Styled PySide6 App")` sets the window title.  
   - `setWindowIcon(QIcon("icon.png"))` assigns an icon to the window (make sure the file exists).

2. **Label Styling:**  
   - The label is centered with `setAlignment(Qt.AlignCenter)`.  
   - Its font is set to Verdana, size 16, bold using `QFont("Verdana", 16, QFont.Bold)`.  
   - A style sheet sets the text color to white, the background to a blue shade, and adds padding.

3. **Line Edit Customization:**  
   - A placeholder text guides the user with `setPlaceholderText()`.  
   - A monospaced font ("Courier New") is applied, and a border with rounded corners is set via a style sheet.

4. **Button Styling and Interaction:**  
   - The button uses Arial font at size 14.  
   - Its style sheet sets a green background, white text, rounded corners, and custom padding.  
   - A hover effect is added to change the background color when the mouse is over the button.

5. **Widget Properties and Methods:**  
   - Methods like `setFont()`, `setStyleSheet()`, and `setPlaceholderText()` are used to modify widget properties.  
   - Layouts (here, QVBoxLayout) ensure that widgets are arranged responsively when the window is resized.
