const Booking = require('../models/Booking');
const Activity = require('../models/Activity');

exports.bookActivity = async (req, res) => {
  const { activityId } = req.body;
  const activity = await Activity.findById(activityId);
  if (!activity) return res.status(404).json({ error: 'Activity not found' });

  const booking = await Booking.create({
    user: req.user.id,
    activity: activityId,
  });
  res.status(201).json({
    message: "Booking Completed",
    booking,
});
};

exports.getMyBookings = async (req, res) => {
  const bookings = await Booking.find({ user: req.user.id }).populate('activity');
  res.json({
    message: "Here is your booking",
    bookings,
});
};
