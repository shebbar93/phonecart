const express = require('express')
const { getProducts, getProductById, deleteProduct, createProduct, updateProduct, createReviewForProduct,getTopProducts } = require('../controllers/productController')
const { protect, admin } = require('../middleware/authMiddleware')
const route = express.Router()


route.route('/').get(getProducts).post(protect, admin, createProduct)
route.route('/top').get(getTopProducts)

route.route('/:id').get(getProductById).delete(protect, admin, deleteProduct).put(protect, admin, updateProduct)
route.route('/:id/reviews').post(protect, createReviewForProduct)



// route.get('/', asyncHandler(async (req, res) => {
//     const products = await Product.find({})
//     res.json(products);
// }))

// route.get('/:id', asyncHandler(async (req, res) => {
//     const product = await Product.findById(req.params.id)
//     console.log(product)
//     if(product)
//         res.json(product);
//     else{
//         res.status(404);
//         throw new Error('Product not found');
//     }

// }))

module.exports = route