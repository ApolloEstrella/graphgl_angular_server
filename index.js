const { GraphQLServer } = require('graphql-yoga');
const { resolvers } = require('./graphql/resolvers');
var cors = require("cors");
const portNo = 4000
const server = new GraphQLServer({
    typeDefs: "graphql/schema.graphql",
    resolvers: resolvers,
    graphiql: false,
    portNo: portNo
});

//var Movies = require("./routes/Movies")

 

//server.use("/movies", Movies)
server.use(cors())
server.start(() => console.log("GraphQL Server Running at Port No:" + portNo ))