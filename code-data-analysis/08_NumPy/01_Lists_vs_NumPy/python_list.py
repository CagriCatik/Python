import time

# Create two large lists
list_a = [i for i in range(1000000)]
list_b = [i for i in range(1000000)]

# Perform element-wise multiplication using Python lists
start_time = time.time()
result_list = [a * b for a, b in zip(list_a, list_b)]
end_time = time.time()

print("Python List Execution Time:", end_time - start_time, "seconds")
