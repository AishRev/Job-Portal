const Application = require('../models/application');

exports.createApplication = async (req, res) => {
  try {
    const { jobId } = req.body;
    const newApp = await Application.create({ userId: req.user.id, jobId });
    res.status(201).json(newApp);
  } catch (err) {
    res.status(400).json({ error: 'Failed to apply' });
  }
};

exports.getStatusCounts = async (req, res) => {
  try {
    const counts = await Application.aggregate([
      { $match: { userId: req.user.id } },
      { $group: { _id: "$status", count: { $sum: 1 } } }
    ]);
    res.json(counts);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching status counts' });
  }
};

exports.getCalendarData = async (req, res) => {
  try {
    const apps = await Application.find({ userId: req.user.id }).populate('jobId');
    const calendar = apps.map(app => ({
      jobTitle: app.jobId.title,
      company: app.jobId.company,
      deadline: app.jobId.deadline
    }));
    res.json(calendar);
  } catch (err) {
    res.status(500).json({ error: 'Calendar fetch failed' });
  }
};
