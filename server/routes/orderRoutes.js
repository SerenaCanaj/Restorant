const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/orderController');

router.get('/', OrderController.getAllOrders);
router.get('/:id', OrderController.getOrderById);
router.post('/', OrderController.createOrder);
router.patch('/:id/status', OrderController.updateOrderStatus);
router.patch('/:id/cancel', OrderController.cancelOrder);

module.exports = router;