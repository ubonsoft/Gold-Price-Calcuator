import { useState, useEffect } from 'react';
import { PriceRecord } from '../types';

const STORAGE_KEY = 'goldPriceHistory';

export function usePriceHistory() {
  const [history, setHistory] = useState<PriceRecord[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setHistory(JSON.parse(stored));
    }
  }, []);

  const saveRecord = (record: Omit<PriceRecord, 'id' | 'timestamp'>) => {
    const newRecord: PriceRecord = {
      ...record,
      id: crypto.randomUUID(),
      timestamp: Date.now(),
    };

    const updatedHistory = [newRecord, ...history].slice(0, 10); // Keep last 10 records
    setHistory(updatedHistory);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedHistory));
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  return { history, saveRecord, clearHistory };
}