const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Request received')
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>This is a Response from server');
});

server.listen(5000, () => {
    console.log('server running at 5000')
})

// setTimeout(server.close,10000);
