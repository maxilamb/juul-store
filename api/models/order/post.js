const { validationResult } = require('express-validator');

const Order = require('../order');

// eslint-disable-next-line consistent-return
module.exports = async (req, res, next) => {
  try {
    const { errors } = validationResult(req);
    if (errors.length) return next(errors);

    await Order.create({ ...req.body });

    res.sendStatus(201);
  } catch (e) {
    next(e);
  }
};
