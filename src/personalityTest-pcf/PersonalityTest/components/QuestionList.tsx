import * as React from 'react';
import Question from './Question';
import { Question as QuestionType } from '../types/types';
// import '../css/QuestionList.css'

interface QuestionListProps {
  questions: QuestionType[];
  answers: number[];
  onAnswer: (questionIndex: number, optionValue: number) => void;
}

const QuestionList: React.FC<QuestionListProps> = ({ questions, answers, onAnswer }) => {
  return (
    <div className="questions-container">
       <p style={{ textAlign: 'center', color: '#7d7369', fontStyle: 'italic' }}>FROM EACH PAIR, CHOOSE THE PHRASE THAT DESCRIBES YOU BEST.</p>
      {questions.map((question, index) => (
        <Question
          key={question.id}
          question={question}
          answer={answers[index]}
          onAnswer={(value) => onAnswer(index, value)}
        />
      ))}
    </div>
  );
};

export default QuestionList;
