# Using FastAPI

In this tutorial, we will explore FastAPI, a modern, fast (high-performance) web framework for building APIs with Python. FastAPI is known for its speed and ease of use, leveraging Python type hints for validation and serialization.

## Overview

We will cover:
- Setting up a FastAPI project
- Creating a basic FastAPI application
- Defining routes and handling requests
- Using Pydantic for data validation
- Implementing dependency injection
- Running and testing the FastAPI application

## Step 1: Setting Up a FastAPI Project

### Install FastAPI and Uvicorn

FastAPI requires an ASGI server for serving the application. Uvicorn is a popular choice.

Install FastAPI and Uvicorn using pip:

```bash
pip install fastapi uvicorn
```

### Create a FastAPI Project

Create a new directory for your project and navigate into it:

```bash
mkdir fastapi_project
cd fastapi_project
```

Create a new file named `main.py`. This file will contain your FastAPI application.

## Step 2: Creating a Basic FastAPI Application

### Define a Basic App

Open `main.py` and define a simple FastAPI app:

```python
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}
```

### Run the Application

Use Uvicorn to run your FastAPI application:

```bash
uvicorn main:app --reload
```

Visit `http://127.0.0.1:8000` in your browser, and you should see:

```json
{"Hello": "World"}
```

### Interactive API Documentation

FastAPI automatically generates interactive API documentation:

- **Swagger UI**: `http://127.0.0.1:8000/docs`
- **ReDoc**: `http://127.0.0.1:8000/redoc`

## Step 3: Defining Routes and Handling Requests

### Create More Routes

Add additional routes to `main.py`:

```python
from typing import Optional

@app.get("/items/{item_id}")
def read_item(item_id: int, q: Optional[str] = None):
    return {"item_id": item_id, "q": q}
```

### Handling POST Requests

Define a POST route to handle data submission:

```python
from pydantic import BaseModel

class Item(BaseModel):
    name: str
    description: Optional[str] = None
    price: float
    tax: Optional[float] = None

@app.post("/items/")
def create_item(item: Item):
    return {"item": item}
```

## Step 4: Using Pydantic for Data Validation

### Define a Pydantic Model

Pydantic models are used for data validation and serialization. Define a model in `main.py`:

```python
from pydantic import BaseModel

class User(BaseModel):
    username: str
    email: str
    full_name: Optional[str] = None
    age: Optional[int] = None
```

### Validate Data

Use Pydantic models in your route functions to automatically validate request data:

```python
@app.post("/users/")
def create_user(user: User):
    return {"user": user}
```

## Step 5: Implementing Dependency Injection

### Define Dependencies

FastAPI allows you to declare dependencies that can be used across multiple routes:

```python
from fastapi import Depends

def get_query_param(q: Optional[str] = None):
    return q

@app.get("/items/")
def read_items(q: str = Depends(get_query_param)):
    return {"q": q}
```

### Using Dependencies in Routes

Dependencies can be used to manage common functionality:

```python
def common_parameters(q: Optional[str] = None, page: int = 1):
    return {"q": q, "page": page}

@app.get("/search/")
def search_items(params: dict = Depends(common_parameters)):
    return {"params": params}
```

## Step 6: Running and Testing the FastAPI Application

### Testing with Uvicorn

Run the application with:

```bash
uvicorn main:app --reload
```

### Testing Endpoints

You can test your FastAPI application using tools like Postman or cURL, similar to how you tested the DRF API.

#### Example cURL Requests

- **GET Request**:

  ```bash
  curl -X GET "http://127.0.0.1:8000/items/5?q=somequery"
  ```

- **POST Request**:

  ```bash
  curl -X POST "http://127.0.0.1:8000/items/" -H "Content-Type: application/json" -d '{"name": "Item1", "price": 10.5}'
  ```

### Writing Automated Tests

FastAPI supports writing tests using standard Python testing libraries. Here’s a simple example with `pytest`:

```python
from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_read_root():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"Hello": "World"}

def test_create_item():
    response = client.post("/items/", json={"name": "Item", "price": 5.0})
    assert response.status_code == 200
    assert response.json() == {"item": {"name": "Item", "price": 5.0}}
```

Run your tests with:

```bash
pytest
```

## Conclusion

In this tutorial, we explored FastAPI, setting up a basic project, defining routes, using Pydantic for data validation, implementing dependency injection, and running and testing the application. FastAPI’s features and automatic interactive documentation make it a powerful choice for building APIs.

In the next chapter, we will delve into using the FastAPI API and how to interact with it effectively. Stay tuned!