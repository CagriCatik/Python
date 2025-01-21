import numpy as np
import time

# Generate a large Numpy array of random numbers using Numpy's random module
start_time = time.time()
random_array = np.random.rand(1000000)
end_time = time.time()

print("Numpy Array Random Data Generation Time:", end_time - start_time, "seconds")
