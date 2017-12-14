const route = require('express').Router()

route.get('/', (req, res) => {
    res.send("Visible to only logged in users")
})

exports = module.exports = route