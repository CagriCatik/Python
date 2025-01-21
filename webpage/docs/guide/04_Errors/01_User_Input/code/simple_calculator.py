import sys

def main():
    total = 0
    
    while True:
        user_input = input("Enter a number: ")
        
        # Check if user input is '0' to exit the loop
        if user_input == '0':
            print("The total is:", total)
            sys.exit()  # Exit the program
        
        try:
            num = int(user_input)
            total += num  # Add the integer input to the total
        except ValueError:
            print("Invalid input! Please enter a valid number.")

if __name__ == "__main__":
    main()
