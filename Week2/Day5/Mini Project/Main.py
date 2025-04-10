import psycopg2
from fastapi import FastAPI, HTTPException
from menu_item import MenuItem
from menu_manager import MenuManager
from pydantic import BaseModel

app = FastAPI()

class MenuItemCreate(BaseModel):
    name: str
    price: int

class MenuItemUpdate(BaseModel):
    name: str
    price: int

@app.post("/menu/add")
def add_item(item: MenuItemCreate):
    try:
        menu_item = MenuItem(name=item.name, price=item.price)
        menu_item.save()
        return {"message": "Item added successfully"}
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))

@app.get("/menu/{item_id}")
def get_item(item_id: int):
    return MenuManager.get_by_id(item_id)

@app.get("/menu")
def get_all_items():
    return MenuManager.all_items()

@app.delete("/menu/delete/{item_id}")
def delete_item(item_id: int):
    try:
        item = MenuItem(name=None, price=None, item_id=item_id)
        return item.delete()
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.put("/menu/update/{item_id}")
def update_item(item_id: int, item: MenuItemUpdate):
    try:
        menu_item = MenuItem(name=None, price=None, item_id=item_id)
        return menu_item.update(item.name, item.price)
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

