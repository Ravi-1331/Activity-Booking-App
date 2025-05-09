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
    const body = req.body;

    if (Array.isArray(body)) {
      const isValid = body.every(item =>
        item.title && item.description && item.location && item.date && item.time
      );

      if (!isValid) {
        return res.status(400).json({ message: 'All fields are required for each activity' });
      }

      const activities = await Activity.insertMany(body);
      return res.status(201).json({ message: 'Activities added successfully', activities });
    }

    const { title, description, location, date, time } = body;

    if (!title || !description || !location || !date || !time) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const activity = new Activity({ title, description, location, date, time });
    await activity.save();

    res.status(201).json({ message: 'Activity added successfully', activity });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to add activity' });
  }
};
