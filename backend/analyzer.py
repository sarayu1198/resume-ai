import json

from google import genai
from config import GEMINI_API_KEY
from prompts import RESUME_ANALYSIS_PROMPT

client = genai.Client(api_key=GEMINI_API_KEY)


def analyze_resume(resume_text: str, job_description: str):

    prompt = RESUME_ANALYSIS_PROMPT.format(
    resume=resume_text,
    job_description=job_description
)

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt,
    )

    print("\n========== GEMINI RESPONSE ==========\n")
    print(response.text)
    print("\n=====================================\n")

    text = response.text.strip()

    if text.startswith("```json"):
        text = text.replace("```json", "").replace("```", "").strip()
    elif text.startswith("```"):
        text = text.replace("```", "").strip()

    try:
        return json.loads(text)

    except json.JSONDecodeError:

        return {
            "ats_score": 0,
            "summary": text,
            "matching_skills": [],
            "missing_skills": [],
            "missing_keywords": [],
            "strengths": [],
            "weaknesses": [],
            "suggestions": [
                "Gemini returned an invalid JSON response."
            ]
        }