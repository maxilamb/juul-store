const { check } = require('express-validator');
const post = require('../models/order/post');

module.exports = (app) => {
  app.post(
    '/api/v1/order',
    [
      check('paymentMethod').not().isEmpty().withMessage('Field paymentMethod is empty'),
      check('amount').isNumeric().withMessage('Field amount is empty'),
      check('selectedColor').not().isEmpty().withMessage('Field selectedColor is empty'),
      check('fullname').not().isEmpty().withMessage('Field fullname is empty'),
      check('street').not().isEmpty().withMessage('Field street is empty'),
      check('house').not().isEmpty().withMessage('Field house is empty'),
      check('region').not().isEmpty().withMessage('Field region is empty'),
      check('city').not().isEmpty().withMessage('Field city is empty'),
      check('postalCode').not().isEmpty().withMessage('Field postalCode is empty'),
      check('phone').not().isEmpty().withMessage('Field phone is empty'),
      check('country').not().isEmpty().withMessage('Field country is empty'),
      check('email')
        .not()
        .isEmpty()
        .withMessage('Field email is empty')
        .isEmail()
        .withMessage('Field email is not email'),
    ],
    post,
  );
};
