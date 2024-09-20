const express = require('express');
const server = express();

let users = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 102, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' }
];

server.get("/users", (req, res) => {
    res.send('Get All Users')
})
server.post("/users", (req, res) => {
    res.send('Add a new user in the database')
})
server.put("/users", (req, res) => {
    res.send('PUT call on users')
})
server.patch("/users", (req, res) => {
    res.send('PATCH call on users')
})
server.delete("/users", (req, res) => {
    res.send('delete call on users')
})

server.listen(5000, () => {
    console.log('server running at 5000')
});