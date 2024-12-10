"use client";

import React, { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";

interface CodeBlockProps {
  code: string;
  language?: string; // Default to Bash
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = "bash",
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <div className='relative rounded-lg bg-gray-800 px-4 pb-1 text-white shadow-md'>
      {/* Copy Button */}
      <button
        className='absolute right-2 top-2 rounded bg-gray-700 px-2 py-1 text-sm text-gray-300 hover:bg-gray-600'
        onClick={handleCopy}
      >
        {copied ? (
          <FiCheck className='mr-1 inline-block' />
        ) : (
          <FiCopy className='mr-1 inline-block' />
        )}
        {copied ? "Copied!" : "Copy"}
      </button>

      {/* Code Content */}
      <pre className='overflow-auto text-sm'>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
};
