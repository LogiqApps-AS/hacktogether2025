import * as React from 'react';
import { IQuestion as QuestionType } from '../../types/types';

interface QuestionProps {
  question: QuestionType;
  answer: string;
  onAnswer: (value: number) => void;
}

const Question: React.FC<QuestionProps> = ({ question, answer, onAnswer }) => {
  return (
    <div className="question-pair">
      <div className="question-options">
        <span className="option-text left-option">{question.textLeft}</span>
        <div className="radio-options">
          <span className="accuracy-label">Inaccurate</span>
          {[1, 2, 3, 4, 5].map((value) => (
            <label key={value} className="radio-label">
              <input
                type="radio"
                name={`question-${question.id}`}
                value={value}
                checked={answer === value.toString()}
                onChange={() => onAnswer(value)}
              />
            </label>
          ))}
          <span className="accuracy-label">Accurate</span>
        </div>
        <span className="option-text right-option">{question.textRight}</span>
      </div>
    </div>
  );
};

export default Question;
