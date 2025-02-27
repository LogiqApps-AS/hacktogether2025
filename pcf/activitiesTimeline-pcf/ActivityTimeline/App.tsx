import * as React from 'react';
import { useState } from 'react';
import { Chrono } from 'react-chrono';
import { CheckCircle, Clock } from 'lucide-react';
import { CompletionDialog } from './components/CompletionDialog';
import { LearningPlanItem } from './types';

interface AppProps {
  localItems: LearningPlanItem[];
  updateRecord: (id: string, updatedFields: Partial<LearningPlanItem>) => void;
}

export function App({ localItems, updateRecord }: AppProps) {
  const [items, setItems] = useState<LearningPlanItem[]>(localItems);
  const [selectedItem, setSelectedItem] = useState<LearningPlanItem | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Sample data - replace with your actual data source
  /*const [items, setItems] = useState<LearningPlanItem[]>([
    {
      id: '1',
      itemName: 'Introduction to React',
      plannedDate: '2024-03-15',
      itemDescription: 'Learn the basics of React including components, props, and state.',
      completed: false,
    },
    {
      id: '2',
      itemName: 'State Management',
      plannedDate: '2024-03-20',
      itemDescription: 'Deep dive into React state management with hooks and context.',
      completed: false,
    },
    {
      id: '3',
      itemName: 'Advanced Patterns',
      plannedDate: '2024-03-25',
      itemDescription: 'Explore advanced React patterns and best practices.',
      completed: false,
    },
  ]);*/

  const handleComplete = (item: LearningPlanItem) => {
    setSelectedItem(item);
    setIsDialogOpen(true);
  };
  const handleSubmitCompletion = (description: string) => {
    if (selectedItem) {
        setItems(items.map(item => 
            item.id === selectedItem.id 
                ? { ...item, status: 3, itemDescription: description }
                : item
        ));

        // Call the function to update the Dataverse record
        updateRecord(selectedItem.id, { status: 3, itemDescription: description });
    }
  };


  const timelineItems = items.map(item => ({
    title: item.plannedDate.split("T")[0],
    cardTitle: item.itemName,
    cardSubtitle: item.itemDescription,
    cardDetailedText: item.status == 1 || item.status == 2 ? 'Completed' : 'Pending',
  }));

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900">Learning Plan Timeline</h1>
        
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div style={{ width: '100%', height: '400px' }}>
            <Chrono
              items={timelineItems}
              mode="HORIZONTAL"
              cardHeight={90}
              slideShow
              slideItemDuration={2000}
              theme={{
                primary: '#2563eb',
                secondary: '#e2e8f0',
                cardBgColor: '#ffffff',
                cardForeColor: '#1f2937',
                titleColor: '#1f2937',
              }}
            />
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map(item => (
              <div
                key={item.id}
                className="flex flex-col p-4 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center gap-3 mb-3">
                  {item.status == 1 || item.status == 2 ? (
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  ) : (
                    <Clock className="h-5 w-5 text-blue-500 flex-shrink-0" />
                  )}
                  <div>
                    <h3 className="font-medium text-gray-900">{item.itemName}</h3>
                    <p className="text-sm text-gray-500">{item.plannedDate}</p>
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 mb-4 flex-grow">
                  {item.itemDescription}
                </p>
                
                {item.status != 1 && item.status != 2 && (
                  <button
                    onClick={() => handleComplete(item)}
                    className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Complete
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <CompletionDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onSubmit={handleSubmitCompletion}
        itemName={selectedItem?.itemName || ''}
      />
    </div>
  );
}
