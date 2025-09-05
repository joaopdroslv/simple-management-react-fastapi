import logging

from app.database.deps import get_db
from app.modules import product
from app.schemas.product import (
    CreateProductForm,
    GetProductsForm,
    GetProductsResponse,
    ResponseProduct,
    UpdateProductForm,
)
from fastapi import APIRouter, Depends
from fastapi.responses import JSONResponse
from sqlalchemy.orm import Session

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/product", tags=["product"])


@router.get("/{id}", response_model=ResponseProduct)
def get_product(id: int, db: Session = Depends(get_db)):

    db_product = product.get_product(id, db)

    if not db_product:
        return JSONResponse(status_code=404, content={"message": "Product not found."})

    return JSONResponse(status_code=200, content={"product": db_product.to_dict()})


@router.post("")
def get_products(
    form: GetProductsForm, page: int = 1, limit: int = 10, db: Session = Depends(get_db)
):

    total, db_products = product.get_products(form, page, limit, db)

    return JSONResponse(
        status_code=200,
        content={
            "pagination": {
                "page": page,
                "limit": limit,
                "total": total,
            },
            "products": [p.to_dict() for p in db_products],
        },
    )


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
