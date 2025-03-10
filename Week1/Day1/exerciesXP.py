# Exercise 1 : Hello World
for num in range(0,4): print("Hello World")


#Exercise 2 : Some Math
print((99**3)*8)


#Exercise 3 : What’s your name ?
myName = "zakaria"
name = input("What's your name ? ")
if myName == name:
    print("We have the same name !")
else:
    print("We don't have the same name !")


#Exercise 4 : Tall enough to ride a roller coaster
height = int(input("What's your height ? "))
if height >= 145:
    print("You're tall enough to ride the roller coaster")
else:
    print("You're not tall enough to ride the roller coaster")

# Exercise 5 : Favorite Numbers
my_fav_numbers = {3, 7, 21, 42}
my_fav_numbers.add(15)
my_fav_numbers.add(99)
my_fav_numbers.remove(99)
friend_fav_numbers = {5, 8, 21, 34}
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
print("Our Favorite Numbers:", our_fav_numbers)


# Exercise 6 : Tuple
t = (1, 2, 3, 4, 5)
#t.append(6)
# Tuple object has no attribute 'append'
t = t + (6,)
print(t)

#Exercise 7: List
basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Kiwi")
basket.insert(0, "Apples")
print(basket)

#Exercise 8 : Sandwich Orders
sandwich_orders = [
    "Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", 
    "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", 
    "Pastrami sandwich"
]

print("Sorry, the deli has run out of Pastrami sandwiches.\n")

while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")

finished_sandwiches = []

while sandwich_orders:
    current_sandwich = sandwich_orders.pop(0)
    print(f"Making your {current_sandwich}...")
    finished_sandwiches.append(current_sandwich)

print("\nAll sandwiches have been made:")
for sandwich in finished_sandwiches:
    print(f"- {sandwich}")
