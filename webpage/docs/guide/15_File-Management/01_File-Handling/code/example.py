# Open the text file in read mode
file_path = r'15_File-Management\01_File-Handling\code\sample_text.txt'
with open(file_path, 'r') as file:
    # Read and print the contents of the file
    print("Initial contents of the file:")
    print(file.read())

# Open the same file in append mode
with open(file_path, 'a') as file:
    # Append new text to the file
    new_text = "\nForth line"
    file.write(new_text)

# Open the file again in read mode to see the updated contents
with open(file_path, 'r') as file:
    # Read and print the updated contents of the file
    print("\nUpdated contents of the file:")
    print(file.read())
