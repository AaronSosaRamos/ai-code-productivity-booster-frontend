import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { documentationSchema, DocumentationFormValues } from "@/schemas/DocumentationSchema";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import { FiSend, FiLoader } from "react-icons/fi";
import { BiCodeAlt, BiCommentDetail } from "react-icons/bi";
import "react-toastify/dist/ReactToastify.css";
import { useState, Suspense } from "react";
import DocumentationResult from "./DocumentationResult";
import CircularSpinner from "../Spinner";

function fetchDocumentation(data: DocumentationFormValues) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        documentation: `This documentation provides a comprehensive guide to implementing a Convolutional Neural Network (CNN) architecture using the MNIST dataset. The following sections detail the various components and functions used in the implementation, along with example code snippets to illustrate their usage.\n
1. **get_data_loaders**
   - **Description**: This function is responsible for loading the MNIST dataset and preparing the data loaders for training and validation.
   - **Example**:
     \`\`\`python
     train_loader, val_loader = get_data_loaders(batch_size=32)
     \`\`\`
   
2. **CNN**
   - **Description**: This class defines the CNN architecture used for classifying the MNIST dataset.
   - **Example**:
     \`\`\`python
     model = CNN()
     \`\`\`
   
3. **forward**
   - **Description**: This method performs the forward pass of the CNN model.
   - **Example**:
     \`\`\`python
     output = model.forward(input_tensor)
     \`\`\`
   
4. **train_model**
   - **Description**: This function trains the CNN model using the training data loader and evaluates it on the validation data loader.
   - **Example**:
     \`\`\`python
     train_model(model, train_loader, val_loader, num_epochs=5, learning_rate=0.01)
     \`\`\`
   
5. **evaluate_model**
   - **Description**: This function evaluates the trained model on the validation dataset and returns the accuracy.
   - **Example**:
     \`\`\`python
     accuracy = evaluate_model(model, val_loader)
     \`\`\`
   
6. **test_model**
   - **Description**: This function tests the trained model on a separate test dataset and returns the test accuracy.
   - **Example**:
     \`\`\`python
     test_accuracy = test_model(model, test_loader)
     \`\`\`
   
7. **plot_loss_curves**
   - **Description**: This function plots the training and validation loss curves to visualize the model's performance over epochs.
   - **Example**:
     \`\`\`python
     plot_loss_curves(train_loss, val_loss)
     \`\`\`
   
8. **main**
   - **Description**: This function serves as the entry point for the program, orchestrating the data loading, model training, evaluation, and testing processes.
   - **Example**:
     \`\`\`python
     main()
     \`\`\`
   
This documentation provides a structured approach to implementing a CNN for the MNIST dataset, ensuring clarity and ease of understanding for users looking to replicate or build upon this work.`
      });
    }, 2000);
  });
}

export default function DocumentationForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<DocumentationFormValues>({
    resolver: zodResolver(documentationSchema),
  });

  const [documentationData, setDocumentationData] = useState<any | null>(null);

  const onSubmit = async (data: DocumentationFormValues) => {
    toast.info("Generating documentation...");
    const result = await fetchDocumentation(data);
    setDocumentationData(result);
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
        <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">Documentation Generator Assistant</h2>
        
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
