
// src/components/Images.js
import React from 'react';

function Images() {
  const imageFields = [
    { label: '1. 4hr Setup Image', id: 'fourHrSetup' },
    { label: '2. 15min Entry Image', id: 'fifteenMinEntry' },
    { label: '3. 1hr TP Image', id: 'oneHrTp' },
  ];

  return (
    <div className="bg-gray-800 rounded-2xl shadow-2xl p-6 space-y-6">
      <h2 className="text-xl font-bold text-center">Trade Images Reference</h2>
      <p className="text-center text-gray-400 text-sm -mt-4">Your key chart setups for quick reference.</p>
      {imageFields.map(({ label, id }) => (
        <div className="space-y-2" key={id}>
          <label className="font-semibold">{label}</label>
          <div className="w-full h-48 bg-gray-700 rounded-lg flex items-center justify-center relative overflow-hidden group border-2 border-dashed border-gray-600 hover:border-blue-500 transition-colors">
            <div className="text-center text-gray-400">Click to upload</div>
            <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" accept="image/*" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Images;
