#  Scopes

In Python, scopes define the accessibility and lifespan of variables within different regions of a program. Scoping rules determine how variables and names are resolved in nested contexts, affecting how values are assigned, modified, and accessed throughout the code. Understanding Python's scope mechanism is crucial for writing clean, maintainable, and bug-free code. This tutorial provides an in-depth explanation of Python scopes, supplemented by illustrative code snippets.

## Global Scope

### Concept

The global scope is the outermost scope in Python, where variables are defined at the top level of a script or module. Variables defined in the global scope are accessible from any part of the code, including functions, unless shadowed by a local variable of the same name.

### Example

Consider the following example where we define a variable `number` in the global scope:

```python
number = 999
```

Here, `number` is globally accessible throughout the script. This means that any function or block of code can access this variable, as long as there is no local variable with the same name.

## Local Scope

### Concept

A local scope is created when a function is called. Variables defined within this function exist only in that scope and cannot be accessed from outside the function. These local variables are isolated from the global scope, meaning that modifying a variable in the local scope does not affect a global variable of the same name.

### Example

Let's define a function `change_number` that creates a local variable `number`:

```python
def change_number():
    number = 10
```

Within the `change_number` function, the `number` variable is local. This local variable shadows the global `number`, meaning that any reference to `number` within `change_number` refers to the local variable, not the global one. However, this local variable ceases to exist once the function terminates, leaving the global `number` unchanged.

## Enclosing (Nonlocal) Scope

### Concept

An enclosing scope occurs when a function is nested within another function. The nested function can access variables from its enclosing function, but cannot directly modify them unless the `nonlocal` keyword is used. The enclosing scope exists between the local and global scopes.

### Example

Consider the following code with an inner function:

```python
def outer_function():
    number = 20

    def inner_function():
        print(number)
    
    inner_function()
```

Here, `inner_function` can access the `number` variable defined in `outer_function`. This is an example of a nonlocal scope. The `number` in `inner_function` refers to the `number` in `outer_function`, which is neither local to `inner_function` nor global. However, if you try to assign a value to `number` within `inner_function`, it will create a local variable, leaving the `number` in `outer_function` unchanged.

### Nonlocal Variable Modification

To modify a variable in the enclosing scope, the `nonlocal` keyword is required:

```python
def outer_function():
    number = 20

    def inner_function():
        nonlocal number
        number = 30
    
    inner_function()
    print(number)  # This will print 30
```

Using `nonlocal number` allows `inner_function` to modify the `number` variable defined in `outer_function`.

## Global Keyword

### Concept

To modify a global variable from within a function, Python provides the `global` keyword. Without this keyword, assigning a value to a variable within a function creates a new local variable, even if a global variable with the same name exists.

### Example

Consider the following example:

```python
number = 999

def modify_global_number():
    global number
    number = 1000

modify_global_number()
print(number)  # This will print 1000
```

Here, the `global` keyword allows the `modify_global_number` function to modify the global `number` variable, changing its value to 1000. Without the `global` keyword, a local variable `number` would be created within the function, leaving the global `number` unchanged.

## Scope Interaction and Best Practices

### Scope Resolution Order (LEGB Rule)

Python resolves variables using the LEGB rule, which stands for:
- **Local**: The innermost scope, containing variables defined within the function.
- **Enclosing**: The scope of any enclosing functions, applicable for nested functions.
- **Global**: The top-level scope of the script or module.
- **Built-in**: The outermost scope, containing built-in names like `len`, `range`, etc.

When Python encounters a variable, it checks these scopes in order: Local → Enclosing → Global → Built-in.

### Avoiding Scope-Related Issues

Excessive reliance on global variables can lead to code that is difficult to understand and maintain. Therefore, it is recommended to:
- Minimize the use of global variables.
- Use function parameters and return values to pass data in and out of functions.
- Leverage local scopes to contain variables within specific functions or blocks of code.
- Use the `nonlocal` keyword with care, as it can introduce subtle bugs if not used correctly.

### Summary

Understanding Python's scoping rules is essential for writing efficient and error-free code. By distinguishing between local, enclosing, and global scopes, developers can manage variable lifecycles effectively, avoiding common pitfalls associated with variable shadowing and unintended global modifications. Following best practices related to scope management contributes to cleaner, more maintainable codebases.
