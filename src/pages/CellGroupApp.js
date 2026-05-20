import React, { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './cellgroupAppStyles.css';
const CellGroupApp = () => {
  const [activeForm, setActiveForm] = useState('growth');
  const [status, setStatus] = useState({ loading: false, msg: '' });

  // Form 1 State: Growth Areas [cite: 47]
  const [growthData, setGrowthData] = useState({
    memberId: '',
    growthAreas: [{ title: '', description: '', metrics: [{ name: '' }] }]
  });

  // Form 3 State: Daily Checklist [cite: 54, 60, 61]
  const [dailyData, setDailyData] = useState({
    memberId: '',
    prayingInSpirit: 0,
    worshipMinutes: 0,
    prayers: [{ personId: '', name: '', relationship: '', minutes: 0, isNew: false }]
  });

  const workerUrl = 'https://snowy-surf-6a35.jordynfulbright.workers.dev';

  // Dynamic Adders
  const addMetric = (areaIndex) => {
    const newAreas = [...growthData.growthAreas];
    newAreas[areaIndex].metrics.push({ name: '' });
    setGrowthData({ ...growthData, growthAreas: newAreas });
  };

  const addPrayer = () => {
    setDailyData({
      ...dailyData,
      prayers: [...dailyData.prayers, { personId: '', name: '', relationship: '', minutes: 0, isNew: false }]
    });
  };

  const handleSubmit = async (type, payload) => {
    setStatus({ loading: true, msg: 'Submitting...' });
    try {
      const res = await fetch(workerUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formType: type, ...payload }),
      });
      if (res.ok) setStatus({ loading: false, msg: 'Success! Recorded in Notion.' });
    } catch (err) {
      setStatus({ loading: false, msg: 'Error submitting.' });
    }
  };

  return (
    <div className="container">
      <h1><Typewriter words={['My Growth', 'Daily Prayer', 'Weekly Assessment']} loop={0} /></h1>
      
      <nav>
        <button onClick={() => setActiveForm('growth')}>Growth Areas</button>
        <button onClick={() => setActiveForm('daily')}>Daily Checklist</button>
      </nav>

      {activeForm === 'growth' && (
        <div className="form-box">
          {growthData.growthAreas.map((area, idx) => (
            <div key={idx} className="nested-group">
              <input 
                placeholder="Growth Area Title" 
                onChange={(e) => {
                  const updated = [...growthData.growthAreas];
                  updated[idx].title = e.target.value;
                  setGrowthData({...growthData, growthAreas: updated});
                }} 
              />
              {area.metrics.map((m, midx) => (
                <input 
                  key={midx} 
                  placeholder="Metric Name" 
                  onChange={(e) => {
                    const updated = [...growthData.growthAreas];
                    updated[idx].metrics[midx].name = e.target.value;
                    setGrowthData({...growthData, growthAreas: updated});
                  }}
                />
              ))}
              <button onClick={() => addMetric(idx)}>+ Add Metric</button>
            </div>
          ))}
          <button onClick={() => handleSubmit('growth', growthData)}>Submit All Growth Areas</button>
        </div>
      )}

      {activeForm === 'daily' && (
        <div className="form-box">
          <h3>Daily Prayer & Meditation</h3>
          <input type="number" placeholder="Praying in Spirit (mins)" onChange={e => setDailyData({...dailyData, prayingInSpirit: e.target.value})} />
          
          <h4>Praying for Loved Ones [cite: 55, 60]</h4>
          {dailyData.prayers.map((p, idx) => (
            <div key={idx}>
              <input placeholder="Name" onChange={e => {
                const updated = [...dailyData.prayers];
                updated[idx].name = e.target.value;
                updated[idx].isNew = true; // Simplified: treat as new person
                setDailyData({...dailyData, prayers: updated});
              }} />
              <input placeholder="Mins" type="number" onChange={e => {
                const updated = [...dailyData.prayers];
                updated[idx].minutes = e.target.value;
                setDailyData({...dailyData, prayers: updated});
              }} />
            </div>
          ))}
          <button onClick={addPrayer}>+ Add Person</button>
          <button onClick={() => handleSubmit('daily', dailyData)}>Submit Daily Entry</button>
        </div>
      )}

      {status.msg && <p className="status">{status.msg}</p>}
    </div>
  );
};

export default CellGroupApp;