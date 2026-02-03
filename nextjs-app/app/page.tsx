'use client';

import { useState } from 'react';
import { StudyPlanForm } from '@/components/StudyPlanForm';
import { StudyPlanResult } from '@/components/StudyPlanResult';
import { StudyPlanRequest } from '@/lib/types';

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [studyPlan, setStudyPlan] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (data: StudyPlanRequest) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/generate-plan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || !result.sucesso) {
        throw new Error(result.erro || 'Erro ao gerar plano');
      }

      setStudyPlan(result.plano_estruturado);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro desconhecido');
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setStudyPlan(null);
    setError(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <i className="ri-graduation-cap-fill text-primary-600 text-2xl mr-2"></i>
                <span className="text-xl font-semibold text-gray-900">StudyPlan AI</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                type="button"
                className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none"
              >
                <i className="ri-question-line text-xl"></i>
              </button>
              <button
                type="button"
                className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none"
              >
                <i className="ri-settings-3-line text-xl"></i>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Dashboard Header */}
          <div className="px-4 py-5 sm:px-6">
            <h1 className="text-2xl font-bold text-gray-900">Study Plan Generator</h1>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Fill in the details to create your personalized learning roadmap.
            </p>
          </div>

          {/* Dashboard Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 sm:px-6">
            {/* Form Card */}
            <div className="bg-white shadow rounded-lg col-span-1 overflow-hidden">
              <div className="px-4 py-5 sm:p-6 h-full">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Plan Parameters</h2>
                <StudyPlanForm onSubmit={handleSubmit} isLoading={isLoading} />
              </div>
            </div>

            {/* Result Card */}
            <div className="bg-white shadow rounded-lg col-span-1 lg:col-span-2 overflow-hidden">
              <div className="px-4 py-5 sm:p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Generated Study Plan</h2>

                {/* Loading State */}
                {isLoading && (
                  <div className="flex flex-col items-center justify-center py-12">
                    <i className="ri-loader-4-line text-4xl text-primary-600 animate-spin mb-4"></i>
                    <p className="text-gray-600">Generating your personalized study plan...</p>
                  </div>
                )}

                {/* Error State */}
                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-md p-4">
                    <div className="flex">
                      <i className="ri-error-warning-line text-red-400 text-xl mr-2"></i>
                      <div>
                        <h3 className="text-sm font-medium text-red-800">Error</h3>
                        <p className="text-sm text-red-700 mt-1">{error}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Success State */}
                {studyPlan && <StudyPlanResult plan={studyPlan} onReset={handleReset} />}

                {/* Empty State */}
                {!isLoading && !error && !studyPlan && (
                  <div className="text-center py-12">
                    <i className="ri-file-text-line text-6xl text-gray-300 mb-4"></i>
                    <p className="text-gray-500">
                      Your personalized study plan will appear here
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500">
            Powered by{' '}
            <a
              href="https://github.com/marketplace/models"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700"
            >
              GitHub Models
            </a>
            {' '}• Built with Next.js & TypeScript
          </p>
        </div>
      </footer>
    </div>
  );
}
