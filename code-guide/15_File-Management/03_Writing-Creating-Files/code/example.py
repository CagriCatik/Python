# File Manipulation Example

# Appending text to a file
with open(r'15_File-Management\03_Writing-Creating-Files\code\sample_text.txt', 'a') as text:
    text.write('new text\n')

# Reading after appending
with open(r'15_File-Management\03_Writing-Creating-Files\code\sample_text.txt', 'a+') as text:
    text.seek(0)
    content = text.read()
    print("Content after appending:\n", content)

# Replacing the entire content of the file
with open(r'15_File-Management\03_Writing-Creating-Files\code\sample_text.txt', 'w') as text:
    text.write('replacing\n')

# Reading after replacing
with open(r'15_File-Management\03_Writing-Creating-Files\code\sample_text.txt', 'a+') as text:
    text.seek(0)
    content = text.read()
    print("Content after replacing:\n", content)

# Exclusive creation mode (X mode)
try:
    with open(r'15_File-Management\03_Writing-Creating-Files\code\new_file.txt', 'x') as text:
        text.write('Hello World\n')
        text.seek(0)
        content = text.read()
        print("Content of new_file.txt:\n", content)
except FileExistsError:
    print("The file already exists.")

# Appending in exclusive creation mode
with open(r'15_File-Management\03_Writing-Creating-Files\code\new_file.txt', 'a+') as text:
    text.write('Appending in exclusive creation mode\n')
    text.seek(0)
    content = text.read()
    print("Content after appending in exclusive creation mode:\n", content)
