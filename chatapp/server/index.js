// const express = require("express");
// const { createServer } = require("http");
// const { Server } = require("socket.io");

// const app = express();
// const httpServer = createServer(app);
// const io = new Server(httpServer);

// io.on("connection", (socket) => {
//   socket.on("message", ({ name, message }) => {
//     io.emit("message", { name, message });
//   });
// });

// httpServer.listen(4000, () => {
//   console.log("Listening on port 4000");
// });
const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

io.on('connection', socket => {
  socket.on('message', ({ name, message }) => {
    io.emit('message', { name, message })
  })
})

http.listen(4000, function() {
  console.log('listening on port 4000')
})