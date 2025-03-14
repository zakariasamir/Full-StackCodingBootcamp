class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Siamese(Cat):
    def sing(self, sounds):
        return f'{sounds}'


bengal_cat = Bengal("Tiger", 5)
chartreux_cat = Chartreux("Smokey", 3)
siamese_cat = Siamese("Luna", 4)


all_cats = [bengal_cat, chartreux_cat, siamese_cat]


sara_pets = Pets(all_cats)


print("\nTaking Sara's cats for a walk:")
sara_pets.walk()