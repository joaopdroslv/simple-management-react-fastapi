from app.db import categories
from app.schemas.category import GetCategories
from fastapi import APIRouter
from fastapi.responses import JSONResponse

router = APIRouter(prefix="/category", tags=["category"])


@router.get("/", response_model=GetCategories)
def get_all_categories():

    return JSONResponse(status_code=200, content={"categories": categories})
