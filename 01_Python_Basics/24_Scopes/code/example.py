############################
# Managing Global and Local Scopes
############################

# Global variable
global_variable = 50

def local_scope_example():
    # Local variable
    local_variable = 10
    
    def inner_function():
        # Accessing both local and global variables
        result = local_variable + global_variable
        print("Inner Function Result:", result)
    
    # Calling the inner function
    inner_function()
    
    # Modifying the local variable
    local_variable *= 2
    print("Local Variable After Modification:", local_variable)

# Calling the function
local_scope_example()

# Attempting to access the local variable outside the function will result in an error
# print("Trying to Access Local Variable Outside Function:", local_variable)


############################
# Explicitly Using Global Scope
############################

# Global variable
global_counter = 0

def increment_global():
    # Explicitly using the global keyword to modify the global variable
    global global_counter
    global_counter += 1

def print_global():
    # Accessing the global variable
    print("Global Counter:", global_counter)

# Performing multiple increments
increment_global()
increment_global()
increment_global()

# Printing the global counter
print_global()


############################
# Nested Scopes with Closures
############################

def outer_function(x):
    # Outer function parameter
    outer_param = x

    def inner_function(y):
        # Inner function parameter
        inner_param = y
        
        # Closure combining outer and inner parameters
        def closure_function(z):
            # Accessing variables from both outer and inner scopes
            result = outer_param + inner_param + z
            return result
        
        return closure_function

    return inner_function

# Creating closures with different parameters
closure_1 = outer_function(5)(10)
closure_2 = outer_function(15)(20)

# Calling closures
result_1 = closure_1(3)
result_2 = closure_2(7)

# Displaying results
print("Closure 1 Result:", result_1)
print("Closure 2 Result:", result_2)
