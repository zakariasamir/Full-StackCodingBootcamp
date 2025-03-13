class Zoo:
  def __init__(self, zoo_name):
    self.zoo_name = zoo_name
    self.animals = []
    
  def add_animal(self, new_animal):
    if new_animal not in self.animals:
      self.animals.append(new_animal)

  def get_animals(self):
    print(self.animals)

  def sell_animal(self, animal_sold):
    if animal_sold in self.animals:
      self.animals.remove(animal_sold)

  def sort_animals(self):
    sorted_animals = {}
    

    self.animals.sort()
    

    for animal in self.animals:
        first_letter = animal[0].upper()
        if first_letter not in sorted_animals:
            sorted_animals[first_letter] = [animal]
        else:
            sorted_animals[first_letter].append(animal)
    

    for letter in sorted_animals:
        if len(sorted_animals[letter]) == 1:
            sorted_animals[letter] = sorted_animals[letter][0]
    
    return sorted_animals

  def get_groups(self):
    groups = {}
    for animal in self.animals:
        if animal not in groups:
            groups[animal] = 1
        else:
            groups[animal] += 1
    
    print("\nAnimal Groups:")
    for animal, count in groups.items():
        print(f"{animal}: {count}")


new_york_zoo = Zoo("New York Zoo")


print("\nAdding animals to the New York Zoo:")
animals_to_add = ["Giraffe", "Lion", "Lion", "Bear", "Penguin"]
for animal in animals_to_add:
    new_york_zoo.add_animal(animal)
    print(f"Added {animal} to the zoo")

print("\nAll animals in the zoo:")
new_york_zoo.get_animals()


print("\nAnimals sorted by first letter:")
print(new_york_zoo.sort_animals())


print("\nAnimal groups and their counts:")
new_york_zoo.get_groups()


print("\nSelling a Lion:")
new_york_zoo.sell_animal("Lion")
print("Updated animals after selling:")
new_york_zoo.get_animals()