from typing import Any, List, Tuple

from app.models import Product
from sqlalchemy.orm import Query, Session


def get_visible_products_query(db: Session) -> Query:
    """Returns a query that filters only visible products."""

    return db.query(Product).filter(Product.is_visible == True)


def get_all_products(db: Session) -> List[Product]:

    query = get_visible_products_query(db)
    products = query.all()

    return products


# TODO: This function should go to a generic module to be reusable
def execute_query_with_pagination(
    query: Query, page: int, limit: int
) -> Tuple[int, List[Any]]:

    total = query.count()
    offset = (page - 1) * limit
    items = query.offset(offset).limit(limit).all()

    return total, items


def get_products(db: Session, page: int, limit: int) -> Tuple[int, List[Product]]:

    # TODO: Lacking more complex filters, not implemented yet

    query = get_visible_products_query(db)
    total, products = execute_query_with_pagination(query, page, limit)

    return total, products
