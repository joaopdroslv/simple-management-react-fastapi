from app.schemas.category import GetAllCategoriesResponse
from fastapi import APIRouter
from fastapi.responses import JSONResponse

router = APIRouter(prefix="/category", tags=["category"])


@router.get("/", response_model=GetAllCategoriesResponse)
def get_all_categories():

    return JSONResponse(status_code=200, content={"categories": []})
