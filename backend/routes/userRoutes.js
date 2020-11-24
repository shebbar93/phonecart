const express = require('express')
const { authUser, getUserProfile, registerUser, updateUserProfile, getUsers, deleteUser, getUserById, updateUser } = require('../controllers/userController')
const route = express.Router()
const { protect, admin } = require('../middleware/authMiddleware')

route.route('/').post(registerUser).get(protect, admin, getUsers)
route.post('/login', authUser)
route.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile)
route.route('/:id').delete(protect, admin, deleteUser).get(protect, admin, getUserById).put(protect, admin, updateUser)

module.exports = route