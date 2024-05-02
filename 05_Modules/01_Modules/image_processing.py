# image_processing.py
from PIL import Image

def resize_image(image, width, height):
    """Resize the given image."""
    return image.resize((width, height))

def rotate_image(image, angle):
    """Rotate the given image."""
    return image.rotate(angle)

def convert_to_grayscale(image):
    """Convert the given image to grayscale."""
    return image.convert('L')
