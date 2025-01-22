# Sorting Data in Pandas DataFrame using nlargest() and nsmallest()

In this tutorial, we'll explore how to efficiently sort data in a Pandas DataFrame using the `nlargest` and `nsmallest` functions. These functions are particularly useful when you need to identify the largest or smallest values in a DataFrame based on one or multiple columns.

## 1. Importing Necessary Libraries and Loading Data

First, let's import the Pandas library and load our dataset. We'll specify the columns we're interested in, which are the series title, rating, and the number of votes.

```python
import pandas as pd

# Define columns of interest
columns = ['title', 'rating', 'num_votes']

# Load dataset
df = pd.read_csv('your_dataset.csv', usecols=columns)
```

Replace `'your_dataset.csv'` with the path to your dataset file.

## 2. Sorting with `nlargest`

### 2.1 Sorting by a Single Column

To sort the DataFrame by a single column, such as the number of votes, we use the `nlargest` function.

```python
# Sorting by the number of votes (top 10)
top_10_votes = df.nlargest(10, 'num_votes')
print(top_10_votes)
```

### 2.2 Sorting by Multiple Columns

To sort by multiple columns, such as rating and number of votes, we pass a list of columns to the `nlargest` function.

```python
# Sorting by rating and then by number of votes
top_rated = df.nlargest(10, ['rating', 'num_votes'])
print(top_rated)
```

## 3. Sorting with `nsmallest`

Sorting with `nsmallest` works similarly to `nlargest`, but it retrieves the smallest values instead.

```python
# Getting the bottom 10 smallest values for number of votes
bottom_10_votes = df.nsmallest(10, 'num_votes')
print(bottom_10_votes)
```

## 4. Handling Duplicates with the `keep` Parameter

The `keep` parameter determines how duplicates are handled when retrieving the largest or smallest values.

```python
# Keeping all duplicates for the top rated movies
all_duplicates = df.nlargest(10, 'rating', keep='all')
print(all_duplicates)
```

## 5. Using `sort_values` as an Alternative

Though less efficient, you can also use `sort_values` to achieve similar results.

```python
# Sorting using sort_values (less efficient)
sorted_df = df.sort_values(by=['rating', 'num_votes'], ascending=False).head(10)
print(sorted_df)
```
