class Game:
    def __new__(cls, *args, **kwargs):
        print("Creating a new instance (constructor)")
        # Call the base implementation to create the instance
        instance = super(Game, cls).__new__(cls)
        return instance

    def __init__(self, name):
        print("Initializing the instance")
        self.name = name

# Create an instance of Game
game = Game("Chess")


class NoInstance:
    def __new__(cls, *args, **kwargs):
        print("Not creating an instance")
        # Return None instead of a new instance
        return None

    def __init__(self):
        print("This will not be printed because __new__ returned None")

# Attempt to create an instance of NoInstance
obj = NoInstance()
print(obj)
