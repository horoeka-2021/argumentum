const connection = require('./connection')

module.exports = {
  createUser
}

function createUser (user, db = connection) {
  return db('users')
    .insert(user)
}
