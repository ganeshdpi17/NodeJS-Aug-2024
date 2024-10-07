const express = require('express');
const cors = require('cors');
const { buildSchema } = require('graphql');
const { createHandler } = require('graphql-http/lib/use/express');
const { ruruHTML } = require('ruru/server');

// create a schema
const mySchema = buildSchema(`
    type Query{
        hello : String
    }    
`)

// the root provides a resolver for each API endpoint
const root = {
    hello: () => {
        return 'Hello World Response.....'
    }
}
const app = express();
app.use(cors());

app.all('/graphql', createHandler({ schema: mySchema, rootValue: root }));

// serve graphQL UI
app.get('/', (req, res) => {
    res.type('html');
    res.end(ruruHTML({ endPoint: '/graphql' }));
})

app.listen(4000, () => {
    console.log('Listening to port 4000');
});