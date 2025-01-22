# Consuming APIs - GET and POST

In this chapter, we will focus on how to consume REST APIs using Python, specifically using the `requests` library. We will cover how to perform GET and POST requests, which are fundamental for retrieving and sending data to APIs.

## Overview

- **GET Requests**: Used to retrieve data from a server.
- **POST Requests**: Used to send data to a server to create a new resource.

## Prerequisites

Ensure you have the `requests` library installed. If not, install it using:

```bash
pip install requests
```

## Making GET Requests

GET requests are used to retrieve data from a REST API. This method should not change the state of the server.

### Example: Fetching Data

Let's say you want to retrieve a list of users from a hypothetical API:

```python
import requests

# Define the API endpoint
url = 'https://api.example.com/users'

# Send the GET request
response = requests.get(url)

# Check if the request was successful
if response.status_code == 200:
    data = response.json()  # Parse JSON data
    print("Users retrieved successfully:")
    for user in data:
        print(f"User ID: {user['id']}, Name: {user['name']}")
else:
    print(f"Failed to retrieve data: {response.status_code}")
```

### Explanation

1. **URL**: The endpoint from which we want to fetch data.
2. **GET Request**: Use `requests.get()` to send a GET request.
3. **Response Handling**: Check if the status code is `200 OK`. Use `response.json()` to parse the JSON response into a Python dictionary.

## Making POST Requests

POST requests are used to send data to a server to create a new resource. This method often requires sending data in the body of the request.

### Example: Creating a New Resource

Let’s create a new user with a POST request:

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
    created_user = response.json()  # Get the created user data
    print(f"User ID: {created_user['id']}, Name: {created_user['name']}")
else:
    print(f"Failed to create user: {response.status_code}")
```

### Explanation

1. **URL**: The endpoint where the data will be sent.
2. **Payload**: Data to be sent in the request body, typically in JSON format.
3. **POST Request**: Use `requests.post()` to send a POST request. The `json` parameter automatically sets the `Content-Type` header to `application/json` and serializes the data.
4. **Response Handling**: Check if the status code is `201 Created`. Use `response.json()` to parse the response and access the data of the newly created resource.

## Advanced Usage

### Query Parameters

Sometimes you may need to pass query parameters with your GET request. For example, to filter users:

```python
import requests

# Define the API endpoint with query parameters
url = 'https://api.example.com/users'
params = {'status': 'active'}

# Send the GET request with parameters
response = requests.get(url, params=params)

# Handle the response
if response.status_code == 200:
    data = response.json()
    print("Active users retrieved:")
    for user in data:
        print(f"User ID: {user['id']}, Name: {user['name']}")
else:
    print(f"Failed to retrieve data: {response.status_code}")
```

### Custom Headers

You might need to send custom headers with your requests. For example, including an API key:

```python
import requests

# Define the API endpoint
url = 'https://api.example.com/users'

# Define custom headers
headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Accept': 'application/json'
}

# Send the GET request with headers
response = requests.get(url, headers=headers)

# Handle the response
if response.status_code == 200:
    data = response.json()
    print("Data retrieved with custom headers:")
    print(data)
else:
    print(f"Failed to retrieve data: {response.status_code}")
```

## Summary

In this chapter, we have learned how to make GET and POST requests using Python's `requests` library. You can now retrieve data from an API and send data to create new resources. These operations are fundamental for interacting with RESTful services.

In the next chapter, we will cover additional HTTP methods (PUT, PATCH, DELETE) for more advanced interactions with REST APIs. Stay tuned!