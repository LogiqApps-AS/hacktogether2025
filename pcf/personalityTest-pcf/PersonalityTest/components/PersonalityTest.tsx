
import { IAnswer, IQuestion, ITestResults, ITraitResult, QuestionType } from '../types/types';
import { mockQuestions } from '../data/questions';
import { traitDescriptions } from '../data/traitDescriptions';
import DefaultQuestion from './DefaultQuestion';
import OptionsQuestion from './OptionsQuestion';
import MultipleOptionsQuestion from './MultipleOptionsQuestion';
import OpenQuestion from './OpenQuestion';
import ProgressBar from './ProgressBar';
import TestResults from './TestResults';
import { ArrowLeft, ArrowRight, Shuffle } from 'lucide-react';
import { useState } from 'react';
import * as React from 'react';

const PersonalityTest: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [answers, setAnswers] = useState<IAnswer[]>([]);
  const [testCompleted, setTestCompleted] = useState(false);
  const [results, setResults] = useState<ITestResults | null>(null);

  const questionsPerPage = 6;
  const totalPages = Math.ceil(mockQuestions.length / questionsPerPage);
  
  // Get current page questions
  const getCurrentPageQuestions = (): IQuestion[] => {
    const startIndex = currentPage * questionsPerPage;
    return mockQuestions.slice(startIndex, startIndex + questionsPerPage);
  };

  const currentPageQuestions = getCurrentPageQuestions();

  const getDefaultValue = (questionId: number): number => {
    const answer = answers.find(a => a.questionId === questionId);
    return answer ? answer.value as number : 4; // Default to middle value (4 on scale of 1-7)
  };

  const getStringValue = (questionId: number): string => {
    const answer = answers.find(a => a.questionId === questionId);
    return answer ? answer.value as string : '';
  };

  const getArrayValue = (questionId: number): string[] => {
    const answer = answers.find(a => a.questionId === questionId);
    return answer ? answer.value as string[] : [];
  };

  const handleAnswerChange = (questionId: number, trait: string, value: number | string | string[]) => {
    const existingAnswerIndex = answers.findIndex(a => a.questionId === questionId);
    
    if (existingAnswerIndex !== -1) {
      const updatedAnswers = [...answers];
      updatedAnswers[existingAnswerIndex] = {
        ...updatedAnswers[existingAnswerIndex],
        value
      };
      setAnswers(updatedAnswers);
    } else {
      setAnswers([
        ...answers,
        {
          questionId,
          value,
          trait
        }
      ]);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
      window.scrollTo(0, 0);
    } else {
      completeTest();
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      window.scrollTo(0, 0);
    }
  };

  const calculateTraitScore = (trait: string): number => {
    const traitAnswers = answers.filter(a => a.trait === trait && typeof a.value === 'number');
    if (traitAnswers.length === 0) return 0;
    
    const sum = traitAnswers.reduce((acc, curr) => acc + (curr.value as number), 0);
    return sum;
  };

  const calculateTraitPercentage = (trait: string): number => {
    const traitQuestions = mockQuestions.filter(q => q.trait === trait && q.type === QuestionType.Default);
    const maxPossibleScore = traitQuestions.length * 7; // 7 is max value on scale
    const score = calculateTraitScore(trait);
    
    return Math.round((score / maxPossibleScore) * 100);
  };

  const completeTest = () => {
    const traits = ['Openness', 'Conscientiousness', 'Extraversion', 'Agreeableness', 'Neuroticism'];
    
    const traitResults: ITraitResult[] = traits.map(trait => ({
      trait,
      score: calculateTraitScore(trait),
      percentage: calculateTraitPercentage(trait),
      description: traitDescriptions[trait as keyof typeof traitDescriptions]
    }));

    const openAnswers = answers
      .filter(a => {
        const question = mockQuestions.find(q => q.id === a.questionId);
        return question?.type !== QuestionType.Default;
      })
      .map(a => {
        const question = mockQuestions.find(q => q.id === a.questionId);
        return {
          questionId: a.questionId,
          question: question?.textLeft ?? '',
          answer: typeof a.value === 'number' ? a.value.toString() : a.value
        };
      });

    const testResults: ITestResults = {
      traits: traitResults,
      openAnswers
    };

    setResults(testResults);
    setTestCompleted(true);
    
    // Log results to console as requested
    console.log('Personality Test Results:', testResults);
    console.log('All Answers:', answers);
  };

  const resetTest = () => {
    setCurrentPage(0);
    setAnswers([]);
    setTestCompleted(false);
    setResults(null);
  };

  const populateRandomAnswers = () => {
    const newAnswers = [...answers];
    
    // Generate random answers for current page questions
    currentPageQuestions.forEach(question => {
      const existingAnswerIndex = newAnswers.findIndex(a => a.questionId === question.id);
      let randomValue: number | string | string[];
      
      switch (question.type) {
        case QuestionType.Default:
          randomValue = Math.floor(Math.random() * 7) + 1; // Random number between 1-7
          break;
        case QuestionType.Options:
          if (question.options && question.options.length > 0) {
            const randomIndex = Math.floor(Math.random() * question.options.length);
            randomValue = question.options[randomIndex];
          } else {
            randomValue = '';
          }
          break;
        case QuestionType.MultipleOptions:
          if (question.options && question.options.length > 0) {
            // Select a random number of options (at least 1)
            const numOptions = Math.floor(Math.random() * question.options.length) + 1;
            const shuffledOptions = [...question.options].sort(() => 0.5 - Math.random());
            randomValue = shuffledOptions.slice(0, numOptions);
          } else {
            randomValue = [];
          }
          break;
        case QuestionType.OpenQuestion:
          // Generate a random sentence for open questions
          const sentences = [
            "I would focus on improving my work-life balance.",
            "I would like to travel more and experience different cultures.",
            "I would prioritize my health and fitness routine.",
            "I would spend more time with family and friends.",
            "I would learn a new skill or hobby that interests me."
          ];
          const randomIndex = Math.floor(Math.random() * sentences.length);
          randomValue = sentences[randomIndex];
          break;
        default:
          randomValue = 4;
      }
      
      if (existingAnswerIndex !== -1) {
        newAnswers[existingAnswerIndex] = {
          ...newAnswers[existingAnswerIndex],
          value: randomValue
        };
      } else {
        newAnswers.push({
          questionId: question.id,
          value: randomValue,
          trait: question.trait
        });
      }
    });
    
    setAnswers(newAnswers);
  };

  const renderQuestion = (question: IQuestion) => {
    switch (question.type) {
      case QuestionType.Default:
        return (
          <DefaultQuestion
            question={question}
            value={getDefaultValue(question.id)}
            onChange={(value) => handleAnswerChange(question.id, question.trait, value)}
          />
        );
      case QuestionType.Options:
        return (
          <OptionsQuestion
            question={question}
            value={getStringValue(question.id)}
            onChange={(value) => handleAnswerChange(question.id, question.trait, value)}
          />
        );
      case QuestionType.MultipleOptions:
        return (
          <MultipleOptionsQuestion
            question={question}
            value={getArrayValue(question.id)}
            onChange={(value) => handleAnswerChange(question.id, question.trait, value)}
          />
        );
      case QuestionType.OpenQuestion:
        return (
          <OpenQuestion
            question={question}
            value={getStringValue(question.id)}
            onChange={(value) => handleAnswerChange(question.id, question.trait, value)}
          />
        );
      default:
        return null;
    }
  };

  const isCurrentPageAnswered = (): boolean => {
    return currentPageQuestions.every(question => {
      const answer = answers.find(a => a.questionId === question.id);
      if (!answer) return false;
      
      if (Array.isArray(answer.value)) {
        return answer.value.length > 0;
      }
      
      if (typeof answer.value === 'string') {
        return answer.value.trim() !== '';
      }
      
      return true;
    });
  };

  if (testCompleted && results) {
    return <TestResults results={results} onRetakeTest={resetTest} />;
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <ProgressBar currentQuestion={(currentPage * questionsPerPage) + 1} totalQuestions={mockQuestions.length} />
      
      <div className="flex justify-end mb-4">
        <button
          onClick={populateRandomAnswers}
          className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors"
        >
          <Shuffle size={16} />
          Random Answers
        </button>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-6 text-indigo-700">
          Page {currentPage + 1} of {totalPages}
        </h2>
        
        {currentPageQuestions.map(question => (
          <div key={question.id} className="mb-8 pb-6 border-b border-gray-200 last:border-0 last:mb-0 last:pb-0">
            {renderQuestion(question)}
          </div>
        ))}
      </div>
      
      <div className="flex justify-between">
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 0}
          className={`flex items-center gap-2 px-4 py-2 rounded-md ${
            currentPage === 0
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <ArrowLeft size={16} />
          Previous
        </button>
        
        <button
          onClick={goToNextPage}
          disabled={!isCurrentPageAnswered()}
          className={`flex items-center gap-2 px-4 py-2 rounded-md ${
            !isCurrentPageAnswered()
              ? 'bg-indigo-300 text-white cursor-not-allowed'
              : 'bg-indigo-600 text-white hover:bg-indigo-700'
          }`}
        >
          {currentPage === totalPages - 1 ? 'Complete' : 'Next'}
          {currentPage < totalPages - 1 && <ArrowRight size={16} />}
        </button>
      </div>
    </div>
  );
};

export default PersonalityTest;