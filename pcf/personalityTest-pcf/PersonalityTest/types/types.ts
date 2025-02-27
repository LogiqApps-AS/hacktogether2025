export enum QuestionType {
    Default = 'default',
    Options = 'options',
    MultipleOptions = 'multipleOptions',
    OpenQuestion = 'openQuestion'
  }
  
  export interface IQuestion {
    id: number;
    textLeft: string;
    textRight?: string;
    trait: string;
    type: QuestionType;
    options?: string[];
  }
  
  export interface IAnswer {
    questionId: number;
    value: number | string | string[];
    trait: string;
  }
  
  export interface ITraitResult {
    trait: string;
    score: number;
    percentage: number;
    description: string;
  }
  
  export interface ITestResults {
    traits: ITraitResult[];
    openAnswers: {
      questionId: number;
      question: string;
      answer: string | string[];
    }[];
  }

  export enum StatusType {
    Active=0,
    Inactive=1,
    
  }

  export default IQuestion;