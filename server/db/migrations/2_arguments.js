exports.up = function (knex) {
  return knex.schema.createTable('arguments', (table) => {
    table.increments('id').primary()
    table.varchar('category')
    table.varchar('name')
    table.varchar('description')
    table.varchar('side0')
    table.varchar('side1')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('arguments')
}
