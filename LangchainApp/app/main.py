# app/main.py

from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from app.routes import router
from app.logging_middleware import LoggingMiddleware
from app.config.settings import settings
from app.utils.monitoring import setup_metrics

app = FastAPI(title=settings.APP_NAME, debug=settings.DEBUG)

app.add_middleware(LoggingMiddleware)
app.include_router(router)

setup_metrics(app)

@app.exception_handler(Exception)
async def global_exception_handler(request: Request, exc: Exception):
    return JSONResponse(status_code=500, content={"message": "An error occurred"})
