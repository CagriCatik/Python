#Generating Fibonacci Sequence Using a Custom Range
def fibonacci_range(n):
    fib_sequence = [0, 1]
    
    for i in range(2, n):
        next_fib = fib_sequence[-1] + fib_sequence[-2]
        fib_sequence.append(next_fib)
    
    return fib_sequence

# Generate the first 10 Fibonacci numbers
fibonacci_numbers = fibonacci_range(10)
print(f"Fibonacci Numbers: {fibonacci_numbers}")


# Sum of Squares Within a Range
def sum_of_squares(start, end):
    squares_sum = sum(x**2 for x in range(start, end + 1))
    return squares_sum

# Calculate the sum of squares from 1 to 5
result = sum_of_squares(1, 5)
print(f"Sum of Squares: {result}")


# Customized Multiplication Table
def multiplication_table(base, start, end, step=1):
    for i in range(start, end + 1, step):
        result = base * i
        print(f"{base} * {i} = {result}")

# Create a customized multiplication table for 5, starting from 2 up to 8 with a step of 2
multiplication_table(5, 2, 8, 2)
