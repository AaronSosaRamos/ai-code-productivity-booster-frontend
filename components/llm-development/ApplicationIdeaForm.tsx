import { useState, Suspense } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { applicationIdeaSchema, ApplicationIdeaFormValues } from "@/schemas/ApplicationIdeaSchema";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import { FiSend, FiLoader } from "react-icons/fi";
import { BiCodeAlt, BiCommentDetail } from "react-icons/bi";
import "react-toastify/dist/ReactToastify.css";
import ApplicationIdeaResult from "./ApplicationIdeaResult";
import CircularSpinner from "../Spinner";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "api-key": process.env.NEXT_PUBLIC_API_KEY,
  },
});

async function fetchApplicationIdea(data: ApplicationIdeaFormValues): Promise<any> {
  try {
    const response = await axiosInstance.post<any>("/llm-app-development-assistant", data);
    return response.data;
  } catch (error) {
    console.error("Error fetching application idea:", error);
    toast.error("Error submitting application idea. Please try again.");
    return null;
  }
}

export default function ApplicationIdeaForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ApplicationIdeaFormValues>({
    resolver: zodResolver(applicationIdeaSchema),
  });
  const [ideaResult, setIdeaResult] = useState<any | null>(null);

  const onSubmit: SubmitHandler<ApplicationIdeaFormValues> = async (data) => {
    toast.info("Submitting your application idea...");
    const result = await fetchApplicationIdea(data);
    if (result) setIdeaResult(result);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors"
    >
      <motion.div 
        className="w-full max-w-lg bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-all"
        whileHover={{ scale: 1.02 }}
      >
        <div className="flex items-center justify-center gap-2 mb-6">
          <BiCodeAlt className="text-3xl text-blue-600 dark:text-blue-400" />
          <h2 className="text-2xl font-bold text-black dark:text-white">LLM Application Development Assistant</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="flex items-center gap-2 text-black dark:text-white">
              <BiCommentDetail className="text-xl" /> Project Name
            </label>
            <input
              {...register("project_name")}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring focus:ring-blue-500 dark:focus:ring-blue-400 transition text-black dark:text-white bg-white dark:bg-gray-700"
              placeholder="Enter your project name"
            />
            {errors.project_name && <p className="text-red-500 text-sm mt-1">{errors.project_name.message}</p>}
          </div>

          <div>
            <label className="flex items-center gap-2 text-black dark:text-white">
              <BiCommentDetail className="text-xl" /> Description
            </label>
            <textarea
              {...register("description")}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg resize-none focus:ring focus:ring-blue-500 dark:focus:ring-blue-400 transition text-black dark:text-white bg-white dark:bg-gray-700"
              rows={4}
              placeholder="Describe your project idea..."
            ></textarea>
            {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-all flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isSubmitting ? (
              <FiLoader className="animate-spin mr-2 text-xl" />
            ) : (
              <FiSend className="text-xl" />
            )}
            {isSubmitting ? "Submitting..." : "Submit"}
          </motion.button>
        </form>

        <ToastContainer position="top-right" autoClose={3000} hideProgressBar />

        {ideaResult && (
          <Suspense fallback={<CircularSpinner />}>
            <ApplicationIdeaResult data={ideaResult} />
          </Suspense>
        )}
      </motion.div>
    </motion.div>
  );
}
