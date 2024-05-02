# Understanding Python Scopes

In Python, the concept of scopes defines the visibility and accessibility of variables in different parts of your code. This README.md will provide a brief explanation of scopes and include code snippets to illustrate their impact.

## Global Scope

Let's start by creating a variable, `number`, in the global scope with a value of 999.

```python
number = 999
```

Here, `number` is defined in the outermost layer of the script, the global scope.

## Local Scope

Now, let's create a function called `change_number` that attempts to modify the `number` variable in its local scope.

```python
def change_number():
    number = 10
```

Inside the function, a local variable `number` is created. However, this local variable shadows the global `number`, and any modifications are limited to the local scope.

## Inner Function

If we create an inner function, such as `inner`, we can continue using the variable within the same scope.

```python
def inner():
    print(number)
```

This inner function still has access to the global `number` without any issues.

## Scope Interaction

However, attempting to change the global `number` directly within the function won't work as expected.

```python
def print_number():
    print(number)
```

While `print_number` can access the global `number` and print its value, assigning a new value to it will create a local variable, not affecting the global scope. In general, avoiding excessive use of the global scope is recommended to prevent confusion and maintain code clarity. In the next lecture, we'll explore ways to explicitly work with variables from the outer scope or the global scope, allowing modifications within functions.
