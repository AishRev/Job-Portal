// src/components/Dashboard/JobList.jsx
import React, { useEffect, useState } from 'react';
import { fetchJobs, applyJob } from '../../api/api';

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const loadJobs = async () => {
      const { data } = await fetchJobs(search);
      setJobs(data);
    };
    loadJobs();
  }, [search]);

  const handleApply = async (id) => {
    try {
      await applyJob(id);
      alert('Application submitted!');
    } catch (err) {
      alert('Application failed');
    }
  };

  return (
    <div>
      <h2>Available Jobs</h2>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search jobs"
      />
      <ul>
        {jobs.map((job) => (
          <li key={job._id}>
            <h4>{job.title}</h4>
            <p>{job.description}</p>
            <button onClick={() => handleApply(job._id)}>Apply</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;