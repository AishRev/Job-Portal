const express = require('express');
const router = express.Router();

const auth = require('../middleware/authMiddleware');
const upload = require('../middleware/upload');
const { updateProfile } = require('../controllers/userController');

router.put('/profile', auth, upload.single('resume'), updateProfile);

module.exports = router;
