# Getting to Know Django Rest Framework (DRF)

In this tutorial, we will dive into Django Rest Framework (DRF), a powerful toolkit for building Web APIs in Django. DRF simplifies the process of creating RESTful APIs and provides features like serialization, authentication, and viewsets.

## Overview

We will cover:
- Setting up DRF
- Creating a basic DRF project
- Understanding serializers
- Using viewsets and routers
- Implementing basic authentication
- Testing DRF APIs

## Step 1: Setting Up DRF

### Install Django and DRF

First, you need to have Django and DRF installed. If you haven’t installed them yet, you can do so with pip:

```bash
pip install django djangorestframework
```

### Create a Django Project

Start by creating a new Django project:

```bash
django-admin startproject myproject
```

Navigate to your project directory:

```bash
cd myproject
```

### Create a Django App

Create a new app where we will build our API:

```bash
python manage.py startapp myapp
```

### Configure DRF in Django

Add `rest_framework` and your app (`myapp`) to the `INSTALLED_APPS` in `myproject/settings.py`:

```python
INSTALLED_APPS = [
    ...
    'rest_framework',
    'myapp',
]
```

## Step 2: Creating a Basic DRF Project

### Define a Model

In `myapp/models.py`, define a model for your API. For example, let’s create a `User` model:

```python
from django.db import models

class User(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    
    def __str__(self):
        return self.name
```

### Create and Apply Migrations

Generate and apply migrations to create the database schema:

```bash
python manage.py makemigrations
python manage.py migrate
```

### Create a Serializer

Serializers in DRF are used to convert complex data types, such as Django models, into native Python data types that can then be rendered into JSON.

Create a file named `serializers.py` in `myapp` and define a serializer for the `User` model:

```python
from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
```

### Create Views

Views handle the logic of your API. You can use DRF’s `APIView` or `viewsets` to create views.

In `myapp/views.py`, define a view using DRF’s `APIView`:

```python
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import User
from .serializers import UserSerializer

class UserList(APIView):
    def get(self, request):
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
```

### Define URL Routing

Create a file named `urls.py` in `myapp` and configure URL routing for your API:

```python
from django.urls import path
from .views import UserList

urlpatterns = [
    path('users/', UserList.as_view(), name='user-list'),
]
```

Include the `myapp` URLs in the main project’s `urls.py`:

```python
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('myapp.urls')),
]
```

## Step 3: Understanding Serializers

### Serializers

Serializers in DRF handle the conversion between complex data types and native Python data types. Here’s a breakdown:

- **ModelSerializer**: A shortcut for creating serializers that deal with Django models. It automatically generates fields based on the model.

```python
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
```

- **Serializer**: Provides more control over serialization but requires manual field definition.

```python
class UserSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=100)
    email = serializers.EmailField()

    def create(self, validated_data):
        return User.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.email = validated_data.get('email', instance.email)
        instance.save()
        return instance
```

## Step 4: Using ViewSets and Routers

### ViewSets

ViewSets provide a high-level abstraction for working with DRF. They combine CRUD operations into a single class.

In `myapp/views.py`, define a viewset:

```python
from rest_framework import viewsets
from .models import User
from .serializers import UserSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
```

### Routers

Routers automatically generate URL conf for your viewsets.

In `myapp/urls.py`, use a router to register your viewsets:

```python
from rest_framework.routers import DefaultRouter
from .views import UserViewSet

router = DefaultRouter()
router.register(r'users', UserViewSet)

urlpatterns = router.urls
```

## Step 5: Implementing Basic Authentication

### Add Authentication

DRF supports several authentication methods. We will use basic authentication for simplicity.

In `myproject/settings.py`, add the authentication classes:

```python
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.BasicAuthentication',
    ],
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.IsAuthenticated',
    ],
}
```

### Create a User and Test Authentication

Create a superuser to test authentication:

```bash
python manage.py createsuperuser
```

Use the Django admin to view and manage users, or use an API client like Postman to test authentication.

## Step 6: Testing DRF APIs

### Write Tests

You can use Django’s test framework to test your DRF APIs. Create a `tests.py` file in `myapp`:

```python
from rest_framework.test import APITestCase
from rest_framework import status
from .models import User

class UserTests(APITestCase):
    def setUp(self):
        self.user = User.objects.create(name='John Doe', email='john@example.com')
    
    def test_get_users(self):
        response = self.client.get('/api/users/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_post_user(self):
        data = {'name': 'Jane Doe', 'email': 'jane@example.com'}
        response = self.client.post('/api/users/', data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(User.objects.count(), 2)
```

### Run Tests

Run your tests with:

```bash
python manage.py test
```

## Conclusion

In this tutorial, we explored Django Rest Framework (DRF), covering its setup, basic usage, and key features such as serializers, viewsets, routers, and authentication. DRF provides powerful tools to quickly build and manage APIs within Django, making it a robust choice for API development.

In the next chapter, we will delve into loading and serializing data with DRF to further enhance your API capabilities. Stay tuned!