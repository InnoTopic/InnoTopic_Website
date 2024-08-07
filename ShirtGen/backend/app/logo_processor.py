import logging
import re
import requests
import os
from dotenv import load_dotenv
from .noun_project_api import search_noun_project

logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

load_dotenv()

OLLAMA_API_URL = os.getenv('OLLAMA_API_URL')
OLLAMA_API_KEY = os.getenv('OLLAMA_API_KEY')

if not OLLAMA_API_KEY:
    logger.error("OLLAMA_API_KEY is not set")
    raise ValueError("OLLAMA_API_KEY is not set")

OLLAMA_MODEL_NAME = os.getenv('OLLAMA_MODEL_NAME')

if not OLLAMA_MODEL_NAME:
    logger.error("OLLAMA_MODEL_NAME is not set")
    raise ValueError("OLLAMA_MODEL_NAME is not set")

def process_prompt(prompt):
    logger.debug(f"Processing prompt: {prompt}")
    try:
        # Simple pre-processing
        prompt = prompt.lower()
        logger.debug(f"Preprocessed prompt: {prompt}")

        # Check if the prompt is a direct topic
        if re.match(r'^[a-z]+$', prompt):
            logger.debug("Direct topic detected, searching Noun Project")
            return search_noun_project([prompt])

        # Use the Ollama API to generate a response
        logger.debug("Generating text with Ollama")
        response = generate_text_with_ollama(prompt)
        generated_text = response.get('response', '')
        logger.debug(f"Generated text: {generated_text}")

        # Extract keywords from the generated text
        keywords = extract_keywords(generated_text)
        logger.debug(f"Extracted keywords: {keywords}")

        # Search Noun Project for the combined keywords
        logos = search_noun_project(keywords)
        
        logger.debug(f"Found logos: {logos}")
        return logos
    except Exception as e:
        logger.error(f"Error in process_prompt: {str(e)}", exc_info=True)
        raise

def generate_text_with_ollama(prompt):
    try:
        headers = {
            "Authorization": f"Bearer {OLLAMA_API_KEY}",
            "Content-Type": "application/json"
        }
        data = {
            "model": OLLAMA_MODEL_NAME,  # Use the environment variable
            "prompt": prompt,
            "stream": False
        }
        logger.debug(f"Sending request to Ollama API: {OLLAMA_API_URL}")
        response = requests.post(OLLAMA_API_URL, headers=headers, json=data)
        response.raise_for_status()
        return response.json()
    except requests.RequestException as e:
        logger.error(f"Error calling Ollama API: {str(e)}", exc_info=True)
        raise

def extract_keywords(text):
    # Simple keyword extraction logic
    words = text.split()
    return [word for word in words if len(word) > 3]
