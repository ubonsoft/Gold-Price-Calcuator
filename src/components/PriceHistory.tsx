import React from 'react';
import { History, Trash2 } from 'lucide-react';
import { PriceRecord } from '../types';

interface PriceHistoryProps {
  history: PriceRecord[];
  onClear: () => void;
}

export function PriceHistory({ history, onClear }: PriceHistoryProps) {
  if (history.length === 0) {
    return null;
  }

  return (
    <div className="mt-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <History className="w-5 h-5 text-gray-600" />
          <h2 className="text-lg font-semibold text-gray-800">Price History</h2>
        </div>
        <button
          onClick={onClear}
          className="flex items-center gap-1 px-2 py-1 text-sm text-red-600 hover:text-red-700 transition-colors"
        >
          <Trash2 className="w-4 h-4" />
          Clear
        </button>
      </div>
      <div className="space-y-3">
        {history.map((record) => (
          <div
            key={record.id}
            className="p-3 bg-gray-50 rounded-lg border border-gray-100"
          >
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm text-gray-600">
                {new Date(record.timestamp).toLocaleString()}
              </span>
              <span className="text-sm font-semibold text-red-500">
                -{record.difference}%
              </span>
            </div>
            <div className="flex justify-between text-sm text-gray-700">
              <span>Highest: ${record.highestPrice.toLocaleString()}</span>
              <span>Current: ${record.currentPrice.toLocaleString()}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}