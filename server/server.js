const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const http = require('http');

// ______________ Uncomment as Set Up ___________________
// const { typeDefs, resolvers } = require('./schemas');
// const { authMiddleware } = require('./utils/auth');
// const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
const server = http.createServer(app)
const { Server } = require("socket.io");
const { emit } = require('process');
const io = new Server(server);

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   context: authMiddleware
// });

// server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// Serve up static assets
app.use('/images', express.static(path.join(__dirname, '../client/images')));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

io.on('connection', (socket) => {
    socket.join("game room");
    // socket.on('player joined', () => {
    //     io.emit('player joined', )
    // });
    socket.on('dice roll', () => {
        io.emit('dice roll', )
    });
    // socket.on('strength change', () => {
    //     io.emit('strength change', )
    // });
    // socket.on('intelligence change', () => {
    //     io.emit('intelligence change', )
    // });
    // socket.on('charisma change', () => {
    //     io.emit('charisma change', )
    // });
    // socket.on('constitution change', () => {
    //     io.emit('constitution change', )
    // });
    // socket.on('dexterity change', () => {
    //     io.emit('dexterity change', )
    // });
    // socket.on('wisdom change', () => {
    //     io.emit('wisdom change', )
    // });
})

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
        console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
});