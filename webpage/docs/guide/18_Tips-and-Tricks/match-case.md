# `match-case` Statement

## **Introduction**

The `match-case` statement, introduced in Python 3.10, is a powerful and flexible control structure that allows for pattern matching, enabling more expressive and concise code. It is somewhat analogous to the `switch-case` statements found in other programming languages like C, C++, and Java but extends far beyond simple value matching. Python's `match-case` provides capabilities such as destructuring, type checks, and combining patterns with conditional logic, making it a versatile tool for handling complex data structures and decision-making processes.

## **Basic Syntax**

The basic structure of a `match-case` statement is as follows:

```python
match subject:
    case pattern1:
        # Action for pattern1
    case pattern2:
        # Action for pattern2
    case _:
        # Default action if no other pattern matches
```

- **`match subject:`**: This is the expression or value being matched against the patterns. The `subject` can be any Python object.
- **`case pattern:`**: This specifies a pattern to match against the subject. If the pattern matches, the associated block of code is executed.
- **`case _:`**: The underscore (`_`) serves as a wildcard or default case that matches anything not captured by previous patterns, similar to a `default` case in other languages.



## **Pattern Types**

The `match-case` statement supports various types of patterns, which can be combined and nested to match complex data structures.

### 1. **Literal Patterns**

- Matches exact values such as integers, strings, or booleans.
- Example:

     ```python
     def weekday_or_weekend(day):
         match day:
             case "Saturday" | "Sunday":
                 return "Weekend"
             case "Monday":
                 return "Weekday"
             case _:
                 return "Unknown day"
     ```

### 2. **Variable Patterns**

- Matches any value and assigns it to a variable.
- Example:

     ```python
     def describe_value(value):
         match value:
             case 0:
                 return "Zero"
             case x:
                 return f"Got a value: {x}"
     ```

### 3. **Sequence Patterns**

- Matches sequences like lists or tuples, and can also destructure them.
- Example:

     ```python
     def process_points(points):
         match points:
             case [x, y]:
                 return f"Two points: {x}, {y}"
             case [x, y, z]:
                 return f"Three points: {x}, {y}, {z}"
             case _:
                 return "Unknown sequence"
     ```

### 4. **Mapping Patterns (Dictionaries)**

- Matches dictionaries and allows extraction of values by key.
- Example:

     ```python
     def handle_command(command):
         match command:
             case {"action": "move", "direction": direction}:
                 return f"Moving {direction}"
             case {"action": "say", "message": message}:
                 return f"Message: {message}"
             case _:
                 return "Unknown command"
     ```

### 5. **Class Patterns**

- Matches instances of classes and can destructure attributes.
- Example:

     ```python
     class Point:
         def __init__(self, x, y):
             self.x = x
             self.y = y

     def locate_point(point):
         match point:
             case Point(x, y):
                 return f"Point at ({x}, {y})"
             case _:
                 return "Not a point"
     ```

### 6. **Wildcard Pattern**

- Represented by `_`, matches anything and is typically used as a default case.
- Example:

     ```python
     def process_value(value):
         match value:
             case 0:
                 return "Zero"
             case _:
                 return "Non-zero value"
     ```

### 7. **OR Patterns (Alternatives)**

- Allows matching against multiple patterns with a single case.
- Example:

     ```python
     def weekend_or_weekday(day):
         match day:
             case "Saturday" | "Sunday":
                 return "Weekend"
             case "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday":
                 return "Weekday"
     ```

### 8. **AND Patterns**

- While Python doesn't have a direct "AND" pattern, complex conditions can be handled using guard clauses (conditional `if` expressions) within patterns.



## **Guards in Match-Case**

Guards add conditional logic to a `case` statement, allowing you to specify additional conditions that must be true for the pattern to match. Guards are written using the `if` keyword after the pattern.

```python
def categorize_number(number):
    match number:
        case x if x < 0:
            return "Negative number"
        case x if x == 0:
            return "Zero"
        case x if x > 0:
            return "Positive number"
```

- **Execution Flow with Guards:**
  - The pattern is checked first.
  - If the pattern matches, the guard condition is evaluated.
  - If the guard condition is `True`, the associated block is executed.
  - If the guard condition is `False`, the match continues to the next case.



## **Nested Patterns**

Nested patterns allow you to match and destructure data within complex, nested data structures. This is particularly useful when working with data that includes multiple layers of nesting, such as dictionaries containing lists, or tuples within tuples.

```python
def analyze_nested_data(data):
    match data:
        case {"user": {"name": name, "details": {"age": age, "location": location}}}:
            return f"{name} is {age} years old and lives in {location}."
        case _:
            return "Unknown data format"

data = {
    "user": {
        "name": "Alice",
        "details": {
            "age": 30,
            "location": "Wonderland"
        }
    }
}

print(analyze_nested_data(data))  # Output: Alice is 30 years old and lives in Wonderland.
```



## **Combining Patterns**

Patterns can be combined in various ways to create complex matching conditions:

- **Sequence Matching:** Matching lists or tuples with specific lengths or structures.
- **Mapping Matching:** Matching dictionaries with certain keys or specific key-value pairs.
- **Class Instance Matching:** Matching objects of specific types and destructuring their attributes.

    **Example:**

    ```python
    def complex_match(data):
        match data:
            case [x, y] if x == y:
                return f"Two equal elements: {x} and {y}"
            case {"type": "circle", "radius": r}:
                return f"Circle with radius {r}"
            case Point(x, y) if x == y:
                return f"Point on diagonal: ({x}, {y})"
            case _:
                return "No match found"

    class Point:
        def __init__(self, x, y):
            self.x = x
            self.y = y

    print(complex_match([10, 10]))           # Output: Two equal elements: 10 and 10
    print(complex_match({"type": "circle", "radius": 5}))  # Output: Circle with radius 5
    print(complex_match(Point(4, 4)))        # Output: Point on diagonal: (4, 4)
    ```

## **Advanced Use Cases**

1. **Handling Complex Input Data:**

    ```python
    def handle_request(request):
        match request:
            case {"type": "login", "user": user}:
                return f"Logging in user: {user}"
            case {"type": "logout", "user": user}:
                return f"Logging out user: {user}"
            case {"type": "data", "payload": payload} if isinstance(payload, list):
                return f"Processing data list with {len(payload)} items."
            case {"type": "data", "payload": payload} if isinstance(payload, dict):
                return f"Processing data dict with keys: {', '.join(payload.keys())}"
            case _:
                return "Unknown request type"
    ```

2. **Error Handling:**

    ```python
    def handle_response(response):
        match response:
            case {"status": 200, "data": data}:
                return f"Success: {data}"
            case {"status": 404, "error": error}:
                return f"Not Found: {error}"
            case {"status": 500, "error": error}:
                return f"Server Error: {error}"
            case _:
                return "Unknown status"
    ```



## **Performance Considerations**

- **Efficiency:** The `match-case` statement is optimized for pattern matching, making it efficient even for complex conditions.
- **Readability:** While powerful, complex `match` statements can become difficult to read if overused or not well-structured. It is advisable to balance complexity with clarity.



## **Best Practices**

1. **Use Guards Wisely:** Use guards to handle edge cases or to add conditions to patterns without cluttering the pattern itself.
2. **Leverage Destructuring:** Use pattern matching to destructure complex data structures for more readable and concise code.
3. **Fallback with Wildcard (`_`):** Always include a fallback case using `_` to handle unexpected or unmatched cases.
4. **Avoid Overcomplication:** Keep `match-case` statements as simple as possible. Break down complex logic into smaller, more manageable pieces if necessary.

## **Conclusion**

The `match-case` statement

 in Python 3.10 and later versions is a powerful tool that provides flexibility and expressiveness far beyond traditional conditional statements. By understanding and effectively using the different types of patterns, guards, and combining patterns, you can write more readable, maintainable, and concise Python code. Whether you are working with simple values or complex data structures, `match-case` allows you to handle multiple scenarios with elegance and efficiency.
