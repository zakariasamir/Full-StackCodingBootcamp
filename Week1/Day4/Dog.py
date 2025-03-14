class Dog:
  def __init__(self, name, age, weight):
    self.name = name
    self.age = age
    self.weight = weight

  def bark(self):
    return f'{self.name} is barking'
  
  def run_speed(self):
    return self.weight / self.age * 10

  def fight(self, other_dog):
    if self.run_speed() * self.weight > other_dog.run_speed() * other_dog.weight:
      return f'{self.name} is the winner'
    else:
      return f'{other_dog.name} is the winner'
    
# dog1 = Dog("Buddy", 3, 27)
# dog2 = Dog("Max", 4, 30)
# dog3 = Dog("Rocky", 5, 35)

# print(dog1.bark())
# print(dog2.run_speed())
# print(dog1.fight(dog2))