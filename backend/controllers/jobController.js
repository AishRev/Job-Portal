const Job = require('../models/job');

exports.getAllJobs = async (req, res) => {
  const search = req.query.search || '';
  try {
    const jobs = await Job.find({ title: { $regex: search, $options: 'i' } });
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch jobs' });
  }
};
