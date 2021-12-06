const connection = require('./connection')

module.exports = {
  listArgs,
  createArg
}

function listArgs (db = connection) {
  return db('arguments')
    .select()
}

function createArg (arg, db = connection) {
  return db('arguments')
    .returning('id')
    .insert(arg)
}