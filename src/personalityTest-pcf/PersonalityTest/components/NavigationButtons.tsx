import * as React from 'react';
// import './NavigationButtons.css'

interface NavigationButtonsProps {
  currentPage: number;
  totalPages: number;
  isNextPageDisabled: boolean;
  goToPreviousPage: () => void;
  goToNextPage: () => void;
  handleSubmit: () => void;
  randomAnswer: () => void; // Add randomAnswer prop
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  currentPage,
  totalPages,
  isNextPageDisabled,
  goToPreviousPage,
  goToNextPage,
  handleSubmit,
  randomAnswer, // Receive randomAnswer function
}) => {
  return (
    <div className="navigation">
      <button
        className="nav-button prev-button"
        onClick={goToPreviousPage}
        disabled={currentPage === 0}
      >
        Previous
      </button>

      <button className="nav-button random-button" onClick={randomAnswer}>
        Random Answer
      </button>

      {currentPage === totalPages - 1 ? (
        <button
          className="nav-button submit-button"
          onClick={handleSubmit}
          disabled={isNextPageDisabled}
        >
          Submit
        </button>
      ) : (
        <button
          className="nav-button next-button"
          onClick={goToNextPage}
          disabled={isNextPageDisabled}
        >
          Next
        </button>
      )}
    </div>
  );
};

export default NavigationButtons;
