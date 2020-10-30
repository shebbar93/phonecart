const express = require('express')
const { addOrderItems, getOrderById, updateOrderToPaid, getMyOrders } = require('../controllers/orderController')
const route = express.Router()
const { protect } = require('../middleware/authMiddleware')

route.route('/').post(protect, addOrderItems)
route.route('/myorders').get(protect, getMyOrders)
route.route('/:id').get(protect, getOrderById)
route.route('/:id/pay').put(protect, updateOrderToPaid)

module.exports = route