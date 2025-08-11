from db import products
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

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


@app.delete("/products/{id}")
def delete_product(id: int):

    # Deletion process not implemented yet

    print(f"PRODUCT ID [ {id} ]")

    return JSONResponse(
        status_code=204,
        content={"code": 204, "success": True, "message": "Product delete successfully."}
    )
