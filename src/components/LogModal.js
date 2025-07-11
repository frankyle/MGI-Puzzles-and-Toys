
// src/components/LogModal.js
import { useState } from 'react';

function LogModal({ onSave, onClose }) {
  const [form, setForm] = useState({
    pair: '',
    pipsRisked: '',
    pipsAimed: '',
    riskAmountUSD: '',
    tradeTime: '',
    emotions: []
  });

  const toggleEmotion = (emotion) => {
    setForm((prev) => ({
      ...prev,
      emotions: prev.emotions.includes(emotion)
        ? prev.emotions.filter(e => e !== emotion)
        : [...prev.emotions, emotion]
    }));
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  const emotions = ["Disciplined", "Confident", "Patient", "Anxious", "Hesitant", "FOMO", "Greedy", "Revenge"];

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-gray-800 p-6 rounded-lg w-full max-w-lg">
        <h2 className="text-xl font-bold mb-4 text-center">Log Trade</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input id="pair" onChange={handleChange} value={form.pair} placeholder="Pair (e.g. EURUSD)" className="w-full p-3 bg-gray-700 rounded" required />
          <div className="grid grid-cols-2 gap-4">
            <input id="pipsRisked" onChange={handleChange} value={form.pipsRisked} placeholder="Pips Risked" type="number" step="any" className="p-3 bg-gray-700 rounded" required />
            <input id="pipsAimed" onChange={handleChange} value={form.pipsAimed} placeholder="Pips Aimed" type="number" step="any" className="p-3 bg-gray-700 rounded" required />
          </div>
          <input id="riskAmountUSD" onChange={handleChange} value={form.riskAmountUSD} placeholder="Risk $" type="number" step="any" className="w-full p-3 bg-gray-700 rounded" required />
          <select id="tradeTime" onChange={handleChange} value={form.tradeTime} className="w-full p-3 bg-gray-700 rounded" required>
            <option value="">Select Session</option>
            <option value="Asian">Asian</option>
            <option value="London Open">London Open</option>
            <option value="NY Open">NY Open</option>
          </select>

          <div>
            <label className="block mb-1 text-sm">Emotions</label>
            <div className="flex flex-wrap gap-2">
              {emotions.map(e => (
                <button
                  type="button"
                  key={e}
                  onClick={() => toggleEmotion(e)}
                  className={`px-3 py-1 text-sm rounded-full transition ${form.emotions.includes(e) ? 'bg-blue-500 text-white' : 'bg-gray-600 text-white'}`}
                >
                  {e}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-between pt-4">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-600 rounded">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-blue-600 rounded">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LogModal;


