from typing import Any, List, Tuple

from sqlalchemy.orm import Query


def execute_query_with_pagination(
    query: Query, page: int, limit: int
) -> Tuple[int, List[Any]]:

    total = query.count()
    offset = (page - 1) * limit
    items = query.offset(offset).limit(limit).all()

    return total, items
