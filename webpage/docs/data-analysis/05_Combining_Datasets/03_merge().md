# `merge()`

The `merge()` function in Pandas provides powerful capabilities for combining datasets using database-style join methods. This function is ideal when working with relational data, allowing you to specify how datasets should align based on key columns or indices.

---

## Introduction

The `merge()` function enables advanced dataset combinations, particularly useful for aligning datasets based on specific keys. Similar to SQL joins, `merge()` supports various join types, including:

- Inner Join
- Left Join
- Right Join
- Outer Join

This chapter will explore these methods using practical examples.

---

## Syntax

```python
pandas.merge(left, right, how='inner', on=None, left_on=None, right_on=None, ...)
```

### Parameters:
- **`left`**: DataFrame to merge.
- **`right`**: DataFrame to merge with.
- **`how`**: Type of join:
  - `"inner"` (default): Intersection of keys.
  - `"outer"`: Union of keys.
  - `"left"`: Keys from `left` DataFrame.
  - `"right"`: Keys from `right` DataFrame.
- **`on`**: Column or index level names to join on.
- **`left_on`** / **`right_on`**: Separate join keys for `left` and `right` DataFrames.

---

## Examples

### 1. Dataset Overview

Suppose we have two CSV files:

#### employees_2021.csv
| Employee_ID | Name  | Age | Job         | Gender | Salary |
|-------------|-------|-----|-------------|--------|--------|
| 1           | John  | 30  | Engineer    | Male   | 70000  |
| 2           | Ava   | 28  | Designer    | Female | 65000  |
| 3           | Liam  | 35  | Manager     | Male   | 80000  |
| ...         | ...   | ... | ...         | ...    | ...    |

#### employees_2022.csv
| Employee_ID | Name   | Age | Job         | Gender | Salary |
|-------------|--------|-----|-------------|--------|--------|
| 1           | John   | 31  | Engineer    | Male   | 75000  |
| 4           | Maria  | 27  | Designer    | Female | 67000  |
| 11          | Philip | 40  | Consultant  | Male   | 90000  |

---

### 2. Inner Join

The `inner` join selects rows where keys match in both DataFrames.

```python
import pandas as pd

# Load datasets
df1 = pd.read_csv("employees_2021.csv")
df2 = pd.read_csv("employees_2022.csv")

# Perform inner join
result = pd.merge(df1, df2, how="inner", on="Employee_ID")
print(result)
```

**Output:**
```
   Employee_ID   Name_x  Age_x         Job_x Gender_x  Salary_x  Name_y  Age_y         Job_y Gender_y  Salary_y
0            1     John     30      Engineer     Male     70000     John     31      Engineer     Male     75000
```

---

### 3. Left Join

The `left` join keeps all rows from the left DataFrame, adding matching rows from the right.

```python
result = pd.merge(df1, df2, how="left", on="Employee_ID")
print(result)
```

**Output:**
```
   Employee_ID   Name_x  Age_x         Job_x Gender_x  Salary_x   Name_y  Age_y         Job_y Gender_y  Salary_y
0            1     John     30      Engineer     Male     70000     John   31.0      Engineer     Male   75000.0
1            2      Ava     28      Designer   Female     65000      NaN    NaN           NaN      NaN       NaN
2            3     Liam     35       Manager     Male     80000      NaN    NaN           NaN      NaN       NaN
```

---

### 4. Right Join

The `right` join keeps all rows from the right DataFrame, adding matching rows from the left.

```python
result = pd.merge(df1, df2, how="right", on="Employee_ID")
print(result)
```

**Output:**
```
   Employee_ID   Name_x  Age_x         Job_x Gender_x  Salary_x   Name_y  Age_y         Job_y Gender_y  Salary_y
0            1     John   30.0      Engineer     Male   70000.0     John     31      Engineer     Male     75000
1            4      NaN    NaN           NaN      NaN       NaN    Maria     27      Designer   Female     67000
2           11      NaN    NaN           NaN      NaN       NaN   Philip     40    Consultant     Male     90000
```

---

### 5. Outer Join

The `outer` join includes all rows from both DataFrames, filling missing values with NaN where necessary.

```python
result = pd.merge(df1, df2, how="outer", on="Employee_ID")
print(result)
```

**Output:**
```
   Employee_ID   Name_x  Age_x         Job_x Gender_x  Salary_x   Name_y  Age_y         Job_y Gender_y  Salary_y
0            1     John   30.0      Engineer     Male   70000.0     John   31.0      Engineer     Male   75000.0
1            2      Ava   28.0      Designer   Female   65000.0      NaN    NaN           NaN      NaN       NaN
2            3     Liam   35.0       Manager     Male   80000.0      NaN    NaN           NaN      NaN       NaN
3            4      NaN    NaN           NaN      NaN       NaN    Maria   27.0      Designer   Female   67000.0
4           11      NaN    NaN           NaN      NaN       NaN   Philip   40.0    Consultant     Male   90000.0
```

---

## Join Scenarios

- **Matching keys in both DataFrames:** Use `inner` join for strict alignment.
- **Keys in left but not right:** Use `left` join.
- **Keys in right but not left:** Use `right` join.
- **All keys in both DataFrames:** Use `outer` join for comprehensive results.

---

## Conclusion

The `merge()` function in Pandas is a robust solution for combining datasets based on database-style joins. By understanding the nuances of each join type, you can handle relational data effectively in your data analysis tasks.

