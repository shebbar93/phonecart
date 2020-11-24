const express = require('express')
const { addOrderItems, getOrderById, updateOrderToPaid, getMyOrders, getOrders, updateOrderToDelivered } = require('../controllers/orderController')
const route = express.Router()
const { protect, admin } = require('../middleware/authMiddleware')

route.route('/').post(protect, addOrderItems).get(protect, admin, getOrders)
route.route('/myorders').get(protect, getMyOrders)
route.route('/:id').get(protect, getOrderById)
route.route('/:id/pay').put(protect, updateOrderToPaid)
route.route('/:id/deliver').put(protect, admin, updateOrderToDelivered)

module.exports = route