import random

class Game:
    def get_user_item(self):
        user_item = input("Select (r)ock, (p)aper, or (s)cissors: ").lower()
        while user_item not in ["r", "p", "s"]:
            user_item = input("Invalid input. Select (r)ock, (p)aper, or (s)cissors: ").lower()
        return user_item
    
    def get_computer_item(self):
        return random.choice(["r", "p", "s"])
    
    def get_game_result(self, user_item, computer_item):
        if user_item == computer_item:
            return "draw"
        elif ((user_item == "r" and computer_item == "s") or 
              (user_item == "p" and computer_item == "r") or 
              (user_item == "s" and computer_item == "p")):
            return "win"
        else:
            return "loss"
    
    def play(self):
        user_choice = self.get_user_item()
        computer_choice = self.get_computer_item()

        choice_map = {"r": "rock", "p": "paper", "s": "scissors"}
        
        print(f"\nYou selected {choice_map[user_choice]}")
        print(f"The computer selected {choice_map[computer_choice]}")
        
        result = self.get_game_result(user_choice, computer_choice)
        
        if result == "win":
            print("You win!")
        elif result == "draw":
            print("You drew!")
        else:
            print("You lose!")
            
        return result

