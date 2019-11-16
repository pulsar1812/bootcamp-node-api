const express = require('express');

const {
  register,
  login,
  getCurrentUser,
  forgotPassword
} = require('../controllers/auth');

const router = express.Router();

const { protect } = require('../middlewares/auth');

router.post('/register', register);

router.post('/login', login);

router.get('/me', protect, getCurrentUser);

router.post('/forgotpassword', forgotPassword);

module.exports = router;
