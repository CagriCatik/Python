import random
import time

# Generate a large list of random numbers using Python's random module
start_time = time.time()
random_list = [random.random() for _ in range(1000000)]
end_time = time.time()

print("Python List Random Data Generation Time:", end_time - start_time, "seconds")
