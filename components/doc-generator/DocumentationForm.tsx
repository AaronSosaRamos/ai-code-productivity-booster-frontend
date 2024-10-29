import { Suspense, useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiLoader } from "react-icons/fi";
import { BiBookOpen, BiCodeAlt, BiCommentDetail } from "react-icons/bi";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { documentationSchema, DocumentationFormValues } from "@/schemas/DocumentationSchema";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CircularSpinner from "../Spinner";
import DocumentationResult from "./DocumentationResult";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "api-key": process.env.NEXT_PUBLIC_API_KEY,
  },
});

async function fetchDocumentation(data: DocumentationFormValues): Promise<any> {
  try {
    const response = await axiosInstance.post<any>("/doc-generator-assistant", data);
    return response.data;
  } catch (error) {
    console.error("Error fetching documentation:", error);
    toast.error("Error generating documentation. Please try again.");
    return null;
  }
}

export default function DocumentationForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<DocumentationFormValues>({
    resolver: zodResolver(documentationSchema),
  });

  const [documentationData, setDocumentationData] = useState<any | null>(null);

  const onSubmit: SubmitHandler<DocumentationFormValues> = async (data) => {
    toast.info("Generating documentation...");
    const result = await fetchDocumentation(data);
    if (result) setDocumentationData(result);
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
          <BiBookOpen className="text-3xl text-blue-600 dark:text-blue-400" />
          <h2 className="text-2xl font-bold text-black dark:text-white">Documentation Generator Assistant</h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="flex items-center gap-2 text-black dark:text-white">
              <BiCodeAlt className="text-xl" /> Code Snippet
            </label>
            <textarea
              {...register("code_snippet")}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg resize-none focus:ring focus:ring-blue-500 dark:focus:ring-blue-400 transition text-black dark:text-white bg-white dark:bg-gray-700"
              rows={6}
              placeholder="Insert code here..."
            ></textarea>
            {errors.code_snippet && <p className="text-red-500 text-sm mt-1">{errors.code_snippet.message}</p>}
          </div>

          <div>
            <label className="flex items-center gap-2 text-black dark:text-white">
              <BiCommentDetail className="text-xl" /> Language
            </label>
            <select
              {...register("language")}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring focus:ring-blue-500 dark:focus:ring-blue-400 transition text-black dark:text-white bg-white dark:bg-gray-700"
              defaultValue="python"
            >
              <option value="python">Python</option>
              <option value="javascript">JavaScript</option>
              <option value="typescript">TypeScript</option>
              <option value="java">Java</option>
            </select>
          </div>

          <div>
            <label className="flex items-center gap-2 text-black dark:text-white">
              <BiCommentDetail className="text-xl" /> Context (Optional)
            </label>
            <textarea
              {...register("context")}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg resize-none focus:ring focus:ring-blue-500 dark:focus:ring-blue-400 transition text-black dark:text-white bg-white dark:bg-gray-700"
              rows={4}
              placeholder="Add additional context..."
            ></textarea>
            {errors.context && <p className="text-red-500 text-sm mt-1">{errors.context.message}</p>}
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
            {isSubmitting ? "Processing..." : "Submit"}
          </motion.button>
        </form>

        <ToastContainer position="top-right" autoClose={3000} hideProgressBar />

        {documentationData && (
          <Suspense fallback={<CircularSpinner />}>
            <DocumentationResult documentation={documentationData.documentation} />
          </Suspense>
        )}
      </motion.div>
    </motion.div>
  );
}
