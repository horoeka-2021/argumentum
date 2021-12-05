exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.string('auth0_id').primary()
    table.string('email')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
