# services/content_summarization.py

def summarize_content(content: str) -> str:
    # Example summarization implementation
    sentences = content.split('.')
    summary = sentences[0] if sentences else content
    return summary
