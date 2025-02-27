import { IQuestion } from "../../types/types";
import { useState } from "react";
import * as React from "react";

export interface MultipleQuestionProps {
  question: IQuestion;
  onAnswer: (questionId: string, selectedOptions: string[]) => void;
}

const MultipleQuestion: React.FC<MultipleQuestionProps> = ({ question, onAnswer }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleCheckboxChange = (option: string) => {
    const isSelected = selectedOptions.includes(option);

    if (isSelected) {
      setSelectedOptions(selectedOptions.filter((selectedOption) => selectedOption !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  React.useEffect(() => {
    onAnswer(question.id.toString(), selectedOptions);
  }, [selectedOptions, question.id, onAnswer]);

  return (
    <div className="mult-question-container">
      <h3>{question.textLeft}</h3>
      <div className="mul-options-container">
        {question.options?.map((option, index) => (
          <div key={index} className="mult-option">
            <input
              type="checkbox"
              id={option}
              name={option}
              value={option}
              checked={selectedOptions.includes(option)}
              onChange={() => handleCheckboxChange(option)}
            />
            <label htmlFor={option}>{option}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultipleQuestion;