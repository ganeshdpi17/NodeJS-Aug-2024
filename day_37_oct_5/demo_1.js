const express = require('express');
const cors = require('cors');
const { buildSchema } = require('graphql');
const { createHandler } = require('graphql-http/lib/use/express');
// const {ruruHTML} = require("ruru/server")

// construct schema
const mySchema = buildSchema(`
        type Query{
            hello:String
        }
`)

const root = {
    hello: () => {
        return 'Hello World'
    }
}

const app = express();

// create and use graphQL handler
app.all('/graphql', createHandler({ schema: mySchema, rootValue: root }));


// Serve the graphql UI
// app.get('/', (req, res) => {
//     res.type('html')
//     res.end(ruruHTML({ endpoint: "/graphql" }))
// })

app.listen({ port: 4000 });
console.log('Listening to port 4000');



