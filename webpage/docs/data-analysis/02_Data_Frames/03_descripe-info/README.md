# Retrieving Useful Information from Data Frames with Pandas

In this tutorial, we will explore how to retrieve valuable information from data frames using the Pandas library in Python. We will use a dataset containing information about the top 1000 movies and TV shows. This dataset includes missing values and requires some data cleaning. Let's dive in step by step.

### Step 1: Importing Necessary Libraries and Loading the Dataset

First, ensure you have Pandas installed. If not, you can install it using pip:

```bash
pip install pandas
```

Now, let's import Pandas and load our dataset:

```python
import pandas as pd

# Load the dataset
df = pd.read_csv('top_1000_movies.csv')  # Make sure to replace 'top_1000_movies.csv' with your actual dataset filename
```

### Step 2: Initial Data Exploration

Before selecting specific columns, let's take a glimpse of our dataset:

```python
# Display the first few rows of the dataframe
print(df.head())
```

You'll notice that the dataset contains various columns such as 'series title', 'release year', 'genre', 'rating', 'number of votes', and 'gross income'.

### Step 3: Selecting Relevant Columns

To make our analysis more manageable, let's select a subset of columns:

```python
# Selecting relevant columns
selected_columns = ['series title', 'release year', 'genre', 'rating', 'number of votes', 'gross income']
df = df[selected_columns]
```

### Step 4: Understanding the Dataset

#### Using `.info()` method

The `.info()` method provides an overview of the dataframe's structure, including data types and missing values:

```python
# Displaying information about the dataframe
print(df.info())
```

This will give us insights into the number of entries, data types, and presence of missing values.

#### Using `.describe()` method

The `.describe()` method summarizes the numerical columns in the dataset:

```python
# Describing numerical columns
print(df.describe().round())
```

This will give us statistics like count, mean, standard deviation, and percentiles for numerical columns.

### Step 5: Data Cleaning

#### Converting 'gross income' to Numeric Type

Since 'gross income' is initially treated as an object, we need to convert it to a numeric type for analysis:

```python
# Convert 'gross income' to numeric type
df['gross income'] = df['gross income'].str.replace(',', '').fillna(0).astype(float)
```

This code snippet removes commas from the 'gross income' values, fills missing values with zero, and converts the column to a float type.

### Step 6: Further Data Analysis

#### Calculating Additional Statistics

Now, we can calculate additional statistics such as mean, max, min, and quantiles:

```python
# Calculate mean, max, min, and quantiles
mean_values = df.mean(numeric_only=True)
max_values = df.max(numeric_only=True)
min_values = df.min(numeric_only=True)
quantiles = df.quantile(0.5)
```

### Step 7: Including Non-Numeric Data in Description

If we want to include non-numeric data (e.g., strings) in the description, we can use the `include` parameter:

```python
# Include non-numeric data in description
description_with_strings = df.describe(include='object')
```

This will provide insights into non-numeric columns like 'series title', 'release year', and 'genre'.

### Conclusion

By following these steps, you can efficiently retrieve and analyze valuable information from your dataset using Pandas. This tutorial covers basic data exploration, cleaning, and analysis techniques, providing a solid foundation for further data manipulation and visualization tasks.