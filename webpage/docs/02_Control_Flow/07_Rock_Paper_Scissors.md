# Building a Rock, Paper, Scissors Game in Python

In this tutorial, we will create a classic game of Rock, Paper, Scissors in Python. This project will incorporate basic artificial intelligence to simulate an opponent. The steps outlined will guide you through setting up the game, handling user input, implementing game logic, and displaying the results. Additionally, we will suggest a bonus assignment to further enhance your Python skills.

## Step 1: Import Required Libraries

We will use Python's `random` library to enable the AI to make random choices. We will also use the `sys` library to handle program termination.

```python
import random
import sys
```

## Step 2: Define Game Elements

First, we define the available moves and their corresponding emoji representations. Emojis are optional, and you can use simple text representations instead.

```python
# Dictionary to store moves and their emoji representations
moves = {
    "rock": "🪨",
    "paper": "📄",
    "scissors": "✂️"
}

# List of valid moves
valid_moves = list(moves.keys())
```

## Step 3: Display Welcome Message

We will display a welcome message to the user.

```python
print("Welcome to Rock, Paper, Scissors!")
```

## Step 4: Main Game Loop

We will create an infinite loop that repeatedly asks the user for their move until they decide to exit the game.

```python
while True:
    user_move = input("Choose rock, paper, or scissors: ").lower()
  
    # Exit condition
    if user_move == "exit":
        print("Thanks for playing!")
        sys.exit()
  
    # Check for valid move
    if user_move not in valid_moves:
        print("Invalid move. Please choose rock, paper, or scissors.")
        continue
  
    # AI move
    ai_move = random.choice(valid_moves)
  
    # Display moves
    print("-" * 10)
    print(f"You: {moves[user_move]}")
    print(f"AI: {moves[ai_move]}")
    print("-" * 10)
  
    # Determine winner
    if user_move == ai_move:
        print("It is a tie!")
    elif (user_move == "rock" and ai_move == "scissors") or \
         (user_move == "scissors" and ai_move == "paper") or \
         (user_move == "paper" and ai_move == "rock"):
        print("You win!")
    else:
        print("AI wins!")
```

## Step 5: Run and Test the Game

To test the game, run the script and interact with it by entering various moves such as "rock," "paper," and "scissors." Ensure that the game responds correctly and identifies the winner or if it's a tie.

## Bonus Assignment: Adding a Scoring System

To make the game more engaging, add a scoring system that keeps track of the number of wins for both the user and the AI.

1. **Initialize Score Variables**:

   ```python
   user_score = 0
   ai_score = 0
   ```
2. **Update Scores**:

   Modify the winner determination section to update the scores accordingly.

   ```python
   if user_move == ai_move:
       print("It is a tie!")
   elif (user_move == "rock" and ai_move == "scissors") or \
        (user_move == "scissors" and ai_move == "paper") or \
        (user_move == "paper" and ai_move == "rock"):
       print("You win!")
       user_score += 1
   else:
       print("AI wins!")
       ai_score += 1
   ```
3. **Display Scores**:

   After each round, display the current scores.

   ```python
   print(f"Score -> You: {user_score}, AI: {ai_score}")
   ```
