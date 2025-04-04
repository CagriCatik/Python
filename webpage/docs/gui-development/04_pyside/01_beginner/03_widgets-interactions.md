# Basic Widgets and Interaction

In this part, you'll learn how to use some of the core widgets in PySide6—namely, QLabel, QPushButton, and QLineEdit—and how to connect signals (like a button click) to slots (functions) to respond to user actions.

---

## Step 1: Introduction to the Widgets

- **QLabel:**  
  Displays text or images. In our example, it will show a message to the user.

- **QLineEdit:**  
  Provides a single-line text input where users can type information. We’ll use this to allow the user to enter their name.

- **QPushButton:**  
  A clickable button that triggers actions. We'll connect its click event to a function that reads the input from QLineEdit and updates the QLabel.

---

## Step 2: Connecting Signals to Slots

In PySide6, widgets emit signals when specific events occur (e.g., when a button is clicked). Slots are functions that are called in response to these signals. In our example, clicking the button will trigger a slot function that updates the label with the text entered in the line edit.

---

## Step 3: Example Code

Create a Python file (e.g., `basic_widgets.py`) and add the following code:

```python
import sys
from PySide6.QtWidgets import QApplication, QMainWindow, QWidget, QLabel, QPushButton, QLineEdit, QVBoxLayout
from PySide6.QtCore import Qt

class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Basic Widgets and Interaction")

        # Create a QLabel to display messages
        self.label = QLabel("Enter your name and press the button")
        self.label.setAlignment(Qt.AlignCenter)

        # Create a QLineEdit for text input
        self.line_edit = QLineEdit()
        self.line_edit.setPlaceholderText("Enter your name")

        # Create a QPushButton that the user will click
        self.button = QPushButton("Submit")
        # Connect the button's clicked signal to a custom slot function
        self.button.clicked.connect(self.on_button_clicked)

        # Set up a vertical layout and add the widgets
        layout = QVBoxLayout()
        layout.addWidget(self.label)
        layout.addWidget(self.line_edit)
        layout.addWidget(self.button)

        # Create a container widget, set the layout, and assign it as the central widget
        container = QWidget()
        container.setLayout(layout)
        self.setCentralWidget(container)

    def on_button_clicked(self):
        # Retrieve text from the line edit
        name = self.line_edit.text()
        if name:
            # Update the label with a greeting message
            self.label.setText(f"Hello, {name}!")
        else:
            # Prompt the user to enter their name if the field is empty
            self.label.setText("Please enter your name.")

# Create the application instance and run the event loop
app = QApplication(sys.argv)
window = MainWindow()
window.show()
sys.exit(app.exec())
```

---

## How It Works

1. **Creating the Widgets:**  
   - A **QLabel** displays the initial message.
   - A **QLineEdit** allows the user to input their name.
   - A **QPushButton** is used to submit the input.

2. **Layout Management:**  
   - A **QVBoxLayout** organizes the widgets vertically.
   - The layout is set on a container QWidget, which becomes the central widget of the main window.

3. **Signals and Slots:**  
   - The button’s `clicked` signal is connected to the `on_button_clicked` method.
   - When the button is clicked, `on_button_clicked` retrieves the text from the QLineEdit and updates the QLabel accordingly.

4. **Event Loop:**  
   - The application starts its event loop with `app.exec()`, waiting for user interactions.
