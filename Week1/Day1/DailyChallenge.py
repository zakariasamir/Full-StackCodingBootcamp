# Challenge 1
number = int(input("Enter a number: "))
length = int(input("Enter the length: "))

multiples = [number * i for i in range(1, length + 1)]

print(multiples)

# Challenge 2

def remove_consecutive_duplicates(word):
    result = word[0]
    
    for i in range(1, len(word)):  
        if word[i] != word[i - 1]:
            result += word[i]
    
    return result

user_word = input("Enter a word: ")

new_word = remove_consecutive_duplicates(user_word)
print("New word:", new_word)

