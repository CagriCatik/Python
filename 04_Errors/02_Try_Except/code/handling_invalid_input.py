while True:
    try:
        user_input = input("Enter a number: ")
        if user_input == '0':
            print("Total: 0")  # No need to calculate if user enters 0
            break
        result = 10 / float(user_input)
        print(f"Result: {result}")
    except ZeroDivisionError:
        print("Error: You cannot divide by zero.")
    except ValueError:
        print("Error: Please enter a valid number.")
