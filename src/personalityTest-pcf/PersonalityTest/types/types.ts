export interface Question {
  id: number;
  textLeft: string;
  textRight: string;
  trait: string; // Add trait property
}

export enum StatusType {
  InProgress = 0,
  Completed = 1,
}