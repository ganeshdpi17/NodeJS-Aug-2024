const express = require('express');
const cors = require('cors');
const { buildSchema } = require('graphql');
const { createHandler } = require('graphql-http/lib/use/express');
const { ruruHTML } = require('ruru/server');
const allUsers = require('./users.json'); // uncomment this and make sure `users.json` exists

// Create GraphQL Schema
const usersSchema = buildSchema(`
    type Query {
        users: [User]
        user(id: Int): User
    }
    type User {
        id: Int
        name: String
        username: String
        email: String
        phone: String
        website: String
    }
`);

// The root provides a resolver for each API endpoint
const root = {
    users: function () {
        return allUsers; // Return all users
    },
    user: function (args) {
        const userId = args.id;
        return allUsers.find(user => user.id === userId); // Find and return the user by ID
    }
};

const app = express();
app.use(cors());

app.all('/users', createHandler({ schema: usersSchema, rootValue: root }));

// Serve GraphQL UI
app.get('/', (req, res) => {
    res.type('html');
    res.end(ruruHTML({ endpoint: '/users' }));
});

app.listen(4000, () => {
    console.log('Listening to port 4000');
});
