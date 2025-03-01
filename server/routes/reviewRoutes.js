const express = require('express');
const router = express.Router();
const ReviewController = require('../controllers/reviewController');

router.get('/product/:productId', ReviewController.getProductReviews);
router.post('/product/:productId', ReviewController.createReview);
router.put('/:reviewId', ReviewController.updateReview);
router.delete('/:reviewId', ReviewController.deleteReview);

module.exports = router;