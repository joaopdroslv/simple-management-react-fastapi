import logging
import time
from contextlib import asynccontextmanager

from app.database.db import Base, engine
from app.models.category import Category
from app.models.product import Product
from fastapi import FastAPI
from sqlalchemy import text

logger = logging.getLogger(__name__)


def create_all_tables() -> None:

    max_tries = 18
    time_to_wait = 10

    for attempt in range(max_tries):
        try:
            with engine.connect() as conn:
                conn.execute(text("SELECT 1"))
            logger.info("Database is ready!")
            break

        except Exception as e:
            logger.info(
                f"Database not ready yet (attempt {attempt + 1}/{max_tries}): {e}"
            )
            time.sleep(time_to_wait)

    else:
        raise RuntimeError("Database did not become ready in time.")

    logger.info("Creating tables...")
    Base.metadata.create_all(bind=engine)
    logger.info("Tables created successfully.")


@asynccontextmanager
async def lifespan(app: FastAPI):

    create_all_tables()
    yield
