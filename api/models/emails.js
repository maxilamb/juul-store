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

const ActionsList = model(
  'ActionsList',
  new Schema({
    actionId: Number,
    email: String,
    geo: String,
  }),
);

const UnsubscribeList = model(
  'UnsubscribeList',
  new Schema({
    email: String,
    geo: String,
  }),
);

module.exports = {
  EmailList,
  OpenEmailList,
  ActionsList,
  UnsubscribeList,
};
