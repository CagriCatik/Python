from PySide6.QtWidgets import (
    QApplication, QMainWindow, QMenuBar, QMenu, QFileDialog, QColorDialog,
    QFontDialog, QMessageBox, QDialog, QVBoxLayout, QLabel, QLineEdit, QPushButton, QTextEdit
)
from PySide6.QtGui import QAction, QIcon
from PySide6.QtCore import Qt
import sys


class CustomDialog(QDialog):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Custom Dialog")
        self.setFixedSize(300, 150)
        self.init_ui()

    def init_ui(self):
        layout = QVBoxLayout()

        self.label = QLabel("Enter your name:")
        self.input_field = QLineEdit()
        self.input_field.setPlaceholderText("Your name here")

        self.ok_button = QPushButton("OK")
        self.cancel_button = QPushButton("Cancel")
        self.ok_button.setDefault(True)

        # Connect buttons to dialog slots
        self.ok_button.clicked.connect(self.accept)
        self.cancel_button.clicked.connect(self.reject)

        # Add widgets to layout
        layout.addWidget(self.label)
        layout.addWidget(self.input_field)
        layout.addWidget(self.ok_button)
        layout.addWidget(self.cancel_button)

        self.setLayout(layout)

    def get_input(self):
        return self.input_field.text().strip()


class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Dialogs and Input Handling Example")
        self.setGeometry(100, 100, 600, 400)

        # Set window icon (optional)
        # self.setWindowIcon(QIcon('path_to_icon.png'))

        # Create a central widget for the main window
        self.text_edit = QTextEdit()
        self.text_edit.setPlaceholderText("You can type here...")
        self.setCentralWidget(self.text_edit)

        # Initialize current text color and font
        self.current_color = self.text_edit.textColor()
        self.current_font = self.text_edit.font()

        # Create the menu
        self.create_menu()

    def create_menu(self):
        # Menu bar
        menu_bar = self.menuBar()

        # Dialogs Menu
        dialog_menu = menu_bar.addMenu("Dialogs")

        # File dialog action
        file_action = QAction("Open File...", self)
        file_action.setShortcut("Ctrl+O")
        file_action.triggered.connect(self.open_file_dialog)
        dialog_menu.addAction(file_action)

        # Color picker action
        color_action = QAction("Pick Color...", self)
        color_action.setShortcut("Ctrl+C")
        color_action.triggered.connect(self.pick_color)
        dialog_menu.addAction(color_action)

        # Font picker action
        font_action = QAction("Pick Font...", self)
        font_action.setShortcut("Ctrl+F")
        font_action.triggered.connect(self.pick_font)
        dialog_menu.addAction(font_action)

        dialog_menu.addSeparator()

        # Message box action
        message_action = QAction("Show Message", self)
        message_action.setShortcut("Ctrl+M")
        message_action.triggered.connect(self.show_message)
        dialog_menu.addAction(message_action)

        # Custom dialog action
        custom_action = QAction("Custom Dialog...", self)
        custom_action.setShortcut("Ctrl+D")
        custom_action.triggered.connect(self.show_custom_dialog)
        dialog_menu.addAction(custom_action)

        # Exit action
        exit_action = QAction("Exit", self)
        exit_action.setShortcut("Ctrl+Q")
        exit_action.triggered.connect(self.close)
        dialog_menu.addSeparator()
        dialog_menu.addAction(exit_action)

    def open_file_dialog(self):
        options = QFileDialog.Options()
        # You can set options here if needed
        file_path, _ = QFileDialog.getOpenFileName(
            self,
            "Open Text File",
            "",
            "Text Files (*.txt);;All Files (*)",
            options=options
        )
        if file_path:
            try:
                with open(file_path, 'r', encoding='utf-8') as file:
                    content = file.read()
                self.text_edit.setPlainText(content)
                self.statusBar().showMessage(f"Opened file: {file_path}", 5000)
            except Exception as e:
                QMessageBox.critical(self, "Error", f"Could not open file:\n{e}")

    def pick_color(self):
        color = QColorDialog.getColor(initial=self.current_color, parent=self, title="Select Text Color")
        if color.isValid():
            self.current_color = color
            self.text_edit.setTextColor(color)
            self.statusBar().showMessage(f"Selected color: {color.name()}", 5000)

    def pick_font(self):
        font, ok = QFontDialog.getFont(self.current_font, self, "Select Font")
        if ok:
            self.current_font = font
            self.text_edit.setFont(font)
            self.statusBar().showMessage(f"Selected font: {font.family()}, {font.pointSize()}pt", 5000)

    def show_message(self):
        QMessageBox.information(self, "Information", "This is a PySide6 message box example!")

    def show_custom_dialog(self):
        dialog = CustomDialog()
        result = dialog.exec()
        if result == QDialog.Accepted:
            name = dialog.get_input()
            if name:
                self.text_edit.append(f"You entered: {name}")
                self.statusBar().showMessage(f"Name entered: {name}", 5000)
            else:
                QMessageBox.warning(self, "Input Error", "You did not enter a name.")
        else:
            QMessageBox.information(self, "Canceled", "Custom dialog was canceled.")

    def closeEvent(self, event):
        reply = QMessageBox.question(
            self,
            "Confirm Exit",
            "Are you sure you want to exit?",
            QMessageBox.Yes | QMessageBox.No,
            QMessageBox.No
        )
        if reply == QMessageBox.Yes:
            event.accept()
        else:
            event.ignore()


if __name__ == "__main__":
    app = QApplication(sys.argv)
    window = MainWindow()
    window.show()
    sys.exit(app.exec())
