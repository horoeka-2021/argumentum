exports.up = function (knex) {
  return knex.schema.createTable('arguments', (table) => {
    table.increments('id').primary()
    table.string('category')
    table.string('name')
    table.string('description')
    table.string('side0')
    table.string('side1')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('arguments')
}
