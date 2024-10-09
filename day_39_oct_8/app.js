const { ApolloServer } = require('apollo-server');
const mySchema = require('./graphQLSchema');

const server = new ApolloServer({
    typeDefs: mySchema.typeDefs,
    resolvers: mySchema.resolvers
});

server.listen(5000, () => {
    console.log('server running at port 5000')
})

