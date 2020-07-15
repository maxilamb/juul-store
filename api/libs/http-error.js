const http = require('http');

module.exports = class HttpError extends Error {
  constructor(status, message) {
    super();
    this.status = status;
    this.message = message || http.STATUS_CODES[status] || 'ERROR';
  }
};
