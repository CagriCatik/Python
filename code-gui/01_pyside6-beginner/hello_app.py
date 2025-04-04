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
