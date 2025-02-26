import * as React from 'react';
// import '../css/Header.css';

interface HeaderProps {
  showResults?: boolean; // Optional prop to indicate results page
}

const Header: React.FC<HeaderProps> = ({ showResults }) => {
  return (
    <div className="header-container">
      {showResults ? (
        <h1>Congratulations!</h1>
      ) : (
        <>
          <h1>Personality Test</h1>
        </>
      )}
    </div>
  );
};

export default Header;
