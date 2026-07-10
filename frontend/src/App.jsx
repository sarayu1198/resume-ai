import { useState } from "react";
import { uploadResume } from "./api/resumeApi";

import UploadBox from "./components/UploadBox";
import AnalyzeButton from "./components/AnalyzeButton";
import ATSScoreCard from "./components/ATSScoreCard";

function App() {
  const [file, setFile] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!file) {
      alert("Please upload a resume.");
      return;
    }

    if (!jobDescription.trim()) {
      alert("Please paste a job description.");
      return;
    }

    setLoading(true);

    try {
      const result = await uploadResume(file, jobDescription);

      console.log("Gemini Response:", result);

      setAnalysis(result);
    } catch (error) {
      console.error(error);

      if (error.response) {
        alert(JSON.stringify(error.response.data, null, 2));
      } else {
        alert("Something went wrong while analyzing the resume.");
      }
    } finally {
      setLoading(false);
    }
  };

  const renderList = (title, items) => {
    if (!items || items.length === 0) return null;

    return (
      <div className="bg-slate-700 rounded-xl p-5">
        <h2 className="text-xl font-semibold text-white mb-3">
          {title}
        </h2>

        <ul className="list-disc list-inside text-slate-300 space-y-2">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-900 py-10 px-6">
      <div className="max-w-4xl mx-auto bg-slate-800 rounded-3xl shadow-2xl p-10">

        <h1 className="text-5xl font-bold text-center text-white">
          Resume AI
        </h1>

        <p className="text-slate-400 text-center mt-3 mb-8">
          Upload your resume and compare it against a job description using AI.
        </p>

        <UploadBox
          file={file}
          setFile={setFile}
        />

        <div className="mt-8">
          <label className="block text-white font-semibold mb-3 text-lg">
            Job Description
          </label>

          <textarea
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            placeholder="Paste the job description here..."
            rows={10}
            className="w-full rounded-xl bg-slate-700 border border-slate-600 p-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />
        </div>

        <AnalyzeButton
          loading={loading}
          disabled={!file || !jobDescription.trim()}
          onClick={handleAnalyze}
        />

        {analysis && (
          <div className="space-y-6 mt-10">

            <ATSScoreCard score={analysis.ats_score} />

            <div className="bg-slate-700 rounded-xl p-5">
              <h2 className="text-xl font-semibold text-white mb-3">
                Resume Summary
              </h2>

              <p className="text-slate-300">
                {analysis.summary}
              </p>
            </div>

            {renderList("Matching Skills", analysis.matching_skills)}

            {renderList("Missing Skills", analysis.missing_skills)}

            {renderList("Missing Keywords", analysis.missing_keywords)}

            {renderList("Strengths", analysis.strengths)}

            {renderList("Weaknesses", analysis.weaknesses)}

            {renderList("Suggestions", analysis.suggestions)}

          </div>
        )}

      </div>
    </div>
  );
}

export default App;