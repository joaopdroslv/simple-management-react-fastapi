from db import products
from fastapi import APIRouter
from fastapi.responses import JSONResponse
from schemas.product import CreateProductForm, GetProducts, Product, UpdateProductForm

router = APIRouter(prefix="/product", tags=["product"])


@router.get("/{id}", response_model=Product)
def get_product(id: int):

    return JSONResponse(
        status_code=200,
        content={"product": products[0]},  # Always the first for testing
    )


@router.get("/", response_model=GetProducts)
def get_all_products():

    return JSONResponse(
        status_code=200,
        content={"products": products},
    )


@router.post("/")
def create_product(data: CreateProductForm):

    return JSONResponse(
        status_code=200,
        content={"message": "Product created successfully."},
    )


@router.put("/{id}")
def update_product(id: int, data: UpdateProductForm):

    return JSONResponse(
        status_code=200,
        content={"message": "Product updated successfully."},
    )


@router.delete("/{id}")
def delete_product(id: int):

    return JSONResponse(
        status_code=200,
        content={"message": "Product delete successfully."},
    )


@router.post("/change-category")
def change_category(): ...


@router.post("/change-categories")
def change_categories(): ...
