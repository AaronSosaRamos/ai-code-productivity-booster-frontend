import { useState } from "react";
import { FaCheck, FaClipboardList } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";

interface ApplicationIdeaResultProps {
  data: any;
}

export default function ApplicationIdeaResult({ data }: ApplicationIdeaResultProps) {
  const [copied, setCopied] = useState(false);

  // Convert data to plain text format for copying
  const formatDataAsText = (obj: any): string => {
    const jsonString = JSON.stringify(obj, null, 2);
    return jsonString.replace(/[{}"]/g, "")  // Remove braces and quotes
      .replace(/,/g, "")      // Remove commas
      .replace(/:/g, ": ");   // Add space after colons
  };

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const textData = formatDataAsText(data);

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-black dark:text-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold"><FaClipboardList className="inline mr-2" /> Project Feasibility Report</h2>
        <CopyToClipboard text={textData} onCopy={handleCopy}>
          <button
            className="flex items-center gap-1 p-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-all"
            title="Copy Report"
          >
            {copied ? <FaCheck className="text-xl" /> : <FaClipboardList className="text-xl" />}
            {copied ? "Copied" : "Copy"}
          </button>
        </CopyToClipboard>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold">Feasibility</h3>
        <p><strong>Technical Feasibility:</strong> {data.feasibility.technical}</p>
        <p><strong>Budget Feasibility:</strong> {data.feasibility.budget}</p>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold">Design Architecture</h3>
        {Object.entries(data.design_architecture).map(([key, value]) => (
          <p key={key}>
            <strong className="capitalize">{key}:</strong> {String(value)}
          </p>
        ))}
      </div>


      <div className="mb-4">
        <h3 className="font-semibold">Recommended Tools</h3>
        <ul className="list-disc ml-6">
          {data.recommended_tools.map((tool: any, index: number) => (
            <li key={index}>{tool}</li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold">Implementation Plan</h3>
        <ul className="list-disc ml-6">
          {Object.entries(data.implementation_plan).map(([phase, details]: [string, any]) => (
            <li key={phase}><strong>{phase}:</strong> {details}</li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold">Estimated Timeline</h3>
        <p>{data.estimated_timeline}</p>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold">Estimated Cost</h3>
        <p>${data.estimated_cost}</p>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold">Potential Challenges</h3>
        <ul className="list-disc ml-6">
          {data.potential_challenges.map((challenge: any, index: number) => (
            <li key={index}>{challenge}</li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold">Additional Notes</h3>
        <p>{data.additional_notes}</p>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold">Resources</h3>
        <ul className="list-disc ml-6">
          {data.resources.map((resource: any, index: number) => (
            <li key={index}>{resource}</li>
          ))}
        </ul>
      </div>

      {data.contact_information && (
        <div className="mb-4">
          <h3 className="font-semibold">Contact Information</h3>
          <p>{data.contact_information}</p>
        </div>
      )}

      <div className="mb-4">
        <h3 className="font-semibold">Legal Disclaimer</h3>
        <p>{data.legal_disclaimer}</p>
      </div>
    </div>
  );
}
