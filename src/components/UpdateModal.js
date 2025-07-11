// src/components/UpdateModal.js
import React from 'react';

function UpdateModal({ onUpdate, onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-gray-800 p-6 rounded-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4 text-center">Update Trade Status</h2>
        <div className="flex justify-between">
          <button onClick={() => onUpdate('win')} className="bg-green-600 w-full mr-2 p-3 rounded">WIN</button>
          <button onClick={() => onUpdate('loss')} className="bg-red-600 w-full ml-2 p-3 rounded">LOSS</button>
        </div>
        <div className="text-center pt-4">
          <button onClick={onClose} className="text-gray-400 hover:text-white">Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default UpdateModal;
