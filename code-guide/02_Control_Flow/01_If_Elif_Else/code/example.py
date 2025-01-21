def check_club_entry(age):
    """
    Function to check if a person is old enough to enter the club.
    :param age: int - Age of the person
    """
    if age >= 21:
        print("You may enter the club.")
    else:
        print("You are not allowed in.")

def check_weather(weather):
    """
    Function to print a message based on the weather condition.
    :param weather: str - Weather condition
    """
    if weather == "clear":
        print("It is a nice day.")
    elif weather == "cloudy":
        print("The weather could be better.")
    elif weather == "rainy":
        print("What an awful day.")
    else:
        print("Unknown weather.")

def check_age_classification(age):
    """
    Function to classify a person's age into different categories.
    :param age: int - Age of the person
    """
    if age >= 21:
        print("You are an adult.")
    elif age >= 18:
        print("You are a young adult.")
    elif age > 12:
        print("You are a teenager.")
    else:
        print("Unknown age.")

# Testing the functions
# Test club entry
print("Testing club entry:")
check_club_entry(30)  # Expected: You may enter the club.
check_club_entry(20)  # Expected: You are not allowed in.

# Test weather conditions
print("\nTesting weather conditions:")
check_weather("clear")   # Expected: It is a nice day.
check_weather("cloudy")  # Expected: The weather could be better.
check_weather("rainy")   # Expected: What an awful day.
check_weather("dry")     # Expected: Unknown weather.

# Test age classification
print("\nTesting age classification:")
check_age_classification(19)  # Expected: You are a young adult.
check_age_classification(30)  # Expected: You are an adult.
check_age_classification(15)  # Expected: You are a teenager.
check_age_classification(10)  # Expected: Unknown age.
