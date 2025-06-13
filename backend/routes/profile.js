// // backend/routes/profile.js
// const express = require('express');
// const multer = require('multer');
// const path = require('path');
// const router = express.Router();

// // File upload config
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/resumes');
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   }
// });

// const upload = multer({ storage });

// router.post('/create', upload.single('resume'), (req, res) => {
//   const { email, tenthPercent, twelfthPercent, experience } = req.body;
//   const resumePath = req.file ? req.file.path : null;

//   console.log("Received profile:", req.body);
//   console.log("Resume path:", resumePath);

//   // In a real app: Save to database here

//   res.status(200).json({
//     message: 'Profile saved!',
//     profile: {
//       email,
//       tenthPercent,
//       twelfthPercent,
//       experience,
//       resumePath
//     }
//   });
// });

// module.exports = router;
