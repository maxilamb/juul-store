const Review = require('../review');

module.exports = async (req, res, next) => {
  try {
    const reviews = await Review.find();

    res.json({
      reviews,
    });
  } catch (e) {
    next(e);
  }
};
