const http = require('http');

let users = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 102, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' }
];

const server = http.createServer((req, res) => {
    if (req.url === '/users' && req.method === 'GET') {
        res.write('<h1>GET request on user</h1>')
    }
    if (req.url === '/users' && req.method === 'POST') {
        res.write('<h1>POST request on user</h1>')
    }
    if (req.url === '/users' && req.method === 'PUT') {
        res.write('<h1>PUT request on user</h1>')
    }
    if (req.url === '/users' && req.method === 'PATCH') {
        res.write('<h1>PATCH request on user</h1>')
    }
    if (req.url === '/users' && req.method === 'DELETE') {
        res.write('<h1>DELETE request on user</h1>')
    }
    res.end();
});
server.listen(5000, () => {
    console.log('server running at 5000')
});