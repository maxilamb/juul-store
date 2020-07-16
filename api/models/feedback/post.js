const { validationResult } = require('express-validator');

const Feedback = require('../feedback');

// eslint-disable-next-line consistent-return
module.exports = async (req, res, next) => {
  try {
    const { errors } = validationResult(req);

    if (errors.length) return next(errors);

    await Feedback.create({ ...req.body });

    res.sendStatus(201);
  } catch (e) {
    next(e);
  }
};
