const crypto = require('crypto');
const fs = require('fs');
const { EmailList } = require('./emails.js');
const { readLines } = require('./utils');

// EmailList.deleteMany({})
const input = fs.createReadStream('./5951.txt');
readLines(input, (email) => {
  const emailHash = crypto.createHash('md5').update(email).digest('hex');
  EmailList.create({
    email,
    hash: emailHash,
  });
});
