const Course = require('../models/Course');
const asyncHandler = require('../middlewares/async');
const ErrorResponse = require('../utils/errorResponse');

// @desc    Get all courses
// @route   GET /api/v1/courses
// @access  Public
