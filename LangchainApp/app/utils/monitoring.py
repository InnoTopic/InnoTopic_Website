# app/utils/monitoring.py

from prometheus_client import Counter, Histogram, generate_latest
from fastapi import Request, FastAPI

REQUEST_COUNT = Counter("request_count", "App Request Count", ["method", "endpoint"])
REQUEST_LATENCY = Histogram("request_latency_seconds", "Request latency", ["endpoint"])

# Middleware for collecting metrics
async def metrics_middleware(request: Request, call_next):
    method = request.method
    endpoint = request.url.path
    REQUEST_COUNT.labels(method=method, endpoint=endpoint).inc()
    with REQUEST_LATENCY.labels(endpoint=endpoint).time():
        response = await call_next(request)
    return response

# Route to expose metrics
def setup_metrics(app: FastAPI):
    @app.get("/metrics")
    async def get_metrics():
        return generate_latest()

    app.middleware("http")(metrics_middleware)
