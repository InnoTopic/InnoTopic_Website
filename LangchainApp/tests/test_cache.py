# tests/test_cache.py

import pytest
from app.utils.cache import get_cached_data, set_cache_data

def test_cache_data():
    key = "test_key"
    value = {"data": "test_value"}
    set_cache_data(key, value)
    cached_value = get_cached_data(key)
    assert cached_value == value
