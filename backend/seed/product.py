import logging
import random
import traceback
from decimal import Decimal

from app.database.deps import get_db
from app.models import Category, Product, ProductData, Supplier, UnitOfMeasure
from faker import Faker
from sqlalchemy.orm import Session

logger = logging.getLogger(__name__)

faker = Faker("en_US")


def seed_product(num_records: int = 500):

    db: Session
    with next(get_db()) as db:

        categories = db.query(Category).all()
        suppliers = db.query(Supplier).all()
        units = db.query(UnitOfMeasure).all()

        if not categories or not suppliers or not units:
            raise Exception(
                "Categories, suppliers and units of measure must exists before seeding products."
            )

        try:
            for _ in range(num_records):

                category = random.choice(categories)
                supplier = random.choice(suppliers)
                unit = random.choice(units)

                product_data = ProductData(
                    name=faker.word().capitalize(),
                    unit_price=Decimal(random.uniform(1, 500)).quantize(
                        Decimal("0.01")
                    ),
                    unit_size=Decimal(random.uniform(0.1, 5)).quantize(Decimal("0.01")),
                )
                db.add(product_data)
                db.flush()

                product = Product(
                    unit_of_measure_id=unit.id,
                    category_id=category.id,
                    supplier_id=supplier.id,
                    product_data_id=product_data.id,
                    stock_quantity=random.randint(0, 99),
                    is_visible=random.choice([True, False]),
                )
                db.add(product)

            db.commit()

            logger.info("Tables product_data/product seeded successfully.")

        except Exception as e:

            db.rollback()

            logger.error("Error while seeding product_data/product tables.")
            logger.error(e)
            logger.error(traceback.print_exc())


if __name__ == "__main__":

    seed_product(num_records=500)
