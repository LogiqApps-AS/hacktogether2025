import { IQuestion } from '../types/types';
import '../styles/DefaultQuestion.css';
import * as React from 'react';

interface DefaultQuestionProps {
  question: IQuestion;
  value: number;
  onChange: (value: number) => void;
}

const DefaultQuestion: React.FC<DefaultQuestionProps> = ({ question, value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(parseInt(e.target.value, 10));
  };

  return (
    <div className="question-container">
      <div className="question-labels">
        <span className="question-label">{question.textLeft}</span>
        <span className="question-label">{question.textRight}</span>
      </div>
      <input
        type="range"
        min="1"
        max="7"
        value={value}
        onChange={handleChange}
        className="question-slider"
      />
      <div className="question-scale">
        <span className="question-scale-label">Strongly Agree</span>
        <span className="question-scale-label">Strongly Disagree</span>
      </div>
    </div>
  );
};

export default DefaultQuestion;