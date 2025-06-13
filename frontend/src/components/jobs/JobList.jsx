// src/components/jobs/JobList.jsx
import React, { useEffect, useState } from 'react';
import axios from '../../api/api';
import JobDescription from './JobDescription';

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get(`/jobs?search=${search}`);
        setJobs(res.data);
      } catch (err) {
        console.error('Error fetching jobs:', err);
      }
    };
    fetchJobs();
  }, [search]);

  const handleApply = async (jobId) => {
    try {
      await axios.post('/jobs/apply', { jobId });
      alert('Applied successfully!');
    } catch (err) {
      console.error('Apply failed:', err);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search jobs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: '1rem', padding: '0.5rem', width: '60%' }}
      />

      {selectedJob ? (
        <JobDescription job={selectedJob} onClose={() => setSelectedJob(null)} />
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {jobs.map((job) => (
            <li key={job._id} style={{ border: '1px solid #ccc', margin: '1rem 0', padding: '1rem' }}>
              <h3>{job.title}</h3>
              <p>{job.company}</p>
              <p>{job.location}</p>
              <button onClick={() => setSelectedJob(job)} style={{ marginRight: '1rem' }}>
                View Details
              </button>
              <button onClick={() => handleApply(job._id)}>Apply</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default JobList;
