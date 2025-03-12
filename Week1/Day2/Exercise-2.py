def family_dictionary(family):
    total_cost = 0
    for key, value in family.items():
        result = 0
        if value < 3:
            result = 0
        elif 3 <= value <= 12:
            result = 10
        else:
            result = 15
        total_cost += result
    return total_cost

family = {}


num_members = int(input("How many family members do you want to enter? "))


for i in range(num_members):
    name = input(f"Enter name for family member {i+1}: ")
    age = int(input(f"Enter age for {name}: "))
    family[name] = age


print(f"Total cost for the family: ${family_dictionary(family)}")