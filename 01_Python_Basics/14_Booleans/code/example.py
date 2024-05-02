# Authentication System
is_user_authenticated = False
username = "user123"
password = "secure_password"

# Simulating user login
input_username = input("Enter your username: ")
input_password = input("Enter your password: ")

if input_username == username and input_password == password:
    is_user_authenticated = True

if is_user_authenticated:
    print("Welcome! You are now authenticated.")
else:
    print("Authentication failed. Please check your credentials.")



# Voting Eligibility Checker
age = 17
is_citizen = True

# Checking eligibility to vote
if age >= 18 and is_citizen:
    print("You are eligible to vote!")
else:
    print("You are not eligible to vote.")


# Weather Forecast Decision
is_sunny = True
temperature = 25

# Making a decision based on weather conditions
if is_sunny and temperature > 20:
    print("It's a perfect day for outdoor activities!")
elif is_sunny and temperature <= 20:
    print("It's sunny, but a bit chilly. Consider a light jacket.")
else:
    print("It's not sunny today. Plan indoor activities.")
