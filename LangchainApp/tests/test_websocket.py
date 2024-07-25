# tests/test_websocket.py

import pytest
from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

@pytest.mark.asyncio
async def test_websocket():
    with client.websocket_connect("/ws") as websocket:
        websocket.send_text("Hello, WebSocket")
        data = websocket.receive_text()
        assert data == "Message text was: Hello, WebSocket"
