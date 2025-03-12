def make_shirt(size="large", text="I love Python"):
    """Print a sentence summarizing the shirt size and message."""
    print(f"The size of the shirt is {size} and the text is '{text}'")

# Make a large shirt with default message
make_shirt()

# Make a medium shirt with default message
make_shirt(size="medium")

# Make a custom shirt with different size and message
make_shirt("small", "Hello World!")

# Bonus: Using keyword arguments
make_shirt(text="Python Developer", size="medium")