# Exercise 5 : Favorite Numbers
my_fav_numbers = {3, 7, 21, 42}
my_fav_numbers.add(15)
my_fav_numbers.add(99)
my_fav_numbers.remove(99)
friend_fav_numbers = {5, 8, 21, 34}
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
print("Our Favorite Numbers:", our_fav_numbers)