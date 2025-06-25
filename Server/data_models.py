from dataclasses import dataclass
from datetime import datetime
from typing import List, TextIO


@dataclass
class Suggestion:
    id: int
    type: str
    content: str
    cite: str


@dataclass
class CodeReview:
    id: int
    name: str
    file: TextIO
    programming_language: str
    security: int
    cleanliness: int
    maintainability: int
    recommendations: List[Suggestion]
    upload_date: datetime


@dataclass
class User:
    email: str
    password: str
    display_name: str
    username: str
    code_reviews: List[CodeReview]
