exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.varchar('auth0_id')
    table.varchar('email')
    table.integer('image')
    table.varchar('username')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
