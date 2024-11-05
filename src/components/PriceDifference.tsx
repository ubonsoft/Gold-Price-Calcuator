import React from 'react';
import { TrendingDown } from 'lucide-react';

interface PriceDifferenceProps {
  difference: number;
  absoluteDifference: number;
}

export function PriceDifference({ difference, absoluteDifference }: PriceDifferenceProps) {
  return (
    <div className="p-4 bg-yellow-50 rounded-xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <TrendingDown className="w-5 h-5 text-red-500" />
          <span className="text-gray-700">Price Drop:</span>
        </div>
        <span className="text-xl font-bold text-red-500">
          {difference}%
        </span>
      </div>
      <div className="mt-2 text-sm text-gray-600">
        Price decreased by ${absoluteDifference.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        })} from highest point
      </div>
    </div>
  );
}