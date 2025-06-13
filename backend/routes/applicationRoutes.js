const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const {
  createApplication,
  getStatusCounts,
  getCalendarData
} = require('../controllers/applicationController');

router.post('/', auth, createApplication);
router.get('/status', auth, getStatusCounts);
router.get('/calendar', auth, getCalendarData);

module.exports = router;
