const get = require('../models/review/get');

module.exports = (app) => {
  app.get('/api/v1/review', get);
};
