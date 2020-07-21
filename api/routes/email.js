const { unsubscribe, pixel, action } = require('../models/emails/');

module.exports = (app) => {
  app.get('/api/v1/email/unsubscribe', unsubscribe);

  app.get('/api/v1/email/pixel', pixel);

  app.get('/api/v1/email/action', action);
};
