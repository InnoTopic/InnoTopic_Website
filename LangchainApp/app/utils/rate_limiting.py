from fastapi import Request, HTTPException
from fastapi.security import OAuth2PasswordBearer
from datetime import datetime, timedelta

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")
RATE_LIMIT = 5  # requests per minute
requests = {}

async def rate_limiter(request: Request):
    client_ip = request.client.host
    now = datetime.now()
    if client_ip not in requests:
        requests[client_ip] = []
    requests[client_ip] = [req for req in requests[client_ip] if now - req < timedelta(minutes=1)]
    if len(requests[client_ip]) >= RATE_LIMIT:
        raise HTTPException(status_code=429, detail="Rate limit exceeded")
    requests[client_ip].append(now)
