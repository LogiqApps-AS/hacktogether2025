
import { ITraitResult } from '../types/types';
import '../styles/TraitResult.css';
import * as React from 'react';

interface TraitResultProps {
  result: ITraitResult;
}

const TraitResult: React.FC<TraitResultProps> = ({ result }) => {
  return (
    <div className="trait-container">
      <div className="trait-grid">
        <div className="trait-score-column">
          <h3 className="trait-name">{result.trait}</h3>
          <div className="trait-progress-container">
            <div 
              className="trait-progress-bar" 
              style={{ width: `${result.percentage}%` }}
            ></div>
          </div>
          <div className="trait-progress-labels">
            <span className="trait-progress-label">Low</span>
            <span className="trait-progress-value">{result.percentage}%</span>
            <span className="trait-progress-label">High</span>
          </div>
        </div>
        
        <div className="trait-description-column">
          <div className="trait-score-display">
            <span className="trait-score-label">Your Score:</span>
            <div className="trait-score-badge">
              {result.percentage < 30 ? 'Low' : result.percentage < 70 ? 'Moderate' : 'High'}
            </div>
          </div>
          <p className="trait-description">{result.description}</p>
        </div>
      </div>
    </div>
  );
};

export default TraitResult;