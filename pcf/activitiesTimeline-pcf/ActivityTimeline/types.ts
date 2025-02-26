export interface LearningPlanItem {
  id: string;
  itemName: string;
  plannedDate: string;
  itemDescription: string;
  completed?: boolean;
}

export interface CompletionDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (description: string) => void;
  itemName: string;
}