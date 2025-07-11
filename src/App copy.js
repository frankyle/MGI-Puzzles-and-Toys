// src/App.js
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Tabs from './components/Tabs';
import Checklist from './components/Checklist';
import Journal from './components/Journal';
import Dashboard from './components/Dashboard';
import Images from './components/Images';
import LogModal from './components/LogModal';
import UpdateModal from './components/UpdateModal';
import { saveToLocalStorage, loadFromLocalStorage } from './utils/storage';

function App() {
  const [activeTab, setActiveTab] = useState('Checklist');
  const [trades, setTrades] = useState([]);
  const [showLogModal, setShowLogModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [updateTradeId, setUpdateTradeId] = useState(null);

  // Load trades from localStorage when the app loads
  useEffect(() => {
    const storedTrades = loadFromLocalStorage('mgi-trades') || []; // Fallback to empty array
    const tradesWithDates = storedTrades.map(trade => ({
      ...trade,
      timestamp: new Date(trade.timestamp) // Rebuild timestamp to Date object
    }));
    setTrades(tradesWithDates);
  }, []);

  // Save a new trade
  const handleSaveTrade = (tradeData) => {
    const newTrade = {
      ...tradeData,
      id: Date.now(),
      timestamp: new Date().toISOString(), // Save as ISO string
      type: 'High Probability',
      status: 'open',
    };
    const updated = [...trades, newTrade];
    setTrades(updated);
    saveToLocalStorage('mgi-trades', updated);
    setShowLogModal(false);
  };

  // Update trade status (win/loss/etc.)
  const handleUpdateStatus = (status) => {
    const updated = trades.map((trade) =>
      trade.id === updateTradeId ? { ...trade, status } : trade
    );
    setTrades(updated);
    saveToLocalStorage('mgi-trades', updated);
    setShowUpdateModal(false);
  };

  // Trigger update modal for a specific trade
  const handleRequestUpdate = (id) => {
    setUpdateTradeId(id);
    setShowUpdateModal(true);
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white font-sans p-4 pb-24 max-w-lg mx-auto">
      <Header />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === 'Checklist' && (
        <Checklist onLogClick={() => setShowLogModal(true)} />
      )}
      {activeTab === 'Journal' && (
        <Journal trades={trades} onUpdateClick={handleRequestUpdate} />
      )}
      {activeTab === 'Dashboard' && <Dashboard trades={trades} />}
      {activeTab === 'Images' && <Images />}

      {showLogModal && (
        <LogModal onSave={handleSaveTrade} onClose={() => setShowLogModal(false)} />
      )}

      {showUpdateModal && (
        <UpdateModal onUpdate={handleUpdateStatus} onClose={() => setShowUpdateModal(false)} />
      )}
    </div>
  );
}

export default App;
