const { SMTPServer } = require('smtp-server');

const server = new SMTPServer({
  // not required but nice-to-have
  banner: 'Welcome to My Awesome LMTP Server',
  // disable STARTTLS to allow authentication in clear text mode
  disabledCommands: ['STARTTLS', 'AUTH'],
  // Accept messages up to 10 MB
  size: 10 * 1024 * 1024,
});

module.exports = server;
