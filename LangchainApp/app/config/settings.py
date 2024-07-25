# app/config/settings.py

from pydantic import BaseSettings

class Settings(BaseSettings):
    APP_NAME: str = "InnoTopic_Website"
    DEBUG: bool = True
    SECRET_KEY: str = "your_secret_key"  # Replace with a strong secret key
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    DATABASE_URL: str = "sqlite:///./test.db"
    REDIS_HOST: str = "localhost"
    REDIS_PORT: int = 6379
    REDIS_DB: int = 0

    class Config:
        env_file = ".env"

settings = Settings()
