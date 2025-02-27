import * as React from 'react';
import { IQuestion as QuestionType } from '../../types/types';

interface OptionsQuestionProps {
  question: QuestionType;
  //answer: string;
  onAnswer: (questionIndex: number, optionValue: string) => void;
}

const OptionsQuestion: React.FC<OptionsQuestionProps> = ({ question,onAnswer }) => {
  //Implmeneted dropdown with options
  return (
    <div className="question-pair">
      <div className="question-text">{question.textLeft}</div>
      <div className="question-text">{question.textRight}</div>
      <select
        onChange={(e) => onAnswer(question.id, e.target.value)}
      >
        <option value="">No Answer</option>
        {question.options?.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default OptionsQuestion;
