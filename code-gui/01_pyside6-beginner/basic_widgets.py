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
