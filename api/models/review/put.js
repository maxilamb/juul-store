const { validationResult } = require('express-validator');
const Review = require('../review');

// eslint-disable-next-line consistent-return
module.exports = async (req, res, next) => {
  try {
    const { errors } = validationResult(req);

    if (errors.length) return next(errors);

    const { id, vote } = req.body;

    const { pool } = await Review.findById(id);

    await Review.updateOne(
      { _id: id },
      { pool: Object.assign(pool, vote === 'yes' ? { yes: pool.yes + 1 } : { no: pool.no + 1 }) },
    );

    res.sendStatus(200);
  } catch (e) {
    next(e);
  }
};
