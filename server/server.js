// external requries
const path = require('path')
const express = require('express')

// internal requires
const exampleRoute = require('./routes/exampleRoute')

const userRoutes = require('./routes/users')
const argumentRoutes = require('./routes/argumentss')
const loginRoute = require('./routes/loginRoute')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

// tell server about our routes
server.use('/api/v1/example', exampleRoute)

server.use('/api/v1/users', userRoutes)
server.use('/api/v1/arguments', argumentRoutes)
server.use('/api/v1/loginRoute', loginRoute)

// For the client side BrowserRouter - because there is no '#' to distinguish
// between client and server side routes, this sends back the index.html
// (which contains the bundle.js) if none there is no server side route match.
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

module.exports = server
