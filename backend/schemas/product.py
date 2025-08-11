from typing import List

from pydantic import BaseModel


class Product(BaseModel):
    id: int
    name: str
    category: str
    price: float = 0.0
    stock: int
    available: bool


class CreateProduct(BaseModel):
    name: str
    category: str
    price: float
    stock: int


class UpdateProduct(BaseModel):
    name: str = None
    category: str = None
    price: float = None
    stock: int = None
