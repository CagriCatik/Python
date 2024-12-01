import sys
from PySide6.QtWidgets import QApplication
from task_manager import TaskManager

if __name__ == "__main__":
    app = QApplication(sys.argv)
    window = TaskManager()
    window.show()
    sys.exit(app.exec())
