import sys
from PySide6.QtWidgets import QApplication, QLabel

# Create the application instance.
app = QApplication(sys.argv)

# Create a simple label widget.
label = QLabel("Hello, PySide6!")
label.resize(200, 100)  # Optionally, set the window size.
label.show()           # Display the label.

# Start the event loop.
sys.exit(app.exec())
