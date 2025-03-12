const Review = require("../models/review.model");

module.exports = {
  createReview: async (req, res) => {
    try {
      const newReview = await Review.create(req.body);
      res.status(201).json(newReview);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  getAllReviews: async (req, res) => {
    try {
      const reviews = await Review.find();
      res.status(200).json(reviews);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};
