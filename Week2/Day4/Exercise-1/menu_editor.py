from menu_item import MenuItem
from menu_manager import MenuManager
import psycopg2

def show_user_menu():
  while True:
    print("(V): View an Item")
    print("(A): Add an Item")
    print("(D): Delete an Item")
    print("(U): Update an Item")
    print("(S): Show the Menu")
    print("(E): Exit")
    choice = input("Choose an option: ").upper()

    if choice == "V":
      name = input("Enter the name of the item: ")
      item = MenuManager.get_by_name(name)
      if item:
        print(f"Name: {item.name}, Price: {item.price}")
      else:
        print("Item not found.")
    elif choice == "A":
      name = input("Enter the name of the item: ")
      price = int(input("Enter the price of the item: "))
      item = MenuItem(name, price)
      item.save()
    elif choice == "D":
      name = input("Enter the name of the item: ")
      item = MenuManager.get_by_name(name)
      if item:
        item.delete()
      else:
        print("Item not found.")
    elif choice == "U":
      name = input("Enter the name of the item: ")
      new_name = input("Enter the new name of the item: ")
      new_price = int(input("Enter the new price of the item: "))
      item = MenuManager.get_by_name(name)
      if item:
        item.update(new_name, new_price)
      else:
        print("Item not found.")
    elif choice == "S":
      items = MenuManager.all_items()
      for item in items:
        print(f"Name: {item.name}, Price: {item.price}")
    elif choice == "E":
      print("Goodbye!")
      break
    else:
      print("Invalid option. Please try again.")

if __name__ == "__main__":
    show_user_menu()