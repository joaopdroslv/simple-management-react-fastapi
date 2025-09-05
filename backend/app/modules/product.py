from typing import List, Tuple

from app.models import Product, ProductData
from app.modules.pagination import execute_query_with_pagination
from app.schemas.product import GetProductsForm
from sqlalchemy.orm import Session


def get_product(id: int, db: Session) -> Product:

    return db.query(Product).filter(Product.id == id).first()


def get_products(
    form: GetProductsForm, page: int, limit: int, db: Session
) -> Tuple[int, List[Product]]:

    query = db.query(Product)

    if form.name is not None:
        query = query.filter(
            Product.product_data.has(ProductData.name.ilike(f"%{form.name}%"))
        )

    if form.category_id is not None:
        query = query.filter(Product.category_id == form.category_id)

    if form.supplier_id is not None:
        query = query.filter(Product.supplier_id == form.supplier_id)

    if form.price_higher_than is not None:
        query = query.filter(
            Product.product_data.has(ProductData.unit_price >= form.price_higher_than)
        )

    if form.price_lower_than is not None:
        query = query.filter(
            Product.product_data.has(ProductData.unit_price <= form.price_lower_than)
        )

    if form.stock_higher_than is not None:
        query = query.filter(Product.stock_quantity >= form.stock_higher_than)

    if form.stock_lower_than is not None:
        query = query.filter(Product.stock_quantity <= form.stock_lower_than)

    if form.is_visible is not None:
        query = query.filter(Product.is_visible == form.is_visible)

    if form.is_available is not None:
        query = query.filter(Product.is_available == form.is_available)

    # total, products = query.count(), query.all()

    total, products = execute_query_with_pagination(query, page, limit)

    return total, products
