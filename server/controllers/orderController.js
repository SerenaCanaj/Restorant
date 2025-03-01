const Order = require('../models/order.model');

module.exports = {
    getAllOrders: async (req, res) => {
        try {
            const orders = await Order.find()
                .populate('items.product', 'name price');
            res.json(orders);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },

    getOrderById: async (req, res) => {
        try {
            const order = await Order.findById(req.params.id)
                .populate('items.product', 'name price');
            if (!order) {
                return res.status(404).json({ error: "Order not found" });
            }
            res.json(order);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },

    createOrder: async (req, res) => {
        try {
            const newOrder = await Order.create(req.body);
            res.status(201).json(newOrder);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },

    updateOrderStatus: async (req, res) => {
        try {
            const updatedOrder = await Order.findByIdAndUpdate(
                req.params.id,
                { status: req.body.status },
                { new: true, runValidators: true }
            );
            if (!updatedOrder) {
                return res.status(404).json({ error: "Order not found" });
            }
            res.json(updatedOrder);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },

    cancelOrder: async (req, res) => {
        try {
            const order = await Order.findById(req.params.id);
            if (!order) {
                return res.status(404).json({ error: "Order not found" });
            }
            if (order.status === 'Delivered') {
                return res.status(400).json({ error: "Cannot cancel delivered order" });
            }
            order.status = 'Cancelled';
            await order.save();
            res.json({ message: "Order cancelled successfully" });
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }
};