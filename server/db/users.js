const connection = require('./connection')

module.exports = {
  createUser,
  userExists,
  getUser,
  getUserArgs,
  createUserArg,
  listUsers,
  listUserArgs
}

function createUser (user, db = connection) {
  return db('users')
    .insert(user)
}

function userExists (authId, db = connection) {
  console.log('authId', authId)
  return db('users')
    .count('auth0_id as n')
    .where('auth0_id', authId)
    .then(count => {
      return count[0].n > 0
    })
}

function getUser (authId, db = connection) {
  return db('users')
    .where('auth0_id', authId)
    .first()
    .select()
}

function getUserArgs (authId, db = connection) {
  return db('user_arguments')
    .where('user_id', authId)
    .join('arguments', 'user_arguments.arg_id', 'arguments.id')
    .select(
      'user_arguments.arg_id as argId',
      'arguments.name as name',
      'arguments.description as description',
      'user_arguments.side as side',
      'user_arguments.story as story'
    )
}

function createUserArg (userArg, db = connection) {
  return db('user_arguments')
    .insert(userArg)
}

function listUsers (db = connection) {
  return db('users')
    .select(
      'auth0_id as authId',
      'image',
      'username'
    )
}

function listUserArgs (db = connection) {
  return db('user_arguments')
    .join('arguments', 'user_arguments.arg_id', 'arguments.id')
    .select(
      'user_arguments.user_id as userId',
      'user_arguments.arg_id as argId',
      'arguments.name as name',
      'arguments.description as description',
      'user_arguments.side',
      'user_arguments.story'
    )
}
