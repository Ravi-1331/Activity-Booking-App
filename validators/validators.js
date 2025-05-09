const { body } = require('express-validator');

exports.registerValidator = [
  body('name').notEmpty(),
  body('email').isEmail(),
  body('phone').notEmpty(),
  body('password').isLength({ min: 6 }),
];

exports.loginValidator = [
  body('email').isEmail(),
  body('password').notEmpty(),
];
