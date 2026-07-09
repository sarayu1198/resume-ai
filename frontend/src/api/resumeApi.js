import axios from "axios";

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:8000";

export const uploadResume = async (file, jobDescription) => {
  const formData = new FormData();

  formData.append("file", file);
  formData.append("job_description", jobDescription);

  const response = await axios.post(
    `${API_URL}/upload`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};