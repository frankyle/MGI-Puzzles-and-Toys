
// src/components/Tabs.js
import React from 'react';

function Tabs({ activeTab, setActiveTab }) {
  const tabs = ['checklist', 'journal', 'dashboard', 'images'];
  const labels = ['Checklist', 'Journal', 'Dashboard', 'Images'];

  return (
    <div className="flex justify-center border-b border-gray-700">
      {tabs.map((tab, i) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`py-3 px-4 sm:px-6 font-semibold border-b-2 text-sm transition-colors ${
            activeTab === tab ? 'tab-active border-blue-500 text-blue-500' : 'tab-inactive text-gray-300'
          }`}
        >
          {labels[i]}
        </button>
      ))}
    </div>
  );
}

export default Tabs;
