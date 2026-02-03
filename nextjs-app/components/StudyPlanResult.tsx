'use client';

import ReactMarkdown from 'react-markdown';

interface StudyPlanResultProps {
  plan: string;
  onReset: () => void;
}

export function StudyPlanResult({ plan, onReset }: StudyPlanResultProps) {
  const handleDownload = () => {
    const blob = new Blob([plan], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `study-plan-${Date.now()}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-4">
      {/* Action Buttons */}
      <div className="flex gap-2 pb-4 border-b border-gray-200">
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
        >
          <i className="ri-download-line"></i>
          Download MD
        </button>
        <button
          onClick={onReset}
          className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
        >
          <i className="ri-refresh-line"></i>
          Novo Plano
        </button>
      </div>

      {/* Markdown Content */}
      <div className="prose prose-sm max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-primary-600 prose-strong:text-gray-900 prose-code:text-primary-600 prose-code:bg-primary-50 prose-code:px-1 prose-code:py-0.5 prose-code:rounded">
        <ReactMarkdown>{plan}</ReactMarkdown>
      </div>
    </div>
  );
}
