from app.database.deps import get_db
from app.modules import supplier
from fastapi import APIRouter, Depends
from fastapi.responses import JSONResponse
from sqlalchemy.orm import Session

router = APIRouter(prefix="/supplier", tags=["supplier"])


@router.get("")
def get_suppliers(page: int = 1, limit: int = 10, db: Session = Depends(get_db)):

    total, db_suppliers = supplier.get_suppliers(page, limit, db)

    return JSONResponse(
        status_code=200,
        content={
            "pagination": {
                "page": page,
                "limit": limit,
                "total": total,
            },
            "suppliers": [c.to_dict() for c in db_suppliers],
        },
    )
