const express = require('express')
const { authUser, getUserProfile, registerUser, updateUserProfile } = require('../controllers/userController')
const route = express.Router()
const { protect } = require('../middleware/authMiddleware')

route.route('/').post(registerUser)
route.post('/login', authUser)
route.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile)

module.exports = route