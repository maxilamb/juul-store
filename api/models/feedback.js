const { model, Schema } = require('../libs/mongoose');

const FeedbackSchema = new Schema({
  isContactForm: Boolean,
  fullname: String,
  'track-code': String,
  email: {
    type: String,
    lowercase: true,
    trim: true,
    minLength: [4, 'У вас подозрительно короткий email'],
  },
  message: {
    type: String,
    minLength: [10, 'Минимальная длина сообщения - 10 символов'],
  },
});

module.exports = model('Feedback', FeedbackSchema);
