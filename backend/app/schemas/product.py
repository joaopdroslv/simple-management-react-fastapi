from typing import List

from pydantic import BaseModel


class ProductResponse(BaseModel):
    id: int
    name: str
    category: str
    price: float = 0.0
    stock: int
    available: bool


class GetAllProductsResponse(BaseModel):
    products: List[ProductResponse]


class CreateProductForm(BaseModel):
    name: str
    category: str
    price: float
    stock: int


class UpdateProductForm(BaseModel):
    name: str = None
    category: str = None
    price: float = None
    stock: int = None
