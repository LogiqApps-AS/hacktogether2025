
import * as React from 'react';
import '../styles/ProgressBar.css';

interface ProgressBarProps {
  currentQuestion: number;
  totalQuestions: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentQuestion, totalQuestions }) => {
  const progress = (currentQuestion / totalQuestions) * 100;
  
  return (
    <div className="progress-container">
      <div 
        className="progress-bar" 
        style={{ width: `${progress}%` }}
      ></div>
      <div className="progress-text">
        Question {currentQuestion} of {totalQuestions}
      </div>
    </div>
  );
};

export default ProgressBar;