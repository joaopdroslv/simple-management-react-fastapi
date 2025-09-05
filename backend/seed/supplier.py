import logging
import traceback

from app.database.deps import get_db
from app.models import Supplier, SupplierData
from faker import Faker
from sqlalchemy.orm import Session

logger = logging.getLogger(__name__)

faker = Faker("en_US")
faker_ptbr = Faker("pt_BR")


def seed_supplier(num_records: int = 10):

    db: Session
    with next(get_db()) as db:

        try:
            for _ in range(num_records):
                supplier_data = SupplierData(
                    name=faker.company(),
                    tax_id=faker_ptbr.cnpj(),
                )
                db.add(supplier_data)
                db.flush()

                supplier = Supplier(supplier_data_id=supplier_data.id, is_active=True)
                db.add(supplier)

            db.commit()

            logger.info("Tables supplier_data/supplier seeded successfully.")

        except Exception as e:

            db.rollback()

            logger.error("Error while seeding supplier_data/supplier tables.")
            logger.error(e)
            logger.error(traceback.print_exc())


if __name__ == "__main__":

    seed_supplier(num_records=10)
