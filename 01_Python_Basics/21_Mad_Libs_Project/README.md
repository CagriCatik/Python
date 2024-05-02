# Mad Libs Game

In this project, we'll be creating a simple Mad Libs game. Mad Libs is a story-based game where users provide various words like nouns, names, and verbs, and those words are then inserted into a pre-made story to create a humorous and often nonsensical result.

## How to Play

1. Run the Python script.
2. Enter the requested words when prompted.
3. Enjoy the generated Mad Libs story!

## Code Snippets and Examples

### User Input

```python
# Get user input for name
name = input("Enter a name: ")

# Get user input for noun a
noun_a = input("Enter a noun: ")

# Repeat the process for other variables (verb_a, noun_b, verb_b, number_a, number_b)
# ...

# Print the story
print(story)
```

### Story Generation

```python
# Define variables
name = input("Enter a name: ")
noun_a = input("Enter a noun: ")
# ... (other variables)

# Create the story using formatted strings
story = f"""
{'-' * 30}
This is a story about {name}, a strong and beautiful {noun_a} who loved to {verb_a}.
{name} once {verb_b} and won a {noun_b} as a prize. Isn't that incredible?
Today, {name} is {int(number_a) + int(number_b)} years old and has retired from all adventures,
but the story will live on forever.
{'-' * 30}
"""

# Print the story
print(story)
```

### Example Run

```python
# Example run with user input
name = "Bob"
noun_a = "apple"
# ... (other variables)

# Print the generated story
print(story)
```
