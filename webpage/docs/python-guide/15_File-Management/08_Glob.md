# Globe Module

In this tutorial, we'll delve into the usage of the Globe module in Python, which facilitates finding path names matching specific patterns within directories. The Globe module employs Unix shell-like rules for pattern matching, allowing users to efficiently locate files throughout their computer's directory structure.

## Understanding the Globe Module:

The Globe module in Python allows us to search for files within directories based on specified patterns. These patterns are akin to those used in Unix shells, providing powerful capabilities for file discovery. Let's dive into the key features and syntax of the Globe module:

### Importing the Globe Module:

```python
import glob
```

## Finding Files:

### Basic Usage:

The basic usage of the Globe module involves using the `glob.glob()` function to find files based on a specified pattern. The function returns a list of path names matching the pattern.

```python
# Basic usage of glob.glob()
files = glob.glob("index.js")
print(files)  # Output: ['index.js']
```

### Pattern Matching:

Globe allows pattern matching using special characters:

- `?`: Matches any single character.
- `*`: Matches zero or more characters.
- `[...]`: Matches any character within the specified set.
- `[!...]` or `[^...]`: Matches any character not within the specified set.

```python
# Pattern matching examples
files = glob.glob("??dex*.js")  # Matches files with names starting with any two characters followed by 'dex' and ending with '.js'
print(files)  # Output: ['index.js']

files = glob.glob("*")  # Matches all files in the current directory
print(files)

files = glob.glob("[il]*.js")  # Matches files starting with 'i' or 'l' and ending with '.js'
print(files)

files = glob.glob("[!il]*.js")  # Matches files not starting with 'i' or 'l' and ending with '.js'
print(files)
```

### Recursive Search:

To search for files recursively in subdirectories, use the `**` syntax.

```python
# Recursive search example
files = glob.glob("**/*.js", recursive=True)  # Searches for all JavaScript files recursively in all directories
print(files)
```

### Using Generator Version:

To avoid loading all file names at once, you can use the iterator version of `glob`. This returns a generator, which yields file names one by one.

```python
# Using the generator version of glob
files_generator = glob.iglob("**/*.js", recursive=True)
for file in files_generator:
    print(file)
```

The Globe module in Python provides a convenient way to search for files based on specified patterns within directories. Whether you need to locate specific files or perform recursive searches across multiple directories, Globe offers a powerful solution with its Unix shell-like pattern matching capabilities.
