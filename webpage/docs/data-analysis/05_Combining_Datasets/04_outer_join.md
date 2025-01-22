# Outer Join

The outer join is a method used in Pandas to combine datasets in a way that retains all rows from both DataFrames, filling in missing values (NaN) for non-matching entries. This comprehensive approach ensures no data is left out, making it especially useful for merging datasets with overlapping and distinct entries.

---

## Syntax

```python
pandas.merge(left, right, how='outer', on=None, suffixes=('_x', '_y'), indicator=False, ...)
```

### Parameters:
- **`left`**: DataFrame to merge.
- **`right`**: DataFrame to merge with.
- **`how`**: Join type, set to `"outer"` for this method.
- **`on`**: Column or index level names to join on.
- **`suffixes`**: Tuple of suffixes for overlapping column names in `left` and `right` DataFrames.
- **`indicator`**: Adds a column that indicates the source(s) of each row (`"both"`, `"left_only"`, or `"right_only"`).

---

## Example: Outer Join

### 1. Data Preparation
Let’s start with two datasets:

#### employees_2021.csv
| Name  | Salary |
|-------|--------|
| John  | 70000  |
| Ava   | 65000  |
| Liam  | 80000  |

#### employees_2022.csv
| Name   | Salary |
|--------|--------|
| John   | 75000  |
| Maria  | 67000  |
| Philip | 90000  |

### 2. Basic Outer Join
To retain all rows from both datasets:

```python
import pandas as pd

# Load datasets
df1 = pd.DataFrame({"Name": ["John", "Ava", "Liam"], "Salary": [70000, 65000, 80000]})
df2 = pd.DataFrame({"Name": ["John", "Maria", "Philip"], "Salary": [75000, 67000, 90000]})

# Perform outer join
result = pd.merge(df1, df2, how="outer", on="Name")
print(result)
```

**Output:**
```
     Name  Salary_x  Salary_y
0    John   70000.0   75000.0
1     Ava   65000.0       NaN
2    Liam   80000.0       NaN
3   Maria       NaN   67000.0
4  Philip       NaN   90000.0
```

- `Salary_x`: Salary from the 2021 dataset.
- `Salary_y`: Salary from the 2022 dataset.

---

### 3. Adding Suffixes for Clarity
To make columns more descriptive:

```python
result = pd.merge(df1, df2, how="outer", on="Name", suffixes=("_2021", "_2022"))
print(result)
```

**Output:**
```
     Name  Salary_2021  Salary_2022
0    John      70000.0      75000.0
1     Ava      65000.0          NaN
2    Liam      80000.0          NaN
3   Maria          NaN      67000.0
4  Philip          NaN      90000.0
```

---

### 4. Using the `indicator` Parameter
Add a column to track the origin of each row:

```python
result = pd.merge(df1, df2, how="outer", on="Name", indicator=True)
print(result)
```

**Output:**
```
     Name  Salary_x  Salary_y      _merge
0    John   70000.0   75000.0       both
1     Ava   65000.0       NaN  left_only
2    Liam   80000.0       NaN  left_only
3   Maria       NaN   67000.0  right_only
4  Philip       NaN   90000.0  right_only
```

- **`both`**: Indicates rows present in both datasets.
- **`left_only`**: Rows unique to the left dataset.
- **`right_only`**: Rows unique to the right dataset.

---

### 5. Merging Without Specifying `on`
If `on` is omitted, all overlapping columns are used as keys:

```python
result = pd.merge(df1, df2, how="outer")
print(result)
```

**Output:**
```
     Name  Salary_x  Salary_y
0    John   70000.0   75000.0
1     Ava   65000.0       NaN
2    Liam   80000.0       NaN
3   Maria       NaN   67000.0
4  Philip       NaN   90000.0
```

This merges the datasets based on shared column names.

---

### Key Takeaways:
1. **All Data Included**: Outer join ensures that no rows are excluded.
2. **Missing Values**: Rows without matches will have NaN in the corresponding columns.
3. **Indicator**: Use the `_merge` column for detailed origin tracking.
4. **Suffixes**: Customize overlapping column names with meaningful suffixes.

---

## Conclusion

The outer join method in Pandas provides a comprehensive way to merge datasets, ensuring that all rows from both datasets are included. With features like `suffixes` and `indicator`, it’s easy to manage and understand the resulting DataFrame. This functionality is crucial for handling complex datasets where completeness is essential.

