import Dog
import random

class PetDog(Dog.Dog):
    def __init__(self, name, age, weight, trained=False):
        super().__init__(name, age, weight)
        self.trained = trained
    
    def train(self):
        print(self.bark())
        self.trained = True
    
    def play(self, *args):
        dog_names = [self.name] + list(args)
        print(f"{', '.join(dog_names)} all play together")
    
    def do_a_trick(self):
        if self.trained:
            tricks = [
                f"{self.name} does a barrel roll",
                f"{self.name} stands on his back legs",
                f"{self.name} shakes your hand",
                f"{self.name} plays dead"
            ]
            print(random.choice(tricks))
        else:
            print(f"{self.name} is not trained yet!")


if __name__ == "__main__":

    dog1 = PetDog("Buddy", 3, 27)
    dog2 = PetDog("Max", 2, 20)
    dog3 = PetDog("Luna", 4, 25)


    print("Training Buddy:")
    dog1.train()


    print("\nPlaying together:")
    dog1.play("Max", "Luna")


    print("\nDoing tricks:")
    dog1.do_a_trick()
    dog2.do_a_trick()