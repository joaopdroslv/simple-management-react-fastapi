from app.schemas.category import GetCategoriesResponse
from fastapi import APIRouter
from fastapi.responses import JSONResponse

router = APIRouter(prefix="/category", tags=["category"])


@router.get("/", response_model=GetCategoriesResponse)
def get_categories():

    return JSONResponse(status_code=200, content={"categories": []})
