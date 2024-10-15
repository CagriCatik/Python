import time
from functools import wraps
from flask import request, redirect, url_for

def log_execution_time(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        start_time = time.time()
        result = func(*args, **kwargs)
        end_time = time.time()
        print(f"Function {func.__name__} executed in {end_time - start_time:.4f} seconds")
        return result
    return wrapper

def login_required(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        if not request.cookies.get('authenticated'):
            return redirect(url_for('main.login'))
        return func(*args, **kwargs)
    return wrapper
