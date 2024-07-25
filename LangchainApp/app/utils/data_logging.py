# app/utils/data_logging.py
import logging

logger = logging.getLogger("data_logger")

def log_request(request):
    logger.info(f"Request: {request}")

def log_response(response):
    logger.info(f"Response: {response}")
