# app/routes.py

from fastapi import APIRouter, Depends, HTTPException, status
from pydantic import BaseModel
from typing import List
from app.services.langchain_service import generate_prompt, generate_image
from app.security.token import get_current_user
from app.models import request_models, response_models
from app.config.settings import settings
from fastapi.security import OAuth2PasswordBearer

router = APIRouter()

# OAuth2 scheme for dependency injection
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

# Define data models
class Design(BaseModel):
    id: int
    name: str
    description: str
    image_url: str

class User(BaseModel):
    id: int
    username: str
    email: str

# Fake databases
designs_db = []
users_db = []

# Generate prompt route
@router.post("/generate-prompt", response_model=response_models.PromptResponse)
async def create_prompt(request: request_models.PromptRequest):
    prompt = await generate_prompt(request.text)
    return {"prompt": prompt}

# Generate image route
@router.post("/generate-image", response_model=response_models.ImageResponse)
async def create_image(request: request_models.ImageRequest):
    image_url = await generate_image(request.prompt)
    return {"image_url": image_url}

# CRUD operations for designs
@router.get("/designs", response_model=List[Design])
async def read_designs(current_user: User = Depends(get_current_user)):
    return designs_db

@router.post("/designs", response_model=Design, status_code=status.HTTP_201_CREATED)
async def create_design(design: Design, current_user: User = Depends(get_current_user)):
    designs_db.append(design)
    return design

@router.get("/designs/{design_id}", response_model=Design)
async def read_design(design_id: int, current_user: User = Depends(get_current_user)):
    for design in designs_db:
        if design.id == design_id:
            return design
    raise HTTPException(status_code=404, detail="Design not found")

@router.put("/designs/{design_id}", response_model=Design)
async def update_design(design_id: int, updated_design: Design, current_user: User = Depends(get_current_user)):
    for i, design in enumerate(designs_db):
        if design.id == design_id:
            designs_db[i] = updated_design
            return updated_design
    raise HTTPException(status_code=404, detail="Design not found")

@router.delete("/designs/{design_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_design(design_id: int, current_user: User = Depends(get_current_user)):
    for i, design in enumerate(designs_db):
        if design.id == design_id:
            del designs_db[i]
            return
    raise HTTPException(status_code=404, detail="Design not found")

# User management endpoints
@router.get("/users", response_model=List[User])
async def read_users(current_user: User = Depends(get_current_user)):
    return users_db

@router.post("/users", response_model=User, status_code=status.HTTP_201_CREATED)
async def create_user(user: User):
    users_db.append(user)
    return user

@router.get("/users/{user_id}", response_model=User)
async def read_user(user_id: int, current_user: User = Depends(get_current_user)):
    for user in users_db:
        if user.id == user_id:
            return user
    raise HTTPException(status_code=404, detail="User not found")

@router.put("/users/{user_id}", response_model=User)
async def update_user(user_id: int, updated_user: User, current_user: User = Depends(get_current_user)):
    for i, user in enumerate(users_db):
        if user.id == user_id:
            users_db[i] = updated_user
            return updated_user
    raise HTTPException(status_code=404, detail="User not found")

@router.delete("/users/{user_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_user(user_id: int, current_user: User = Depends(get_current_user)):
    for i, user in enumerate(users_db):
        if user.id == user_id:
            del users_db[i]
            return
    raise HTTPException(status_code=404, detail="User not found")
