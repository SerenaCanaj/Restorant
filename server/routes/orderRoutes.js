const express = require('express');
const app = express.app();
const OrderController = require('../controllers/orderController');

app.get('/', OrderController.getAllOrders);
app.get('/:id', OrderController.getOrderById);
app.post('/', OrderController.createOrder);
app.patch('/:id/status', OrderController.updateOrderStatus);
app.patch('/:id/cancel', OrderController.cancelOrder);

module.exports = app;