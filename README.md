# Resume AI

Resume AI is a full-stack web application that analyzes a resume against a job description using Google's Gemini API. It provides an ATS-style score along with personalized feedback to help users improve their resumes for a specific role.

## About the Project

I built this project to learn how to integrate large language models into a full-stack web application. The goal was to create a tool that gives resume feedback tailored to a specific job description rather than providing only general suggestions. Through this project, I learned how to connect a React frontend with a FastAPI backend, process PDF files, integrate the Gemini API, containerize applications with Docker, and orchestrate multiple services using Docker Compose.

## Features

- Upload a resume in PDF format
- Paste a job description
- Generate an ATS compatibility score
- View matching skills
- Identify missing skills and keywords
- Get strengths, weaknesses, and improvement suggestions
- AI-powered analysis using Google Gemini
- Dockerized frontend and backend using Docker Compose

## Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- Axios

### Backend
- FastAPI
- Python
- Google Gemini API
- PyPDF

### DevOps
- Docker
- Docker Compose

## Running the Application with Docker

### Clone the repository

```bash
git clone https://github.com/sarayu1198/resume-ai.git
cd resume-ai
```

### Create a `.env` file

```env
GEMINI_API_KEY=your_api_key_here
```

### Build and start the application

```bash
docker compose up --build
```

The application will be available at:

- Frontend: http://localhost:5173
- Backend API: http://localhost:8000
- FastAPI Docs: http://localhost:8000/docs

To stop the application:

```bash
docker compose down
```

## Local Development (Optional)

### Backend

```bash
python -m venv venv
source venv/bin/activate

pip install -r backend/requirements.txt

cd backend
uvicorn main:app --reload
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## How to Use

1. Upload a resume in PDF format.
2. Paste the job description.
3. Click **Analyze Resume**.
4. Review the generated ATS score and personalized feedback.

The analysis includes:

- ATS Score
- Resume Summary
- Matching Skills
- Missing Skills
- Missing Keywords
- Strengths
- Weaknesses
- Suggestions

## Visual Demo

<img width="1697" height="1015" alt="image" src="https://github.com/user-attachments/assets/f49d1ba5-d600-4a24-aa00-e9874c33afe5" />

<img width="1704" height="981" alt="image" src="https://github.com/user-attachments/assets/e0449102-5339-41ba-9eca-0c4e3dbe0444" />

<img width="756" height="790" alt="image" src="https://github.com/user-attachments/assets/8ae46866-09d8-4e60-8e1a-08d4c695befe" />

<img width="687" height="475" alt="image" src="https://github.com/user-attachments/assets/3cf293e0-bb0d-4f35-826a-1641043c3ecb" />

## Author

**Sarayu Mayakonda**

GitHub: https://github.com/sarayu1198
