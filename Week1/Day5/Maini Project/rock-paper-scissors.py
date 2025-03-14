import Game

def get_user_menu_choice():
    choice = input("Select (p)lay, (s)how scores, (q)uit: ").lower()
    if choice not in ["p", "s", "q"]:
        return None
    return choice

def print_results(results):
    print("\nGame Results:")
    print("-------------")
    for result, count in results.items():
        print(f"{result.capitalize()}: {count}")
    print("\nThanks for playing!")

def main():
    results = {"win": 0, "loss": 0, "draw": 0}
    
    while True:
        choice = get_user_menu_choice()
        
        if choice is None:
            print("Invalid choice. Please try again.")
            continue
            
        if choice == "q":
            break
            
        if choice == "s":
            print_results(results)
            continue
            
        if choice == "p":
            game = Game.Game()
            result = game.play()
            results[result] += 1
    
    print_results(results)

if __name__ == "__main__":
    main()
