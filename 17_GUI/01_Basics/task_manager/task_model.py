class Task:
    def __init__(self, description: str, priority: str, completed: bool = False):
        self.description = description
        self.priority = priority
        self.completed = completed

    def to_dict(self):
        return {
            "description": self.description,
            "priority": self.priority,
            "completed": self.completed
        }

    @staticmethod
    def from_dict(data):
        return Task(data["description"], data["priority"], data["completed"])
