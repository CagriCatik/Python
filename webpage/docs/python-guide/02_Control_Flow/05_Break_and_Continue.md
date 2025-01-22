
# `break` and `continue`

In Python, loops are a fundamental part of controlling the flow of a program. They allow for repeated execution of a block of code. Two important control keywords that can be used within loops are `break` and `continue`. These keywords provide additional control by allowing us to prematurely exit a loop or skip specific iterations. This tutorial provides a detailed examination of these keywords and their use cases.

## The `break` Statement

The `break` statement is used to exit a loop immediately, regardless of the loop’s condition. This can be particularly useful when a specific condition is met, and there is no need to continue iterating. Here is an example using a `while` loop:

```python
number = 5

while number > 0:
    number -= 1
    if number == 2:
        print("Breaking at 2")
        break
    print(number)
print("Done")
```

**Explanation:**

1. `number` is initialized to 5.
2. The `while` loop continues as long as `number` is greater than 0.
3. Within the loop, `number` is decremented by 1 in each iteration.
4. If `number` equals 2, the `break` statement is executed, exiting the loop immediately.
5. The current value of `number` is printed if the loop does not break.
6. After the loop exits, "Done" is printed.

Without the `break` statement, the loop would continue until `number` reaches 0, printing all values from 4 to 0. With `break`, the loop exits as soon as `number` becomes 2.

## The `continue` Statement

The `continue` statement skips the rest of the code inside the loop for the current iteration and jumps back to the start of the loop for the next iteration. Here’s how it works in a `while` loop:

```python
number = 5

while number > 0:
    number -= 1
    if number == 2:
        print("Skipping 2")
        continue
    print(number)
print("Done")
```

**Explanation:**

1. `number` is initialized to 5.
2. The `while` loop continues as long as `number` is greater than 0.
3. Within the loop, `number` is decremented by 1 in each iteration.
4. If `number` equals 2, the `continue` statement is executed, skipping the rest of the code in the loop for that iteration.
5. The current value of `number` is printed unless `continue` is executed.
6. After the loop exits, "Done" is printed.

With `continue`, when `number` is 2, the loop skips printing the number and immediately proceeds to the next iteration.

## Practical Example: A Simple Calculator

Let’s implement a practical example that incorporates both `break` and `continue` statements. We will create a simple calculator that adds positive numbers and exits when the user inputs zero.

```python
total = 0

print("Welcome to Calc Plus")
print("Add positive numbers or insert zero to exit.")

while True:
    user_input = int(input("Enter a number: "))
  
    if user_input < 0:
        print("Please enter positive numbers only.")
        continue
  
    if user_input == 0:
        print(f"Total is {total}")
        break
  
    total += user_input
```

**Explanation:**

1. `total` is initialized to 0 to keep track of the sum.
2. Instructions are printed to guide the user.
3. An infinite `while` loop is created using `while True`.
4. The user is prompted to enter a number, which is converted to an integer.
5. If the user inputs a negative number, a warning message is displayed, and the `continue` statement skips to the next iteration without adding the number to the total.
6. If the user inputs zero, the total sum is printed, and the loop exits with the `break` statement.
7. If a positive number is inputted, it is added to the `total`.

This example demonstrates the use of `break` to exit the loop when the user inputs zero and `continue` to skip processing when the user inputs a negative number.

## Using `break` and `continue` in `for` Loops

The `break` and `continue` statements can be used similarly within `for` loops. Here’s an example:

```python
for number in range(5, 0, -1):
    if number == 2:
        print("Skipping 2")
        continue
    if number == 1:
        print("Breaking at 1")
        break
    print(number)
print("Done")
```

**Explanation:**

1. The `for` loop iterates over a range of numbers from 5 to 1.
2. If `number` is 2, `continue` skips the print statement for that iteration.
3. If `number` is 1, `break` exits the loop.
4. All other values of `number` are printed.
5. "Done" is printed after the loop exits.

In summary, `break` and `continue` provide powerful control mechanisms within loops, allowing for early exit or skipping iterations based on specific conditions. Understanding these keywords enhances the ability to write efficient and effective Python code.
