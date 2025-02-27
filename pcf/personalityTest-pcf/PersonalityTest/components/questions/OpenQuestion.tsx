import * as React from "react";
import { IQuestion } from "../../types/types";

export interface OpenQuestionProps {
  question: IQuestion,
}
const OpenQuestion: React.FC<OpenQuestionProps> = ({ question }) => {
  return (
    <div className="question-container">
      <h3>{question.textLeft}</h3>
        <textarea
            className="open-question"
            placeholder="Type your answer here"
            rows={4}
            cols={50} />
    </div>
  );
};

export default OpenQuestion;