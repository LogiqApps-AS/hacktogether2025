
import { IQuestion } from '../types/types';
import '../styles/OpenQuestion.css';
import * as React from 'react';

interface OpenQuestionProps {
  question: IQuestion;
  value: string;
  onChange: (value: string) => void;
}

const OpenQuestion: React.FC<OpenQuestionProps> = ({ question, value, onChange }) => {
  return (
    <div className="open-question-container">
      <h3 className="open-question-title">{question.textLeft}</h3>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="open-question-textarea"
        placeholder="Type your answer here..."
      />
    </div>
  );
};

export default OpenQuestion;