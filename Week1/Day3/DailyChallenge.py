class Farm:
    def __init__(self, name):
        self.name = name
        self.animals = {}

    def add_animal(self, animal_type, quantity=1):
        if animal_type in self.animals:
            self.animals[animal_type] += quantity
        else:
            self.animals[animal_type] = quantity

    def get_info(self):
        info = f"{self.name}'s farm\n\n"
        for animal, quantity in self.animals.items():
            info += f"{animal} : {quantity}\n"
        info += "\n    E-I-E-I-0!"
        return info
    
    def get_animal_types(self):
        return sorted(self.animals.keys())
    
    def get_short_info(self):
        animal_types = self.get_animal_types()

        animals_plural = []
        for animal in animal_types:
            if self.animals[animal] > 1:
                animals_plural.append(animal + 's')
            else:
                animals_plural.append(animal)

        if len(animals_plural) > 1:
            animals_str = ", ".join(animals_plural[:-1]) + " and " + animals_plural[-1]
        else:
            animals_str = animals_plural[0]
            
        return f"{self.name}'s farm has {animals_str}."


macdonald = Farm("McDonald")
macdonald.add_animal('cow', 5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
print(macdonald.get_info())
print(macdonald.get_animal_types())
print(macdonald.get_short_info())