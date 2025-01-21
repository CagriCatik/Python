# Example 1: Basic Value Matching
def basic_value_matching(day):
    match day:
        case "Monday":
            return "Start of the work week."
        case "Friday":
            return "Almost the weekend!"
        case "Saturday" | "Sunday":
            return "It's the weekend!"
        case _:
            return "Just another weekday."

print(basic_value_matching("Friday"))  # Output: Almost the weekend!

# Example 2: Matching with Data Structures (Tuple Matching)
def point_position(point):
    match point:
        case (0, 0):
            return "Origin"
        case (x, 0):
            return f"X-axis at {x}"
        case (0, y):
            return f"Y-axis at {y}"
        case (x, y):
            return f"Point at ({x}, {y})"
        case _:
            return "Somewhere else"

print(point_position((10, 0)))  # Output: X-axis at 10

# Example 3: Destructuring with Lists
def process_items(items):
    match items:
        case []:
            return "Empty list"
        case [x]:
            return f"Single item: {x}"
        case [x, y]:
            return f"Two items: {x} and {y}"
        case [x, y, *rest]:
            return f"First two: {x} and {y}, rest: {rest}"
        case _:
            return "Unknown structure"

print(process_items([1, 2, 3, 4, 5]))  # Output: First two: 1 and 2, rest: [3, 4, 5]

# Example 4: Matching with Dictionaries (Guard Clauses)
def process_command(command):
    match command:
        case {"action": "move", "direction": direction} if direction in ["left", "right", "up", "down"]:
            return f"Moving {direction}"
        case {"action": "say", "message": message}:
            return f"Saying: {message}"
        case _:
            return "Unknown command"

print(process_command({"action": "move", "direction": "left"}))  # Output: Moving left
print(process_command({"action": "say", "message": "Hello"}))  # Output: Saying: Hello

# Example 5: Combining Patterns and Conditions
def analyze_data(data):
    match data:
        case {"name": name, "age": age} if age >= 18:
            return f"{name} is an adult."
        case {"name": name, "age": age} if age < 18:
            return f"{name} is a minor."
        case _:
            return "Invalid data"

print(analyze_data({"name": "Alice", "age": 20}))  # Output: Alice is an adult.
print(analyze_data({"name": "Bob", "age": 15}))  # Output: Bob is a minor.

# Example 6: Pattern Matching with Class Instances
class Animal:
    def __init__(self, species, sound):
        self.species = species
        self.sound = sound

def animal_sound(animal):
    match animal:
        case Animal(species="dog", sound="bark"):
            return "It's a dog that barks."
        case Animal(species="cat", sound="meow"):
            return "It's a cat that meows."
        case Animal(species=species, sound=sound):
            return f"It's a {species} that makes a {sound} sound."
        case _:
            return "Unknown animal"

dog = Animal("dog", "bark")
cat = Animal("cat", "meow")
bird = Animal("bird", "tweet")

print(animal_sound(dog))  # Output: It's a dog that barks.
print(animal_sound(cat))  # Output: It's a cat that meows.
print(animal_sound(bird))  # Output: It's a bird that makes a tweet sound.

# Example 7: Advanced Nested Patterns
def nested_data_analysis(data):
    match data:
        case {"user": {"name": name, "details": {"age": age, "location": location}}}:
            return f"{name} is {age} years old and lives in {location}."
        case _:
            return "Invalid data structure"

data = {
    "user": {
        "name": "Charlie",
        "details": {
            "age": 30,
            "location": "New York"
        }
    }
}

print(nested_data_analysis(data))  # Output: Charlie is 30 years old and lives in New York.
