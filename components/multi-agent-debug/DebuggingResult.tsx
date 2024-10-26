import { useState } from "react";
import { FaBug, FaCheck, FaClipboardList, FaCopy } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";

interface DebuggingResultProps {
  data: any; 
}

export default function DebuggingResult({ data }: DebuggingResultProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-black dark:text-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold"><FaClipboardList className="inline mr-2" /> Debugging Report</h2>
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

      <div className="mb-4">
        <h3 className="font-semibold">Code Snippet</h3>
        <pre className="bg-gray-200 dark:bg-gray-900 p-4 rounded-md overflow-x-auto text-sm whitespace-pre-wrap">
          {data.code_snippet}
        </pre>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold">Changes Made</h3>
        <ul className="list-disc ml-6">
          {Object.entries(data.changes_made).map(([key, value]) => (
            <li key={key}>
              <strong>{key}:</strong> {String(value)} {/* Convertimos `value` a string */}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold">Bugs Fixed</h3>
        <p>{data.bugs_fixed.length > 0 ? data.bugs_fixed.join(", ") : "No bugs fixed."}</p>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold">Tests Performed</h3>
        <ul className="list-disc ml-6">
          {data.tests_performed && data.tests_performed.length > 0 ? (
            data.tests_performed.map((test: string, index: number) => (
              <li key={index}>{test}</li>
            ))
          ) : (
            <p>No tests performed.</p>
          )}
        </ul>
      </div>

      {data.performance_improvements && (
        <div className="mb-4">
          <h3 className="font-semibold">Performance Improvements</h3>
          <p>{data.performance_improvements}</p>
        </div>
      )}

      {data.remaining_issues && (
        <div className="mb-4">
          <h3 className="font-semibold">Remaining Issues</h3>
          <p>{data.remaining_issues}</p>
        </div>
      )}

      {data.code_quality_metrics && (
        <div className="mb-4">
          <h3 className="font-semibold">Code Quality Metrics</h3>
          <p>{data.code_quality_metrics}</p>
        </div>
      )}

      {data.documentation_updates && (
        <div className="mb-4">
          <h3 className="font-semibold">Documentation Updates</h3>
          <p>{data.documentation_updates}</p>
        </div>
      )}
    </div>
  );
}