const connection = require('./connection')

module.exports = {
  listArgs,
  createArg
}

function listArgs (db = connection) {
  return db('arguments')
    .select()
}

// What is returning('id') for??
function createArg (arg, db = connection) {
  return db('arguments')
    .returning('id')
    .insert(arg)
}
