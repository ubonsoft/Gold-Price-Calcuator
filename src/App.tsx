import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { PriceInput } from './components/PriceInput';
import { PriceDifference } from './components/PriceDifference';
import { PriceHistory } from './components/PriceHistory';
import { usePriceHistory } from './hooks/usePriceHistory';
import { Save } from 'lucide-react';

function App() {
  const [highestPrice, setHighestPrice] = useState<number>(0);
  const [currentPrice, setCurrentPrice] = useState<number>(0);
  const [difference, setDifference] = useState<number>(0);
  const { history, saveRecord, clearHistory } = usePriceHistory();

  useEffect(() => {
    if (highestPrice && currentPrice) {
      const diff = ((highestPrice - currentPrice) / highestPrice) * 100;
      setDifference(parseFloat(diff.toFixed(2)));
    }
  }, [highestPrice, currentPrice]);

  const handleSave = () => {
    if (highestPrice && currentPrice) {
      saveRecord({
        highestPrice,
        currentPrice,
        difference,
      });
    }
  };

  const canSave = highestPrice > 0 && currentPrice > 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-yellow-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6">
          <Header />

          <div className="space-y-4 mt-6">
            <PriceInput
              label="Highest Gold Price (USD)"
              value={highestPrice}
              onChange={setHighestPrice}
              placeholder="Enter highest gold price"
            />

            <PriceInput
              label="Current Gold Price (USD)"
              value={currentPrice}
              onChange={setCurrentPrice}
              placeholder="Enter current gold price"
            />
          </div>

          {canSave && (
            <div className="mt-6">
              <PriceDifference
                difference={difference}
                absoluteDifference={highestPrice - currentPrice}
              />
              
              <button
                onClick={handleSave}
                className="mt-4 w-full flex items-center justify-center gap-2 bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition-colors"
              >
                <Save className="w-4 h-4" />
                Save Record
              </button>
            </div>
          )}

          <PriceHistory history={history} onClear={clearHistory} />
        </div>
      </div>
    </div>
  );
}

export default App;