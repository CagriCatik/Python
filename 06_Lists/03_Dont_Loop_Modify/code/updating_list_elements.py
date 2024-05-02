# Original list of scores
scores = [80, 65, 75, 90, 60]

# Method 1: Modifying list elements while looping
for i in range(len(scores)):
    if scores[i] < 70:
        scores[i] += 10

print("Method 1 Result:", scores)

# Method 2: Using list comprehension
updated_scores = [score + 10 if score < 70 else score for score in scores]

print("Method 2 Result:", updated_scores)
