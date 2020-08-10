const geoip = require('geoip-lite');
const path = require('path');
const { EmailList, OpenEmailList, UnsubscribeList } = require('../emails.js');

const pixel = async (req, res, next) => {
  try {
    const { emailHash } = req.query;

    const ipv4 = req.connection.remoteAddress.replace(/^.*:/, '');
    const geo = geoip.lookup(ipv4);

    const item = await EmailList.findOne({ hash: emailHash });

    await OpenEmailList.create({
      email: item ? item.email : emailHash,
      geo,
    });

    res.sendFile(path.join(__dirname, 'pixel.png'));
  } catch (e) {
    next(e);
  }
};

const unsubscribe = async (req, res, next) => {
  try {
    const { emailHash } = req.query;

    const ipv4 = req.connection.remoteAddress.replace(/^.*:/, '');
    const geo = geoip.lookup(ipv4);

    const item = await EmailList.findOne({ hash: emailHash });

    await UnsubscribeList.create({
      email: item ? item.email : emailHash,
      geo,
    });

    res.send('<h1>Вы успешно отписались от рассылки</h1>');
  } catch (e) {
    next(e);
  }
};

module.exports = {
  unsubscribe,
  pixel,
};
