# Working with Layouts

In this tutorial, we'll learn how to arrange widgets in your window using layouts. Layouts help create responsive and organized interfaces without manually positioning each widget. We’ll explore two common layouts:

- **QVBoxLayout:** Arranges widgets vertically.
- **QHBoxLayout:** Arranges widgets horizontally.

We’ll also see how to set a central widget and apply a layout to it.

---

## Step-by-Step Tutorial

1. **Setting a Central Widget:**  
   In a QMainWindow, you can only set one central widget. This widget will contain your layout, and all other widgets will be added to it.

2. **Using QVBoxLayout:**  
   Create a QVBoxLayout to arrange widgets from top to bottom. This layout is great for stacking widgets vertically.

3. **Using QHBoxLayout:**  
   Within the vertical layout, you can nest a QHBoxLayout to arrange a group of widgets side by side.

---

## Example Code

Create a Python file (e.g., `layouts_example.py`) with the following code:

```python
import sys
from PySide6.QtWidgets import QApplication, QMainWindow, QWidget, QVBoxLayout, QHBoxLayout, QLabel, QPushButton

class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Working with Layouts")

        # Create a central widget and set it as the central widget of the main window
        central_widget = QWidget()
        self.setCentralWidget(central_widget)

        # Create a QVBoxLayout to arrange widgets vertically
        v_layout = QVBoxLayout(central_widget)

        # Add a label at the top
        top_label = QLabel("Top Label")
        v_layout.addWidget(top_label)

        # Create a QHBoxLayout to group buttons horizontally
        h_layout = QHBoxLayout()
        button1 = QPushButton("Button 1")
        button2 = QPushButton("Button 2")
        button3 = QPushButton("Button 3")
        h_layout.addWidget(button1)
        h_layout.addWidget(button2)
        h_layout.addWidget(button3)

        # Add the horizontal layout to the vertical layout
        v_layout.addLayout(h_layout)

        # Add another label at the bottom
        bottom_label = QLabel("Bottom Label")
        v_layout.addWidget(bottom_label)

# Create the application instance and run the event loop
app = QApplication(sys.argv)
window = MainWindow()
window.show()
sys.exit(app.exec())
```

---

## Explanation

- **Central Widget:**  
  We create a central widget (`QWidget`) and set it using `self.setCentralWidget(central_widget)`. All layouts and widgets are added to this widget.

- **QVBoxLayout:**  
  A vertical layout (`v_layout`) is applied to the central widget to stack widgets vertically.

- **QHBoxLayout:**  
  A horizontal layout (`h_layout`) is created and added to the vertical layout. This horizontal layout arranges three buttons side by side.

- **Responsive Design:**  
  By using layouts, the window automatically adjusts the size and position of widgets when resized, ensuring a responsive design.

This example demonstrates how to combine vertical and horizontal layouts to create a clean, responsive user interface in PySide6. Experiment with adding more widgets and different layouts to suit your application's needs!