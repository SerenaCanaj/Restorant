const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: [true, "Product reference is required"]
    },
    rating: {
        type: Number,
        required: [true, "Rating is required"],
        min: [1, "Rating must be between 1 and 5"],
        max: [5, "Rating must be between 1 and 5"]
    },
    comment: {
        type: String,
        required: [true, "Comment is required"],
        minlength: [5, "Comment must be at least 5 characters"]
    },
    userName: {
        type: String,
        required: [true, "User name is required"],
        minlength: [2, "User name must be at least 2 characters"]
    }
}, { timestamps: true });

module.exports = mongoose.model('Review', ReviewSchema);