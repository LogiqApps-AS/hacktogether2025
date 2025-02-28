
import { IQuestion } from '../types/types';
import '../styles/OptionsQuestion.css';
import * as React from 'react';

interface OptionsQuestionProps {
  question: IQuestion;
  value: string;
  onChange: (value: string) => void;
}

const OptionsQuestion: React.FC<OptionsQuestionProps> = ({ question, value, onChange }) => {
  return (
    <div className="options-container">
      <h3 className="options-title">{question.textLeft}</h3>
      <div className="options-list">
        {question.options?.map((option, index) => (
          <div key={index} className="option-item">
            <input
              id={`option-${question.id}-${index}`}
              type="radio"
              name={`question-${question.id}`}
              value={option}
              checked={value === option}
              onChange={() => onChange(option)}
              className="option-radio"
            />
            <label htmlFor={`option-${question.id}-${index}`} className="option-label">
              {option}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OptionsQuestion;