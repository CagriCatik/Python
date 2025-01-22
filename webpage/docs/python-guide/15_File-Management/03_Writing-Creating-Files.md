# File Manipulation

In this tutorial, we will learn how to manipulate text files in Python, including reading, writing, and appending text. We will cover different modes of file operations and how to handle them effectively.

## Reading from a Text File

In the previous example, we learned how to read from a text file. Let's recap the code snippet:

```python
with open('sample.txt', 'r') as text:
    content = text.read()
    print(content)
```

This code opens the file named `sample.txt` in read mode ('r'), reads its content, and prints it to the console.

## Editing a Text File

Now, let's delve into editing a text file by either appending text to it or replacing the text entirely.

### Appending Text to a File

To append text to a file, we use the append mode ('a'). Here's how to do it:

```python
with open('sample.txt', 'a') as text:
    text.write('new text\n')
```

In this code snippet, 'new text' is added to the end of the file. The '\n' character ensures a new line after appending.

### Reading After Appending

When appending to a file, the file pointer is at the end. To read the appended content, we need to seek to the beginning of the file:

```python
with open('sample.txt', 'a+') as text:
    text.seek(0)
    content = text.read()
    print(content)
```

The `seek(0)` function moves the file pointer to the beginning, allowing us to read the entire content, including the newly appended text.

### Writing Mode

In writing mode ('w'), the entire file is replaced with the new content. Here's how to use it:

```python
with open('sample.txt', 'w') as text:
    text.write('replacing\n')
```

Each time the file is opened in writing mode, it replaces the existing content entirely.

### Exclusive Creation Mode (X Mode)

The 'x' mode ensures that the file doesn't already exist. Let's see how it works:

```python
try:
    with open('new_file.txt', 'x') as text:
        text.write('Hello World\n')
        text.seek(0)
        content = text.read()
        print(content)
except FileExistsError:
    print("The file already exists.")
```

In this example, we attempt to create a new file named 'new_file.txt'. If the file already exists, a `FileExistsError` is raised.

### Appending in Exclusive Creation Mode

We can combine 'x' mode with 'a+' mode to create a new file and append to it:

```python
with open('new_file.txt', 'a+') as text:
    text.write('Hello World\n')
    text.seek(0)
    content = text.read()
    print(content)
```

File manipulation in Python offers various modes to read, write, and append text. Understanding these modes and using them appropriately is essential for efficient file handling.

```

```

# File Manipulation Example

# Appending text to a file

with open('sample.txt', 'a') as text:
    text.write('new text\n')

# Reading after appending

with open('sample.txt', 'a+') as text:
    text.seek(0)
    content = text.read()
    print("Content after appending:\n", content)

# Replacing the entire content of the file

with open('sample.txt', 'w') as text:
    text.write('replacing\n')

# Reading after replacing

with open('sample.txt', 'a+') as text:
    text.seek(0)
    content = text.read()
    print("Content after replacing:\n", content)

# Exclusive creation mode (X mode)

try:
    with open('new_file.txt', 'x') as text:
        text.write('Hello World\n')
        text.seek(0)
        content = text.read()
        print("Content of new_file.txt:\n", content)
except FileExistsError:
    print("The file already exists.")

# Appending in exclusive creation mode

with open('new_file.txt', 'a+') as text:
    text.write('Appending in exclusive creation mode\n')
    text.seek(0)
    content = text.read()
    print("Content after appending in exclusive creation mode:\n", content)
