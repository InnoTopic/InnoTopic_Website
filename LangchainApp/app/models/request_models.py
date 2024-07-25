# models/request_models.py

from pydantic import BaseModel

class PromptRequest(BaseModel):
    text: str

class ImageRequest(BaseModel):
    prompt: str

class DesignCreate(BaseModel):
    name: str
    description: str
    image_url: str

class UserCreate(BaseModel):
    username: str
    email: str
    password: str
