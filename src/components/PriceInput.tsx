import React from 'react';

interface PriceInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  placeholder: string;
}

export function PriceInput({ label, value, onChange, placeholder }: PriceInputProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="relative">
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
        <input
          type="number"
          value={value || ''}
          onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
          className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
          placeholder={placeholder}
          step="0.01"
          min="0"
        />
      </div>
    </div>
  );
}