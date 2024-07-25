# tests/test_integration.py

import pytest
from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_generate_prompt():
    response = client.post("/generate-prompt", json={"text": "Design a shirt"})
    assert response.status_code == 200
    assert "prompt" in response.json()

def test_generate_image():
    response = client.post("/generate-image", json={"prompt": "A cool shirt design"})
    assert response.status_code == 200
    assert "image_url" in response.json()
