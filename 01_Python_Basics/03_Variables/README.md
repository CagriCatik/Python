
# Reusable Code with Variables

One of the fundamental principles in programming is reusability. We strive to create code that can be easily adapted and reused across various scenarios. The use of variables is a powerful concept that significantly enhances the reusability of our code.

## Example Without Variables

Let's start with an example that does not utilize variables. We have multiple print statements to greet different entities.

```python
# Example without variables
print("Hello Bob!")
print("Hello cat!")
print("Hello Dave!")
```

This approach works, but it becomes challenging to make changes efficiently, especially in larger codebases.

## Introducing Variables

To make our code more flexible and reusable, we'll introduce variables. In this example, we'll create a variable named `greeting` to store our common greeting.

```python
# Example with variables
greeting = "Hello"

print(greeting + " Bob!")
print(greeting + " cat!")
print(greeting + " Dave!")
```

Now, if we want to change the greeting, we only need to modify the value assigned to the `greeting` variable.

```python
# Changing the greeting
greeting = "Bye"

print(greeting + " Bob!")
print(greeting + " cat!")
print(greeting + " Dave!")
```

This simple change demonstrates the power of using variables. Instead of manually updating each print statement, we modify the variable's value, and the changes propagate throughout the code.

### Important Considerations

- Python is case-sensitive. Respect the case of your variable names.
- Variable names cannot start with a number.
- Avoid using symbols like exclamation marks or ampersands in variable names.
- Some words, known as reserved keywords (e.g., `else`, `if`), cannot be used as variable names.

As we progress through this course, these concepts will become more intuitive, and you'll see how variables contribute to writing clean, maintainable, and reusable code.
