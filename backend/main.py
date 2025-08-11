from db import products
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from schemas.product import UpdateProduct

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/products")
def get_products():

    return JSONResponse(
        status_code=200,
        content={"code": 200, "success": True, "resources": {"products": products}},
    )


@app.put("/products/{id}")
def update_product(id: int, product: UpdateProduct):

    print(f"PRODUCT ID [ {id} ]")
    print("PRODUCT DATA")
    print(product.model_dump())

    return JSONResponse(
        status_code=200,
        content={
            "code": 200,
            "success": True,
            "message": "Product updated successfully.",
        },
    )


@app.delete("/products/{id}")
def delete_product(id: int):

    # Deletion process not implemented yet

    print(f"PRODUCT ID [ {id} ]")

    return JSONResponse(
        status_code=200,
        content={
            "code": 200,
            "success": True,
            "message": "Product delete successfully.",
        },
    )
