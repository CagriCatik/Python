# Expanding and Using Flask App

In this tutorial, we will expand on our basic Flask application by adding more features and organizing the code for better scalability and maintainability. We will cover:
- Modularizing the Flask app
- Adding data persistence with a database
- Implementing authentication
- Using Blueprints for better organization
- Testing the Flask app

## Step 1: Modularizing the Flask App

As your Flask application grows, organizing your code into multiple files and modules will make it easier to manage.

### Create a Project Structure

Here’s a recommended structure for a larger Flask application:

```
/my_flask_app
    /app
        __init__.py
        models.py
        routes.py
        config.py
    /tests
        test_routes.py
    run.py
```

### `__init__.py`

This file initializes the Flask application and brings together components.

```python
from flask import Flask
from .config import Config

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    from .routes import main_bp
    app.register_blueprint(main_bp)

    return app
```

### `config.py`

Store configuration settings here.

```python
class Config:
    SECRET_KEY = 'your_secret_key'
    SQLALCHEMY_DATABASE_URI = 'sqlite:///site.db'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
```

### `models.py`

Define your data models using SQLAlchemy.

```python
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
```

### `routes.py`

Define your routes and handlers.

```python
from flask import Blueprint, jsonify, request
from .models import db, User

main_bp = Blueprint('main', __name__)

@main_bp.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    return jsonify([user.as_dict() for user in users]), 200

@main_bp.route('/users', methods=['POST'])
def add_user():
    if not request.json:
        return jsonify({"error": "No input data provided"}), 400
    
    data = request.json
    new_user = User(name=data['name'], email=data['email'])
    db.session.add(new_user)
    db.session.commit()
    return jsonify(new_user.as_dict()), 201

# Add methods for updating and deleting users similarly
```

### `run.py`

Entry point to run the application.

```python
from app import create_app, db

app = create_app()

if __name__ == '__main__':
    with app.app_context():
        db.create_all()  # Create database tables
    app.run(debug=True)
```

## Step 2: Adding Data Persistence with a Database

To persist data, you’ll use a database. Flask integrates well with SQLAlchemy, a powerful ORM for Python.

### Install SQLAlchemy

```bash
pip install Flask-SQLAlchemy
```

### Configure SQLAlchemy

Add the database URI to `config.py` and initialize SQLAlchemy in `__init__.py`.

### Define Models

Define your data models in `models.py` as shown above. Use `db.create_all()` in `run.py` to create the database tables.

### Use Models in Routes

Access and manipulate data using SQLAlchemy’s ORM capabilities in your route handlers.

## Step 3: Implementing Authentication

Authentication ensures that only authorized users can access certain resources.

### Install Flask-Login

```bash
pip install Flask-Login
```

### Configure Flask-Login

Set up Flask-Login in `__init__.py`.

```python
from flask_login import LoginManager

login_manager = LoginManager()
login_manager.login_view = 'login'

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    
    db.init_app(app)
    login_manager.init_app(app)

    from .routes import main_bp
    app.register_blueprint(main_bp)

    return app
```

### Create User Loader

In `models.py`, add a user loader function.

```python
from flask_login import UserMixin

class User(db.Model, UserMixin):
    # Define model fields

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))
```

### Implement Authentication Routes

Add routes for login and logout in `routes.py`.

```python
from flask_login import login_user, logout_user, login_required, current_user

@main_bp.route('/login', methods=['POST'])
def login():
    data = request.json
    user = User.query.filter_by(email=data['email']).first()
    if user and user.password == data['password']:  # Hash and check passwords in practice
        login_user(user)
        return jsonify({"message": "Login successful"}), 200
    return jsonify({"error": "Invalid credentials"}), 401

@main_bp.route('/logout', methods=['POST'])
@login_required
def logout():
    logout_user()
    return jsonify({"message": "Logout successful"}), 200
```

## Step 4: Using Blueprints for Better Organization

Blueprints help in organizing routes and functionality into modular components.

### Define Blueprints

In `routes.py`, you’ve already defined a blueprint. Use blueprints to separate different sections of your application.

### Register Blueprints

Register blueprints in `create_app()` function in `__init__.py`.

```python
def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)
    login_manager.init_app(app)

    from .routes import main_bp
    app.register_blueprint(main_bp, url_prefix='/api')

    return app
```

## Step 5: Testing the Flask App

Testing ensures your application behaves as expected and helps prevent bugs.

### Write Tests

Create tests in the `tests` directory. For example, `test_routes.py` might look like this:

```python
import unittest
from app import create_app, db

class BasicTests(unittest.TestCase):
    def setUp(self):
        self.app = create_app()
        self.app.config['TESTING'] = True
        self.app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
        self.client = self.app.test_client()
        with self.app.app_context():
            db.create_all()

    def tearDown(self):
        with self.app.app_context():
            db.drop_all()

    def test_get_users(self):
        response = self.client.get('/api/users')
        self.assertEqual(response.status_code, 200)

    def test_add_user(self):
        response = self.client.post('/api/users', json={'name': 'John Doe', 'email': 'john@example.com'})
        self.assertEqual(response.status_code, 201)
        self.assertIn(b'John Doe', response.data)

if __name__ == '__main__':
    unittest.main()
```

### Run Tests

Execute tests with:

```bash
python -m unittest discover
```

## Conclusion

In this tutorial, we've expanded our basic Flask application by modularizing the code, adding data persistence with SQLAlchemy, implementing authentication, using blueprints for better organization, and writing tests. These steps will help you build more robust, scalable, and maintainable Flask applications.

In the next chapter, we'll explore using Django Rest Framework (DRF) for building REST APIs, another powerful option for Python developers. Stay tuned!