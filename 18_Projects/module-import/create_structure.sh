#!/bin/bash

# Define the project name
PROJECT_NAME="my_project"

# Create the project directory structure
mkdir -p "$PROJECT_NAME/functionality"
mkdir -p "$PROJECT_NAME/data_processing"

# Create the necessary files
touch "$PROJECT_NAME/main.py"
touch "$PROJECT_NAME/functionality/arithmetic.py"
touch "$PROJECT_NAME/functionality/utilities.py"
touch "$PROJECT_NAME/functionality/__init__.py"
touch "$PROJECT_NAME/data_processing/processor.py"
touch "$PROJECT_NAME/data_processing/formatter.py"
touch "$PROJECT_NAME/data_processing/__init__.py"

# Provide feedback to the user
echo "Project structure created successfully in $PROJECT_NAME."
