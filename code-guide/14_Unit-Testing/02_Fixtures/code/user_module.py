# user_module.py
class User:
    def __init__(self, user_id: int, username: str):
        self.user_id = user_id
        self.username = username

class UserManager:
    def __init__(self):
        self.users = []

    def add_user(self, user: User):
        self.users.append(user)

    def remove_user(self, user_id: int):
        self.users = [user for user in self.users if user.user_id != user_id]

    def get_user(self, user_id: int):
        for user in self.users:
            if user.user_id == user_id:
                return user
        return None

    def get_all_users(self):
        return self.users
