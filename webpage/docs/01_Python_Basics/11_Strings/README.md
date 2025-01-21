# Strings

In Python, strings are used to represent textual data. A string is essentially a sequence of characters. You can create strings by enclosing text within either single quotation marks (`'`) or double quotation marks (`"`). The choice between single and double quotes is a matter of personal preference, as Python treats them interchangeably.

## Creating Strings

```python
name = 'Mario'
fruit = "banana"
```

You can use escape characters (backslash `\`) to include quotes within a string if needed. For instance:

```python
quote_with_single = "bananas own something, like a quotation mark (\")"
quote_with_double = 'quotes and then you add some double quotation marks (")'
```

## String Concatenation

Strings can be concatenated using the `+` operator:

```python
sentence = name + " eats a " + fruit
print(sentence)
# Output: Mario eats a banana
```

## Multi-line Strings

You can create multi-line strings using triple quotation marks (`'''` or `"""`). This is useful for preserving line breaks in the text:

```python
poem = '''
Roses are red,
Violets aren't orange,
I can't find my keys.
The end.
'''
print(poem)
```

## Note

- Be mindful of leading spaces when using triple quotation marks to avoid unwanted indentation.
- Multi-line strings are handy for including poems, documentation, or any long text while maintaining the formatting.
