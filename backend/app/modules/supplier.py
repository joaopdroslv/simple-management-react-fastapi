from typing import List, Tuple

from app.models import Supplier, SupplierData
from app.modules.pagination import execute_query_with_pagination
from sqlalchemy.orm import Session


def get_supplier(id: int, db: Session) -> Supplier:

    return db.query(Supplier).filter(Supplier.id == id).first()


def get_suppliers(page: int, limit: int, db: Session) -> Tuple[int, List[Supplier]]:

    query = db.query(Supplier)

    # total, suppliers = query.count(), query.all()

    total, suppliers = execute_query_with_pagination(query, page, limit)

    return total, suppliers
