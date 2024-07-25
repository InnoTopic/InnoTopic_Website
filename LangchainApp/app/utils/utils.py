# app/utils/utils.py

import logging
import redis
from prometheus_client import Counter, Histogram, generate_latest
from fastapi import Request

# Logging Configuration
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Redis Configuration
def get_redis_client():
    return redis.StrictRedis(host='localhost', port=6379, db=0)

# Prometheus Metrics
REQUEST_COUNT = Counter("request_count", "App Request Count", ["method", "endpoint"])
REQUEST_LATENCY = Histogram("request_latency_seconds", "Request latency", ["endpoint"])

# Example Utility Function
def some_utility_function():
    logger.info("Utility function executed")
    pass

# Middleware for Metrics
async def metrics_middleware(request: Request, call_next):
    method = request.method
    endpoint = request.url.path
    REQUEST_COUNT.labels(method=method, endpoint=endpoint).inc()
    with REQUEST_LATENCY.labels(endpoint=endpoint).time():
        response = await call_next(request)
    return response

# Function to Get Metrics
def get_metrics():
    return generate_latest()

# Data Logging
def log_data(data):
    logger.info(f"Data logged: {data}")

# Rate Limiting (Example using Redis)
def is_rate_limited(user_id: str, limit: int, period: int):
    client = get_redis_client()
    current_count = client.get(user_id)
    if current_count is None:
        client.set(user_id, 1, ex=period)
        return False
    elif int(current_count) < limit:
        client.incr(user_id)
        return False
    else:
        return True

# Monitoring Example Function
def monitor_request(endpoint: str):
    REQUEST_COUNT.labels(endpoint=endpoint).inc()

# Additional Utility Functions as Needed
def additional_utility_function():
    # Implement additional utility logic here
    pass
