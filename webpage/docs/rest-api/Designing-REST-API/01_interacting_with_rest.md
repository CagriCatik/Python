# Interacting With REST APIs and Python

Welcome to the tutorial on interacting with REST APIs using Python. In this guide, we'll explore how to work with REST APIs effectively, from making requests to handling responses. By the end of this tutorial, you'll have a solid foundation for integrating with REST APIs in your Python applications.

## Introduction to REST APIs

REST (Representational State Transfer) APIs are widely used for web services, allowing different software systems to communicate over HTTP. They are built on a set of principles that include stateless interactions, client-server architecture, and a uniform interface.

**Key REST Concepts:**

- **Statelessness**: Each API request from a client to a server must contain all the information the server needs to fulfill the request.
- **Resources**: Resources are identified by URLs. For example, `https://api.example.com/users` might represent a collection of user data.
- **HTTP Methods**: REST APIs use standard HTTP methods (GET, POST, PUT, PATCH, DELETE) to perform operations on resources.

## Getting Started with Python

To interact with REST APIs in Python, we'll use the `requests` library. This library simplifies making HTTP requests and handling responses.

### Step 1: Install the Requests Library

First, ensure that you have the `requests` library installed. You can install it using pip:

```bash
pip install requests
```

### Step 2: Making a GET Request

A GET request retrieves data from the server. Here’s an example of making a GET request to fetch user data from a hypothetical API:

```python
import requests

# Define the API endpoint
url = 'https://api.example.com/users'

# Send the GET request
response = requests.get(url)

# Check if the request was successful
if response.status_code == 200:
    data = response.json()  # Parse JSON data
    print(data)
else:
    print(f"Failed to retrieve data: {response.status_code}")
```

### Step 3: Making a POST Request

A POST request sends new data to the server. Here’s an example of posting new user data:

```python
import requests

# Define the API endpoint
url = 'https://api.example.com/users'

# Define the data to send
payload = {
    'name': 'John Doe',
    'email': 'john.doe@example.com'
}

# Send the POST request
response = requests.post(url, json=payload)

# Check if the request was successful
if response.status_code == 201:
    print("User created successfully!")
else:
    print(f"Failed to create user: {response.status_code}")
```

### Step 4: Making a PUT Request

A PUT request updates existing data on the server. Here’s an example of updating user information:

```python
import requests

# Define the API endpoint
url = 'https://api.example.com/users/1'

# Define the updated data
payload = {
    'name': 'Jane Doe',
    'email': 'jane.doe@example.com'
}

# Send the PUT request
response = requests.put(url, json=payload)

# Check if the request was successful
if response.status_code == 200:
    print("User updated successfully!")
else:
    print(f"Failed to update user: {response.status_code}")
```

### Step 5: Making a DELETE Request

A DELETE request removes data from the server. Here’s an example of deleting a user:

```python
import requests

# Define the API endpoint
url = 'https://api.example.com/users/1'

# Send the DELETE request
response = requests.delete(url)

# Check if the request was successful
if response.status_code == 204:
    print("User deleted successfully!")
else:
    print(f"Failed to delete user: {response.status_code}")
```

## Handling Responses

When interacting with REST APIs, it’s important to handle responses properly. Here are some common response status codes and their meanings:

- **200 OK**: The request was successful.
- **201 Created**: The resource was created successfully.
- **204 No Content**: The request was successful, but there is no content to return (e.g., for DELETE requests).
- **400 Bad Request**: The request was invalid or malformed.
- **404 Not Found**: The requested resource could not be found.
- **500 Internal Server Error**: An error occurred on the server.

### Example: Handling Errors

```python
import requests

url = 'https://api.example.com/users/1'

response = requests.get(url)

if response.status_code == 200:
    data = response.json()
    print(data)
elif response.status_code == 404:
    print("Resource not found.")
elif response.status_code == 500:
    print("Server error.")
else:
    print(f"Unexpected error: {response.status_code}")
```

## Conclusion

In this tutorial, we've covered the basics of interacting with REST APIs using Python. You’ve learned how to perform GET, POST, PUT, and DELETE requests, as well as how to handle different response statuses. With these skills, you can start integrating with REST APIs in your own Python applications.

Feel free to explore more advanced features of the `requests` library and delve deeper into REST API design to enhance your understanding and capabilities. Happy coding!
