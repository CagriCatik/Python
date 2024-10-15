# random_responses.py
import random

def get_random_response():
    random_responses = [
        "Please try writing something more descriptive.",
        "Oh, it appears you wrote something that I don't understand yet.",
        "Do you mind trying to rephrase that?",
        "I'm terribly sorry, I didn't quite catch that.",
        "I can't answer that yet. Please try asking something else."
    ]
    return random.choice(random_responses)
