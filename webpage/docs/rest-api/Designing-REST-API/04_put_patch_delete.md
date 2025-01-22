# Consuming APIs - PUT, PATCH, and DELETE

In this chapter, we will focus on how to consume REST APIs using Python for PUT, PATCH, and DELETE requests. These methods are used to update and delete resources, providing more control over the data in your RESTful services.

## Overview

- **PUT Requests**: Used to update an existing resource or create it if it does not exist.
- **PATCH Requests**: Used to partially update an existing resource.
- **DELETE Requests**: Used to remove a resource.

## Prerequisites

Make sure you have the `requests` library installed. If not, you can install it using:

```bash
pip install requests
```

## Making PUT Requests

PUT requests are used to update an entire resource or create a new resource if it doesn't exist. When using PUT, you send the complete resource representation to the server.

### Example: Updating a Resource

Let's update a user's information with a PUT request:

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
    updated_user = response.json()  # Get the updated user data
    print(f"User ID: {updated_user['id']}, Name: {updated_user['name']}")
else:
    print(f"Failed to update user: {response.status_code}")
```

### Explanation

1. **URL**: The endpoint of the resource you want to update, including the resource ID.
2. **Payload**: The updated resource data sent in the request body.
3. **PUT Request**: Use `requests.put()` to send the PUT request. The `json` parameter handles serialization.
4. **Response Handling**: Check for a `200 OK` status code to confirm the update. Use `response.json()` to get the updated resource data.

## Making PATCH Requests

PATCH requests are used to partially update an existing resource. Unlike PUT, PATCH only requires the fields that need to be updated.

### Example: Partially Updating a Resource

Let’s say you want to update only the email address of a user:

```python
import requests

# Define the API endpoint
url = 'https://api.example.com/users/1'

# Define the partial data to update
payload = {
    'email': 'new.email@example.com'
}

# Send the PATCH request
response = requests.patch(url, json=payload)

# Check if the request was successful
if response.status_code == 200:
    print("User updated successfully!")
    updated_user = response.json()  # Get the updated user data
    print(f"User ID: {updated_user['id']}, Email: {updated_user['email']}")
else:
    print(f"Failed to update user: {response.status_code}")
```

### Explanation

1. **URL**: The endpoint of the resource to be partially updated.
2. **Payload**: The partial update data sent in the request body.
3. **PATCH Request**: Use `requests.patch()` to send the PATCH request. The `json` parameter handles serialization.
4. **Response Handling**: Check for a `200 OK` status code to confirm the partial update. Use `response.json()` to get the updated resource data.

## Making DELETE Requests

DELETE requests are used to remove a resource from the server. This method typically does not require a request body.

### Example: Deleting a Resource

Here’s how to delete a user with a DELETE request:

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

### Explanation

1. **URL**: The endpoint of the resource you want to delete.
2. **DELETE Request**: Use `requests.delete()` to send the DELETE request.
3. **Response Handling**: Check for a `204 No Content` status code, which indicates successful deletion.

## Handling Errors and Responses

### Common Status Codes

- **200 OK**: The request was successful and the response contains data.
- **201 Created**: The resource was created successfully (used with POST).
- **204 No Content**: The request was successful but there is no content to return (used with DELETE).
- **400 Bad Request**: The request was invalid or malformed.
- **404 Not Found**: The requested resource was not found.
- **500 Internal Server Error**: An error occurred on the server.

### Example: Error Handling

Here’s how to handle errors and unexpected responses:

```python
import requests

# Example PUT request
url = 'https://api.example.com/users/1'
payload = {'name': 'Jane Doe'}

response = requests.put(url, json=payload)

if response.status_code == 200:
    print("Update successful!")
elif response.status_code == 404:
    print("Resource not found.")
elif response.status_code == 400:
    print("Bad request. Check your data.")
elif response.status_code == 500:
    print("Server error. Try again later.")
else:
    print(f"Unexpected error: {response.status_code}")
```

## Conclusion

In this chapter, we have explored how to make PUT, PATCH, and DELETE requests using Python’s `requests` library. These methods allow you to update and delete resources, giving you full control over your interactions with RESTful APIs. 

In the next chapter, we will discuss how to handle API authentication and manage sessions, which is crucial for secure and efficient API interactions. Stay tuned!