# app/services/langchain_service.py

import httpx
from app.utils.utils import some_utility_function  # Ensure this function exists in utils.py

OLLAMA_API_URL = "https://api.ollama.com/your-endpoint"  # Replace with your Ollama API endpoint
OLLAMA_API_KEY = "your-ollama-api-key"  # Replace with your Ollama API key

async def call_ollama_api(text: str, task: str) -> dict:
    async with httpx.AsyncClient() as client:
        headers = {
            "Authorization": f"Bearer {OLLAMA_API_KEY}",
            "Content-Type": "application/json"
        }
        data = {"text": text, "task": task}
        response = await client.post(OLLAMA_API_URL, json=data, headers=headers)
        response.raise_for_status()
        return response.json()

async def process_text(text: str) -> str:
    result = await call_ollama_api(text, task="process")
    return result["result"]

async def summarize_text(text: str) -> str:
    result = await call_ollama_api(text, task="summarize")
    return result["summary"]

async def generate_prompt(text: str) -> str:
    result = await call_ollama_api(text, task="generate_prompt")
    return result["prompt"]

async def generate_image(prompt: str) -> str:
    result = await call_ollama_api(prompt, task="generate_image")
    return result["image_url"]
