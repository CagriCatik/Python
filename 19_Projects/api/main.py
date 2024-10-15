from flask import Flask, request, jsonify
from collections import namedtuple
from datetime import datetime

app = Flask(__name__)

# Define the response named tuple
Response = namedtuple('Response', ['response', 'accuracy'])

def generate_response(user_input: str) -> Response:
    lower_input = user_input.lower()
    if lower_input == "hello":
        return Response("Hey there!", 1.0)
    elif lower_input == "goodbye":
        return Response("See you later!", 1.0)
    else:
        return Response("Could not understand", 0.0)

@app.route('/')
def index():
    return jsonify({
        "test": "This is an example",
        "date": datetime.today().strftime('%Y-%m-%d'),
        "timestamp": datetime.now().strftime('%H:%M:%S')
    })

@app.route('/chat', methods=['GET'])
def chat():
    user_input = request.args.get('input', '')
    response = generate_response(user_input)
    return jsonify({
        "input": user_input,
        "response": response.response,
        "accuracy": response.accuracy
    })

if __name__ == '__main__':
    app.run(debug=True)
