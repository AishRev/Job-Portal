const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: String,
  company: String,
  description: String,
  deadline: Date,
  category: String,
});

module.exports = mongoose.model('Job', jobSchema);
