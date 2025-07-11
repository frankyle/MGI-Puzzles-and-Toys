import React, { useState, useEffect } from 'react';

const TradingJournalForm = () => {
  const [form, setForm] = useState({
    pair: '',
    type: 'Buy',
    time: '',
    session: '',
    emotions: [],
    setupImage: '',
    entryImage: '',
    profitImage: '',
  });

  const [journal, setJournal] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('tradingJournal')) || [];
    setJournal(saved);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'time') {
      let session = '';
      const [hour] = value.split(':').map(Number);

      if (hour >= 3 && hour < 8) session = 'Asian';
      else if (hour >= 10 && hour < 14) session = 'London';
      else if (hour >= 15 && hour <= 20) session = 'New York';

      setForm((prev) => ({ ...prev, [name]: value, session }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleEmotionToggle = (emotion) => {
    setForm((prev) => {
      const emotions = prev.emotions.includes(emotion)
        ? prev.emotions.filter((e) => e !== emotion)
        : [...prev.emotions, emotion];
      return { ...prev, emotions };
    });
  };

  const handleImage = (e, imageType) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setForm((prev) => ({ ...prev, [imageType]: reader.result }));
    };
    if (file) reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedJournal = [...journal];
    if (editIndex !== null) {
      updatedJournal[editIndex] = form;
    } else {
      updatedJournal.push(form);
    }

    localStorage.setItem('tradingJournal', JSON.stringify(updatedJournal));
    setJournal(updatedJournal);
    resetForm();
  };

  const handleEdit = (index) => {
    setForm(journal[index]);
    setEditIndex(index);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = (index) => {
    const updatedJournal = journal.filter((_, i) => i !== index);
    localStorage.setItem('tradingJournal', JSON.stringify(updatedJournal));
    setJournal(updatedJournal);
    resetForm();
  };

  const resetForm = () => {
    setForm({
      pair: '',
      type: 'Buy',
      time: '',
      session: '',
      emotions: [],
      setupImage: '',
      entryImage: '',
      profitImage: '',
    });
    setEditIndex(null);
  };

  const emotionOptions = ['Confident', 'Fearful', 'Revengeful', 'Calm', 'Anxious'];

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold text-indigo-700 mb-4">
        {editIndex !== null ? 'Edit Trade Entry' : 'New Trade Entry'}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white shadow-lg rounded-lg p-4 sm:p-6">
        <input
          name="pair"
          placeholder="Currency Pair (e.g. EUR/USD)"
          value={form.pair}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        <div>
          <label className="block mb-1 text-gray-600">Buy or Sell:</label>
          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <option value="Buy">Buy</option>
            <option value="Sell">Sell</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 text-gray-600">Time of Trade:</label>
          <input
            type="time"
            name="time"
            value={form.time}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          {form.session && (
            <p className="text-sm text-green-600 mt-1">Session: {form.session}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 text-gray-600">Emotions:</label>
          <div className="flex flex-wrap gap-3">
            {emotionOptions.map((emotion) => (
              <label key={emotion} className="flex items-center space-x-2 text-sm">
                <input
                  type="checkbox"
                  checked={form.emotions.includes(emotion)}
                  onChange={() => handleEmotionToggle(emotion)}
                />
                <span>{emotion}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-gray-600 mb-1">Setup Image</label>
            <input type="file" accept="image/*" onChange={(e) => handleImage(e, 'setupImage')} />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Entry Image</label>
            <input type="file" accept="image/*" onChange={(e) => handleImage(e, 'entryImage')} />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Profit Image</label>
            <input type="file" accept="image/*" onChange={(e) => handleImage(e, 'profitImage')} />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
        >
          {editIndex !== null ? 'Update Trade' : 'Save Trade'}
        </button>
      </form>

      <div className="mt-10">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Journal Entries</h3>
        {journal.map((entry, index) => (
          <div key={index} className="border p-4 rounded-md mb-6 bg-white shadow-md">
            <p><strong>Pair:</strong> {entry.pair}</p>
            <p><strong>Type:</strong> {entry.type}</p>
            <p><strong>Time:</strong> {entry.time}</p>
            <p><strong>Session:</strong> {entry.session}</p>
            <p><strong>Emotions:</strong> {Array.isArray(entry.emotions) ? entry.emotions.join(', ') : 'None'}</p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
              {entry.setupImage && (
                <div>
                  <p className="font-medium text-sm mb-1">Setup Image</p>
                  <img src={entry.setupImage} alt="Setup" className="w-full rounded-md shadow" />
                </div>
              )}
              {entry.entryImage && (
                <div>
                  <p className="font-medium text-sm mb-1">Entry Image</p>
                  <img src={entry.entryImage} alt="Entry" className="w-full rounded-md shadow" />
                </div>
              )}
              {entry.profitImage && (
                <div>
                  <p className="font-medium text-sm mb-1">Profit Image</p>
                  <img src={entry.profitImage} alt="Profit" className="w-full rounded-md shadow" />
                </div>
              )}
            </div>

            <div className="mt-4 flex gap-2">
              <button
                onClick={() => handleEdit(index)}
                className="px-4 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="px-4 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TradingJournalForm;
