from typing import List

from pydantic import BaseModel


class ProductResponse(BaseModel):
    id: int
    name: str
    category_id: str
    price: float = 0.0
    stock: int
    available: bool


class GetAllProductsResponse(BaseModel):
    products: List[ProductResponse]


class CreateProductForm(BaseModel):
    name: str
    category_id: str
    price: float
    stock: int


class UpdateProductForm(BaseModel):
    name: str = None
    category_id: str = None
    price: float = None
    stock: int = None
