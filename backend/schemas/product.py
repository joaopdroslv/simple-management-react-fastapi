from typing import List

from category import Category
from pydantic import BaseModel


class Product(BaseModel):
    id: int
    name: str
    category: List[Category]
    price: float = 0.0
    stock: int
    available: bool
