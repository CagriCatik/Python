# Reading and Previewing CSV Files with Pandas

In this tutorial, we'll explore how to efficiently read CSV files using the Pandas library in Python and how to preview the data using the `head()` and `tail()` methods.

**1. Importing Pandas:**

Firstly, ensure you have Pandas installed. You can install it via pip if you haven't already:

```bash
pip install pandas
```

Once installed, import Pandas into your Python script or Jupyter Notebook:

```python
import pandas as pd
```

**2. Reading CSV Files:**

To read a CSV file, use the `read_csv()` function provided by Pandas. For instance, suppose we have a CSV file named `top_richest_in_world.csv`. We can read it as follows:

```python
richest = pd.read_csv('top_richest_in_world.csv')
```

This command reads the CSV file and stores its contents in a Pandas DataFrame named `richest`.

**3. Previewing Data:**

Once the data is loaded into a DataFrame, it's helpful to preview it. Pandas provides two methods for this purpose: `head()` and `tail()`.

- **`head()` Method:**

The `head()` method returns the first few rows of the DataFrame. By default, it returns the first five rows. To use it:

```python
richest.head()
```

This will display the first five rows of the DataFrame `richest`.

You can specify the number of rows you want to preview by passing an argument to `head()`. For example, to preview the first ten rows:

```python
richest.head(10)
```

- **`tail()` Method:**

Conversely, the `tail()` method returns the last few rows of the DataFrame. By default, it returns the last five rows. To use it:

```python
richest.tail()
```

This will display the last five rows of the DataFrame `richest`.

Similarly to `head()`, you can specify the number of rows you want to preview with `tail()`. For instance, to preview the last ten rows:

```python
richest.tail(10)
```

**4. Advanced Usage:**

- **Negative Indexing:**

Both `head()` and `tail()` methods support negative indexing. This allows you to exclude rows from the beginning or end of the DataFrame.

For instance, to exclude the last ten rows using `head()`:

```python
richest.head(-10)
```

And to exclude the first ten rows using `tail()`:

```python
richest.tail(-10)
```

This provides flexibility in data previewing, especially when dealing with large datasets.

## Assignment: Exploring CSV Data with Pandas

**Objective:**
The objective of this assignment is to familiarize students with reading and previewing CSV data using the Pandas library in Python.

**Instructions:**
1. **Reading CSV Data:**
   - Write a Python script that imports the Pandas library.
   - Use the `read_csv()` function to load the provided CSV file named `top_richest_in_world.csv` into a Pandas DataFrame. Ensure that you handle any necessary encoding or file path issues.
  
2. **Previewing Data:**
   - Utilize the `head()` method to display the first five rows of the DataFrame.
   - Use the `tail()` method to display the last five rows of the DataFrame.
   - Experiment with both methods to display a different number of rows (e.g., first ten rows, last ten rows).
  
3. **Advanced Usage:**
   - Demonstrate the use of negative indexing with both `head()` and `tail()` methods to exclude rows from the beginning or end of the DataFrame.
  