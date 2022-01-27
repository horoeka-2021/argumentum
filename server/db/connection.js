let environment = process.env.NODE_ENV || 'development'

// Getting error when running tests
// so making enviroment not 'test'
if (environment === 'test') {
  environment = 'development'
}

const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = connection
