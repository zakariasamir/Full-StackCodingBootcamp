import psycopg2

Conn = psycopg2.connect("dbname=Menu user=postgres password=Dark1921")
cur = Conn.cursor()

class MenuItem :
    

    def __init__(self, name, price):
        self.name = name
        self.price = price


    def save(self):
        cur.execute("INSERT INTO menu_items(item_name, item_price) VALUES(%s, %s)", (self.name, self.price))
        Conn.commit()
        print("Item added successfully.")

    def delete(self):
        cur.execute("DELETE FROM menu_items WHERE item_name = %s", (self.name,))
        Conn.commit()
        print("Item deleted successfully.")

    def update(self, new_name, new_price):
        cur.execute("UPDATE menu_items SET item_name = %s, item_price = %s WHERE item_name = %s", (new_name, new_price, self.name))
        Conn.commit()
        print("Item updated successfully.")