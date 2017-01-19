let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);
let _ = require('lodash')

let clients = []

io.on('connection', (socket) => {
    clients.push(socket)
  console.log('user connected', socket)

  socket.on('disconnect', function(client){
    console.log('user disconnected', client)
  })

  socket.on('add-message', (message) => {
    io.emit('message', message);
  })
})

http.listen(5000, () => {
  console.log('started on port 5000');
})