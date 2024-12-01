from PySide6.QtWidgets import (
    QMainWindow, QWidget, QVBoxLayout, QHBoxLayout, 
    QLineEdit, QPushButton, QListWidget, QListWidgetItem, QComboBox
)
from PySide6.QtCore import Qt
from task_model import Task
import json

class TaskManager(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Task Manager")
        self.resize(500, 400)

        # Central Widget
        self.central_widget = QWidget()
        self.setCentralWidget(self.central_widget)

        # Main Layout
        self.layout = QVBoxLayout()
        self.central_widget.setLayout(self.layout)

        # Input Section
        self.input_layout = QHBoxLayout()
        self.task_input = QLineEdit()
        self.task_input.setPlaceholderText("Enter task description...")
        self.priority_selector = QComboBox()
        self.priority_selector.addItems(["Low", "Medium", "High"])
        self.add_button = QPushButton("Add Task")
        self.add_button.clicked.connect(self.add_task)

        self.input_layout.addWidget(self.task_input)
        self.input_layout.addWidget(self.priority_selector)
        self.input_layout.addWidget(self.add_button)
        self.layout.addLayout(self.input_layout)

        # Task List
        self.task_list = QListWidget()
        self.layout.addWidget(self.task_list)

        # Control Buttons
        self.control_layout = QHBoxLayout()
        self.delete_button = QPushButton("Delete Selected")
        self.delete_button.clicked.connect(self.delete_task)
        self.complete_button = QPushButton("Mark Completed")
        self.complete_button.clicked.connect(self.mark_completed)
        self.save_button = QPushButton("Save Tasks")
        self.save_button.clicked.connect(self.save_tasks)
        self.load_button = QPushButton("Load Tasks")
        self.load_button.clicked.connect(self.load_tasks)

        self.control_layout.addWidget(self.delete_button)
        self.control_layout.addWidget(self.complete_button)
        self.control_layout.addWidget(self.save_button)
        self.control_layout.addWidget(self.load_button)
        self.layout.addLayout(self.control_layout)

        # Tasks
        self.tasks = []

    def add_task(self):
        description = self.task_input.text().strip()
        priority = self.priority_selector.currentText()

        if description:
            task = Task(description, priority)
            self.tasks.append(task)
            self.update_task_list()
            self.task_input.clear()

    def update_task_list(self):
        self.task_list.clear()
        for task in self.tasks:
            item = QListWidgetItem(f"[{task.priority}] {task.description}")
            if task.completed:
                item.setFlags(Qt.NoItemFlags)
                item.setForeground(Qt.gray)
            self.task_list.addItem(item)

    def delete_task(self):
        selected_items = self.task_list.selectedItems()
        for item in selected_items:
            index = self.task_list.row(item)
            del self.tasks[index]
        self.update_task_list()

    def mark_completed(self):
        selected_items = self.task_list.selectedItems()
        for item in selected_items:
            index = self.task_list.row(item)
            self.tasks[index].completed = True
        self.update_task_list()

    def save_tasks(self):
        data = [task.to_dict() for task in self.tasks]
        with open("tasks.json", "w") as file:
            json.dump(data, file)
        print("Tasks saved to tasks.json")

    def load_tasks(self):
        try:
            with open("tasks.json", "r") as file:
                data = json.load(file)
                self.tasks = [Task.from_dict(task) for task in data]
                self.update_task_list()
        except FileNotFoundError:
            print("No tasks.json file found.")
