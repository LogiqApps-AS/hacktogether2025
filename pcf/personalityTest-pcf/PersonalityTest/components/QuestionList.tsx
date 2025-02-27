import * as React from 'react';
import { QuestionType, IQuestion } from '../types/types';
import OptionsQuestion from './questions/OptionsQuestion';
import MultipleQuestion from './questions/MultipleQuestion';
import OpenQuestion from './questions/OpenQuestion';
import Question from './questions/Question';


interface QuestionListProps {
  questions: IQuestion[];
  answers: string[];
  onAnswer: (questionIndex: number, optionValue: string) => void;
}

const QuestionList: React.FC<QuestionListProps> = ({ questions, answers, onAnswer }) => {

  const renderQWuestionByType = (question: IQuestion, index: number) => {
    switch (question.type) {
      case QuestionType.OpenQuestion:
        return <OpenQuestion key={question.id} question={question} />;
      case QuestionType.Options:
        return <OptionsQuestion key={question.id} question={question} onAnswer={(value) => onAnswer(index, value.toString())} />;
      case QuestionType.MultipleOptions:
        return <MultipleQuestion key={question.id} question={question} onAnswer={(id,options) => onAnswer(index, options.join(','))} />;
      case QuestionType.Default:
      default:
        return <Question
          key={question.id}
          question={question}
          answer={answers[index]}
          onAnswer={(value) => onAnswer(index, value.toString())}
        />
    }
  }
  return (
    <div className="questions-container">
      <p style={{ textAlign: 'center', color: '#7d7369', fontStyle: 'italic' }}>FROM EACH PAIR, CHOOSE THE PHRASE THAT DESCRIBES YOU BEST.</p>
      {questions.map((question, index) => (
        renderQWuestionByType(question, index)
      ))}
    </div>
  );
};

export default QuestionList;
