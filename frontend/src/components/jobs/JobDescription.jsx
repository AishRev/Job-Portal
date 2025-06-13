// src/components/jobs/JobDescription.jsx
import React from 'react';

const JobDescription = ({ job, onClose }) => {
  if (!job) return null;

  return (
    <div style={{ padding: '1rem', border: '1px solid #aaa', background: '#f9f9f9' }}>
      <h2>{job.title}</h2>
      <h4>{job.company} - {job.location}</h4>
      <p><strong>Salary:</strong> {job.salary}</p>
      <p><strong>Description:</strong></p>
      <p>{job.description}</p>
      <p><strong>Requirements:</strong></p>
      <ul>
        {job.requirements?.map((req, index) => (
          <li key={index}>{req}</li>
        ))}
      </ul>
      <button onClick={onClose}>Back to Job List</button>
    </div>
  );
};

export default JobDescription;
