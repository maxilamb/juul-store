const { SMTPServer } = require('smtp-server');

const server = new SMTPServer({
  // not required but nice-to-have
  banner: 'Welcome to My Awesome LMTP Server',
  // disable STARTTLS to allow authentication in clear text mode
  disabledCommands: ['STARTTLS', 'AUTH'],
  // Accept messages up to 10 MB
  size: 10 * 1024 * 1024,
  // Setup authentication
  // Allow only users with username 'adminsmtp' and password 'smtpadmin'
  onAuth(auth, session, callback) {
    const username = 'adminsmtp';
    const password = 'smtpadmin';

    // check username and password
    if (
      auth.username === username &&
      (auth.method === 'CRAM-MD5'
        ? auth.validatePassword(password) // if cram-md5, validate challenge response
        : auth.password === password) // for other methods match plaintext passwords
    ) {
      return callback(null, {
        user: 'userdata',
      });
    }

    return callback(new Error('Authentication failed'));
  },
});

module.exports = server;
