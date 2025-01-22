# Using the FastAPI API

In this tutorial, we will explore how to interact with the FastAPI application you built. We’ll cover how to make requests to your FastAPI API, how to use interactive documentation, and how to handle responses and errors.

## Overview

We will cover:
- Accessing FastAPI API endpoints
- Using interactive API documentation
- Handling different types of responses
- Managing and debugging errors

## Step 1: Accessing FastAPI API Endpoints

### Making GET Requests

You can interact with your FastAPI API by making GET requests to your endpoints. For example, if you have a `GET /items/{item_id}` endpoint, you can use `curl`, Postman, or your web browser to retrieve data.

#### Using cURL

Retrieve an item with `item_id` 1:

```bash
curl -X GET "http://127.0.0.1:8000/items/1"
```

#### Using Postman

1. Open Postman and create a new request.
2. Set the method to GET.
3. Enter the URL `http://127.0.0.1:8000/items/1`.
4. Click "Send" to see the response.

### Making POST Requests

To create new resources, make POST requests with the required data.

#### Using cURL

Create a new item:

```bash
curl -X POST "http://127.0.0.1:8000/items/" -H "Content-Type: application/json" -d '{"name": "NewItem", "price": 20.0}'
```

#### Using Postman

1. Open Postman and create a new request.
2. Set the method to POST.
3. Enter the URL `http://127.0.0.1:8000/items/`.
4. In the "Body" tab, select "raw" and set the type to JSON.
5. Enter the JSON data, e.g., `{"name": "NewItem", "price": 20.0}`.
6. Click "Send" to see the response.

### Making PUT and PATCH Requests

To update existing resources, you can use PUT (for full updates) or PATCH (for partial updates).

#### Using cURL

Update an item (full update):

```bash
curl -X PUT "http://127.0.0.1:8000/items/1" -H "Content-Type: application/json" -d '{"name": "UpdatedItem", "price": 25.0}'
```

Update an item (partial update):

```bash
curl -X PATCH "http://127.0.0.1:8000/items/1" -H "Content-Type: application/json" -d '{"price": 25.0}'
```

#### Using Postman

1. Open Postman and create a new request.
2. Set the method to PUT or PATCH.
3. Enter the URL `http://127.0.0.1:8000/items/1`.
4. In the "Body" tab, select "raw" and set the type to JSON.
5. Enter the JSON data for the update.
6. Click "Send" to see the response.

### Making DELETE Requests

To delete a resource, use the DELETE method.

#### Using cURL

Delete an item with `item_id` 1:

```bash
curl -X DELETE "http://127.0.0.1:8000/items/1"
```

#### Using Postman

1. Open Postman and create a new request.
2. Set the method to DELETE.
3. Enter the URL `http://127.0.0.1:8000/items/1`.
4. Click "Send" to see the response.

## Step 2: Using Interactive API Documentation

FastAPI automatically generates interactive API documentation. You can use this to explore and test your API.

### Swagger UI

Access Swagger UI at `http://127.0.0.1:8000/docs`. It provides an interactive interface to:

- View and test your API endpoints.
- Check the request and response models.
- Easily send requests and see responses.

### ReDoc

Access ReDoc at `http://127.0.0.1:8000/redoc`. It offers a more detailed and readable documentation format.

## Step 3: Handling Different Types of Responses

### JSON Responses

FastAPI responses are typically JSON. Ensure your endpoints return data in JSON format by default.

```python
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Item(BaseModel):
    name: str
    price: float

@app.post("/items/")
def create_item(item: Item):
    return {"item": item}
```

### Custom Status Codes

You can return custom status codes with responses:

```python
from fastapi import HTTPException

@app.get("/error")
def raise_error():
    raise HTTPException(status_code=404, detail="Item not found")
```

### Response Models

Use Pydantic models to define response schemas:

```python
from typing import List

class UserResponse(BaseModel):
    username: str
    email: str

@app.get("/users/", response_model=List[UserResponse])
def get_users():
    return [{"username": "john", "email": "john@example.com"}]
```

## Step 4: Managing and Debugging Errors

### Handling Exceptions

FastAPI allows you to handle exceptions and return appropriate responses.

```python
from fastapi import Request

@app.exception_handler(HTTPException)
async def http_exception_handler(request: Request, exc: HTTPException):
    return JSONResponse(
        status_code=exc.status_code,
        content={"message": exc.detail},
    )
```

### Logging Errors

Set up logging to capture and review errors.

```python
import logging

logging.basicConfig(level=logging.INFO)

@app.get("/items/{item_id}")
def read_item(item_id: int):
    try:
        # Simulate item retrieval
        if item_id != 1:
            raise ValueError("Item not found")
        return {"item_id": item_id}
    except Exception as e:
        logging.error(f"Error: {e}")
        raise HTTPException(status_code=404, detail="Item not found")
```

## Conclusion

In this tutorial, we explored how to interact with your FastAPI application by making various HTTP requests, utilizing interactive documentation, handling responses, and managing errors. FastAPI’s automatic documentation and built-in validation features simplify working with APIs and provide a robust framework for building and interacting with APIs efficiently.

In the next chapter, we will compare FastAPI with other frameworks like Django Rest Framework (DRF) to help you choose the best tool for your API needs. Stay tuned!