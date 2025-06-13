const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');

router.get('/', protect, (req, res) => {
  res.json(req.user); // just returns current user profile
});

module.exports = router;
