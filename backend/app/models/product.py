from datetime import datetime
from decimal import Decimal

from app.database.db import Base
from sqlalchemy import ForeignKey, func, select
from sqlalchemy.dialects.mysql import BOOLEAN, DATETIME, DECIMAL, INTEGER, VARCHAR
from sqlalchemy.orm import Mapped, column_property, mapped_column, relationship


class ProductData(Base):

    __tablename__ = "product_data"

    id: Mapped[int] = mapped_column(
        INTEGER, primary_key=True, autoincrement=True, index=True
    )
    name: Mapped[str] = mapped_column(VARCHAR(255), nullable=False)
    unit_price: Mapped[Decimal] = mapped_column(DECIMAL(10, 2), nullable=False)
    unit_size: Mapped[Decimal] = mapped_column(DECIMAL(10, 2), nullable=False)
    created_at: Mapped[datetime] = mapped_column(
        DATETIME, server_default=func.now(), nullable=False
    )
    updated_at: Mapped[datetime] = mapped_column(
        DATETIME, server_default=func.now(), onupdate=func.now(), nullable=False
    )

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "unit_price": float(self.unit_price),
            "unit_size": float(self.unit_size),
            "created_at": self.created_at.isoformat(),
            "updated_at": self.updated_at.isoformat(),
        }


class Product(Base):

    __tablename__ = "product"

    id: Mapped[int] = mapped_column(
        INTEGER, primary_key=True, autoincrement=True, index=True
    )
    is_visible: Mapped[bool] = mapped_column(BOOLEAN, nullable=False)
    stock_quantity: Mapped[int] = mapped_column(INTEGER, nullable=False)
    created_at: Mapped[datetime] = mapped_column(
        DATETIME, server_default=func.now(), nullable=False
    )
    updated_at: Mapped[datetime] = mapped_column(
        DATETIME, server_default=func.now(), onupdate=func.now(), nullable=False
    )

    unit_of_measure_id: Mapped[int] = mapped_column(
        INTEGER, ForeignKey("unit_of_measure.id"), nullable=False, index=True
    )
    unit_of_measure: Mapped["UnitOfMeasure"] = relationship("UnitOfMeasure")

    category_id: Mapped[int] = mapped_column(
        INTEGER, ForeignKey("category.id"), nullable=False, index=True
    )
    category: Mapped["Category"] = relationship("Category")
    # category_name: Mapped[str] = column_property(
    #     select(Category.name).where(Category.id == category_id).scalar_subquery()
    # )

    supplier_id: Mapped[int] = mapped_column(
        INTEGER, ForeignKey("supplier.id"), nullable=False, index=True
    )
    supplier: Mapped["Supplier"] = relationship("Supplier")

    product_data_id: Mapped[int] = mapped_column(
        INTEGER, ForeignKey("product_data.id"), nullable=False, index=True
    )
    product_data: Mapped["ProductData"] = relationship("ProductData")

    @property
    def is_available(self):
        return self.stock_quantity > 0

    @property
    def sold_this_month(self):
        return 999

    @property
    def sold_this_week(self):
        return 99

    @property
    def sold_today(self):
        return 9

    def to_dict(self):
        return {
            "id": self.id,
            "details": self.product_data.to_dict(),
            "unit_of_measure": self.unit_of_measure.to_dict(),
            "category": self.category.to_dict(),
            "supplier": self.supplier.to_dict(),
            "is_visible": self.is_visible,
            "stock_quantity": self.stock_quantity,
            "is_available": self.is_available,
            "sold_this_month": self.sold_this_month,
            "sold_this_week": self.sold_this_week,
            "sold_today": self.sold_today,
            "created_at": self.created_at.isoformat(),
            "updated_at": self.updated_at.isoformat(),
        }
