import logging

from seed.category import seed_category
from seed.product import seed_product
from seed.supplier import seed_supplier
from seed.unit_of_measure import seed_unit_of_measure

logger = logging.getLogger(__name__)


if __name__ == "__main__":

    seed_unit_of_measure()
    seed_category()
    seed_supplier()
    seed_product()

    logger.info("All tables seeded successfully.")
