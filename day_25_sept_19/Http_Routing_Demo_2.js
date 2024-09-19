// Create a server with different routes for todos,comments,users
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url)
    if (req.url === '/home') {
        fs.readFile('home.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    } else if (req.url === '/about') {
        fs.readFile('about.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    } else if (req.url === '/careers') {
        fs.readFile('careers.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    } else {
        res.write('<h1>No Page Found</h1>')
        res.end()
    }
});
server.listen(5000);
