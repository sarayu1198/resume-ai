from pydantic import BaseModel


class ResumeAnalysis(BaseModel):
    summary: str
    strengths: list[str]
    weaknesses: list[str]
    missing_skills: list[str]
    ats_score: int
    suggestions: list[str]