
import * as React from 'react';
import { IQuestion } from '../types/types';

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
    <div className="mb-8">
      <div className="flex justify-between mb-2 text-sm font-medium">
        <span className="text-gray-600">{question.textLeft}</span>
        <span className="text-gray-600">{question.textRight}</span>
      </div>
      <input
        type="range"
        min="1"
        max="7"
        value={value}
        onChange={handleChange}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
      />
      <div className="flex justify-between mt-1">
        <span className="text-xs text-gray-500">Strongly Agree</span>
        <span className="text-xs text-gray-500">Strongly Agree</span>
      </div>
    </div>
  );
};

export default DefaultQuestion;