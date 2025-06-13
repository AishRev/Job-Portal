// src/components/Dashboard/CalendarView.jsx
import React, { useEffect, useState } from 'react';
import { getCalendarData } from '../../api/api';

const CalendarView = () => {
  const [deadlines, setDeadlines] = useState([]);

  useEffect(() => {
    const fetchCalendar = async () => {
      const { data } = await getCalendarData();
      setDeadlines(data);
    };
    fetchCalendar();
  }, []);

  return (
    <div>
      <h2>Application Deadlines</h2>
      <ul>
        {deadlines.map((item, i) => (
          <li key={i}>{item.company} - {new Date(item.date).toLocaleDateString()}</li>
        ))}
      </ul>
    </div>
  );
};

export default CalendarView;