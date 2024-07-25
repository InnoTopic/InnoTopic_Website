# tests/test_routes.py

import pytest
from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_read_main():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"message": "Welcome to InnoTopic_Website API!"}

def test_generate_prompt():
    response = client.post("/generate-prompt", json={"text": "Create a new shirt design"})
    assert response.status_code == 200
    assert "prompt" in response.json()

def test_generate_image():
    response = client.post("/generate-image", json={"prompt": "A futuristic shirt design"})
    assert response.status_code == 200
    assert "image_url" in response.json()
