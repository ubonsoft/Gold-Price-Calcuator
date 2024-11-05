import React from 'react';
import { Calculator } from 'lucide-react';

export function Header() {
  return (
    <div className="text-center">
      <div className="inline-block p-3 bg-yellow-100 rounded-full">
        <Calculator className="w-8 h-8 text-yellow-600" />
      </div>
      <h1 className="mt-4 text-2xl font-bold text-gray-800">Gold Price Calculator</h1>
      <p className="mt-2 text-gray-600">Compare Gold Price Changes</p>
    </div>
  );
}