from fastapi import FastAPI, HTTPException, Request, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
import httpx
import logging
from typing import List, Dict
import json
# from app.config import settings

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# FastAPI app
app = FastAPI(title="Ollama API Wrapper", description="A FastAPI wrapper for the Ollama API")

# CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

# Configuration
OLLAMA_API_BASE_URL = "http://localhost:11434"

class Query(BaseModel):
    prompt: str = Field(..., description="The prompt to generate text from")
    model: str = Field("deepseek-coder", description="The model to use for generation")

class Conversation(BaseModel):
    id: str
    messages: List[Dict[str, str]] = []

conversations: Dict[str, Conversation] = {}

async def get_client():
    async with httpx.AsyncClient() as client:
        yield client

@app.exception_handler(HTTPException)
async def http_exception_handler(request, exc):
    return {"detail": str(exc.detail)}

@app.post("/generate", summary="Generate text based on a prompt")
async def generate(query: Query, client: httpx.AsyncClient = Depends(get_client)):
    """
    Generate text using the specified model and prompt.
    """

    def parse_responses(input_string):
        # Split the input string into individual JSON objects
        json_strings = input_string.strip().split('\n')

        # Initialize an empty string to store the aggregated response
        aggregated_response = ""

        # Iterate through each JSON string
        for json_str in json_strings:
            # Parse the JSON string
            data = json.loads(json_str)

            # Extract the "response" value and add it to the aggregated response
            aggregated_response += data.get("response", "")

        return aggregated_response

    try:
        logger.info(f"Received generate request with data: {query.dict()}")
        
        response = await client.post(
            f"{OLLAMA_API_BASE_URL}/api/generate",
            json=query.dict(),
            timeout=30.0
        )
        
        logger.info(f"Response status code: {response.status_code}")
        logger.info(f"Response text: {response.text}")
        response.raise_for_status()

        response_data = parse_responses(response.text)
        # response_data = response.json()
        logger.info(f"Response from Ollama: {response_data}")
        
        return {
            "response": response_data,
            # "response": response_data.get("response", ""),
            # "model": response_data.get("model", ""),
            # "created_at": response_data.get("created_at", ""),
            # "total_duration": response_data.get("total_duration", 0),
            # "eval_count": response_data.get("eval_count", 0)
        }
    
    except HTTPException as re:
        logger.error(f"Request error while communicating with Ollama: {re}")
        raise HTTPException(status_code=500, detail=f"Error communicating with Ollama API: {re}")
    except httpx.HTTPStatusError as he:
        logger.error(f"HTTP error while communicating with Ollama: {he}")
        raise HTTPException(status_code=500, detail=f"HTTP error from Ollama API: {he}")
    except ValueError as ve:
        logger.error(f"JSON decode error: {ve}")
        raise HTTPException(status_code=500, detail=f"Invalid JSON response from Ollama API: {ve}")
    except Exception as e:
        logger.error(f"Unexpected error: {e}")
        raise HTTPException(status_code=500, detail=f"An unexpected error occurred: {e}")

@app.get("/health", summary="Check API health")
async def health_check(client: httpx.AsyncClient = Depends(get_client)):
    """
    Check the health of the API and its connection to the Ollama API.
    """
    try:
        response = await client.get(f"{OLLAMA_API_BASE_URL}/api/tags")
        response.raise_for_status()
        return {"status": "healthy", "ollama_api": "accessible"}
    except HTTPException as e:
        logger.error(f"Health check failed: {e}")
        return {"status": "unhealthy", "ollama_api": "inaccessible"}

if __name__ == "__main__":
    import uvicorn
    logger.info("Starting FastAPI application")
    uvicorn.run(app, host="localhost", port=8000)
