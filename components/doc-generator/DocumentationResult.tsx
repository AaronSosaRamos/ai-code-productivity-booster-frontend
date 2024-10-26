import { useState } from "react";
import { FaBook, FaCopy, FaCheck } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";

interface DocumentationResultProps {
  documentation: string;
}

export default function DocumentationResult({ documentation }: DocumentationResultProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); 
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-black dark:text-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold"><FaBook className="inline mr-2" /> Documentation</h2>
        <CopyToClipboard text={documentation} onCopy={handleCopy}>
          <button
            className="flex items-center gap-1 p-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-all"
            title="Copy Documentation"
          >
            {copied ? <FaCheck className="text-xl" /> : <FaCopy className="text-xl" />}
            {copied ? "Copied" : "Copy"}
          </button>
        </CopyToClipboard>
      </div>

      <pre className="bg-gray-200 dark:bg-gray-900 p-4 rounded-md overflow-x-auto text-sm whitespace-pre-wrap">
        {documentation}
      </pre>
    </div>
  );
}
