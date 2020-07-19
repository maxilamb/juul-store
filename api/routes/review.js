const { check } = require('express-validator');
const get = require('../models/review/get');
const put = require('../models/review/put');

module.exports = (app) => {
  app.get('/api/v1/review', get);

  app.put(
    '/api/v1/review',
    [
      check('id', 'Обязательное поле').isMongoId().withMessage('Не правильный id'),
      check('vote', 'Обязательное поле')
        .isString()
        .withMessage('Поле vote должно быть строкой')
        .not()
        .isEmpty()
        .withMessage('Поле vote не должно быть пустым'),
    ],
    put,
  );
};
