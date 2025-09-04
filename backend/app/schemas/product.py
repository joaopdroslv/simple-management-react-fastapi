from typing import List

from pydantic import BaseModel


class ResponseProduct(BaseModel):  # Deprecated
    id: int
    name: str
    price: float = 0.0
    stock: int
    is_available: bool

    category_id: int
    category_name: str


class GetProductResponse(BaseModel):
    product: ResponseProduct


class GetProductsResponse(BaseModel):
    products: List[ResponseProduct]


class CreateProductForm(BaseModel): ...


class UpdateProductForm(BaseModel): ...
