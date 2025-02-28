
import { ITestResults } from '../types/types';
import TraitResult from './TraitResult';
import { Brain, Share2, Download } from 'lucide-react';
import '../styles/TestResults.css';
import * as React from 'react';

interface TestResultsProps {
  results: ITestResults;
  onRetakeTest: () => void;
}

const TestResults: React.FC<TestResultsProps> = ({ results, onRetakeTest }) => {
  return (
    <div className="results-container">
      <div className="results-header">
        <div className="results-icon">
          <Brain size={48} />
        </div>
        <h1 className="results-title">Your Personality Profile</h1>
        <p className="results-subtitle">Based on the Big Five personality traits model</p>
      </div>

      <div className="results-section">
        <h2 className="results-section-title">Trait Scores</h2>
        {results.traits.map((trait, index) => (
          <TraitResult key={index} result={trait} />
        ))}
      </div>

      {results.openAnswers.length > 0 && (
        <div className="results-section">
          <h2 className="results-section-title">Your Responses</h2>
          <div className="results-answers-grid">
            {results.openAnswers.map((answer, index) => (
              <div key={index} className="results-answer-card">
                <h3 className="results-answer-question">{answer.question}</h3>
                {Array.isArray(answer.answer) ? (
                  <ul className="results-answer-list">
                    {answer.answer.map((item, i) => (
                      <li key={i} className="results-answer-list-item">{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="results-answer-text">{answer.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="results-actions">
        <button
          onClick={onRetakeTest}
          className="results-button results-button-primary"
        >
          Retake Test
        </button>
        <button
          onClick={() => {
            alert('Share functionality would be implemented here');
          }}
          className="results-button results-button-secondary"
        >
          <Share2 size={18} />
          Share Results
        </button>
        <button
          onClick={() => {
            alert('Download functionality would be implemented here');
          }}
          className="results-button results-button-secondary"
        >
          <Download size={18} />
          Download Report
        </button>
      </div>
    </div>
  );
};

export default TestResults;