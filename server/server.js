// external requries
const path = require('path')
const express = require('express')

// setting up the dotenv
require('dotenv').config({ path: path.join(__dirname, '.env') })

// internal requires
const userRoutes = require('./routes/users')
const argumentRoutes = require('./routes/arguments')
const addChatUser = require('./routes/addChatUser')
const userArgsRoutes = require('./routes/userArgs')

const server = express()
server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

// tell server about our routes
server.use('/api/v1/users', userRoutes)
server.use('/api/v1/args', argumentRoutes)
server.use('/api/v1/addChatUser', addChatUser)
server.use('/api/v1/userArgs', userArgsRoutes)

// For the client side BrowserRouter - because there is no '#' to distinguish
// between client and server side routes, this sends back the index.html
// (which contains the bundle.js) if none there is no server side route match.
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

module.exports = server
