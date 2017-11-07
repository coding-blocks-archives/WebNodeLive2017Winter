const srv = require('express')()

const teacherRoute = require('./routes/teachers')
const studentRoute = require('./routes/students')

srv.use('/students', studentRoute)
srv.use('/teachers', teacherRoute)


srv.listen(2233)