import * as React from 'react';
import { useState } from 'react';
// import './Results.css';

interface ResultsProps {
  results: Record<string, number>;
  summary: string;
  onRetakeTest: () => void;
}

const traitExplanations = {
  Openness:
    'Openness to experience describes a person\'s tendency to think in abstract, complex ways. High scorers tend to be creative, adventurous, and intellectual, enjoying new ideas and experiences. Low scorers tend to be practical, conventional, and focused on the concrete, preferring routine and familiarity.',
  Conscientiousness:
    'Conscientiousness describes a person\'s tendency to be organized, responsible, and dependable. High scorers are typically diligent, disciplined, and achievement-oriented. Low scorers tend to be more spontaneous, flexible, and sometimes careless.',
  Extraversion:
    'Extraversion describes a person\'s tendency to seek stimulation from the outside world, particularly in the form of social interaction. High scorers are generally outgoing, energetic, and assertive. Low scorers tend to be reserved, quiet, and independent, preferring solitary activities.',
  Agreeableness:
    'Agreeableness describes a person\'s tendency to be compassionate, cooperative, and considerate towards others. High scorers are typically trusting, helpful, and empathetic. Low scorers tend to be more competitive, skeptical, and challenging.',
  Neuroticism:
    'Neuroticism describes a person\'s tendency to experience negative emotions, such as anxiety, sadness, and anger. High scorers are more prone to stress, worry, and mood swings. Low scorers tend to be emotionally stable, calm, and resilient.',
};

const Results: React.FC<ResultsProps> = ({ results, summary, onRetakeTest }) => {
  const [showExplanations, setShowExplanations] = useState(false);

  const getCategory = (percentage: number): string => {
    if (percentage >= 75) return 'High';
    if (percentage >= 50) return 'Moderate';
    return 'Low';
  };

  const handleSaveResults = () => {
    alert('Results saved! (Simulated)');
  };

  const toggleExplanations = () => {
    setShowExplanations(!showExplanations);
  };

  return (
    <div className="results-container">
      <h2>Your Personality Test Results</h2>
      <div className="charts-container">
        {Object.entries(results).map(([trait, percentage]) => (
          <div key={trait} className="chart-item">
            <div
              className={`chart-bar ${trait.toLowerCase()}`}
              style={{ width: `${percentage}%` }}
            >
              <span className="chart-label">{trait}</span>
            </div>
            <div className='chart-percentage'>
              <span >{percentage.toFixed(2)}% ({getCategory(percentage)})</span>
            </div>

          </div>
        ))}
      </div>
      <h3>Summary</h3>
      <p>{summary}</p>

      <div className="results-buttons">
        <button className="save-button" onClick={handleSaveResults}>
          Save Results
        </button>
        <button className="retake-button" onClick={onRetakeTest}>
          Take Test Again
        </button>
      </div>
      <button className="explain-button" onClick={toggleExplanations}>
        {showExplanations ? 'Hide Explanations' : 'Show Explanations'}
      </button>

      {showExplanations && (
        <div className="explanations-container">
          <h3>Trait Explanations</h3>
          {Object.entries(traitExplanations).map(([trait, explanation]) => (
            <div key={trait} className="explanation-item">
              <h4>{trait}</h4>
              <p>{explanation}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Results;
