import pandas as pd
import matplotlib.pyplot as plt

# Load the `TopRichestInWorld.csv` file and make 'Name' the index and 'Age' the column
richest = pd.read_csv('TopRichestInWorld.csv', usecols=['Name', 'Age'], index_col='Name').squeeze()

# Basic Statistics
print("\nBasic Statistics:")
print("Oldest person:", richest.idxmax())
print("Age of the oldest person:", richest.max())
print("Youngest person:", richest.idxmin())
print("Age of the youngest person:", richest.min())
print("Average age of all millionaires:", round(richest.mean(), 2))
print("Median age of all millionaires:", richest.median())
print("Top 5 oldest persons:\n", richest.nlargest(5))
print("Top 5 youngest persons:\n", richest.nsmallest(5))
print("Age distribution statistics:\n", richest.describe())
print("Millionaires younger than 50:\n", richest[richest < 50])

# Create and Save Histogram
plt.hist(richest, bins=20, color='skyblue', edgecolor='black')
plt.xlabel('Age')
plt.ylabel('Count')
plt.title('Age Distribution of Millionaires')
plt.savefig('age_distribution.png')
plt.show()

# Create and Save Boxplot
plt.boxplot(richest, vert=False)
plt.xlabel('Age')
plt.title('Age Distribution of Millionaires')
plt.savefig('boxplot_age_distribution.png')
plt.show()

# Save the series as a csv file named: sample.csv
richest.to_csv('sample.csv', header=True)

# Read the csv you just saved
loaded_data = pd.read_csv('sample.csv', index_col='Name').squeeze()
print("\nLoaded data from the saved CSV:\n", loaded_data)

# Save the series as an Excel file named: sample.xlsx with columns 'Name' and 'Age'
richest.to_excel('sample.xlsx', index_label='Name')  # Remove header=['Name', 'Age']

# Read the Excel file you just saved
loaded_data_excel = pd.read_excel('sample.xlsx', index_col='Name').squeeze()
print("\nLoaded data from the saved Excel file:\n", loaded_data_excel)
