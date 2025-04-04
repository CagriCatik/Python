import sys
from PySide6.QtWidgets import QApplication, QMainWindow, QWidget, QVBoxLayout, QHBoxLayout, QLabel, QPushButton
from PySide6.QtCore import Qt

class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Layouts with Lamps and Interaction")

        # Create a central widget and set it as the main window's central widget
        central_widget = QWidget()
        self.setCentralWidget(central_widget)

        # Create a vertical layout for the central widget
        main_layout = QVBoxLayout(central_widget)

        # Add a top label
        top_label = QLabel("Lamp Control Panel")
        top_label.setAlignment(Qt.AlignCenter)
        main_layout.addWidget(top_label)

        # Create multiple rows of button-lamp pairs
        for i in range(3):
            row_layout = QHBoxLayout()
            
            # Create a button for this row
            button = QPushButton(f"Toggle Lamp {i+1}")
            # Create a lamp indicator as a QLabel with fixed size and initial red color (off)
            lamp = QLabel()
            lamp.setFixedSize(30, 30)
            lamp.setStyleSheet("background-color: red; border-radius: 15px;")
            
            # Connect the button's clicked signal to toggle the lamp
            button.clicked.connect(lambda checked, lamp=lamp: self.toggle_lamp(lamp))
            
            # Add the button and lamp to the row layout
            row_layout.addWidget(button)
            row_layout.addWidget(lamp)
            
            # Add some spacing between pairs (optional)
            row_layout.addStretch()
            
            # Add the row layout to the main vertical layout
            main_layout.addLayout(row_layout)

        # Add a bottom label for additional information
        bottom_label = QLabel("Click a button to toggle its lamp.")
        bottom_label.setAlignment(Qt.AlignCenter)
        main_layout.addWidget(bottom_label)

    def toggle_lamp(self, lamp):
        """
        Toggle the lamp's color between red (off) and green (on).
        """
        current_style = lamp.styleSheet()
        if "red" in current_style:
            lamp.setStyleSheet("background-color: green; border-radius: 15px;")
        else:
            lamp.setStyleSheet("background-color: red; border-radius: 15px;")

# Create the application instance and start the event loop
app = QApplication(sys.argv)
window = MainWindow()
window.show()
sys.exit(app.exec())
