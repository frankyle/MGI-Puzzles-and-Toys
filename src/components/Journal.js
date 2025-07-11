// src/components/Journal.js
import React from 'react';

function Journal({ trades, onUpdateClick }) {
  if (!trades || trades.length === 0) {
    return (
      <p className="text-center mt-8 text-gray-400">No trades logged yet.</p>
    );
  }

  return (
    <div className="space-y-4 mt-6">
      {trades.map((trade) => {
        const isOpen = trade.status === 'open';
        const formattedDate = trade.timestamp
          ? new Date(trade.timestamp).toLocaleString()
          : 'Unknown time';

        return (
          <div key={trade.id} className="bg-gray-800 p-4 rounded-lg shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold">{trade.pair}</h3>
                <p className="text-sm text-gray-400">Session: {trade.tradeTime}</p>
                <p className="text-xs text-gray-500">{formattedDate}</p>
              </div>
              <div className="text-right">
                {isOpen ? (
                  <button
                    onClick={() => onUpdateClick(trade.id)}
                    className="px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
                  >
                    Update
                  </button>
                ) : (
                  <span
                    className={`px-2 py-1 text-sm rounded ${
                      trade.status === 'win'
                        ? 'bg-green-600'
                        : trade.status === 'loss'
                        ? 'bg-red-600'
                        : 'bg-gray-600'
                    }`}
                  >
                    {trade.status.toUpperCase()}
                  </span>
                )}
              </div>
            </div>

            <div className="mt-3 grid grid-cols-3 gap-4 text-center bg-gray-700 p-3 rounded-lg text-sm">
              <div>
                <p className="font-bold">
                  {trade.pipsAimed}/{trade.pipsRisked}
                </p>
                <p className="text-xs text-gray-300">Pips Aimed/Risked</p>
              </div>
              <div>
                <p className="font-bold">${trade.riskAmountUSD}</p>
                <p className="text-xs text-gray-300">Risk $</p>
              </div>
              <div>
                <p className="font-bold truncate">
                  {trade.emotions && trade.emotions.length > 0
                    ? trade.emotions.join(', ')
                    : 'None'}
                </p>
                <p className="text-xs text-gray-300">Emotions</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Journal;
