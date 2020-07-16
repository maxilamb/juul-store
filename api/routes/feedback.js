const { check } = require('express-validator');

const post = require('../models/feedback/post');

module.exports = (app) => {
  app.post(
    '/api/v1/feedpack',
    [
      check('isContactForm', 'Обязательное поле')
        .isBoolean()
        .withMessage('Поле isContactForm должно boolean')
        .trim()
        .escape(),
      check('fullname', 'Обязательное поле')
        .isString()
        .withMessage('Поле fullname должно быть string')
        .isLength({ min: 4 })
        .withMessage('Поле fullname должно быть длинее 4 символов')
        .trim()
        .escape(),
      check('track-code').trim().escape(),
      check('email').isString().isEmail(),
      check('message', 'Обязательное поле')
        .isString()
        .withMessage('Поле message должно быть string')
        .isLength({ min: 10 })
        .withMessage('Поле message должно быть длинее 10 символов')
        .trim()
        .escape(),
    ],
    post,
  );
};
