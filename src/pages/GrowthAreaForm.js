import React, { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './Styles.css';

const GrowthAreaForm = () => {
  // 1. Manage form field state
  const [formData, setFormData] = useState({
    title: '',
    category: 'Technical',
    description: '',
  });

  // 2. Manage submission states (loading, success, error)
  const [status, setStatus] = useState({
    loading: false,
    success: null,
    error: null,
  });

  // Update state dynamically when user types
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Submit the data to your backend API endpoint
  // Inside GrowthAreaForm.jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus({ loading: true, success: null, error: null });

  try {
    // Replace this string with your live Cloudflare Worker URL
    const workerUrl = 'https://snowy-surf-6a35.jordynfulbright.workers.dev';

  // Inside your GrowthAreaForm.jsx
const response = await fetch(workerUrl, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    formType: 'growth', // <-- Tell the worker this is for the growth DB
    title: formData.title,
    category: formData.category,
    description: formData.description
  }),
});

    if (!response.ok) {
      const errData = await response.json();
      throw new Error(errData.error || 'Failed to save growth area.');
    }

    setStatus({
      loading: false,
      success: 'Awesome! Your growth area has been logged to Notion via Cloudflare.',
      error: null,
    });
    setFormData({ title: '', category: 'Technical', description: '' });
  } catch (err) {
    setStatus({
      loading: false,
      success: null,
      error: err.message || 'Something went wrong.',
    });
  }
};

  return (
    <div className="form-container">
      {/* Dynamic typewriter heading */}
      <h2 className="form-heading">
        Let's focus on{' '}
      </h2>

      <form onSubmit={handleSubmit} className="growth-form">
        <div className="form-group">
          <label htmlFor="title">Growth Area / Goal</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="e.g., Master React Server Components"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="Technical">Technical Skills</option>
            <option value="Leadership">Leadership & Management</option>
            <option value="Communication">Communication</option>
            <option value="Productivity">Productivity & Habits</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="description">Action Plan / Notes</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="What concrete steps will you take to improve here?"
            rows="4"
            required
          />
        </div>

        <button type="submit" className="submit-btn" disabled={status.loading}>
          {status.loading ? 'Logging to Notion...' : 'Log Growth Area'}
        </button>

        {/* Status Feedbacks */}
        {status.success && <p className="msg success-msg">{status.success}</p>}
        {status.error && <p className="msg error-msg">{status.error}</p>}
      </form>
    </div>
  );
};

export default GrowthAreaForm;