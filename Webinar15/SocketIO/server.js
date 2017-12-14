const express = require('express')
const path = require('path')
const socketio = require('socket.io')
const http = require('http')

const app = express();
const server = http.createServer(app)
const io = socketio(server)

let usersockets = {}

app.use('/', express.static(path.join(__dirname, 'frontend')))

io.on('connection', (socket) => {
    console.log("New socket formed from " + socket.id)
    socket.emit('connected')

    socket.on('login', (data) => {
        // username is in data.user
        usersockets[data.user] = socket.id
        console.log(usersockets)
    })
    
    socket.on('send_msg', (data) => {
        // if we use io.emit, everyone gets it
        // if we use socket.broadcast.emit, only others get it
        if (data.message.startsWith('@')) {
            //data.message = "@a: hello"
            // split at :, then remove @ from beginning
            let recipient = data.message.split(':')[0].substr(1)
            let rcptSocket = usersockets[recipient]
            io.to(rcptSocket).emit('recv_msg', data)
        } else {
            socket.broadcast.emit('recv_msg', data)            
        }
    })

})

server.listen(2345, () => console.log('Website open on http://localhost:2345'))