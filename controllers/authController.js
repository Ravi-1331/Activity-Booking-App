const jwt = require('jsonwebtoken');
const User = require('../models/User');

const generateToken = (user) => {
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
};

exports.register = async (req, res) => {
  try {
    const user = await User.create(req.body);
    const token = generateToken(user);
    res.status(201).json({
        message: 'User registered successfully',
        token,
      });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = generateToken(user);
    res.status(200).json({
        message: 'Login successful',
        token,
      });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
