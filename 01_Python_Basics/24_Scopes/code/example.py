# Global scope
number = 999
text = "Global"

def outer_function():
    # Enclosing (nonlocal) scope
    number = 20
    text = "Enclosing"

    def inner_function():
        # Local scope
        number = 10
        print(f"Local 'number' in inner_function: {number}")  # This prints the local number
        print(f"Enclosing 'text' in inner_function: {text}")  # This prints the enclosing text

        # Demonstrating the built-in scope (no shadowing occurs)
        length = len(text)
        print(f"Using built-in 'len' function in inner_function: length of text = {length}")

        # Modifying the enclosing scope variable using nonlocal
        nonlocal number
        number = 30
        print(f"Modified nonlocal 'number' in inner_function: {number}")

    print(f"Before calling inner_function, 'number' in outer_function: {number}")
    inner_function()
    print(f"After calling inner_function, 'number' in outer_function: {number}")

def modify_global_number():
    global number
    print(f"Before modifying, 'number' in modify_global_number: {number}")
    number = 1000
    print(f"After modifying, 'number' in modify_global_number: {number}")

def demonstrate_scope_resolution():
    # Local variable
    text = "Local"

    # Accessing global variable directly
    print(f"Global 'text' accessed directly: {globals()['text']}")

    # Accessing local variable
    print(f"Local 'text' in demonstrate_scope_resolution: {text}")

    def enclosed_function():
        # Enclosing (nonlocal) variable
        nonlocal text
        text = "Enclosing from demonstrate_scope_resolution"
        print(f"Modified nonlocal 'text' in enclosed_function: {text}")
    
    enclosed_function()
    print(f"After calling enclosed_function, 'text' in demonstrate_scope_resolution: {text}")

# Execution

print(f"Initial global 'number': {number}")
print(f"Initial global 'text': {text}")

# Test the outer and inner function interaction
outer_function()

# Test modifying the global variable
modify_global_number()

# Final global variable check
print(f"Final global 'number': {number}")

# Demonstrate scope resolution order and usage of global and nonlocal keywords
demonstrate_scope_resolution()

# Final global variable check again
print(f"Final global 'text': {text}")

