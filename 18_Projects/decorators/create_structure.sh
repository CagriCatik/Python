#!/bin/bash

# Define the base project directory
PROJECT_DIR="flask_decorator_project"

# Create the base project directory
mkdir -p $PROJECT_DIR

# Create the 'app' directory and its files
mkdir -p $PROJECT_DIR/app
touch $PROJECT_DIR/app/__init__.py
touch $PROJECT_DIR/app/decorators.py
touch $PROJECT_DIR/app/routes.py
touch $PROJECT_DIR/app/views.py

# Create the 'templates' directory and its files
mkdir -p $PROJECT_DIR/templates
touch $PROJECT_DIR/templates/home.html
touch $PROJECT_DIR/templates/login.html
touch $PROJECT_DIR/templates/dashboard.html

# Create the 'static' directory and its files
mkdir -p $PROJECT_DIR/static
touch $PROJECT_DIR/static/styles.css

# Create the root-level files
touch $PROJECT_DIR/run.py
touch $PROJECT_DIR/requirements.txt

echo "Project structure created successfully!"
