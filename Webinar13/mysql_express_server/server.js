const express = require('express')
const app = express()
const db = require('./db')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.set("view engine", "hbs")

app.get('/', (req, res) => {

    db.getAllPersons()
        .then((persons) => {
            res.render('persons', {persons})
        })
        .catch((err) => {
            res.send(err)
        })

    
})

app.get('/add', (req, res) => {
    res.render('persons_add')
})

app.post('/add', (req, res) => {
    db.addNewPerson(req.body.name, req.body.age, req.body.city)
        .then(() => {
            res.redirect('/')
        })
        .catch((err) => {
            res.send(err)
        })
})


app.listen(4444, () => {
    console.log("Server started on http://localhost:4444/")
})