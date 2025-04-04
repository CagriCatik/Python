import sys
from PySide6.QtWidgets import (
    QApplication, QMainWindow, QWidget, QVBoxLayout, QHBoxLayout,
    QLabel, QPushButton, QLineEdit, QCheckBox, QRadioButton, QComboBox,
    QSlider, QProgressBar
)
from PySide6.QtGui import QFont, QIcon, QAction
from PySide6.QtCore import Qt

class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.dark_mode = False  # Start in normal (light) mode

        # Set window title and icon
        self.setWindowTitle("Enhanced Styled PySide6 App with Theme Toggle")
        self.setWindowIcon(QIcon("icon.png"))  # Ensure 'icon.png' exists in your project folder

        # Set up the status bar with an initial message
        self.statusBar().showMessage("Ready")

        # Create central widget and main layout
        central_widget = QWidget()
        self.setCentralWidget(central_widget)
        self.main_layout = QVBoxLayout(central_widget)

        # Add a theme toggle button
        self.theme_button = QPushButton("Switch to Dark Mode")
        self.theme_button.setFont(QFont("Arial", 12))
        self.theme_button.clicked.connect(self.toggle_theme)
        self.main_layout.addWidget(self.theme_button)

        # Add a label with custom styling
        self.label = QLabel("Welcome to the Enhanced Styled App!")
        self.label.setAlignment(Qt.AlignCenter)
        self.label.setFont(QFont("Verdana", 16, QFont.Bold))
        self.label.setStyleSheet("color: white; background-color: #0078D7; padding: 10px;")
        self.main_layout.addWidget(self.label)

        # Add a line edit widget with placeholder text
        self.line_edit = QLineEdit()
        self.line_edit.setPlaceholderText("Enter your name")
        self.line_edit.setFont(QFont("Courier New", 12))
        self.line_edit.setStyleSheet("border: 2px solid #0078D7; border-radius: 5px; padding: 5px;")
        self.main_layout.addWidget(self.line_edit)

        # Add a submit button with tooltip and interaction
        self.submit_button = QPushButton("Submit")
        self.submit_button.setToolTip("Click to submit your name")
        self.submit_button.setFont(QFont("Arial", 14))
        self.submit_button.setStyleSheet("""
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
        self.submit_button.clicked.connect(self.on_submit)
        self.main_layout.addWidget(self.submit_button)

        # Add a checkbox for additional options
        self.checkbox = QCheckBox("I agree to the terms and conditions")
        self.checkbox.setFont(QFont("Arial", 12))
        self.checkbox.setStyleSheet("padding: 5px;")
        self.main_layout.addWidget(self.checkbox)

        # Add radio buttons arranged horizontally
        radio_layout = QHBoxLayout()
        self.radio1 = QRadioButton("Option 1")
        self.radio2 = QRadioButton("Option 2")
        self.radio1.setFont(QFont("Arial", 12))
        self.radio2.setFont(QFont("Arial", 12))
        radio_layout.addWidget(self.radio1)
        radio_layout.addWidget(self.radio2)
        self.main_layout.addLayout(radio_layout)

        # Add a combo box with choices
        self.combo = QComboBox()
        self.combo.addItems(["Choice 1", "Choice 2", "Choice 3"])
        self.combo.setFont(QFont("Arial", 12))
        self.combo.setStyleSheet("padding: 5px;")
        self.main_layout.addWidget(self.combo)

        # Add a slider controlling a progress bar
        self.slider = QSlider(Qt.Horizontal)
        self.slider.setMinimum(0)
        self.slider.setMaximum(100)
        self.slider.setValue(50)
        self.slider.setStyleSheet("padding: 5px;")
        self.progress = QProgressBar()
        self.progress.setRange(0, 100)
        self.progress.setValue(50)
        self.slider.valueChanged.connect(self.progress.setValue)
        self.main_layout.addWidget(self.slider)
        self.main_layout.addWidget(self.progress)

        # Set overall background for the central widget in light mode
        central_widget.setStyleSheet("background-color: #f0f0f0;")

    def toggle_theme(self):
        """Toggle between light (normal) and dark modes, updating styles and status bar."""
        if self.dark_mode:
            # Switch to normal (light) mode
            self.centralWidget().setStyleSheet("background-color: #f0f0f0;")
            self.label.setStyleSheet("color: white; background-color: #0078D7; padding: 10px;")
            self.line_edit.setStyleSheet("border: 2px solid #0078D7; border-radius: 5px; padding: 5px;")
            self.submit_button.setStyleSheet("""
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
            self.theme_button.setText("Switch to Dark Mode")
            self.statusBar().showMessage("Switched to Normal Mode", 3000)
            self.dark_mode = False
        else:
            # Switch to dark mode
            self.centralWidget().setStyleSheet("background-color: #333333;")
            self.label.setStyleSheet("color: #cccccc; background-color: #555555; padding: 10px;")
            self.line_edit.setStyleSheet("border: 2px solid #555555; border-radius: 5px; padding: 5px; background-color: #444444; color: #eeeeee;")
            self.submit_button.setStyleSheet("""
                QPushButton {
                    background-color: #007BFF;
                    color: white;
                    border-radius: 10px;
                    padding: 10px;
                }
                QPushButton:hover {
                    background-color: #0056b3;
                }
            """)
            self.theme_button.setText("Switch to Normal Mode")
            self.statusBar().showMessage("Switched to Dark Mode", 3000)
            self.dark_mode = True

    def on_submit(self):
        """Handle submit button click: update label and status bar message."""
        name = self.line_edit.text()
        if name:
            self.label.setText(f"Hello, {name}!")
            self.statusBar().showMessage("Name submitted successfully", 3000)
        else:
            self.label.setText("Please enter your name.")
            self.statusBar().showMessage("No name entered", 3000)

app = QApplication(sys.argv)
window = MainWindow()
window.resize(600, 600)
window.show()
sys.exit(app.exec())
