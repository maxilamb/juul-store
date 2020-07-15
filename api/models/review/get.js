const Review = require('../review');

module.exports = async (req, res, next) => {
  try {
    const data = await Review.find();

    res.json({
      data,
    });
  } catch (e) {
    next(e);
  }
};
