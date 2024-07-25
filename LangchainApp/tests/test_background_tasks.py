# tests/test_background_tasks.py

import pytest
from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

@pytest.mark.asyncio
async def test_start_task():
    response = await client.post("/start-task", json={"param": "test"})
    assert response.status_code == 200
    assert response.json() == {"message": "Task started"}
