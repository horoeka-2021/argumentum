const connection = require('./connection')

module.exports = {
  listArguments
}

function listArguments (db = connection) {
  return db('arguments')
    .select()
}
