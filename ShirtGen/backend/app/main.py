import logging
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from .logo_processor import process_prompt
from .design_manager import DesignManager
from .order_manager import OrderManager
import aioredis

app = FastAPI()
design_manager = DesignManager()
order_manager = OrderManager()
redis = None

logger = logging.getLogger(__name__)

class PromptRequest(BaseModel):
    prompt: str

class Order(BaseModel):
    user_id: int
    tshirt_design: dict

# Configure CORS
origins = [
    "http://localhost:3000",  # React app URL
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
async def startup():
    global redis
    try:
        redis = await aioredis.create_redis_pool("redis://localhost")
        logger.info("Connected to Redis")
    except Exception as e:
        logger.error(f"Could not connect to Redis: {str(e)}")

@app.on_event("shutdown")
async def shutdown():
    global redis
    if redis:
        redis.close()
        await redis.wait_closed()

@app.post("/api/process-prompt")
async def process_prompt_endpoint(request: PromptRequest):
    try:
        result = process_prompt(request.prompt)
        if not result:
            raise HTTPException(status_code=404, detail="No logos found")
        return {"logos": result}
    except Exception as e:
        logger.error(f"Error processing prompt: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/api/design")
async def set_design_color(color: str):
    try:
        design_manager.set_tshirt_color(color)
        return {"message": "T-shirt color updated"}
    except Exception as e:
        logger.error(f"Error setting design color: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/api/design/logo")
async def add_logo_to_design(logo_url: str):
    try:
        design_manager.add_logo(logo_url)
        return {"message": "Logo added to design"}
    except Exception as e:
        logger.error(f"Error adding logo to design: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

@app.delete("/api/design/logo")
async def remove_logo_from_design(logo_url: str):
    try:
        design_manager.remove_logo(logo_url)
        return {"message": "Logo removed from design"}
    except Exception as e:
        logger.error(f"Error removing logo from design: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/design")
async def get_design():
    try:
        design = design_manager.get_design()
        return design
    except Exception as e:
        logger.error(f"Error getting design: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/api/orders")
async def create_order(order: Order):
    try:
        order_id = order_manager.place_order(order.user_id, order.tshirt_design)
        return {"order_id": order_id, "status": "Pending"}
    except Exception as e:
        logger.error(f"Error creating order: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/orders/{order_id}")
async def get_order_status(order_id: int):
    try:
        status = order_manager.get_order_status(order_id)
        if status == "Order not found":
            raise HTTPException(status_code=404, detail="Order not found")
        return {"status": status}
    except Exception as e:
        logger.error(f"Error getting order status: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))
