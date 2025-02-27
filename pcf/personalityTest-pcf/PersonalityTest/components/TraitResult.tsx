
import * as React from 'react';
import { ITraitResult } from '../types/types';

interface TraitResultProps {
  result: ITraitResult;
}

const TraitResult: React.FC<TraitResultProps> = ({ result }) => {
  return (
    <div className="mb-6 p-4 bg-white rounded-lg shadow">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="col-span-1">
          <h3 className="text-lg font-semibold">{result.trait}</h3>
          <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-indigo-600 h-2.5 rounded-full" 
              style={{ width: `${result.percentage}%` }}
            ></div>
          </div>
          <div className="flex justify-between mt-1">
            <span className="text-xs text-gray-500">Low</span>
            <span className="text-sm font-medium">{result.percentage}%</span>
            <span className="text-xs text-gray-500">High</span>
          </div>
        </div>
        
        <div className="col-span-1 md:col-span-1 lg:col-span-2">
          <div className="flex items-center mb-2">
            <span className="text-sm font-medium mr-2">Your Score:</span>
            <div className="px-2 py-1 bg-indigo-100 text-indigo-800 rounded-md text-sm font-semibold">
              {result.percentage < 30 ? 'Low' : result.percentage < 70 ? 'Moderate' : 'High'}
            </div>
          </div>
          <p className="text-sm text-gray-700">{result.description}</p>
        </div>
      </div>
    </div>
  );
};

export default TraitResult;