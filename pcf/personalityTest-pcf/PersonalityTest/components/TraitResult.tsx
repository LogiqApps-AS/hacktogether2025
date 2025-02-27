
import * as React from 'react';
import { ITraitResult } from '../types/types';

interface TraitResultProps {
  result: ITraitResult;
}

const TraitResult: React.FC<TraitResultProps> = ({ result }) => {
  return (
    <div className="mb-6 p-4 bg-white rounded-lg shadow">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold">{result.trait}</h3>
        <span className="text-lg font-bold">{result.percentage}%</span>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
        <div 
          className="bg-indigo-600 h-2.5 rounded-full" 
          style={{ width: `${result.percentage}%` }}
        ></div>
      </div>
      
      <p className="text-sm text-gray-700">{result.description}</p>
    </div>
  );
};

export default TraitResult;