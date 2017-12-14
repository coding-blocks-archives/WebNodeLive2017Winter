const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.set("view engine", "hbs")

app.use('/public', require('./routes/public'))
app.use('/private', require('./routes/private'))
app.use('/', require('./routes/root'))

app.listen(9876, () => console.log("Server running on http://localhost:9876"))