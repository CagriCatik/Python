import pandas as pd

# Load the dataset of the top 100 richest people in the world
richest = pd.read_csv('datasets/TopRichestInWorld.csv')

# Display the first few rows of the dataset
print("Original Dataset:")
print(richest.head())

# Correcting column names and handling the 'NetWorth' formatting
richest.columns = ['Name', 'Net Worth', 'Age', 'Country/Territory', 'Source', 'Industry']
richest['Net Worth'] = richest['Net Worth'].replace('[\$,]', '', regex=True).astype(float)

# Filter the dataset to include only billionaires from the United States
us_billionaires = richest[richest['Country/Territory'] == 'United States']

# Display the filtered dataset
print("\nUS Billionaires:")
print(us_billionaires)

# Sort the dataset based on Net Worth in descending order
richest_sorted = richest.sort_values(by='Net Worth', ascending=False)

# Display the sorted dataset
print("\nSorted Dataset by Net Worth:")
print(richest_sorted)

# Calculate the average age of billionaires from each country
average_age_by_country = richest.groupby('Country/Territory')['Age'].mean()

# Display the average age by country
print("\nAverage Age of Billionaires by Country:")
print(average_age_by_country)
