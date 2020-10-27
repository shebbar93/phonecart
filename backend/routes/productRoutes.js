const express = require('express')
const { getProducts, getProductById } = require('../controllers/productController')
const route = express.Router()


route.route('/').get(getProducts)
route.route('/:id').get(getProductById)


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