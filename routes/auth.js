const express = require('express');
const {authController} = require('../controllers/');
const {signupValidator} = require('../validators/auth');
const validate = require('../validators/validate');
const router = express.Router();

router.post('/signup',signupValidator,validate,authController.signup);

module.exports = router;