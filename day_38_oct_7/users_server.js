const express = require("express")
const cors = require("cors")
const { createHandler } = require("graphql-http/lib/use/express")
const { buildSchema } = require("graphql")
const { ruruHTML } = require("ruru/server");
const usersArr = require('./users.json');

const app = express();
app.use(cors());

// 1. Construct a schema, using GraphQL schema language
var userschema = buildSchema(`
    type Query {
      users:[User]
      user(id:Int):User
    }
    type User{
        id:Int
        name:String
        username:String
        email:String
        phone:String
        website:String
    } 
`);

// The root provides a resolver function for each API endpoint
let root = {
    users: function () {
        return usersArr;
    },
    user: function (args) {
        const userId = args.id;
        return usersArr.find(user => user.id == userId);
    }
}

app.all('/api/users', createHandler({ schema: userschema, rootValue: root }));

// for graphQL UI
app.get("/", (req, res) => {
    res.type("html")
    res.end(ruruHTML({ endpoint: "/api/users" }))
})

// Start the server at port
app.listen(5000)
console.log("Running a GraphQL API server at http://localhost:5000/api/users")

