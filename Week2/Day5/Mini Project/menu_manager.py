from menu_item import MenuItem
import psycopg2
from fastapi import HTTPException

class MenuManager:
  @classmethod
  def get_by_id(cls, item_id):
    try:
      with psycopg2.connect(database='Menu', user='postgres', password='Dark1921') as conn:
        with conn.cursor() as cur:
          cur.execute("SELECT * FROM Menu_Items WHERE item_id = %s", (item_id,))
          item = cur.fetchone()
          if item:
            return {"id": item[0], "name": item[1], "price": item[2]}
          raise HTTPException(status_code=404, detail="Item not found")
    except Exception as e:
            raise HTTPException(status_code=500, detail=str(e))
        
  @classmethod
  def all_items(cls):
    try:
      with psycopg2.connect(database='Menu', user='postgres', password='Dark1921') as conn:
        with conn.cursor() as cur:
          cur.execute("SELECT * FROM Menu_Items")
          items = cur.fetchall()
          return [{"id": item[0], "name": item[1], "price": item[2]} for item in items]
    except Exception as e:
            raise HTTPException(status_code=500, detail=str(e))

