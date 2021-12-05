const connection = require('./connection')

module.exports = {
  createUser,
  userExists,
  getUserEmail,
  getUserArgs
}

function createUser (user, db = connection) {
  return db('users')
    .insert(user)
}

function userExists (authId, db = connection) {
  return db('users')
    .count('auth0_id as n')
    .where('auth0_id', authId)
    .then(count => {
      return count[0].n > 0
    })
}

function getUserEmail (authId, db = connection) {
  return db('users')
    .where('auth0_id', authId)
    .first()
    .select(
      'email'
    )
}

function getUserArgs (authId, db = connection) {
  return db('user_arguments')
    .where('user_id', authId)
    .join('arguments', 'user_arguments.argument_id', 'arguments.id')
    .select(
      'user_arguments.argument_id as argId',
      'arguments.name as name',
      'arguments.description as description',
      'user_arguments.side as side',
      'user_arguments.story as story'
    )
}
