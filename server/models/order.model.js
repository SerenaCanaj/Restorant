const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    customer: {
        name: {
            type: String,
            required: [true, "Customer name is required"],
            minlength: [2, "Name must be at least 2 characters"]
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Please provide a valid email"]
        },
        phone: {
            type: String,
            required: [true, "Phone number is required"]
        }
    },
    items: [{
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
        quantity: {
            type: Number,
            required: true,
            min: [1, "Quantity must be at least 1"]
        },
        price: {
            type: Number,
            required: true
        }
    }],
    totalAmount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['Pending', 'Preparing', 'Ready', 'Delivered', 'Cancelled'],
        default: 'Pending'
    },
    deliveryAddress: {
        street: String,
        city: String,
        state: String,
        zipCode: String
    }
}, { timestamps: true });

module.exports = mongoose.model('Order', OrderSchema);