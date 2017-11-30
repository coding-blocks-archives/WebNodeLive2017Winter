const Product = require('../../db').Product
const route = require('express').Router();

route.get('/', (req, res) => {
    // Get all products
    Product.findAll()
        .then((products) => {
            res.status(200).send(products)
        })
        .catch((err) => {
            res.status(500).send({
                error: "Could not retrieve products"
            })
        })
})

route.post('/', (req, res) => {
    // Validate the values
    if (isNaN(req.body.price)) {
        return res.status(403).send({
            error: "Price is not valid number"
        })
    }
    // Add a new product
    Product.create({
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        price: parseFloat(req.body.price)
    }).then((product) => {
        res.status(201).send(product)
    }).catch((error) => {
        res.status(501).send({
            error: "Error adding product"
        })
    })
})

exports = module.exports = route