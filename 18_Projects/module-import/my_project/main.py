# main.py

from functionality.arithmetic import add, subtract, multiply, divide
from functionality.utilities import print_welcome_message, print_goodbye_message
from data_processing.processor import process_data
from data_processing.formatter import format_data

def main():
    print_welcome_message()

    # Perform some arithmetic operations
    print(f"10 + 5 = {add(10, 5)}")
    print(f"10 - 5 = {subtract(10, 5)}")
    print(f"10 * 5 = {multiply(10, 5)}")
    print(f"10 / 5 = {divide(10, 5)}")

    # Process and format data
    data = [1, 2, 3, 4, 5]
    processed = process_data(data)
    formatted = format_data(processed)
    print(f"Processed data: {formatted}")

    print_goodbye_message()

if __name__ == "__main__":
    main()
