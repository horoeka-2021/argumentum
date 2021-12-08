exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.varchar('auth0_id').primary()
    table.varchar('email')
    table.integer('image')
    table.varchar('username')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
