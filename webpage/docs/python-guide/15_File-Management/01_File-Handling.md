# File Handling

File handling is a fundamental skill in Python, allowing you to create, read, write, and manage files programmatically. This tutorial covers the basics of file operations, including working with text files, understanding file paths, and performing various operations on files.

## Creating a Text File

To create a text file named `sample_text.txt`, follow these steps:

1. Open your Python editor.
2. Write the following lines of text to a file programmatically:

```python
with open('sample_text.txt', 'w') as file:
    file.write("Hello world\n")
    file.write("Second line\n")
```

3. This creates the file in your current working directory.

## Absolute vs. Relative Paths

Understanding file paths is essential when working with files:

- **Absolute Path**: Specifies the exact location of a file on the system (e.g., `C:\Users\Username\Documents\sample_text.txt`).
- **Relative Path**: Specifies the location of a file relative to the current working directory (e.g., `sample_text.txt`).

To find the absolute path of a file:

1. Right-click on the file.
2. Select "Copy Path" or "Copy Path and Reference."

While relative paths are convenient, absolute paths can ensure the file is found, especially in complex directory structures.

## Opening Files

Python provides the `open()` function to open files. It takes two arguments: the file name and the mode in which to open the file.

### Modes for Opening Files

- **'r'**: Read mode (default). Opens the file for reading.
- **'w'**: Write mode. Opens the file for writing, truncating it first.
- **'a'**: Append mode. Opens the file for appending new content.
- **'x'**: Create mode. Creates a new file and raises an error if it already exists.
- **'t'**: Text mode (default). Reads or writes the file as text.
- **'b'**: Binary mode. Reads or writes the file as binary data.

### Examples

**Opening a Text File in Read Mode**

```python
# Open and read the file
with open('sample_text.txt', 'r') as file:
    content = file.read()
    print(content)
```

**Opening a Binary File in Write Mode**

```python
# Open a binary file for writing
with open('image.png', 'wb') as image_file:
    image_file.write(b"binary data")
```

## Reading Files

You can read files in different ways using the following methods:

- **`read()`**: Reads the entire file content as a string.
- **`readline()`**: Reads one line at a time.
- **`readlines()`**: Reads all lines and returns them as a list of strings.

### Example: Reading a File Line by Line

```python
with open('sample_text.txt', 'r') as file:
    for line in file:
        print(line.strip())
```

## Writing to Files

Use the `write()` method to add content to a file:

```python
with open('sample_text.txt', 'w') as file:
    file.write("Overwriting with new content\n")
```

## Appending to Files

To add new content to an existing file without overwriting it:

```python
with open('sample_text.txt', 'a') as file:
    file.write("Appending new content\n")
```

## Closing Files

While using `with open()`, Python automatically closes the file after the block is executed. However, if you use `open()` without `with`, you should close the file manually:

```python
file = open('sample_text.txt', 'r')
content = file.read()
file.close()
```

## Conclusion

Understanding and mastering file handling is essential for working with text files, binary data, or any type of file input/output in Python. With these basics, you can read, write, append, and manage files effectively in your projects.

