const { get } = require('../models/dashboard');

module.exports = (app) => {
  app.get('/api/v1/dashboard', get);
};
