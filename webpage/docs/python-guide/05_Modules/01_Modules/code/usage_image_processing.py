# usage_image_processing.py
from PIL import Image
import image_processing

# Load image
image = Image.open('example.png')

# Resize image
resized_image = image_processing.resize_image(image, 200, 200)
resized_image.show()

# Rotate image
rotated_image = image_processing.rotate_image(image, 45)
rotated_image.show()

# Convert image to grayscale
grayscale_image = image_processing.convert_to_grayscale(image)
grayscale_image.show()
