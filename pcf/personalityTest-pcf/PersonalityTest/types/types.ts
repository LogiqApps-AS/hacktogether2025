export enum QuestionType{
  Default = 0,
  OpenQuestion = 1,
  Options = 2,
  MultipleOptions = 3,
} 
export interface IQuestion {
  id: number;
  textLeft: string;
  textRight?: string;
  trait: string; // Add trait property
  type: QuestionType;
  options?: string[];
}

export enum StatusType {
  InProgress = 0,
  Completed = 1,
}