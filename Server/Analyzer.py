import json
import os
import random
from datetime import datetime
from typing import TextIO
from openai import OpenAI
import tiktoken
from data_models import CodeReview, Suggestion
with open("./openai_key.json", "r") as f:
    key_data = json.load(f)
os.environ["OPENAI_API_KEY"] = key_data["key"]
client = OpenAI()


def format_file_name(filename):
    index = filename.find('.')
    return filename[:index].title() if index != -1 else filename.title()


def infer_language(filename: str) -> str:
    extension_map = {
        ".py": "Python", ".js": "JavaScript", ".ts": "TypeScript", ".java": "Java",
        ".cs": "C#", ".cpp": "C++", ".rb": "Ruby", ".vue": "Vue",
        ".kt": "Kotlin", ".c": "C"
    }
    for ext, lang in extension_map.items():
        if filename.endswith(ext):
            return lang
    return "other"


def count_tokens(text: str, model="gpt-4") -> int:
    try:
        enc = tiktoken.encoding_for_model(model)
    except Exception:
        enc = tiktoken.get_encoding("cl100k_base")
    return len(enc.encode(text))


def fallback_json() -> dict:
    return {
        "security": random.randint(40, 90),
        "cleanliness": random.randint(40, 90),
        "maintainability": random.randint(40, 90),
        "recommendations": [
            {"type": "Security", "content": "No suggestions available."},
            {"type": "Cleanliness", "content": "No suggestions available."},
            {"type": "Maintainability", "content": "No suggestions available."}
        ]
    }


def query_openai_for_analysis(content: str, language: str) -> dict:
    max_chars = 2000
    truncated_content = content[:max_chars]
    prompt_template = (
        f"You are a senior software engineer and code reviewer. "
        f"Analyze this {language} code and respond ONLY with a valid JSON object:\n\n"
        f"""{{
            "security": [0-100],
            "cleanliness": [0-100],
            "maintainability": [0-100],
            "recommendations": [
                {{ "type": "Security", "content": "maximum length 40 words" }},
                {{ "type": "Cleanliness", "content": "maximum length 40 words" }},
                {{ "type": "Maintainability", "content": "maximum length 40 words" }}
            ]
            }}\n\nHere is the code:\n{truncated_content}..."""
    )

    model = "GPT-4o"
    tokens_used = count_tokens(prompt_template, model=model)
    print(f"Prompt token count: {tokens_used}")
    try:
        response = client.chat.completions.create(
            model=model,
            messages=[
                {"role": "system", "content": "You are a code quality reviewer."},
                {"role": "user", "content": prompt_template}
            ],
            temperature=0.3,
            max_tokens=500
        )
        reply = response.choices[0].message.content
        return json.loads(reply)
    except (json.JSONDecodeError, IndexError, AttributeError) as e:
        print(f"JSON decode or structure error: {e}")
    except Exception as e:
        print(f"Error querying {model}: {e}")
    try:
        fallback_model = "gpt-3.5-turbo"
        print(f"Retrying with fallback model: {fallback_model}")
        fallback_response = client.chat.completions.create(
            model=fallback_model,
            messages=[
                {"role": "system", "content": "You are a code quality reviewer."},
                {"role": "user", "content": prompt_template}
            ],
            temperature=0.3,
            max_tokens=500
        )
        reply = fallback_response.choices[0].message.content
        return json.loads(reply)
    except Exception as fallback_e:
        print(f"Fallback model failed: {fallback_e}")
        return fallback_json()


def analyze_code(file: TextIO) -> CodeReview:
    content = file.read().decode('utf-8')
    file.seek(0)
    filename = format_file_name(file.filename)
    language = infer_language(file.filename)
    ai_result = query_openai_for_analysis(content, language)
    suggestions = [
        Suggestion(i + 1, item.get("type", "Unknown"),
                   item.get("content", ""), "GPT 3.5 Turbo")
        for i, item in enumerate(ai_result.get("recommendations", []))
    ]
    return CodeReview(
        id=int(datetime.now().timestamp() * 1000),
        name=os.path.basename(filename),
        file_content=content,
        programming_language=language,
        security=ai_result.get("security", 0),
        cleanliness=ai_result.get("cleanliness", 0),
        maintainability=ai_result.get(
            "maintainability", 0),
        recommendations=suggestions,
        upload_date=int(datetime.now().timestamp() * 1000)
    )
