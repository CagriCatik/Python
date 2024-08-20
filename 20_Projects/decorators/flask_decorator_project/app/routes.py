from flask import Blueprint, render_template, request, make_response, redirect, url_for
from .decorators import log_execution_time, login_required

main = Blueprint('main', __name__)

@main.route('/')
@log_execution_time
def home():
    return render_template('home.html')

@main.route('/login', methods=['GET', 'POST'])
@log_execution_time
def login():
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')
        if username == 'admin' and password == 'password':  # Simplified for demonstration
            response = make_response(redirect(url_for('main.dashboard')))
            response.set_cookie('authenticated', 'true')
            return response
    return render_template('login.html')

@main.route('/dashboard')
@login_required
@log_execution_time
def dashboard():
    return render_template('dashboard.html')
