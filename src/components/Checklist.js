// src/components/Checklist.js
import React, { useState } from 'react';

const initialChecks = {
  fourHourTrend: false,
  fibZone: false,
  ictBox: false,
  bos: false,
  orderBlock: false,
  dailyMovement: false,
  amd: false,
  engulfingCandle: false,
  utAlert: false,

  asianManipulationDistribution: false,
  londonBreaksAsianFailsNY: false,
  failsAsianAndNY: false,

  atDailyOpen: false,
  atPDL_PDH: false,
  atWeeklyLevels: false,
};

function Checklist({ onLogClick }) {
  const [checks, setChecks] = useState(initialChecks);
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { id, checked } = e.target;
    const updatedChecks = { ...checks, [id]: checked };
    setChecks(updatedChecks);
    evaluate(updatedChecks);
  };

  const evaluate = (c) => {
    const base = c.fourHourTrend && c.fibZone && c.ictBox && c.bos && c.orderBlock;
    const premium = c.dailyMovement && c.amd && c.engulfingCandle && c.utAlert;
    const early = !base && c.bos;

    const highProbabilityManipulation =
      c.asianManipulationDistribution && c.londonBreaksAsianFailsNY && (c.atDailyOpen || c.atPDL_PDH || c.atWeeklyLevels);

    const lowerProbabilitySetup =
      c.failsAsianAndNY && (c.atDailyOpen || c.atPDL_PDH || c.atWeeklyLevels);

    if (!Object.values(c).some(Boolean)) {
      return setResult(null);
    }

    if (highProbabilityManipulation) {
      return setResult({
        type: 'High Probability Manipulation Setup',
        risk: '2% - Strategic Trade',
        bg: 'bg-indigo-700',
      });
    }

    if (lowerProbabilitySetup) {
      return setResult({
        type: 'Lower Probability Range Setup',
        risk: '1%',
        bg: 'bg-yellow-700',
      });
    }

    if (!c.fibZone && c.bos) {
      return setResult({ type: 'No Discount', risk: '0.5%', bg: 'bg-yellow-800' });
    }

    if (base && premium) {
      return setResult({ type: 'Premium Confluence Setup', risk: '3%', bg: 'bg-purple-800' });
    }

    if (base) {
      return setResult({ type: 'High Probability Setup', risk: '2%', bg: 'bg-green-800' });
    }

    if (early) {
      return setResult({ type: 'Early / Counter-Trend', risk: '0.5%', bg: 'bg-yellow-800' });
    }

    return setResult({ type: 'Incomplete Setup', risk: 'Awaiting Confirmation...', bg: 'bg-gray-700' });
  };

  return (
    <div className="bg-gray-800 rounded-2xl shadow-2xl p-6 space-y-4">
      <form className="space-y-4">
        {Object.entries({
          fourHourTrend: 'Are the candles arranged according to 4hr candles trend?',
          fibZone: 'Is the price in the discount area?',
          ictBox: 'Were there small FVGs formed in the 15min/1hr timeframe?',
          bos: 'Was there a break of structure in lower timeframes?',
          orderBlock: 'Was there an order block or BOS in the 1hr timeframe?',
          dailyMovement: 'Has there been clear daily movement established?',
          amd: 'Was there a manipulation of Asia with London and New York (AMD)?',
          engulfingCandle: 'Is there an engulfing candle at key level?',
          utAlert: 'Is there a UT alert confirmation?',

          asianManipulationDistribution: 'Did the Asian session fail to break the high or low of the previous NY that created manipulation (distribution phase)?',
          londonBreaksAsianFailsNY: 'Did London break Asian range but fail to break previous NY and reverse?',
          failsAsianAndNY: 'Did price fail to break both Asian and previous NY ranges?',

          atDailyOpen: 'Is price at Daily Open?',
          atPDL_PDH: 'Is price at PDL or PDH?',
          atWeeklyLevels: 'Is price at previous week high/low?',
        }).map(([key, label]) => (
          <div key={key} className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
            <span className="font-medium text-gray-200">{label}</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                id={key}
                checked={checks[key]}
                onChange={handleChange}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-blue-500"></div>
              <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-full"></span>
            </label>
          </div>
        ))}
      </form>

      {result && (
        <div className={`mt-6 p-5 rounded-lg text-center transition-all ${result.bg}`}>
          <h3 className="text-xl font-bold">{result.type}</h3>
          <p className="text-lg mt-1">Recommended Risk: {result.risk}</p>
          <button
            onClick={onLogClick}
            className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg"
          >
            Log This Setup
          </button>
        </div>
      )}
    </div>
  );
}

export default Checklist;
