const express = require('express')
const srv = express()

const teacherRoute = require('./routes/teachers')
const studentRoute = require('./routes/students')

srv.use(express.json())
srv.use(express.urlencoded({extended: true}))

srv.use('/students', studentRoute)
srv.use('/teachers', teacherRoute)


srv.listen(2233)