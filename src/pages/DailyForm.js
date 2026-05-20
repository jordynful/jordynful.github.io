import React, { useState } from 'react';
import './cellgroupAppStyles.css';
const DailyForm = ({ onSubmit }) => {
  const [daily, setDaily] = useState({ prayingInSpirit: 0, bibleReading: '', prayers: [] });

  const addPrayer = () => {
    setDaily({...daily, prayers: [...daily.prayers, { name: '', relation: '', minutes: 0 }]});
  };

  return (
    <div className="form-card">
      <h2>🔥 Daily Disciplines</h2>
      <label>Praying in the Spirit (Minutes)</label>
      <input type="number" onChange={e => setDaily({...daily, prayingInSpirit: e.target.value})} />

      <label>Bible Reading Verse/Chapter</label>
      <input placeholder="John 15" onChange={e => setDaily({...daily, bibleReading: e.target.value})} />

      <hr />
      <h3>Intercession</h3>
      {daily.prayers.map((p, idx) => (
        <div key={idx} className="dynamic-row">
          <input placeholder="Person's Name" onChange={e => {
            const pArr = [...daily.prayers]; pArr[idx].name = e.target.value;
            setDaily({...daily, prayers: pArr});
          }} />
          <input placeholder="Minutes Prayed" type="number" onChange={e => {
            const pArr = [...daily.prayers]; pArr[idx].minutes = e.target.value;
            setDaily({...daily, prayers: pArr});
          }} />
        </div>
      ))}
      <button className="btn-secondary" onClick={addPrayer}>+ Add Person</button>
      <button onClick={() => onSubmit('daily', daily)}>Submit Daily Log</button>
    </div>
  );
};

export default DailyForm;