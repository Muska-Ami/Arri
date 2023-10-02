const express = require("express");
const port = 3001;

const app = express()
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      console.log('received: ' + msg);
      socket.emit("chat message", msg.toUpperCase());
    });
});

server.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`)
});
