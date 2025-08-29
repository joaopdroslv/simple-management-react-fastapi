from app.database.db import Base
from sqlalchemy import Column, func
from sqlalchemy.dialects.mysql import DATETIME, INTEGER, VARCHAR


class Category(Base):
    __tablename__ = "category"

    id = Column(INTEGER, primary_key=True, autoincrement=True, index=True)
    name = Column(VARCHAR(255), nullable=False)
    created_at = Column(DATETIME, server_default=func.now(), nullable=False)
    updated_at = Column(
        DATETIME, server_default=func.now(), onupdate=func.now(), nullable=False
    )
