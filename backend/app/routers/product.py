import logging

from app.database.deps import get_db
from app.models.product import Product
from app.schemas.product import (
    CreateProductForm,
    GetAllProductsResponse,
    ProductResponse,
    UpdateProductForm,
)
from fastapi import APIRouter, Depends
from fastapi.responses import JSONResponse
from sqlalchemy.orm import Session

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/product", tags=["product"])


@router.get("/{id}", response_model=ProductResponse)
def get_product(id: int):

    return JSONResponse(status_code=200, content={"product": {}})


@router.get("", response_model=GetAllProductsResponse)
def get_all_products(db: Session = Depends(get_db)):

    # logger.info(products[0].__dict__)

    return {"products": db.query(Product).all()}

    # return JSONResponse(
    #     status_code=200, content={"products": products}
    # )


@router.post("")
def create_product(data: CreateProductForm):

    return JSONResponse(
        status_code=200, content={"message": "Product created successfully."}
    )


@router.put("/{id}")
def update_product(id: int, data: UpdateProductForm):

    return JSONResponse(
        status_code=200, content={"message": "Product updated successfully."}
    )


@router.delete("/{id}")
def delete_product(id: int):

    return JSONResponse(
        status_code=200, content={"message": "Product delete successfully."}
    )


@router.post("/change-category")
def change_category(): ...


@router.post("/change-categories")
def change_categories(): ...
