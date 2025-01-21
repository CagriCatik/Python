def mad_libs_game():
    # Get user input for various variables
    name = input("Enter a name: ")
    noun_a = input("Enter a noun: ")
    verb_a = input("Enter a verb: ")
    noun_b = input("Enter another noun: ")
    verb_b = input("Enter a past tense verb: ")
    number_a = input("Enter a number: ")
    number_b = input("Enter another number: ")

    # Create the story using formatted strings
    story = f"""
    {'-' * 30}
    This is a story about {name}, a strong and beautiful {noun_a} who loved to {verb_a}.
    {name} once {verb_b} and won a {noun_b} as a prize. Isn't that incredible?
    Today, {name} is {int(number_a) + int(number_b)} years old and has retired from all adventures,
    but the story will live on forever.
    {'-' * 30}
    """

    # Print the generated story
    print(story)

# Run the Mad Libs game
mad_libs_game()
