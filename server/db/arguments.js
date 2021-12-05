const connection = require('./connection')

module.exports = {
  listArgs
}

function listArgs (db = connection) {
  return db('arguments')
    .select()
}
