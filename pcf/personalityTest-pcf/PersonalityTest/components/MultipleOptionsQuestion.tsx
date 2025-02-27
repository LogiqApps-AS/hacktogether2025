
import * as React from 'react';
import { IQuestion } from '../types/types';

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
    <div className="mb-8">
      <h3 className="text-lg font-medium mb-4">{question.textLeft}</h3>
      <div className="space-y-3">
        {question.options?.map((option, index) => (
          <div key={index} className="flex items-center">
            <input
              id={`option-${question.id}-${index}`}
              type="checkbox"
              checked={value.includes(option)}
              onChange={() => handleChange(option)}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
            />
            <label htmlFor={`option-${question.id}-${index}`} className="ml-3 text-sm text-gray-700">
              {option}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultipleOptionsQuestion;