const express = require('express');
const router = express.Router();
const { submitMessage } = require('../controllers/contactController');

// Route for handling contact form submissions
router.post('/', submitMessage);

module.exports = router;