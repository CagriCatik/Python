# Writing & Creating Files in Python

Manipulating files in Python is a key skill for working with text files. This tutorial explores how to write, create, and edit files effectively using different file operation modes.

## Reading from a Text File

Before diving into writing and creating files, let’s recap how to read from a text file:

```python
with open('sample.txt', 'r') as text:
    content = text.read()
    print(content)
```

This snippet opens the file `sample.txt` in read mode ('r'), reads its content, and prints it to the console.

## Editing a Text File

Text files can be edited by appending new content or replacing existing content entirely.

### Appending Text to a File

To add new content to the end of a file without modifying its existing data, use the append mode ('a'):

```python
with open('sample.txt', 'a') as text:
    text.write('new text\n')
```

Here, the string `new text` is appended to the file, and the `\n` ensures the new content appears on a new line.

### Reading After Appending

When a file is opened in append mode, the file pointer is positioned at the end of the file. To read the appended content, you can use the combined append and read mode ('a+'):

```python
with open('sample.txt', 'a+') as text:
    text.write('additional text\n')
    text.seek(0)  # Move file pointer to the beginning
    content = text.read()
    print(content)
```

The `seek(0)` function moves the file pointer to the start, allowing the entire file, including newly added content, to be read.

### Writing Mode

The write mode ('w') replaces the entire content of the file with new data. Here’s an example:

```python
with open('sample.txt', 'w') as text:
    text.write('replacing\n')
```

Each time the file is opened in write mode, it overwrites the existing content completely.

### Exclusive Creation Mode (X Mode)

The exclusive creation mode ('x') ensures that the file does not already exist. If the file exists, a `FileExistsError` is raised:

```python
try:
    with open('new_file.txt', 'x') as text:
        text.write('Hello World\n')
except FileExistsError:
    print("The file already exists.")
```

In this example, a new file `new_file.txt` is created with the content `Hello World`. If the file already exists, the program prints a warning.

## Combining Creation and Appending

You can use the append mode ('a+') to create a file if it does not exist and add content to it:

```python
with open('new_file.txt', 'a+') as text:
    text.write('Hello World\n')
    text.seek(0)  # Move file pointer to the start
    content = text.read()
    print(content)
```

In this example, the file `new_file.txt` is created (if it doesn’t already exist), and `Hello World` is appended. The content is then read and printed.

## Summary of File Modes

| Mode | Description                                    |
|------|------------------------------------------------|
| 'r'  | Read mode (default). Opens the file for reading. |
| 'w'  | Write mode. Overwrites the file if it exists.   |
| 'a'  | Append mode. Adds new content to the end of the file. |
| 'x'  | Exclusive creation mode. Creates a new file; raises an error if it exists. |
| 'a+' | Append and read mode. Creates the file if it doesn’t exist, allows appending and reading. |

## Conclusion

Understanding file modes and operations in Python allows you to manipulate files effectively. Whether you are appending new content, overwriting existing data, or creating files, Python's built-in file handling functions provide a powerful and flexible toolkit.

