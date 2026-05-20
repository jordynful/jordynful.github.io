import React, { useState } from 'react';
import { useEffect } from 'react';


const GrowthForm = ({ onSubmit, members, status }) => {


  const [selectedMember, setSelectedMember] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [growthAreas, setGrowthAreas] = useState([
    { title: '', description: '', metrics: [''] }
  ]);

  // Adds a new Growth Area block
  const addGrowthArea = () => {
    setGrowthAreas([...growthAreas, { title: '', description: '', metrics: [''] }]);
  };

  // Adds a new metric input to a specific Growth Area
  const addMetric = (areaIndex) => {
    const updatedAreas = [...growthAreas];
    updatedAreas[areaIndex].metrics.push('');
    setGrowthAreas(updatedAreas);
  };

  const handleAreaChange = (index, field, value) => {
    const updatedAreas = [...growthAreas];
    updatedAreas[index][field] = value;
    setGrowthAreas(updatedAreas);
  };

  const handleMetricChange = (areaIndex, metricIndex, value) => {
    const updatedAreas = [...growthAreas];
    updatedAreas[areaIndex].metrics[metricIndex] = value;
    setGrowthAreas(updatedAreas);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedMember) return alert("Please select your name!");
    onSubmit('growth', { memberId: selectedMember, date, growthAreas });
  };

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <h2>🌱 Set Your Growth Goals</h2>
      
      <label>Who is this for?</label>
      <select 
        required 
        value={selectedMember} 
        onChange={(e) => setSelectedMember(e.target.value)}
      >
        <option value="">Select Member...</option>
        {members.map(m => <option key={m.id} value={m.id}>{m.name}</option>)}
      </select>

<div style={{ width: '150px', marginBottom: '20px' }}>
          <label>Date</label>
          <input 
            type="date" 
            required
            value={date} 
            onChange={(e) => setDate(e.target.value)} 
          />
        </div>

      {growthAreas.map((area, aIdx) => (
        <div key={aIdx} className="nested-section">
          <div className="section-header">
            <h3>Growth Area #{aIdx + 1}</h3>
          </div>
          
          <label>Area Title</label>
          <input 
            placeholder="e.g., Fear of Man, Love of Others" 
            value={area.title}
            onChange={(e) => handleAreaChange(aIdx, 'title', e.target.value)}
            required
          />

          <label>Description (Optional)</label>
          <textarea 
            placeholder="What does growth look like here?"
            value={area.description}
            onChange={(e) => handleAreaChange(aIdx, 'description', e.target.value)}
          />

          <div className="metrics-container">
           <div><label>Specific Metrics to Track</label> <p className='metricsLabel'>Metrics assessed each week with a score from 1-10</p></div>
            {area.metrics.map((metric, mIdx) => (
              <>
              <input
                    key={mIdx}
                    placeholder={`Metric ${mIdx + 1} (e.g., Honesty/Transparency with others, Public Obedience to the Lord)`}
                    value={metric}
                    onChange={(e) => handleMetricChange(aIdx, mIdx, e.target.value)}
                    required />
        
            </>
            ))}
            <button 
              type="button" 
              className="btn-add-small" 
              onClick={() => addMetric(aIdx)}
            >
              + Add Another Metric
            </button>
          </div>
        </div>
      ))}

      <div className="form-actions">
        <button type="button" className="btn-secondary" onClick={addGrowthArea}>
          + Add Another Growth Area
        </button>
        <button type="submit" disabled={status.loading}>
          {status.loading ? 'Saving to Notion...' : 'Submit All Goals'}
        </button>
      </div>
    </form>
  );
};

export default GrowthForm;