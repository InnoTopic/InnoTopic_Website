import redis
import json

redis_client = redis.StrictRedis(host='localhost', port=6379, db=0)

def get_cached_data(key):
    data = redis_client.get(key)
    if data:
        return json.loads(data)
    return None

def set_cache_data(key, value, expiration=3600):
    redis_client.set(key, json.dumps(value), ex=expiration)

def get_redis_client():
    return redis.StrictRedis(host='localhost', port=6379, db=0)