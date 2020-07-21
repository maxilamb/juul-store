const { unsubscribe, pixel, action } = require('../models/emails');

module.exports = (app) => {
  app.get('/api/v1/email/unsubscribe/:email', unsubscribe);

  app.get('/api/v1/email/pixel/:email', pixel);

  app.get('/api/v1/email/action', action); // ?id=X&email=Y
};
