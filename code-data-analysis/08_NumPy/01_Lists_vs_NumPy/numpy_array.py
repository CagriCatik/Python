import numpy as np
import time

# Create two large Numpy arrays
array_a = np.arange(1000000)
array_b = np.arange(1000000)

# Perform element-wise multiplication using Numpy arrays
start_time = time.time()
result_array = array_a * array_b
end_time = time.time()

print("Numpy Array Execution Time:", end_time - start_time, "seconds")
