from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI(title="FastAPI 模板", version="1.0.0")


class Item(BaseModel):
    name: str
    price: float
    description: str = ""


items = {}


@app.get("/")
def root():
    return {"app": "FastAPI Template", "docs": "/docs"}


@app.get("/items/{item_id}")
def get_item(item_id: int):
    if item_id not in items:
        raise HTTPException(status_code=404, detail="未找到")
    return items[item_id]


@app.post("/items")
def create_item(item: Item):
    item_id = len(items) + 1
    items[item_id] = item
    return {"id": item_id, **item.dict()}


@app.get("/health")
def health():
    return {"status": "healthy"}
