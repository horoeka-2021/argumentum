const connection = require('./connection')

module.exports = {
  listArgs
}

function listArgs (db = connection) {
  return db('arguments')
    .select()
}

// Postgres .insert() doesn't work the same as SQLite
// // What is returning('id') for??
// function createArg (arg, db = connection) {
//   return db('arguments')
//     .returning('id')
//     .insert(arg)
// }
