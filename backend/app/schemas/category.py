from typing import List

from pydantic import BaseModel


class CategoryResponse(BaseModel):  # Deprecated
    id: int
    name: str


class GetCategoryResponse(BaseModel):
    category: CategoryResponse


class GetCategoriesResponse(BaseModel):
    categories: List[CategoryResponse]
