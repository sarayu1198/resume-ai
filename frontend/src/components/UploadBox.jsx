import { UploadCloud, FileText } from "lucide-react";

function UploadBox({ file, setFile }) {
  return (
    <label
      className="border-2 border-dashed border-slate-600 rounded-2xl p-10 flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 hover:bg-slate-800 transition-all duration-300"
    >
      <input
        type="file"
        accept=".pdf"
        className="hidden"
        onChange={(e) => setFile(e.target.files[0])}
      />

      {file ? (
        <>
          <FileText size={48} className="text-blue-400" />
          <p className="mt-4 text-white font-medium">{file.name}</p>
          <p className="text-slate-400 text-sm">Ready to analyze</p>
        </>
      ) : (
        <>
          <UploadCloud size={48} className="text-slate-400" />
          <h3 className="text-white text-xl font-semibold mt-4">
            Upload your resume
          </h3>
          <p className="text-slate-400 mt-2">
            Drag & drop a PDF or click to browse
          </p>
        </>
      )}
    </label>
  );
}

export default UploadBox;