const connection = require('./connection')

module.exports = {
  createUser
}

function createUser (user, db = connection) {
  console.log('trying to insert user into users table')
  return db('users')
    .insert(user)
}
