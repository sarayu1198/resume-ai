from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from pypdf import PdfReader
from analyzer import analyze_resume

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://35.154.136.246:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {"message": "Resume AI API is running!"}


@app.post("/upload")
async def upload_resume(
    file: UploadFile = File(...),
    job_description: str = Form(...)
):
    reader = PdfReader(file.file)

    resume_text = ""

    for page in reader.pages:
        page_text = page.extract_text()
        if page_text:
            resume_text += page_text + "\n"

    analysis = analyze_resume(
        resume_text=resume_text,
        job_description=job_description
    )

    return analysis
