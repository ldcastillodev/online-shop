const { check, body } = require('express-validator/check');

const express = require('express');

const router = express.Router();

const authController = require('../controllers/auth');
const User = require('../models/user');

router.get('/login', authController.getLogin);

router.get('/signup', authController.getSignup);

router.get('/reset', authController.getReset);

router.get('/reset/:token', authController.getNewPassword);

router.post(
  '/signup', 
  [ // validators
  check('email') // a validator that checks if an email address is valid
    .isEmail()
    .withMessage('Please enter a Valid email')
    .custom((value, {req}) => { // a custom validator 
      //if (value === 'test@test.com') {
      //  throw new Error('this email address is forbidden');
      //}
      //return true;
      return User.findOne({ email: value }) // checks if the email for that user alredy exits in the db
      .then(userDoc => {                    // async validation
        if (userDoc) { 
          return Promise.reject('Email exists alredy, please enter a diferent one');
        }
      });
    })
    .normalizeEmail(),
  body('password', 'Please enter a password with only numbers and text and at least 5 characters') // checks in the body if a password is valid
    .isLength({ min: 5 })
    .isAlphanumeric()
    .trim(),
  body('confirmPassword') // checks if the password and confirm password fields are equal
    .custom((value, { req }) => {
      if(value !== req.body.password) {
        throw new Error('passwords have to match')
      }
      return true;
  })
    .trim()
  ],
  authController.postSignup
);

router.post('/login',
 [
   body('email')
    .isEmail()
    .withMessage('please enter a valid email ')
    .normalizeEmail(),
  body('password', 'Password has to be valid')
    .isLength({ min: 5 })
    .isAlphanumeric()
    .trim()
 ],
  authController.postLogin);

router.post('/logout', authController.postLogout);

router.post('/reset', authController.postReset);

router.post('/new-password', authController.postNewPassword);

module.exports = router;