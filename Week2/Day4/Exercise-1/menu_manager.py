from menu_item import MenuItem
import psycopg2

class MenuManager:
  @classmethod
  def get_by_name(cls, name):
    with psycopg2.connect("dbname=Menu user=postgres password=Dark1921") as Conn :
      with Conn.cursor() as cur :
        cur.execute("SELECT * FROM menu_items WHERE item_name = %s", (name,))
        item = cur.fetchone()
        if item:
            return MenuItem(item[1], item[2])
        else:
            return None
        
  @classmethod
  def all_items(cls):
    with psycopg2.connect("dbname=Menu user=postgres password=Dark1921") as Conn :
      with Conn.cursor() as cur :
        cur.execute("SELECT * FROM menu_items")
        items = cur.fetchall()
        return [MenuItem(item[1], item[2]) for item in items]
