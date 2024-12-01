from PySide6.QtWidgets import QApplication, QMainWindow, QToolBar, QTextEdit, QMenu, QFileDialog, QMessageBox
from PySide6.QtGui import QAction
from PySide6.QtCore import Qt
import sys


class TextEditor(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Text Editor")
        self.setGeometry(100, 100, 800, 600)

        # Central widget: QTextEdit for text editing
        self.text_edit = QTextEdit(self)
        self.setCentralWidget(self.text_edit)

        # Initialize UI components
        self.create_menu_bar()
        self.create_toolbar()

    def create_menu_bar(self):
        # Menu bar
        menu_bar = self.menuBar()

        # File menu
        file_menu = menu_bar.addMenu("File")
        new_action = QAction("New", self)
        new_action.triggered.connect(self.new_file)
        open_action = QAction("Open", self)
        open_action.triggered.connect(self.open_file)
        save_action = QAction("Save", self)
        save_action.triggered.connect(self.save_file)
        exit_action = QAction("Exit", self)
        exit_action.triggered.connect(self.close)

        file_menu.addAction(new_action)
        file_menu.addAction(open_action)
        file_menu.addAction(save_action)
        file_menu.addSeparator()
        file_menu.addAction(exit_action)

        # Edit menu
        edit_menu = menu_bar.addMenu("Edit")
        undo_action = QAction("Undo", self)
        undo_action.triggered.connect(self.text_edit.undo)
        redo_action = QAction("Redo", self)
        redo_action.triggered.connect(self.text_edit.redo)
        copy_action = QAction("Copy", self)
        copy_action.triggered.connect(self.text_edit.copy)
        cut_action = QAction("Cut", self)
        cut_action.triggered.connect(self.text_edit.cut)
        paste_action = QAction("Paste", self)
        paste_action.triggered.connect(self.text_edit.paste)

        edit_menu.addAction(undo_action)
        edit_menu.addAction(redo_action)
        edit_menu.addSeparator()
        edit_menu.addAction(copy_action)
        edit_menu.addAction(cut_action)
        edit_menu.addAction(paste_action)

    def create_toolbar(self):
        # Toolbar
        toolbar = QToolBar("Main Toolbar", self)
        self.addToolBar(toolbar)

        # Toolbar actions
        new_action = QAction("New", self)
        new_action.triggered.connect(self.new_file)
        open_action = QAction("Open", self)
        open_action.triggered.connect(self.open_file)
        save_action = QAction("Save", self)
        save_action.triggered.connect(self.save_file)

        toolbar.addAction(new_action)
        toolbar.addAction(open_action)
        toolbar.addAction(save_action)

    def contextMenuEvent(self, event):
        # Context menu
        context_menu = QMenu(self)
        copy_action = QAction("Copy", self)
        copy_action.triggered.connect(self.text_edit.copy)
        cut_action = QAction("Cut", self)
        cut_action.triggered.connect(self.text_edit.cut)
        paste_action = QAction("Paste", self)
        paste_action.triggered.connect(self.text_edit.paste)

        context_menu.addAction(copy_action)
        context_menu.addAction(cut_action)
        context_menu.addAction(paste_action)

        context_menu.exec(event.globalPos())

    def new_file(self):
        # Clear text edit for new file
        self.text_edit.clear()

    def open_file(self):
        # Open file dialog
        file_path, _ = QFileDialog.getOpenFileName(self, "Open File", "", "Text Files (*.txt);;All Files (*)")
        if file_path:
            try:
                with open(file_path, "r") as file:
                    content = file.read()
                    self.text_edit.setText(content)
            except Exception as e:
                QMessageBox.critical(self, "Error", f"Could not open file: {e}")

    def save_file(self):
        # Save file dialog
        file_path, _ = QFileDialog.getSaveFileName(self, "Save File", "", "Text Files (*.txt);;All Files (*)")
        if file_path:
            try:
                with open(file_path, "w") as file:
                    content = self.text_edit.toPlainText()
                    file.write(content)
            except Exception as e:
                QMessageBox.critical(self, "Error", f"Could not save file: {e}")


if __name__ == "__main__":
    app = QApplication(sys.argv)
    editor = TextEditor()
    editor.show()
    sys.exit(app.exec())
