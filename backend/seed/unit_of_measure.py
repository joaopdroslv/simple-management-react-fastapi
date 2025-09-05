import logging
import traceback

from app.database.deps import get_db
from app.models import UnitOfMeasure
from sqlalchemy.orm import Session

logger = logging.getLogger(__name__)


def seed_unit_of_measure():

    units = [
        "Liter",
        "Milliliter",
        "Gram",
        "Kilogram",
        "Meter",
        "Centimeter",
        "Millimeter",
        "Piece",
        "Box",
        "Pack",
    ]

    db: Session
    with next(get_db()) as db:

        try:
            for unit in units:
                unit_of_measure = UnitOfMeasure(name=unit)
                db.add(unit_of_measure)

            db.commit()

            logger.info("Table unit_of_measure seeded successfully.")

        except Exception as e:

            db.rollback()

            logger.error("Error while seeding unit_of_measure table.")
            logger.error(e)
            logger.error(traceback.print_exc())


if __name__ == "__main__":

    seed_unit_of_measure()
