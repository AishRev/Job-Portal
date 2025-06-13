// // backend/controllers/profileController.js
// const User = require('../models/user');

// const createOrUpdateProfile = async (req, res) => {
//   try {
//     const userId = req.user.id;
//     const { name, skills, experience, internships } = req.body;

//     const user = await User.findByIdAndUpdate(
//       userId,
//       { name, skills, experience, internships },
//       { new: true, upsert: true }
//     );

//     res.status(200).json(user);
//   } catch (error) {
//     res.status(500).json({ error: 'Server error: ' + error.message });
//   }
// };

// module.exports = { createOrUpdateProfile };

// backend/controllers/profileController.js
const User = require('../models/user');

const createOrUpdateProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const { name, skills, experience, internships } = req.body;

    const user = await User.findByIdAndUpdate(
      userId,
      { name, skills, experience, internships },
      { new: true, upsert: true }
    );

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Server error: ' + error.message });
  }
};

module.exports = { createOrUpdateProfile };
