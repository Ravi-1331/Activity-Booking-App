const express = require('express');
const { listActivities, addActivity } = require('../controllers/activityController');
const router = express.Router();

router.get('/', listActivities);
router.post('/add', addActivity); 

module.exports = router;
