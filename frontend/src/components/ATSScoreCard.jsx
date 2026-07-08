function ATSScoreCard({ score }) {
    let color = "bg-red-500";
  
    if (score >= 80) color = "bg-green-500";
    else if (score >= 60) color = "bg-yellow-500";
  
    return (
      <div className="mt-8 rounded-2xl bg-slate-800 p-6 shadow-lg">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">
            ATS Score
          </h2>
  
          <span className="text-3xl font-bold text-white">
            {score}/100
          </span>
        </div>
  
        <div className="mt-5 h-4 overflow-hidden rounded-full bg-slate-700">
          <div
            className={`${color} h-full transition-all duration-700`}
            style={{ width: `${score}%` }}
          />
        </div>
  
        <p className="mt-3 text-slate-300">
          {score >= 80
            ? "Excellent! Your resume is ATS-friendly."
            : score >= 60
            ? "Good, but there is room for improvement."
            : "Your resume needs significant optimization."}
        </p>
      </div>
    );
  }
  
  export default ATSScoreCard;