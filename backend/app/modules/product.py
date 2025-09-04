from typing import Any, List, Tuple

from app.models import Product
from sqlalchemy.orm import Query, Session


# TODO: This function should go to a generic module to be reusable
def execute_query_with_pagination(
    query: Query, page: int, limit: int
) -> Tuple[int, List[Any]]:

    total = query.count()
    offset = (page - 1) * limit
    items = query.offset(offset).limit(limit).all()

    return total, items


def get_product(db: Session, id: int) -> Product:

    return db.query(Product).filter(Product.id == id).first()


def get_products(db: Session, page: int, limit: int) -> Tuple[int, List[Product]]:

    # TODO: Lacking more complex filters, not implemented yet

    query = db.query(Product)
    total, products = execute_query_with_pagination(query, page, limit)

    return total, products
