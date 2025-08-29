from app.database.db import Base
from app.models.category import Category
from sqlalchemy import Column, ForeignKey, func, select
from sqlalchemy.dialects.mysql import DATETIME, DECIMAL, INTEGER, VARCHAR
from sqlalchemy.orm import column_property


class Product(Base):
    __tablename__ = "product"

    id = Column(INTEGER, primary_key=True, autoincrement=True, index=True)
    name = Column(VARCHAR(length=255), nullable=False)
    price = Column(DECIMAL(10, 2), nullable=False)
    stock = Column(INTEGER, nullable=False)
    created_at = Column(DATETIME, server_default=func.now(), nullable=False)
    updated_at = Column(
        DATETIME, server_default=func.now(), onupdate=func.now(), nullable=False
    )

    category_id = Column(INTEGER, ForeignKey("category.id"), nullable=False)
    category_name = column_property(
        select([Category.name]).where(Category.id == category_id).scalar_subquery()
    )

    @property
    def is_available(self):
        return self.stock > 0
