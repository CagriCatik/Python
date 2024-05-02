import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression

def load_data(file_path):
    """Load data from file."""
    data = np.loadtxt(file_path, delimiter=',')
    X = data[:, :-1]
    y = data[:, -1]
    return X, y

def train_model(X, y):
    """Train a machine learning model."""
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    model = LinearRegression()
    model.fit(X_train, y_train)
    return model

if __name__ == "__main__":
    # Load data
    X, y = load_data("dataset.csv")
    
    # Train model
    model = train_model(X, y)
    
    # Print model coefficients
    print("Model Coefficients:", model.coef_)
