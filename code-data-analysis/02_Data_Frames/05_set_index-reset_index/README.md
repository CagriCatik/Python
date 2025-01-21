# Modifying DataFrame Index Using Pandas

In this tutorial, we will explore how to modify the index of a DataFrame using various methods provided by the Pandas library in Python. We will cover the `set_index()` and `reset_index()` methods along with their parameters, such as `drop` and `inplace`, to understand how they affect the DataFrame's structure.

Let's dive into the tutorial step by step:

## Step 1: Importing Pandas and Reading CSV Data

As always, we start by importing the Pandas library and reading our data from a CSV file. Let's define the columns we want to use and read the CSV file using those columns.

```python
import pandas as pd

# Define columns
columns = [...]  # Define your column names here

# Read CSV file using defined columns
df = pd.read_csv('your_data.csv', usecols=columns)
```

Replace `'your_data.csv'` with the path to your CSV file and define `columns` with the names of columns you want to use.

## Step 2: Setting Index Using `set_index()`

The `set_index()` method in Pandas allows us to set a specific column as the index of the DataFrame. By default, it drops the column used for indexing. Let's see how it works:

```python
# Set index to a specific column
df.set_index('series_title', drop=False, inplace=True)
```

In this example, we set the index to the column `'series_title'`. The `drop=False` parameter ensures that the column used for indexing is retained in the DataFrame. Setting `inplace=True` performs the operation in place, modifying the original DataFrame.

To drop the column used for indexing, set `drop=True`:

```python
df.set_index('series_title', drop=True, inplace=True)
```

## Step 3: Renaming Index

You can rename the index using the `index.name` attribute. Let's rename the index to `'title'`:

```python
df.index.name = 'title'
```

This will change the name of the index from `'series_title'` to `'title'`.

## Step 4: Resetting Index Using `reset_index()`

The `reset_index()` method is useful when you want to revert the DataFrame to its original state with the default numeric index. Here's how to use it:

```python
# Reset index to default numeric index
df.reset_index(drop=False, inplace=True)
```

Setting `drop=False` ensures that the current index is retained as a column in the DataFrame. If you want to drop the current index completely, set `drop=True`.

## Step 5: Specifying Index Column While Reading CSV

When reading a CSV file, you can specify the column you want to use as the index directly. For example:

```python
# Specify index column while reading CSV
df = pd.read_csv('your_data.csv', usecols=columns, index_col='series_title')
```

By setting `index_col='series_title'`, the DataFrame will use the `'series_title'` column as the index immediately upon reading the CSV file.
