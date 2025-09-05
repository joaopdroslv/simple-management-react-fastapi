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


class GetProductsForm(BaseModel):

    name: str = None
    category_id: int = None
    supplier_id: int = None
    price_higher_than: float = None
    price_lower_than: float = None
    stock_higher_than: int = None
    stock_lower_than: int = None
    is_visible: bool = None
    is_available: bool = None


class CreateProductForm(BaseModel): ...


class UpdateProductForm(BaseModel): ...
