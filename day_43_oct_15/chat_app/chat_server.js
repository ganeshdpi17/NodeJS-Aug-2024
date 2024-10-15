const app = require('express')();
const httpServer = require('http').createServer(app);
const io = require('socket.io')(httpServer);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/chat_client.html');
});

io.on('connection', (socket) => {
    console.log('a new client connected');

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    // listen 'setName' event from client
    socket.on('setName', (name) => {
        socket.userName = name;
    });
    // listen 'chat' event from client
    socket.on('chat', (data) => {
        const modifiedData = {
            msg: data.msg,
            userName: socket.userName,
            time: new Date().toLocaleTimeString()
        }
        io.emit('chat', modifiedData);
    });
});

httpServer.listen(5000, () => {
    console.log('listening at port 5000');
});