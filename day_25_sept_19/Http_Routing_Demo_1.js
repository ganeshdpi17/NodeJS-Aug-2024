// Create a server with different routes for todos,comments,users
const http = require('http');
const users = require('./users.json')
const comments = require('./comments.json')
const todos = require('./todos.json')

const server = http.createServer((req, res) => {
    console.log(req.url)
    if (req.url === '/users') {
        res.write(JSON.stringify(users))
    } else if (req.url === '/comments') {
        res.write(JSON.stringify(comments))
    } else if (req.url === '/todos') {
        res.write(JSON.stringify(todos))
    } else {
        res.write('<h1>No Page Found</h1>')
    }
    res.end();
});
server.listen(5000);
