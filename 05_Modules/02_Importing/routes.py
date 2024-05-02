# routes.py
from flask import *

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

# utility.py
def helper_function():
    return "Utility Function"
