# Creating Your First Application

In this tutorial, we'll create a simple “Hello World” application using PySide6. You’ll learn how to set up a basic GUI using QApplication and QMainWindow and understand the role of the event loop in running your application.

---

## Step 1: Write the "Hello World" App

Create a new Python file (e.g., `hello_app.py`) and enter the following code:

```python
import sys
from PySide6.QtWidgets import QApplication, QMainWindow, QLabel
from PySide6.QtCore import Qt

# Create an instance of QApplication.
# This object manages application-wide resources and is required for any PySide6 app.
app = QApplication(sys.argv)

# Create the main window using QMainWindow.
window = QMainWindow()
window.setWindowTitle("Hello World App")
window.resize(400, 300)

# Create a QLabel widget to display the "Hello, World!" message.
# Set the label alignment to center.
label = QLabel("Hello, World!")
label.setAlignment(Qt.AlignCenter)

# Set the label as the central widget of the main window.
window.setCentralWidget(label)

# Display the main window.
window.show()

# Start the event loop.
# The application will continue to run until the window is closed.
sys.exit(app.exec())
```

---

## Step 2: Understanding the Code

### QApplication and QMainWindow

- **QApplication:**  
  The QApplication object is the foundation of any PySide6 application. It manages the application’s control flow and main settings. Every GUI application needs one instance of QApplication.

- **QMainWindow:**  
  QMainWindow provides a main application window with a predefined layout. It comes with features like a menu bar, status bar, and a central widget area where you can place your primary content.

### Central Widget and QLabel

- **QLabel:**  
  In this example, a QLabel is used to display the “Hello, World!” text. By calling `setAlignment(Qt.AlignCenter)`, the text is centered within the label.
  
- **Setting the Central Widget:**  
  The `setCentralWidget(label)` method tells the QMainWindow to use the label as the main content of the window.

### The Event Loop

- **Event Loop:**  
  When `app.exec()` is called, it starts the event loop. The event loop is the mechanism that waits for user interactions (like mouse clicks and key presses) and other events, dispatching them to the appropriate handlers. The loop continues to run until the application is closed.
  
- **Exiting the Application:**  
  `sys.exit(app.exec())` ensures that the application exits cleanly, passing the exit status from the event loop back to the operating system.

