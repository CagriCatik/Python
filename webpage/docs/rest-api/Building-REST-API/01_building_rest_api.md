# Building REST APIs with Flask

In this tutorial, we'll explore how to build REST APIs using Flask, a popular micro-framework for Python. Flask is lightweight and flexible, making it an excellent choice for developing simple yet powerful APIs.

## Overview

Flask allows you to quickly create web services with minimal setup. We’ll cover:
- Setting up Flask
- Creating a basic API
- Handling requests and responses
- Implementing CRUD operations
- Running the Flask application

## Step 1: Setting Up Flask

### Install Flask

First, ensure you have Flask installed. You can install it using pip:

```bash
pip install Flask
```

### Create a Basic Flask App

Create a new file named `app.py`. This file will contain our Flask application.

```python
from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

if __name__ == '__main__':
    app.run(debug=True)
```

### Run the Flask App

Run the application with:

```bash
python app.py
```

Navigate to `http://127.0.0.1:5000` in your browser, and you should see "Hello, World!"

## Step 2: Creating a Basic API

### Define Your API Endpoints

Modify `app.py` to include API endpoints. For demonstration, we'll create a simple API for managing users.

```python
from flask import Flask, jsonify, request

app = Flask(__name__)

# In-memory storage for demonstration purposes
users = []

@app.route('/users', methods=['GET'])
def get_users():
    return jsonify(users), 200

@app.route('/users', methods=['POST'])
def add_user():
    user = request.json
    users.append(user)
    return jsonify(user), 201

if __name__ == '__main__':
    app.run(debug=True)
```

### Testing the API

- **GET `/users`**: Retrieves the list of users.
- **POST `/users`**: Adds a new user. Send JSON data in the request body.

You can use tools like Postman or `curl` to test these endpoints.

## Step 3: Handling Requests and Responses

### Parsing Request Data

Flask allows you to easily access request data. For JSON data:

```python
@app.route('/users', methods=['POST'])
def add_user():
    if not request.json:
        return jsonify({"error": "No input data provided"}), 400
    
    user = request.json
    if 'name' not in user or 'email' not in user:
        return jsonify({"error": "Missing 'name' or 'email'"}), 400
    
    users.append(user)
    return jsonify(user), 201
```

### Returning Responses

Use `jsonify` to return JSON responses and set appropriate status codes.

```python
@app.route('/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    user = next((u for u in users if u['id'] == user_id), None)
    if user is None:
        return jsonify({"error": "User not found"}), 404
    return jsonify(user), 200
```

## Step 4: Implementing CRUD Operations

### Create

Already covered in the `POST /users` endpoint.

### Read

Retrieve all users or a specific user with the `GET /users` and `GET /users/<int:user_id>` endpoints.

### Update

Add an endpoint to update user details.

```python
@app.route('/users/<int:user_id>', methods=['PUT'])
def update_user(user_id):
    user = next((u for u in users if u['id'] == user_id), None)
    if user is None:
        return jsonify({"error": "User not found"}), 404
    
    data = request.json
    user.update(data)
    return jsonify(user), 200
```

### Delete

Add an endpoint to delete a user.

```python
@app.route('/users/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    global users
    users = [u for u in users if u['id'] != user_id]
    return jsonify({"message": "User deleted"}), 204
```

## Step 5: Running the Flask Application

Ensure your application is ready for development by setting `debug=True` in `app.run()`. For production, consider using a WSGI server like Gunicorn.

### Running in Production

Install Gunicorn:

```bash
pip install gunicorn
```

Run your Flask app with Gunicorn:

```bash
gunicorn -w 4 app:app
```

This command runs your app with 4 worker processes, suitable for handling production traffic.

## Conclusion

In this tutorial, we've covered the basics of building REST APIs with Flask, including setting up Flask, creating endpoints, handling requests and responses, and implementing CRUD operations. Flask’s simplicity and flexibility make it an excellent choice for developing APIs quickly and efficiently.

In the next chapter, we’ll explore how to expand and use Flask applications in more complex scenarios. Stay tuned!