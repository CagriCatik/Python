import sys

def add(total, num):
    return total + num

def subtract(total, num):
    return total - num

def multiply(total, num):
    return total * num

def divide(total, num):
    if num == 0:
        raise ValueError("Cannot divide by zero!")
    return total / num

def main():
    total = 0
    
    operations = {
        '+': add,
        '-': subtract,
        '*': multiply,
        '/': divide
    }
    
    while True:
        user_input = input("Enter an operation (+, -, *, /), number, or '0' to exit: ")
        
        if user_input == '0':
            print("The final total is:", total)
            sys.exit()  # Exit the program
        
        try:
            operator, operand = user_input.split(maxsplit=1)
            num = float(operand)  # Convert user input to float
            
            if operator in operations:
                total = operations[operator](total, num)
            else:
                print("Invalid operation! Please enter '+', '-', '*', or '/'.")
        except ValueError as ve:
            print("Invalid input:", ve)
        except ZeroDivisionError as zde:
            print("Error:", zde)

if __name__ == "__main__":
    main()
