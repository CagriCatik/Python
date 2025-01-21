# Demonstrating break and continue in Python loops

def break_example_while():
    print("Break Example with While Loop:")
    number = 5
    while number > 0:
        number -= 1
        if number == 2:
            print("Breaking at 2")
            break
        print(number)
    print("Done with break_example_while\n")

def continue_example_while():
    print("Continue Example with While Loop:")
    number = 5
    while number > 0:
        number -= 1
        if number == 2:
            print("Skipping 2")
            continue
        print(number)
    print("Done with continue_example_while\n")

def break_example_for():
    print("Break Example with For Loop:")
    for number in range(5, 0, -1):
        if number == 1:
            print("Breaking at 1")
            break
        print(number)
    print("Done with break_example_for\n")

def continue_example_for():
    print("Continue Example with For Loop:")
    for number in range(5, 0, -1):
        if number == 2:
            print("Skipping 2")
            continue
        print(number)
    print("Done with continue_example_for\n")

def calculator_example():
    print("Simple Calculator Example:")
    total = 0
    print("Welcome to Calc Plus")
    print("Add positive numbers or insert zero to exit.")
    
    while True:
        try:
            user_input = int(input("Enter a number: "))
        except ValueError:
            print("Please enter a valid integer.")
            continue
        
        if user_input < 0:
            print("Please enter positive numbers only.")
            continue
        
        if user_input == 0:
            print(f"Total is {total}")
            break
        
        total += user_input

if __name__ == "__main__":
    break_example_while()
    continue_example_while()
    break_example_for()
    continue_example_for()
    calculator_example()
