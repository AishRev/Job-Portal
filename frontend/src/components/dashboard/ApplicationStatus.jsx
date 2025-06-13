// src/components/Dashboard/ApplicationStatus.jsx
import React, { useEffect, useState } from 'react';
import { getStatusCounts } from '../../api/api';

const ApplicationStatus = () => {
  const [status, setStatus] = useState({ applied: 0, interview: 0, rejected: 0 });

  useEffect(() => {
    const fetchStatus = async () => {
      const { data } = await getStatusCounts();
      setStatus(data);
    };
    fetchStatus();
  }, []);

  return (
    <div>
      <h2>Application Status</h2>
      <ul>
        <li>Applied: {status.applied}</li>
        <li>Interview: {status.interview}</li>
        <li>Rejected: {status.rejected}</li>
      </ul>
    </div>
  );
};

export default ApplicationStatus;