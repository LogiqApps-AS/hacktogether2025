
import * as React from 'react';
import { IQuestion } from '../types/types';

interface OpenQuestionProps {
  question: IQuestion;
  value: string;
  onChange: (value: string) => void;
}

const OpenQuestion: React.FC<OpenQuestionProps> = ({ question, value, onChange }) => {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-medium mb-4">{question.textLeft}</h3>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-32 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder="Type your answer here..."
      />
    </div>
  );
};

export default OpenQuestion;