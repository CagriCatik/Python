# Dataset Merge

This repository contains materials for a tutorial on merging datasets using the database-style join method. In this tutorial, we will explore various join methods commonly used in SQL databases and apply them using Python's Pandas library. In the upcoming lessons, we will delve into the concept of merging datasets using different join methods. If you're familiar with SQL databases, you might already have an idea about these join methods. However, if you're new to SQL, don't worry! We'll cover each join method thoroughly in the following lessons.

## Join Methods Covered

We'll be covering the following join methods:

1. Left Outer Join
2. Left Minus Right Join
3. Inner Right Join
4. Right Minus Left Join
5. Inner Join
6. Outer Minus Join

## Datasets

We'll be working with two CSV files:

1. **company_2021.csv**: Contains information about employees in the company for the year 2021. It includes columns for employee ID, name, age, job, gender, and salary.
2. **company_2022.csv**: Contains information about employees in the company for the year 2022. It is similar to the 2021 dataset but may include changes such as new employees, replacements, or removals.

## Tutorial Content

In the Jupyter Notebook included in this repository, we'll walk through the process of merging these datasets using the Pandas `merge` method. We'll demonstrate how to:

- Load the datasets into Pandas DataFrames.
- Inspect the contents of both datasets.
- Perform various types of joins using different methods.
- Analyze the results of each join.

## Conclusion

By the end of this tutorial, you'll have a solid understanding of how to merge datasets using different join methods in Pandas. This skill is essential for data manipulation and analysis tasks, especially when dealing with multiple datasets with related information.

If you have any questions or need further assistance, feel free to reach out.

Happy learning! 🚀
