import psycopg2
from psycopg2 import Error
from fastapi import HTTPException

class MenuItem:
    _connection = None
    _cursor = None

    @classmethod
    def connect(cls):
        """Establish database connection"""
        try:
            if not cls._connection:
                cls._connection = psycopg2.connect(
                    dbname="Menu",
                    user="postgres",
                    password="Dark1921"
                )
                cls._cursor = cls._connection.cursor()
        except Error as e:
            print(f"Error connecting to database: {e}")
            raise

    @classmethod
    def close_connection(cls):
        """Close database connection"""
        try:
            if cls._cursor:
                cls._cursor.close()
            if cls._connection:
                cls._connection.close()
                cls._connection = None
                cls._cursor = None
        except Error as e:
            print(f"Error closing connection: {e}")

    def __init__(self, name, price, item_id=None):
        if item_id is not None:
            self.item_id = item_id
        else:
            if not isinstance(price, (int, float)) or price <= 0:
                raise ValueError("Price must be a positive number")
            if not name or not isinstance(name, str):
                raise ValueError("Name must be a non-empty string")
            
            self.name = name
            self.price = price
        self.connect()

    def save(self):
        """Save a new menu item"""
        try:
            self._cursor.execute(
                "INSERT INTO menu_items(item_name, item_price) VALUES(%s, %s)",
                (self.name, self.price)
            )
            self._connection.commit()
            print("Item added successfully.")
        except Error as e:
            print(f"Error saving item: {e}")
            self._connection.rollback()
            raise

    def delete(self):
        """Delete a menu item"""
        if not hasattr(self, 'item_id'):
            raise ValueError("Item ID is required for deletion")
            
        try:
            self._cursor.execute(
                "DELETE FROM menu_items WHERE item_id = %s",
                (self.item_id,)
            )
            if self._cursor.rowcount == 0:
                return {"message": "Item not found"}
            self._connection.commit()
            return {"message": f"Item {self.item_id} deleted successfully"}
        except Error as e:
            self._connection.rollback()
            raise HTTPException(status_code=500, detail=str(e))

    def update(self, new_name, new_price):
        """Update a menu item"""
        if not hasattr(self, 'item_id'):
            raise ValueError("Item ID is required for update")
            
        if not isinstance(new_price, (int, float)) or new_price <= 0:
            raise ValueError("New price must be a positive number")
        if not new_name or not isinstance(new_name, str):
            raise ValueError("New name must be a non-empty string")
            
        try:
            self._cursor.execute(
                "UPDATE menu_items SET item_name = %s, item_price = %s WHERE item_id = %s RETURNING *",
                (new_name, new_price, self.item_id)
            )
            if self._cursor.rowcount == 0:
                return {"message": "Item not found"}
            
            updated_item = self._cursor.fetchone()
            self._connection.commit()
            
            return {
                "id": updated_item[0],
                "name": updated_item[1],
                "price": updated_item[2],
                "message": "Item updated successfully"
            }
        except Error as e:
            self._connection.rollback()
            raise HTTPException(status_code=500, detail=str(e))

    def __del__(self):
        """Destructor to ensure connection is closed"""
        self.close_connection()