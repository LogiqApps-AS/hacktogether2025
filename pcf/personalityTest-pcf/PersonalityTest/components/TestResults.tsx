
import * as React from 'react';
import { ITestResults } from '../types/types';
import TraitResult from './TraitResult';
import { Brain, Share2, Download } from 'lucide-react';

interface TestResultsProps {
  results: ITestResults;
  onRetakeTest: () => void;
}

const TestResults: React.FC<TestResultsProps> = ({ results, onRetakeTest }) => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <Brain size={48} className="text-indigo-600" />
        </div>
        <h1 className="text-3xl font-bold mb-2">Your Personality Profile</h1>
        <p className="text-gray-600">Based on the Big Five personality traits model</p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 border-b border-gray-200 pb-2">Trait Scores</h2>
        {results.traits.map((trait, index) => (
          <TraitResult key={index} result={trait} />
        ))}
      </div>

      {results.openAnswers.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 border-b border-gray-200 pb-2">Your Responses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {results.openAnswers.map((answer, index) => (
              <div key={index} className="p-4 bg-white rounded-lg shadow">
                <h3 className="font-medium mb-2 text-indigo-700">{answer.question}</h3>
                {Array.isArray(answer.answer) ? (
                  <ul className="list-disc list-inside">
                    {answer.answer.map((item, i) => (
                      <li key={i} className="text-gray-700">{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-700">{answer.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
        <button
          onClick={onRetakeTest}
          className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
        >
          Retake Test
        </button>
        <button
          onClick={() => {
            alert('Share functionality would be implemented here');
          }}
          className="px-6 py-2 flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
        >
          <Share2 size={18} />
          Share Results
        </button>
        <button
          onClick={() => {
            alert('Download functionality would be implemented here');
          }}
          className="px-6 py-2 flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
        >
          <Download size={18} />
          Download Report
        </button>
      </div>
    </div>
  );
};

export default TestResults;