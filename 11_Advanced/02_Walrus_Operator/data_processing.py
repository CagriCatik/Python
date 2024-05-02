import pandas as pd
import logging

# Configure the logging module
logging.basicConfig(level=logging.INFO)

# Use a relative path for the CSV file
csv_file_path = '11_Advanced\\02_Walrus_Operator\\data.csv'

# Read data from the CSV file
logging.info(f"Reading data from the CSV file: {csv_file_path}")
data = pd.read_csv(csv_file_path)

# Group the data by 'age' and calculate the mean of 'score' for each age group
grouped_data = data.groupby('age')['score'].mean().reset_index()

# Define a function to filter the data based on a threshold
def filter_data(df, column, threshold):
    return df[df[column] > threshold]

# Set the threshold for the score
score_threshold = 75
logging.info(f"Applying the score threshold: {score_threshold}")

# Filter the data
filtered_data = filter_data(grouped_data, 'score', score_threshold)

# Display the filtered result
logging.info("Displayed filtered result:")
print(filtered_data)
