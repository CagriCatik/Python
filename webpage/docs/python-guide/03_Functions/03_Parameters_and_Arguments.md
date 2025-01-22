
# Function Parameters and Defaults

In this tutorial, we'll explore how to use parameters and default values in Python functions to make them more flexible and customizable.

## 1. Introduction

In the previous lesson, we learned how to define functions using the `def` keyword. We created a simple greeting function that printed "Hello." Now, let's enhance our function to make it more customizable by using parameters.

```python
def greet(name):
    print(f"Hello {name}")
```

## 2. Using Parameters

To make our function greet specific people, we can use parameters. Parameters are values that we pass into a function when calling it. In this example, we'll use the parameter `name`:

```python
def greet(name):
    print(f"Hello {name}")

# Example usage
greet("Mario")
greet("James")
```

Now, our function can greet different people based on the provided name.

## 3. Multiple Parameters and Defaults

We can also define functions with multiple parameters and default values. Let's modify our function to include a `language` parameter with a default value:

```python
def greet(name, language="Hello"):
    if language == "Italian":
        print(f"Ciao {name}")
    else:
        print(f"{language} {name}")
```

Now, we can call our function with different parameters:

```python
greet("Mario", language="Italian")
greet("Sophia", language="Spanish", default="Hola")
```

## 4. Keyword Arguments

We can use keyword arguments to pass values to parameters explicitly. This allows us to specify the parameter names and their corresponding values in any order:

```python
greet(name="Mario", language="Italian", default="Buongiorno")
```

## 5. Providing Default Values

To set default values for parameters, we can include an equal sign in the function declaration. This assigns a default value to the parameter if one is not provided:

```python
def greet(name, language="Hello"):
    print(f"{language} {name}")
```

Now, the `language` parameter defaults to "Hello" if not specified.

## 6. Changing Default Values

Even when default values are provided, we can still change them when calling the function:

```python
greet("James")  # Uses default language ("Hello")
greet("Maria", language="Spanish")  # Overrides default language
```

Remember, default values should come after parameters without defaults.

That's it! You've learned how to use parameters and default values in Python functions to create more versatile and customizable code. Feel free to experiment and apply these concepts to your own projects.
