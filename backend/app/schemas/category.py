from typing import List

from pydantic import BaseModel


class CategoryResponse(BaseModel):
    id: int
    name: str


class GetAllCategoriesResponse(BaseModel):
    categories: List[CategoryResponse]
