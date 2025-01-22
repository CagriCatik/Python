# Adding URLs and Using the DRF API

In this tutorial, we will learn how to configure URLs for your Django Rest Framework (DRF) API and use the API endpoints to interact with your data. We will cover:
- Setting up URLs with DRF routers
- Using the API with HTTP methods
- Testing your API with tools like Postman or cURL

## Step 1: Adding URLs with DRF Routers

### Why Use Routers?

DRF routers automatically generate URL patterns for your API viewsets. They simplify the process of creating and maintaining URLs for your API, handling common CRUD operations.

### Define a ViewSet

Assuming you have already created a viewset for your model in `myapp/views.py`, here’s an example:

```python
from rest_framework import viewsets
from .models import User
from .serializers import UserSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
```

### Configure Routers

Create a `urls.py` file in `myapp` (if it doesn't already exist) and set up the router to include your viewsets:

```python
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet

router = DefaultRouter()
router.register(r'users', UserViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
```

### Include App URLs in the Project

Include your app’s URLs in the main project’s `urls.py`:

```python
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('myapp.urls')),  # Include app URLs
]
```

## Step 2: Using the API with HTTP Methods

### Accessing the API Endpoints

With the router set up, you can now access various endpoints for the `User` model:

- **List Users**: `GET /api/users/`
- **Retrieve a User**: `GET /api/users/{id}/`
- **Create a User**: `POST /api/users/`
- **Update a User**: `PUT /api/users/{id}/`
- **Partial Update a User**: `PATCH /api/users/{id}/`
- **Delete a User**: `DELETE /api/users/{id}/`

### Making HTTP Requests

#### Using cURL

You can interact with your API using cURL from the command line. Here are some examples:

- **List Users**:

  ```bash
  curl -X GET http://localhost:8000/api/users/
  ```

- **Create a User**:

  ```bash
  curl -X POST http://localhost:8000/api/users/ -H "Content-Type: application/json" -d '{"name": "Jane Doe", "email": "jane@example.com"}'
  ```

- **Retrieve a User**:

  ```bash
  curl -X GET http://localhost:8000/api/users/1/
  ```

- **Update a User**:

  ```bash
  curl -X PUT http://localhost:8000/api/users/1/ -H "Content-Type: application/json" -d '{"name": "John Smith", "email": "john.smith@example.com"}'
  ```

- **Delete a User**:

  ```bash
  curl -X DELETE http://localhost:8000/api/users/1/
  ```

#### Using Postman

Postman is a popular API client that provides a user-friendly interface for making HTTP requests.

1. **Install Postman**: Download and install Postman from [Postman’s official website](https://www.postman.com/).

2. **Create a Request**:
   - Open Postman and create a new request.
   - Select the HTTP method (GET, POST, PUT, PATCH, DELETE).
   - Enter the API endpoint URL (e.g., `http://localhost:8000/api/users/`).
   - Add headers and request body as needed.

3. **Send Request**:
   - Click the "Send" button to make the request.
   - Review the response returned by the API.

## Step 3: Testing Your API

### Writing Automated Tests

Automated tests ensure your API behaves as expected and helps prevent regressions. Django’s testing framework can be used to write tests for your API.

In `myapp/tests.py`, you can write tests using DRF’s `APITestCase`:

```python
from rest_framework.test import APITestCase
from rest_framework import status
from .models import User

class UserAPITestCase(APITestCase):
    def setUp(self):
        self.user = User.objects.create(name='John Doe', email='john@example.com')

    def test_list_users(self):
        response = self.client.get('/api/users/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_create_user(self):
        data = {'name': 'Jane Doe', 'email': 'jane@example.com'}
        response = self.client.post('/api/users/', data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(User.objects.count(), 2)

    def test_retrieve_user(self):
        response = self.client.get(f'/api/users/{self.user.id}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_update_user(self):
        data = {'name': 'John Smith', 'email': 'john.smith@example.com'}
        response = self.client.put(f'/api/users/{self.user.id}/', data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.user.refresh_from_db()
        self.assertEqual(self.user.name, 'John Smith')

    def test_delete_user(self):
        response = self.client.delete(f'/api/users/{self.user.id}/')
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(User.objects.count(), 0)
```

### Running Tests

Run your tests with:

```bash
python manage.py test
```

## Conclusion

In this tutorial, we set up URLs for a DRF API using routers, explored how to interact with the API using HTTP methods, and tested our API with tools like cURL, Postman, and Django’s testing framework. This setup allows you to create, read, update, and delete resources through your API effectively.

In the next chapter, we will look into using FastAPI, another powerful option for building APIs with Python, and compare it with DRF. Stay tuned!