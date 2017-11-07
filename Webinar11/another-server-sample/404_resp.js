const express = require('express')
const srv = express()

srv.get('/a', (req, res) => res.send("AAAAA"))
srv.get('/b', (req, res) => res.send("BBBBB"))

srv.use((req, res) => res.send("<h2>404 not found</h2>"))


srv.listen(2543)