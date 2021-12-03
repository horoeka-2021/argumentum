exports.up = function (knex) {
  return knex.schema.createTable('arguments', (table) => {
    table.increments('id')
    table.string('name')
    table.string('description')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('arguments')
}
