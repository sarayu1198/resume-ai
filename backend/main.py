from fastapi import FastAPI, UploadFile, File
from pypdf import PdfReader

app = FastAPI()


@app.get("/")
def home():
    return {"message": "Resume AI API is running!"}


@app.post("/upload")
async def upload_resume(file: UploadFile = File(...)):
    
    reader = PdfReader(file.file)

    text = ""

    for page in reader.pages:
        text += page.extract_text()

    return {
        "filename": file.filename,
        "text": text
    }