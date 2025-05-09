// const express = require('express');
// const dotenv = require('dotenv');
// const cors = require('cors'); 
// const connectDB = require('./config/db');

// dotenv.config();
// connectDB();

// const app = express();

// app.use(cors("*"));
// app.use(express.json());

// app.use('/api/auth', require('./routes/authRoutes'));
// app.use('/api/activities', require('./routes/activityRoutes'));
// app.use('/api/bookings', require('./routes/bookingRoutes'));

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors()); 
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/activities', require('./routes/activityRoutes'));
app.use('/api/bookings', require('./routes/bookingRoutes'));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
