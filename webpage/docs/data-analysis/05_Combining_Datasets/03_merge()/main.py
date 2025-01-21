import pandas as pd

# Load datasets
df_2021 = pd.read_csv('dataset/company_2021.csv', delimiter=';')
df_2022 = pd.read_csv('dataset/company_2022.csv', delimiter=';')

# Display contents of both datasets
print("Contents of company_2021.csv:")
print(df_2021.head())
print("\nContents of company_2022.csv:")
print(df_2022.head())

# Perform left outer join
left_outer_join = pd.merge(df_2021, df_2022, on='ID', how='left')
print("\nLeft Outer Join:")
print(left_outer_join.head())

# Perform left minus right join
left_minus_right_join = pd.merge(df_2021, df_2022, on='ID', how='left', indicator=True).query("_merge == 'left_only'").drop(columns=['_merge'])
print("\nLeft Minus Right Join:")
print(left_minus_right_join)

# Perform inner right join
inner_right_join = pd.merge(df_2021, df_2022, on='ID', how='inner')
print("\nInner Right Join:")
print(inner_right_join)

# Perform right minus left join
right_minus_left_join = pd.merge(df_2021, df_2022, on='ID', how='right', indicator=True).query("_merge == 'right_only'").drop(columns=['_merge'])
print("\nRight Minus Left Join:")
print(right_minus_left_join)

# Perform inner join
inner_join = pd.merge(df_2021, df_2022, on='ID', how='inner')
print("\nInner Join:")
print(inner_join)

# Perform outer minus join
outer_minus_join = pd.concat([left_minus_right_join, right_minus_left_join])
print("\nOuter Minus Join:")
print(outer_minus_join)
