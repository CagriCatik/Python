# Inner Join

The inner join method in Pandas is a highly focused way to merge two datasets, keeping only the rows with matching values in the specified column(s) in both DataFrames. It excludes rows that do not intersect, making it a precise tool for aligning related data.

---

## Syntax

```python
pandas.merge(left, right, how='inner', on=None, ...)
```

### Parameters:
- **`left`**: DataFrame to merge.
- **`right`**: DataFrame to merge with.
- **`how`**: Join type, set to `"inner"` (default).
- **`on`**: Column or index level names to join on.

---

## Example: Inner Join

### 1. Data Preparation
We will use the same datasets as before:

#### employees_2021.csv
| Name  | Salary |
|-------|--------|
| John  | 70000  |
| Ava   | 65000  |
| Liam  | 80000  |
| Benjamin | 75000 |

#### employees_2022.csv
| Name       | Salary |
|------------|--------|
| John       | 75000  |
| Liam       | 80000  |
| Benjamin   | 75000  |
| Isabella   | 72000  |

### 2. Inner Join on a Specific Column
To merge the datasets on the `Name` column:

```python
import pandas as pd

# Load datasets
df1 = pd.DataFrame({"Name": ["John", "Ava", "Liam", "Benjamin"], "Salary": [70000, 65000, 80000, 75000]})
df2 = pd.DataFrame({"Name": ["John", "Liam", "Benjamin", "Isabella"], "Salary": [75000, 80000, 75000, 72000]})

# Perform inner join
result = pd.merge(df1, df2, how="inner", on="Name")
print(result)
```

**Output:**
```
      Name  Salary_x  Salary_y
0    Liam     80000     80000
1  Benjamin     75000     75000
```

---

### 3. Inner Join on Multiple Columns
When you merge on multiple columns, only rows with matching values in all specified columns are included:

```python
result = pd.merge(df1, df2, how="inner", on=["Name", "Salary"])
print(result)
```

**Output:**
```
      Name  Salary
0    Liam   80000
1  Benjamin   75000
```

Here, both the `Name` and `Salary` columns must match.

---

### 4. Default Behavior Without `on`
If `on` is omitted, the join operates on all overlapping columns:

```python
result = pd.merge(df1, df2, how="inner")
print(result)
```

**Output:**
```
      Name  Salary
0    Liam   80000
1  Benjamin   75000
```

This behavior is identical to specifying all overlapping columns in the `on` parameter.

---

### 5. Explanation of Results
- **Intersection Only**: Rows appear in the result only if the values in the specified column(s) match in both DataFrames.
- **Column Suffixes**: When column names overlap (like `Salary`), Pandas appends `_x` and `_y` to differentiate them unless specified otherwise.
- **Precision**: You can control which columns are considered using the `on` parameter.

---

### Key Takeaways:
1. **Focused Merge**: Inner join only retains rows that exist in both DataFrames.
2. **Customizable Keys**: Use the `on` parameter to specify the column(s) for the join.
3. **Intersection of Columns**: Omitted `on` considers all overlapping columns for matching.

---

## Conclusion

The inner join method is ideal for extracting the intersection of datasets based on specified keys. It is the default behavior of `merge()` and provides precision in aligning datasets by excluding non-overlapping rows.

