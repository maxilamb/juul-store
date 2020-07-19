const { check } = require('express-validator');
const post = require('../models/order/post');

module.exports = (app) => {
  app.post(
    '/api/v1/order',
    [
      check('paymentMethod', 'Обязательное поле')
        .isString()
        .withMessage('Поле paymentMethod должно быть string')
        .not()
        .isEmpty()
        .withMessage('Поле paymentMethod не должно быть пустым')
        .trim()
        .escape(),
      check('amount', 'Обязательное поле')
        .isNumeric()
        .withMessage('Поле amount должно быть числом')
        .trim()
        .escape(),
      check('selectedColor', 'Обязательное поле')
        .isString()
        .withMessage('Поле selectedColor должно быть string')
        .not()
        .isEmpty()
        .withMessage('Поле selectedColor не должно быть пустым')
        .trim()
        .escape(),
      check('fullname', 'Обязательное поле')
        .isString()
        .withMessage('Поле fullname должно быть string')
        .not()
        .isEmpty()
        .withMessage('Поле fullname не должно быть пустым')
        .trim()
        .escape(),
      check('street', 'Обязательное поле')
        .isString()
        .withMessage('Поле street должно быть string')
        .not()
        .isEmpty()
        .withMessage('Поле street не должно быть пустым')
        .trim()
        .escape(),
      check('house', 'Обязательное поле')
        .isNumeric()
        .withMessage('Поле house должно быть number')
        .not()
        .isEmpty()
        .withMessage('Поле house не должно быть пустым')
        .trim()
        .escape(),
      check('region', 'Обязательное поле')
        .isString()
        .withMessage('Поле region должно быть string')
        .not()
        .isEmpty()
        .withMessage('Поле region не должно быть пустым')
        .trim()
        .escape(),
      check('city', 'Обязательное поле')
        .isString()
        .withMessage('Поле city должно быть string')
        .not()
        .isEmpty()
        .withMessage('Поле city не должно быть пустым')
        .trim()
        .escape(),
      check('postalCode', 'Обязательное поле')
        .isNumeric()
        .withMessage('Поле postalCode должно быть number')
        .not()
        .isEmpty()
        .withMessage('Поле postalCode не должно быть пустым')
        .trim()
        .escape(),
      check('phone', 'Обязательное поле')
        .isString()
        .withMessage('Поле phone должно быть string')
        .not()
        .isEmpty()
        .withMessage('Поле phone не должно быть пустым')
        .trim()
        .escape(),
      check('country', 'Обязательное поле')
        .isString()
        .withMessage('Поле country должно быть string')
        .not()
        .isEmpty()
        .withMessage('Поле country не должно быть пустым')
        .trim()
        .escape(),
      check('email', 'Обязательное поле')
        .isString()
        .withMessage('Поле email должно быть string')
        .isEmail()
        .withMessage('Поле email должно быть email')
        .trim()
        .escape(),
    ],
    post,
  );
};
