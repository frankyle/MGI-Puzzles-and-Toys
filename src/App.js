import React from 'react';
import TradingJournalForm from './components-mgi/TradingJournalForm';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-green-500">MGI Candles Trading Journal</h1>
      <TradingJournalForm />
    </div>
  );
}

export default App;
