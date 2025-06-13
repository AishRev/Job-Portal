const User = require('../models/user');

exports.updateProfile = async (req, res) => {
  try {
    const { jobPreference } = req.body;
    const resumePath = req.file ? req.file.path : undefined;

    const updateData = {};
    if (jobPreference) updateData.jobPreference = jobPreference;
    if (resumePath) updateData.resume = resumePath;

    const user = await User.findByIdAndUpdate(req.user.id, updateData, { new: true });
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: 'Profile update failed' });
  }
};
