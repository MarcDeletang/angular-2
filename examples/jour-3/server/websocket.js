let app = require('express')();
let http = require('http').Server(app);


let clients = []
io.on('connection', (socket) => {
    clients.push(socket)
  console.log('user connected', socket)

  socket.on('disconnect', function(client){
    console.log('user disconnected', client)
  })

  socket.on('add-message', (message) => {
    io.emit('message', message)
  })


  socket.on('add-message2', (message) => {
    io.emit('message', message)
  })
})

http.listen(1338, () => {
  console.log('started on port 1338')
})
