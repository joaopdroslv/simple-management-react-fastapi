from typing import List, Optional

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

    name: Optional[str]
    category_id: Optional[int]
    supplier_id: Optional[int]
    price_higher_than: Optional[float]
    price_lower_than: Optional[float]
    stock_higher_than: Optional[int]
    stock_lower_than: Optional[int]
    is_visible: Optional[bool]
    is_available: Optional[bool]


class CreateProductForm(BaseModel): ...


class UpdateProductForm(BaseModel): ...
