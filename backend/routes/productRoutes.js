const express = require('express')
const asyncHandler = require('express-async-handler')
const route = express.Router()
const Product = require('../models/productModel')

route.get('/', asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.status(401);
    throw new Error('Product not found Sr');
    res.json(products);
}))

route.get('/:id', asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    console.log(product)
    if(product)
        res.json(product);
    else{
        res.status(404);
        throw new Error('Product not found');
    }
        
}))

module.exports = route