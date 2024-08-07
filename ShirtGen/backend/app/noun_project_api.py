import logging
import requests
import os
import time
from dotenv import load_dotenv
from requests_oauthlib import OAuth1
from requests.adapters import HTTPAdapter
from requests.packages.urllib3.util.retry import Retry

load_dotenv()

logger = logging.getLogger(__name__)

class NounProjectAPI:
    def __init__(self, api_key, api_secret):
        self.api_key = api_key
        self.api_secret = api_secret
        self.base_url = "https://api.thenounproject.com/v2/icon"

        # Set up OAuth1 authentication
        self.auth = OAuth1(self.api_key, self.api_secret)

        # Set up session with retries
        self.session = requests.Session()
        retries = Retry(total=3, backoff_factor=1, status_forcelist=[500, 502, 503, 504])
        self.session.mount('https://', HTTPAdapter(max_retries=retries))

    def search(self, terms, limit=5):
        query = ','.join(terms)
        params = {
            'query': query,
            'limit': limit
        }
        try:
            response = self.session.get(self.base_url, auth=self.auth, params=params)
            response.raise_for_status()
            return response.json()
        except requests.exceptions.HTTPError as http_err:
            logger.error(f"HTTP error occurred: {http_err}", exc_info=True)
            raise
        except requests.exceptions.RequestException as req_err:
            logger.error(f"Request exception occurred: {req_err}", exc_info=True)
            raise
        except Exception as err:
            logger.error(f"Unexpected error occurred: {err}", exc_info=True)
            raise

def exponential_backoff_retry(func, *args, max_retries=3, initial_delay=1, **kwargs):
    delay = initial_delay
    for attempt in range(max_retries):
        try:
            return func(*args, **kwargs)
        except Exception as e:
            logger.warning(f"Attempt {attempt + 1} failed: {e}. Retrying in {delay} seconds...")
            time.sleep(delay)
            delay *= 2
    logger.error(f"All {max_retries} attempts failed. Returning an empty result.")
    return None

def search_noun_project(queries):
    logger.debug(f"Searching Noun Project for: {queries}")
    try:
        api = NounProjectAPI(os.getenv('NOUN_PROJECT_API_KEY'), os.getenv('NOUN_PROJECT_API_SECRET'))
        results = exponential_backoff_retry(api.search, queries, limit=5)
        if results:
            logger.debug(f"Noun Project search results: {results}")
            return [icon['thumbnail_url'] for icon in results.get('icons', [])]
        else:
            logger.info(f"No results found for queries: {queries}")
            return []
    except Exception as e:
        logger.error(f"An error occurred: {e}", exc_info=True)
        return []
