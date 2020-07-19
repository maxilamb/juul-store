const { model, Schema } = require('../libs/mongoose');

const ReviewSchema = new Schema({
  fullname: String,
  mark: {
    type: Number,
    min: [1, 'Минимальная оценка 1 звезда'],
    max: [5, 'Максимальная оценка 5 звёзд'],
  },
  date: String,
  comment: String,
  pool: {
    yes: Number,
    no: Number,
  },
});

module.exports = model('Review', ReviewSchema);
