class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age


first_cat = Cat("Whiskers", 3)
second_cat = Cat("Fluffy", 5)
third_cat = Cat("Socks", 2)

def oldest_cat(cats):
    oldest = cats[0]
    for cat in cats:
        if cat.age > oldest.age:
            oldest = cat
    return oldest


cats = [first_cat, second_cat, third_cat]
oldest = oldest_cat(cats)


print(f"The oldest cat is {oldest.name}, and is {oldest.age} years old.")
