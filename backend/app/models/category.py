from datetime import datetime

from app.database.db import Base

from sqlalchemy import ForeignKey, func, select
from sqlalchemy.dialects.mysql import DATETIME, INTEGER, TEXT, VARCHAR
from sqlalchemy.orm import Mapped, column_property, mapped_column, relationship


class CategoryData(Base):

    __tablename__ = "category_data"

    id: Mapped[int] = mapped_column(
        INTEGER, primary_key=True, autoincrement=True, index=True
    )
    name: Mapped[str] = mapped_column(VARCHAR(255), nullable=False)
    description: Mapped[str] = mapped_column(TEXT, nullable=True)
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
            "description": self.description,
            "created_at": self.created_at.isoformat(),
            "updated_at": self.updated_at.isoformat(),
        }


class Category(Base):

    __tablename__ = "category"

    id: Mapped[int] = mapped_column(
        INTEGER, primary_key=True, autoincrement=True, index=True
    )
    created_at: Mapped[datetime] = mapped_column(
        DATETIME, server_default=func.now(), nullable=False
    )
    updated_at: Mapped[datetime] = mapped_column(
        DATETIME, server_default=func.now(), onupdate=func.now(), nullable=False
    )

    category_data_id: Mapped[int] = mapped_column(
        INTEGER, ForeignKey("category_data.id"), nullable=False, index=True
    )
    category_data: Mapped["CategoryData"] = relationship("CategoryData")

    @property
    def products_quantity(self) -> int:
        return len(self.products)

    # product_quantity = column_property(
    #     select(func.count(Product.id)).where(Product.category_id == id)
    # )

    def to_dict(self):
        return {
            "id": self.id,
            "details": self.category_data.to_dict(),
            "products_quantity": self.products_quantity,
            "created_at": self.created_at.isoformat(),
            "updated_at": self.updated_at.isoformat(),
        }
