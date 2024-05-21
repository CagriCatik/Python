import random
import sys

# Dictionary to store moves and their emoji representations
moves = {
    "rock": "🪨",
    "paper": "📄",
    "scissors": "✂️"
}

# List of valid moves
valid_moves = list(moves.keys())

# Initialize scores
user_score = 0
ai_score = 0

print("Welcome to Rock, Paper, Scissors!")

while True:
    user_move = input("Choose rock, paper, or scissors: ").lower()
    
    # Exit condition
    if user_move == "exit":
        print("Thanks for playing!")
        print(f"Final Score -> You: {user_score}, AI: {ai_score}")
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
        user_score += 1
    else:
        print("AI wins!")
        ai_score += 1
    
    # Display scores
    print(f"Score -> You: {user_score}, AI: {ai_score}")
