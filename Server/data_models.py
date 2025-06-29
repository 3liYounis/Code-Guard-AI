from dataclasses import dataclass
from datetime import datetime
from typing import List, TextIO


@dataclass
class Suggestion:
    id: int
    type: str
    content: str
    cite: str

    def to_dict(self):
        return {
            "id": self.id,
            "type": self.type,
            "content": self.content,
            "cite": self.cite
        }


@dataclass
class CodeReview:
    id: int
    name: str
    file_content: str
    programming_language: str
    security: int
    cleanliness: int
    maintainability: int
    recommendations: List[Suggestion]
    upload_date: datetime

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "file_content": self.file_content,
            "programming_language": self.programming_language,
            "security": self.security,
            "cleanliness": self.cleanliness,
            "maintainability": self.maintainability,
            "recommendations": [s.to_dict() for s in self.recommendations],
            "upload_date": self.upload_date
        }


@dataclass
class User:
    email: str
    password: str
    display_name: str
    code_reviews: List[CodeReview]
