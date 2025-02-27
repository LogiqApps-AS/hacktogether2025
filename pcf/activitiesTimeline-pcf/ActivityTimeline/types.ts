export interface LearningPlanItem {
  id: string;
  itemName: string;
  plannedDate: string;
  itemDescription: string;
  status: number;
}

export interface CompletionDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (description: string) => void;
  itemName: string;
}