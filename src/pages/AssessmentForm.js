import React, { useState, useEffect } from 'react';

const AssessmentForm = ({ workerUrl, members }) => {

  const [metrics, setMetrics] = useState([]);
  const [selectedMember, setSelectedMember] = useState('');
  const [ratings, setRatings] = useState({}); // Stores { metricId: score }
  const [loading, setLoading] = useState(false);
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
const [memberId, setMemberId] = useState();
  // Fetch members and metrics on load

const handleMemberChange = async (e) => {
  const selectedId = e;
  setMemberId(selectedId);
  setSelectedMember(selectedId);

  if (selectedId) {
    // Only fetch metrics for this person 
    const response = await fetch(`${workerUrl}/metrics?memberId=${selectedId}`);
    const data = await response.json();
    setMetrics(data.metrics);
  }
};
  const handleRatingChange = (metricId, value) => {
    setRatings({ ...ratings, [metricId]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      formType: 'assessment',
      memberId: selectedMember,
      assessments: Object.entries(ratings).map(([id, score]) => ({
        metricId: id,
        score: parseInt(score)
      }))
    };

    const response = await fetch(`${workerUrl}/submit-assessment`, {
      method: 'POST',
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      alert("Assessment submitted!");
      setRatings({});
    }
    setLoading(false);
  };

  return (
    <form className="notion-form" onSubmit={handleSubmit}>
      <h2>Weekly Assessment</h2>
      
      <label>Who is checking in?</label>
      <select 
        value={selectedMember} 
        onChange={(e) => handleMemberChange(e.target.value)}
        required
      >
        <option value="">Select Member</option>
        {members.map(m => <option key={m.id} value={m.id}>{m.name}</option>)}
      </select>
<div style={{ width: '150px', marginBottom: '20px' }}>
          <label>Week of</label>
          <input 
            type="date" 
            required
            value={date} 
            onChange={(e) => setDate(e.target.value)} 
          />
        </div>
      <div className="metrics-list">
        {metrics.map(metric => (
          <div key={metric.id} className="metric-row">
            <span>{metric.name}</span>
            <input 
              type="number" 
              min="1" 
              max="10" 
              placeholder="1-10"
              onChange={(e) => handleRatingChange(metric.id, e.target.value)}
              required
            />
          </div>
        ))}
      </div>

      <button type="submit" disabled={loading}>
        {loading ? "Submitting..." : "Submit Assessment"}
      </button>
    </form>
  );
};

export default AssessmentForm;