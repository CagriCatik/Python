import pandas as pd

def preprocess_data(data):
    """Preprocess the input data."""
    # Perform data preprocessing operations
    preprocessed_data = data.dropna()
    return preprocessed_data

def analyze_data(data):
    """Analyze the preprocessed data."""
    # Perform data analysis operations
    analysis_result = data.describe()
    return analysis_result

if __name__ == "__main__":
    # Load data from CSV file
    input_data = pd.read_csv("data.csv")
    
    # Preprocess the data
    preprocessed_data = preprocess_data(input_data)
    
    # Analyze the preprocessed data
    analysis_result = analyze_data(preprocessed_data)
    
    print(analysis_result)
