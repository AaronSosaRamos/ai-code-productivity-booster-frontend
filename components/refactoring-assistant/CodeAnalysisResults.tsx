import { useState } from "react";
import { FaCode, FaListAlt, FaCopy, FaCheck } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";

interface CodeRefactorResultsProps {
  data: any;
}

export default function CodeRefactorResults({ data }: CodeRefactorResultsProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); 
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-black dark:text-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold"><FaCode className="inline mr-2" /> Refactored Code</h2>
        <CopyToClipboard text={data.code_snippet} onCopy={handleCopy}>
          <button
            className="flex items-center gap-1 p-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-all"
            title="Copy Code"
          >
            {copied ? <FaCheck className="text-xl" /> : <FaCopy className="text-xl" />}
            {copied ? "Copied" : "Copy"}
          </button>
        </CopyToClipboard>
      </div>

      <pre className="bg-gray-200 dark:bg-gray-900 p-4 rounded-md overflow-x-auto text-sm">
        <code>{data.code_snippet}</code>
      </pre>

      <h3 className="font-semibold mt-4"><FaListAlt className="inline mr-2" /> Changes Made</h3>
      <ul className="list-disc ml-6">
        {Object.entries(data.changes_made).map(([key, value]) => (
          <li key={key}><strong>{key}:</strong> {String(value)}</li>
        ))}
      </ul>

      {data.new_dependencies ? (
        <div className="mt-4">
          <h3 className="font-semibold">New Dependencies</h3>
          <p>{data.new_dependencies}</p>
        </div>
      ) : (
        <p className="mt-4 text-gray-500 dark:text-gray-400">No new dependencies.</p>
      )}
    </div>
  );
}
