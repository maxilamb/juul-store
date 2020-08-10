const { unsubscribe, pixel } = require('../models/emails/');

module.exports = (app) => {
  app.get('/api/v1/email/unsubscribe', unsubscribe);

  app.get('/api/v1/email/pixel', pixel);
};
