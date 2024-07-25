# models/response_models.py

from pydantic import BaseModel

class PromptResponse(BaseModel):
    prompt: str

class ImageResponse(BaseModel):
    image_url: str

class DesignResponse(BaseModel):
    id: int
    name: str
    description: str
    image_url: str

class UserResponse(BaseModel):
    id: int
    username: str
    email: str
