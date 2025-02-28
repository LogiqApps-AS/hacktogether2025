import * as React from 'react';
import PersonalityTest from './components/PersonalityTest';
import './styles/index.css';
import './styles/App.css';

export interface IMainComponentProps {
  questionsPerPage: number;
  results: ITestResult[];
  onChange: (results: ITestResult[]) => void;
  // onStatusChange: (status: StatusType) => void;
}

export interface ITestResult {
  questionId: string
  questionText: string
  answer: string,
  trait: string
}

const MainComponent: React.FC<IMainComponentProps> = ({
  questionsPerPage = 10,
}) => {
  return (
    <div style={{ width: '100%' }}>
      <div className="app-container">
        <div className="app-content">
          <header className="app-header">
            <h1 className="app-title">Personality Assessment</h1>
            <p className="app-subtitle">Discover your personality traits based on the Big Five model</p>
          </header>

          <PersonalityTest />
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
