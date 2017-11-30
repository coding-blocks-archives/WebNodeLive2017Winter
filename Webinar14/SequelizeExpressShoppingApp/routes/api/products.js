const Product = require('../../db').Product
const route = require('express').Router();

route.get('/', (req, res) => {
    // Get all products
})

route.post('/', (req, res) => {
    // Add a new product
})

exports = module.exports = route