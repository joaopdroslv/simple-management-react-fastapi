from typing import List

from pydantic import BaseModel


class Category(BaseModel):
    id: int
    name: str


class GetCategories(BaseModel):
    categories: List[Category]
