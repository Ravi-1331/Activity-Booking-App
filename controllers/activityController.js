const Activity = require('../models/Activity');

exports.listActivities = async (req, res) => {
  try {
    const activities = await Activity.find();
    res.json(activities);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.addActivity = async (req, res) => {
  try {
    const { title, description, location, date, time } = req.body;

    if (!title || !description || !location || !date || !time) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const activity = new Activity({ title, description, location, date, time });
    await activity.save();

    res.status(201).json({ message: 'Activity added successfully', activity });
  } catch (error) {
    res.status(500).json({ message: 'Failed to add activity' });
  }
};
