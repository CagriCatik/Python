import numpy as np
import matplotlib.pyplot as plt
from scipy import misc

# Load an image
image = misc.face(gray=True)

# Define a simple filter (blurring)
filter_kernel = np.array([[0.1, 0.1, 0.1],
                          [0.1, 0.2, 0.1],
                          [0.1, 0.1, 0.1]])

# Apply the filter
filtered_image = np.zeros_like(image)
for i in range(1, image.shape[0]-1):
    for j in range(1, image.shape[1]-1):
        filtered_image[i, j] = np.sum(image[i-1:i+2, j-1:j+2] * filter_kernel)

# Plotting
plt.figure(figsize=(10, 5))
plt.subplot(1, 2, 1)
plt.imshow(image, cmap='gray')
plt.title('Original Image')
plt.axis('off')
plt.subplot(1, 2, 2)
plt.imshow(filtered_image, cmap='gray')
plt.title('Filtered Image')
plt.axis('off')
plt.show()
