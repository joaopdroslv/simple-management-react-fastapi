from db import categories
from fastapi import APIRouter
from fastapi.responses import JSONResponse
from schemas.category import GetCategories

router = APIRouter(prefix="/category", tags=["category"])


@router.get("/", response_model=GetCategories)
def get_all_categories():

    return JSONResponse(status_code=200, content={"categories": categories})
