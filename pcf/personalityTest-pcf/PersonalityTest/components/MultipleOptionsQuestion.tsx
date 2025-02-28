
import { IQuestion } from '../types/types';
import '../styles/MultipleOptionsQuestion.css';
import * as React from 'react';

interface MultipleOptionsQuestionProps {
  question: IQuestion;
  value: string[];
  onChange: (value: string[]) => void;
}

const MultipleOptionsQuestion: React.FC<MultipleOptionsQuestionProps> = ({ question, value, onChange }) => {
  const handleChange = (option: string) => {
    if (value.includes(option)) {
      onChange(value.filter(item => item !== option));
    } else {
      onChange([...value, option]);
    }
  };

  return (
    <div className="multiple-options-container">
      <h3 className="multiple-options-title">{question.textLeft}</h3>
      <div className="multiple-options-list">
        {question.options?.map((option, index) => (
          <div key={index} className="multiple-option-item">
            <input
              id={`option-${question.id}-${index}`}
              type="checkbox"
              checked={value.includes(option)}
              onChange={() => handleChange(option)}
              className="multiple-option-checkbox"
            />
            <label htmlFor={`option-${question.id}-${index}`} className="multiple-option-label">
              {option}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultipleOptionsQuestion;