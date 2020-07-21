const { model, Schema } = require('../libs/mongoose');

const EmailList = model(
  'EmailList',
  new Schema({
    email: String,
    hash: String,
  }),
);

const OpenEmailList = model(
  'OpenEmailList',
  new Schema({
    email: String,
    geo: String,
  }),
);

const VisitSiteList = model(
  'VisitSiteList',
  new Schema({
    email: String,
    geo: String,
  }),
);

module.exports = {
  EmailList,
  OpenEmailList,
  VisitSiteList,
};
