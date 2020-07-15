const mongoose = require('mongoose');
const {
  mongoose: { uri },
} = require('../config');

const { model, Schema } = mongoose;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = { model, mongoose, Schema };
