# Example: File Handling with the 'with' Statement

# Reading the entire content of the file
print("Reading entire content of the file:")
with open(r'15_File-Management\02_Reading-Files\code\sample_text.txt') as text:
    content = text.read()
    print(content)

# Reading one line at a time
print("\nReading one line at a time:")
with open(r'15_File-Management\02_Reading-Files\code\sample_text.txt') as text:
    for _ in range(3):
        line = text.readline()
        print(line.strip())  # strip() removes newline characters

# Creating a list from lines
print("\nCreating a list from lines:")
with open(r'15_File-Management\02_Reading-Files\code\sample_text.txt') as text:
    lines = text.readlines()
    print(lines)

# Automatic file closure
print("\nFile is automatically closed outside the 'with' block.")
