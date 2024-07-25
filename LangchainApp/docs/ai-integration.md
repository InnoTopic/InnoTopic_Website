# AI Integration Guide

InnoTopic_Website leverages advanced AI technologies to provide a seamless and innovative experience for users. This document outlines the integration and usage of AI components within the application.

## AI Components

### 1. LangChain

LangChain orchestrates the interaction between our application and Ollama's language models. It handles prompt generation and text processing tasks.

### 2. Ollama

Ollama provides open-source large language model capabilities for text generation. It is integrated to power the design prompt generation feature.

### 3. Custom Image Generation

Integrated with LangChain, our custom image generation component creates visual mockups based on the generated prompts.

## Integration Details

### LangChain Integration

LangChain is used to manage and process text prompts. It is integrated in the `langchain_service.py` module.

#### Example Usage

```python
from app.services.langchain_service import generate_prompt

prompt = generate_prompt("Create a new shirt design")
print(prompt)
