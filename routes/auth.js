const express = require('express');

const { register, login, getCurrentUser } = require('../controllers/auth');

const router = express.Router();

const { protect } = require('../middlewares/auth');

router.post('/register', register);

router.post('/login', login);

router.get('/me', protect, getCurrentUser);

module.exports = router;
