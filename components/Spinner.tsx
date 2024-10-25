import { FiLoader } from "react-icons/fi";

export default function CircularSpinner() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <FiLoader className="animate-spin text-4xl text-blue-600" />
    </div>
  );
}