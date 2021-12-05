const connection = require('./connection')

module.exports = {
  createUser,
  getUserEmail
}

function createUser (user, db = connection) {
  console.log('trying to insert user into users table')
  return db('users')
    .insert(user)
}

function getUserEmail (authId, db = connection) {
  return db('users')
    .where('auth0_id', authId)
    .select(
      'email'
    )
}
