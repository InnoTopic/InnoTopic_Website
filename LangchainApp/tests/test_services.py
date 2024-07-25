# tests/test_services.py

import pytest
from app.services.langchain_service import generate_prompt
from app.services.content_summarization import summarize_content

def test_generate_prompt():
    prompt = generate_prompt("Create a new shirt design")
    assert prompt is not None
    assert isinstance(prompt, str)

def test_summarize_content():
    summary = summarize_content("This is a detailed description of the shirt design.")
    assert summary is not None
    assert isinstance(summary, str)
