const express = require('express')
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

// static files
app.use(express.static('public'));

const activeUsers = new Set();

io.on('connection', (socket) => {
    console.log('A new client joined');

    socket.on('new user', (userId) => {
        socket.userId = userId;
        activeUsers.add(userId);
        io.emit('new user', [...activeUsers]);

        if (socket.userId == 'pritam' || socket.userId == 'ramesh') {
            socket.join("pritam_ramesh_room");
        }
    });
    socket.on('disconnect', () => {
        activeUsers.delete(socket.userId);
        io.emit('user disconnected', socket.userId);
    });
    socket.on('chat message', (data) => {
        if (socket.userId == 'pritam' || socket.userId == 'ramesh') {
            io.to("pritam_ramesh_room").emit('chat message', data);
        } else {
            io.emit('chat message', data);
        }
    });
    socket.on('typing', (data) => {
        // io.emit('typing', data);
        socket.broadcast.emit('typing', data)
    });
});

server.listen(5000, () => {
    console.log('server running at 5000')
});