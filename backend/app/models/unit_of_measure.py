from datetime import datetime

from app.database.db import Base
from sqlalchemy import func
from sqlalchemy.dialects.mysql import DATETIME, INTEGER, VARCHAR
from sqlalchemy.orm import Mapped, mapped_column


class UnitOfMeasure(Base):

    __tablename__ = "unit_of_measure"

    id: Mapped[int] = mapped_column(
        INTEGER, primary_key=True, autoincrement=True, index=True
    )
    type: Mapped[str] = mapped_column(VARCHAR(32), nullable=False)
    created_at: Mapped[datetime] = mapped_column(
        DATETIME, server_default=func.now(), nullable=False
    )
    updated_at: Mapped[datetime] = mapped_column(
        DATETIME, server_default=func.now(), onupdate=func.now(), nullable=False
    )

    def to_dict(self):
        return {
            "id": self.id,
            "type": self.type,
            "created_at": self.created_at.isoformat(),
            "updated_at": self.updated_at.isoformat(),
        }
