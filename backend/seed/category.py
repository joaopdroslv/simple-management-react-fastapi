import logging
import traceback

from app.database.deps import get_db
from app.models import Category, CategoryData
from faker import Faker
from sqlalchemy.orm import Session

logger = logging.getLogger(__name__)

faker = Faker("en_US")


def seed_category(num_records: int = 10):

    db: Session
    with next(get_db()) as db:

        try:
            for _ in range(num_records):
                category_data = CategoryData(
                    name=faker.word().capitalize(),
                    description=faker.sentence(nb_words=10),
                )
                db.add(category_data)
                db.flush()

                category = Category(category_data_id=category_data.id)
                db.add(category)

            db.commit()

            logger.info("Tables category_data/category seeded successfully.")

        except Exception as e:

            db.rollback()

            logger.error("Error while seeding category_data/category tables.")
            logger.error(e)
            logger.error(traceback.print_exc())


if __name__ == "__main__":

    seed_category(num_records=10)
