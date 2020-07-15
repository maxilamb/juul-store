const { model, Schema } = require('../libs/mongoose');

const ReviewSchema = new Schema({
  fullname: String,
  data: Date,
  message: String,
  pool: {
    yes: Number,
    no: Number,
  },
});

module.exports = model('Review', ReviewSchema);
