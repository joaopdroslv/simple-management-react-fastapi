from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers.category import router as category_router
from routers.product import router as product_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(category_router)
app.include_router(product_router)
