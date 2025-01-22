# Glob Module

The `glob` module in Python is a powerful tool for finding file paths matching specific patterns. It uses Unix shell-like rules for pattern matching, making it an efficient way to search for files and directories.

## Importing the Glob Module

To use the `glob` module, first import it:

```python
import glob
```

## Finding Files

The `glob` module provides various methods to find files matching patterns. The most commonly used function is `glob.glob()`.

### Basic Usage

Use `glob.glob()` to find files based on a specified pattern. It returns a list of path names that match the pattern:

```python
# Find files named 'index.js'
files = glob.glob("index.js")
print(files)  # Output: ['index.js']
```

### Pattern Matching

The `glob` module supports several pattern-matching features:

- `*`: Matches zero or more characters.
- `?`: Matches any single character.
- `[...]`: Matches any character within the specified set.
- `[!...]` or `[^...]`: Matches any character not within the specified set.

#### Examples:

```python
# Match files with names starting with any two characters followed by 'dex' and ending with '.js'
files = glob.glob("??dex*.js")
print(files)  # Example Output: ['index.js']

# Match all files in the current directory
files = glob.glob("*")
print(files)

# Match files starting with 'i' or 'l' and ending with '.js'
files = glob.glob("[il]*.js")
print(files)

# Match files not starting with 'i' or 'l' and ending with '.js'
files = glob.glob("[!il]*.js")
print(files)
```

## Recursive Search

To search for files recursively in subdirectories, use the `**` syntax with the `recursive=True` parameter:

```python
# Find all JavaScript files recursively in all directories
files = glob.glob("**/*.js", recursive=True)
print(files)
```

## Using the Generator Version

The `glob.iglob()` function provides a generator, which yields file names one at a time. This is useful for handling large directories without loading all file names into memory at once:

```python
# Using the generator version of glob
files_generator = glob.iglob("**/*.js", recursive=True)
for file in files_generator:
    print(file)
```

## Advantages of the Glob Module

1. **Flexible Pattern Matching**: Supports wildcards for powerful and flexible file searches.
2. **Recursive Search**: Easily search through directories and subdirectories.
3. **Memory Efficiency**: The `iglob` generator version avoids loading all results into memory at once.

## Conclusion

The `glob` module in Python is a convenient and efficient tool for searching for files and directories based on patterns. Whether you need to locate specific files, perform recursive searches, or use pattern matching, the `glob` module offers a simple yet powerful solution for managing file discovery tasks in Python.

