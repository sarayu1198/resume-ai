function AnalyzeButton({ disabled, loading, onClick }) {
    return (
      <button
        onClick={onClick}
        disabled={disabled || loading}
        className="
          mt-8
          w-full
          rounded-xl
          bg-blue-600
          py-4
          text-lg
          font-semibold
          text-white
          transition
          hover:bg-blue-700
          disabled:cursor-not-allowed
          disabled:opacity-50
        "
      >
        {loading ? "Analyzing..." : "Analyze Resume"}
      </button>
    );
  }
  
  export default AnalyzeButton;