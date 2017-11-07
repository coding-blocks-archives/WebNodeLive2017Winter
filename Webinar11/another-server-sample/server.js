const express = require('express')
const server = express();

const m1 = function (req, res, next) {
    console.log("We are in middleware 1")
    next()
}
const m2 = function (req, res, next) {
    console.log("We are in middleware 2")
    next()
}
const m3 = function (req, res, next) {
    console.log("We are in middleware 3")
    next()
}

server.use(m1)

server.use('/a', m2)

server.get('/a', function (req, res, next) {
    res.send("Hello World")
})

server.use(m3)

server.listen(3232)