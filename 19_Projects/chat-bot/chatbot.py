# chatbot.py
import json
import re
from random_responses import get_random_response

def load_json(file):
    with open(file, "r") as bot_responses:
        print(f"Loaded {file} successfully!")
        return json.load(bot_responses)

response_data = load_json("responses.json")["responses"]

def split_message(message):
    return re.findall(r'\b\w+\b', message.lower())

def get_response(user_input):
    split_message_input = split_message(user_input)
    score_list = []

    for response in response_data:
        response_score = 0
        required_score = 0
        required_words = response["required_words"]

        if required_words:
            for word in split_message_input:
                if word in required_words:
                    required_score += 1

        if required_score == len(required_words):
            for word in split_message_input:
                if word in response["user_input"]:
                    response_score += 1

        score_list.append(response_score)

    best_response = max(score_list)
    response_index = score_list.index(best_response)

    if user_input == "":
        return "Please type something so we can chat :)"
    elif best_response != 0:
        return response_data[response_index]["bot_response"]
    else:
        return get_random_response()

def main():
    while True:
        user_input = input("You: ")
        if user_input.lower() in ["exit", "quit", "bye"]:
            print("Bot: Goodbye!")
            break
        print(f"Bot: {get_response(user_input)}")

if __name__ == "__main__":
    main()
