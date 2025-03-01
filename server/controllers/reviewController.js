const Review = require('../models/review.model');

module.exports = {
    getProductReviews: async (req, res) => {
        try {
            const reviews = await Review.find({ product: req.params.productId })
                .populate('product', 'name');
            res.json(reviews);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },

    createReview: async (req, res) => {
        try {
            const newReview = await Review.create({
                ...req.body,
                product: req.params.productId
            });
            res.status(201).json(newReview);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },

    updateReview: async (req, res) => {
        try {
            const updatedReview = await Review.findByIdAndUpdate(
                req.params.reviewId,
                req.body,
                { new: true, runValidators: true }
            );
            if (!updatedReview) {
                return res.status(404).json({ error: "Review not found" });
            }
            res.json(updatedReview);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },

    deleteReview: async (req, res) => {
        try {
            const deletedReview = await Review.findByIdAndDelete(req.params.reviewId);
            if (!deletedReview) {
                return res.status(404).json({ error: "Review not found" });
            }
            res.json({ message: "Review deleted successfully" });
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }
};