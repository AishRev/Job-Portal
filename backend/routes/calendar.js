// backend/routes/calendar.js
const express = require('express');
const router = express.Router();

// Dummy deadlines — replace with DB logic
router.get('/', (req, res) => {
  res.json([
    { date: '2025-06-15', event: 'Interview with ABC Corp' },
    { date: '2025-06-22', event: 'Deadline for XYZ Job' }
  ]);
});

module.exports = router;
