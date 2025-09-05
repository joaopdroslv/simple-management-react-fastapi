from app.database.deps import get_db
from app.modules import category
from app.schemas.category import GetCategoriesResponse
from fastapi import APIRouter, Depends
from fastapi.responses import JSONResponse
from sqlalchemy.orm import Session

router = APIRouter(prefix="/category", tags=["category"])


@router.get("")
def get_categories(page: int = 1, limit: int = 10, db: Session = Depends(get_db)):

    total, db_categories = category.get_categories(page, limit, db)

    return JSONResponse(
        status_code=200,
        content={
            "pagination": {
                "page": page,
                "limit": limit,
                "total": total,
            },
            "categories": [c.to_dict() for c in db_categories],
        },
    )
