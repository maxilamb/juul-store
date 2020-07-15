const { Schema, model } = require('../libs/mongoose');

const OrderSchema = new Schema({
  paymentMethod: String,
  amount: {
    type: Number,
    min: [1, 'Минимальное количестов заказа 1 шт.'],
  },
  selectedColor: String,
  fullname: String,
  street: String,
  house: String,
  region: String,
  city: String,
  postalCode: String,
  phone: String,
  country: String,
  email: {
    type: String,
    lowercase: true,
    trim: true,
    minlength: [4, 'У вас подозрительно короткий email'],
  },
});

module.exports = model('Order', OrderSchema);
