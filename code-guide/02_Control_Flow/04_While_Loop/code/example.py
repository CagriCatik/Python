# Script: Looping Constructs in Python

# Section 1: Using a 'for' Loop for Finite Iteration
def finite_for_loop_example():
    people = ["Alice", "Bob", "Charlie"]
    print("For Loop Example: Iterating over a list of people")
    for person in people:
        print(f"Hello, {person}!")
    print("End of For Loop Example\n")

# Section 2: Creating an Infinite 'while' Loop
def infinite_while_loop_example():
    import time
    
    print("Infinite While Loop Example: This loop will run indefinitely")
    counter = 0
    while True:
        print("This is an infinite loop. Press Ctrl+C to stop.")
        time.sleep(2)  # Pause for 2 seconds to avoid overwhelming the console
        counter += 1
        if counter == 3:
            print("Ending infinite loop after 3 iterations for demonstration purposes.")
            break
    print("End of Infinite While Loop Example\n")

# Section 3: Controlled Termination of a 'while' Loop
def controlled_while_loop_example():
    i = 5
    print("Controlled While Loop Example: Loop with a termination condition")
    while i > 0:
        print(f"Iteration {i}")
        i -= 1
    print("Loop ended when i became 0.\n")

# Section 4: Real-Life Use Case: Monitoring a Connection
def connection_monitor_example():
    import time
    
    connected = True
    print("Real-Life Example: Monitoring a Connection")
    while connected:
        print("Using the internet...")
        time.sleep(5)  # Pause execution for 5 seconds
        connected = False  # Simulate connection loss
    print("Connection ended.\n")

# Section 5: Interactive Example: Simple Chatbot
def chatbot_example():
    print("Interactive Example: Simple Chatbot")
    print("Type 'exit' to stop the chatbot.")
    while True:
        user_input = input("You: ")
        if user_input.lower() == "hello":
            print("Bot: Hey there!")
        elif user_input.lower() == "exit":
            print("Bot: Goodbye!")
            break
        else:
            print("Bot: Yes, that is interesting.")
    print("End of Chatbot Example\n")

# Main function to execute all examples
def main():
    finite_for_loop_example()
    infinite_while_loop_example()
    controlled_while_loop_example()
    connection_monitor_example()
    chatbot_example()

# Entry point of the script
if __name__ == "__main__":
    main()
