from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    """Render the index page."""
    return render_template('index.html')

@app.route('/about')
def about():
    """Render the about page."""
    return render_template('about.html')

if __name__ == "__main__":
    app.run(debug=True)
