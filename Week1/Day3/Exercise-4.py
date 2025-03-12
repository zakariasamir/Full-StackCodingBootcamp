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
    self.animals.sort()

  def get_groups(self):
    groups = {}
    for animal in self.animals:
      if animal not in groups:
        groups[animal] = 1
      else:
        groups[animal] += 1
    print(groups)


