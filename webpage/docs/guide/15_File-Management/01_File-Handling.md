# File Handling in Python

In this tutorial, we'll delve into the fundamentals of file handling in Python. Whether you're dealing with text files, JSON files, or images, understanding how to interact with files programmatically is essential. We'll cover basic file operations such as creating, reading, writing, and appending to files.

## Creating a Text File

Let's start by creating a text file named `sample_text.txt` where we can write some content using Python.

1. Open your Python editor.
2. Write the following lines of text:
   ```plaintext
   Hello world
   Second line
   ```
3. Save the file in the local directory.

### Absolute vs. Relative Paths

Understanding paths is crucial when working with files. Python can use both absolute and relative paths to locate files.

- **Absolute Path**: Specifies the exact location of a file on the system.
- **Relative Path**: Specifies the location of a file relative to the current working directory.

To find the absolute path of a file:

1. Right-click on the file.
2. Select "Copy Path" or "Copy Path and Reference".

Using relative paths is convenient, but if the file cannot be found, resort to using the absolute path.

## Opening Files

To open a file in Python, we use the `open()` function. It takes two arguments: the file name and the mode.

Modes:

- **'r'**: Read mode (default). Opens the file for reading.
- **'a'**: Append mode. Opens the file for appending new content.
- **'w'**: Write mode. Opens the file for writing, truncating the file first.
- **'x'**: Create mode. Creates a new file, returning an error if the file already exists.

Additionally, files can be opened in text mode ('t') or binary mode ('b').

```python
# Example: Open a text file in read mode
file = open('sample_text.txt', 'r')
```

```python
# Example: Open a binary file in write mode
image_file = open('image.png', 'wb')
```

In the upcoming sections, we'll explore various file operations such as reading, writing, appending, and deleting content. Stay tuned for more detailed examples!
