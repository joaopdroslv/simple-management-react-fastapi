from datetime import datetime

from app.database.db import Base
from sqlalchemy import ForeignKey, func, select, text
from sqlalchemy.dialects.mysql import BOOLEAN, DATETIME, DECIMAL, INTEGER, VARCHAR
from sqlalchemy.orm import Mapped, column_property, mapped_column, relationship


class SupplierData(Base):

    __tablename__ = "supplier_data"

    id: Mapped[int] = mapped_column(
        INTEGER, primary_key=True, autoincrement=True, index=True
    )
    name: Mapped[str] = mapped_column(VARCHAR(255), nullable=False)
    tax_id: Mapped[str] = mapped_column(VARCHAR(64), nullable=False)
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
            "tax_id": self.tax_id,
            "created_at": self.created_at.isoformat(),
            "updated_at": self.updated_at.isoformat(),
        }


class Supplier(Base):

    __tablename__ = "supplier"

    id: Mapped[int] = mapped_column(
        INTEGER, primary_key=True, autoincrement=True, index=True
    )
    is_active: Mapped[bool] = mapped_column(BOOLEAN, nullable=False)
    created_at: Mapped[datetime] = mapped_column(
        DATETIME, server_default=func.now(), nullable=False
    )
    updated_at: Mapped[datetime] = mapped_column(
        DATETIME, server_default=func.now(), onupdate=func.now(), nullable=False
    )

    supplier_data_id: Mapped[int] = mapped_column(
        INTEGER, ForeignKey("supplier_data.id"), nullable=False, index=True
    )
    supplier_data: Mapped["SupplierData"] = relationship("SupplierData")

    products_quantity = column_property(
        select(func.count().label("count"))
        .select_from(text("product"))
        .where(text("product.supplier_id") == id)
        .scalar_subquery()
    )

    def to_dict(self):
        return {
            "id": self.id,
            "details": self.supplier_data.to_dict(),
            "is_active": self.is_active,
            "products_quantity": self.products_quantity,
            "created_at": self.created_at.isoformat(),
            "updated_at": self.updated_at.isoformat(),
        }
