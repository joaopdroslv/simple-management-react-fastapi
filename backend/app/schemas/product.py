from typing import List

from pydantic import BaseModel


class ProductResponse(BaseModel):
    id: int
    name: str
    price: float = 0.0
    stock: int
    is_available: bool

    category_id: int
    category_name: str


class GetAllProductsResponse(BaseModel):
    products: List[ProductResponse]


class CreateProductForm(BaseModel):
    name: str
    price: float
    stock: int

    category_id: int


class UpdateProductForm(BaseModel):
    name: str = None
    price: float = None
    stock: int = None

    category_id: int = None
