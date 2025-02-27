import * as React from 'react';
import PersonalityTest from './components/PersonalityTest';
import './index.css';

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
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-indigo-700 mb-2">Personality Assessment</h1>
          <p className="text-gray-600">Discover your personality traits based on the Big Five model</p>
        </header>
        
        <PersonalityTest />
      </div>
    </div>
  );
};

export default MainComponent;
