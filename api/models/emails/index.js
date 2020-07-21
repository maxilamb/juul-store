const geoip = require('geoip-lite');
const path = require('path');
const { EmailList, OpenEmailList, ActionsList, UnsubscribeList } = require('../emails.js');

module.exports.pixel = async (req, res, next) => {
  try {
    const { emailHash } = req.query;

    const ipv4 = req.connection.remoteAddress.replace(/^.*:/, '');
    const geo = geoip.lookup(ipv4);

    const { email } = await EmailList.findOne({ hash: emailHash });

    await OpenEmailList.create({
      email,
      geo,
    });

    res.sendFile(path.join(__dirname, 'pixel.png'));
  } catch (e) {
    next(e);
  }
};

module.exports.unsubscribe = async (req, res, next) => {
  try {
    const { emailHash } = req.query;

    const ipv4 = req.connection.remoteAddress.replace(/^.*:/, '');
    const geo = geoip.lookup(ipv4);

    const { email } = await EmailList.findOne({ hash: emailHash });

    await UnsubscribeList.create({
      email,
      geo,
    });

    res.send('<h1>Вы успешно отписались от рассылки</h1>');
  } catch (e) {
    next(e);
  }
};

module.exports.action = async (req, res, next) => {
  try {
    const { emailHash, actionId } = req.query;

    const ipv4 = req.connection.remoteAddress.replace(/^.*:/, '');
    const geo = geoip.lookup(ipv4);

    const { email } = await EmailList.findOne({ hash: emailHash });

    await ActionsList.create({
      actionId,
      email,
      geo,
    });

    res.redirect('https://juul-labs.ru/');
  } catch (e) {
    next(e);
  }
};
