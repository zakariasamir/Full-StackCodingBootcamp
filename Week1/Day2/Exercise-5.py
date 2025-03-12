import random

def compare_numbers(user_number):
    """
    Compare user's number with a random number between 1 and 100.
    Display success if they match, fail if they don't.
    """
    if not 1 <= user_number <= 100:
        return "Please enter a number between 1 and 100"
    
    computer_number = random.randint(1, 100)
    
    if user_number == computer_number:
        return f"Success! Both numbers are {user_number}"
    else:
        return f"Fail! Your number was {user_number} and the computer's number was {computer_number}"

# Test the function
try:
    user_input = int(input("Enter a number between 1 and 100: "))
    print(compare_numbers(user_input))
except ValueError:
    print("Please enter a valid number")