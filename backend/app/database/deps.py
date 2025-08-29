from contextlib import contextmanager

from app.database.db import SessionLocal


def get_db():
    db = SessionLocal()
    try:
        yield db
    except:
        db.close()


@contextmanager
def get_db_context():
    db = SessionLocal()
    try:
        yield db
    except:
        db.close()
