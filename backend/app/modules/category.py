from typing import List, Tuple

from app.models import Category, CategoryData
from app.modules.pagination import execute_query_with_pagination
from sqlalchemy.orm import Session


def get_category(id: int, db: Session) -> Category:

    return db.query(Category).filter(Category.id == id).first()


def get_categories(page: int, limit: int, db: Session) -> Tuple[int, List[Category]]:

    query = db.query(Category)

    # total, categories = query.count(), query.all()

    total, categories = execute_query_with_pagination(query, page, limit)

    return total, categories
